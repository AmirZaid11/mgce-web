function waitForToggleButton() {
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) {
    setTimeout(waitForToggleButton, 100);
    return;
  }

  const html = document.documentElement;

  function setTheme(mode) {
    html.setAttribute("data-theme", mode);
    localStorage.setItem("mgce-theme", mode);
    toggleBtn.innerHTML = mode === "dark"
      ? '<i class="bi bi-sun-fill"></i>'
      : '<i class="bi bi-moon-fill"></i>';
  }

  toggleBtn.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });

  const savedTheme = localStorage.getItem("mgce-theme") || "light";
  setTheme(savedTheme);
}

function typeLoop(text, elementId, speed = 100, pause = 1500) {
  const el = document.getElementById(elementId);
  if (!el) return;
  let index = 0;
  let typing = true;

  function type() {
    if (typing) {
      el.textContent = text.slice(0, index);
      index++;
      if (index <= text.length) {
        setTimeout(type, speed);
      } else {
        typing = false;
        setTimeout(type, pause);
      }
    } else {
      el.textContent = text.slice(0, index);
      index--;
      if (index >= 0) {
        setTimeout(type, speed / 2);
      } else {
        typing = true;
        setTimeout(type, pause);
      }
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", () => {
  waitForToggleButton();
  typeLoop("MASENO GIRLCHILD EMPOWERMENT", "typedText");

  const path = window.location.pathname;

if (path.includes("index") || path.includes("stories")|| path.includes("home") || path.includes("programs")) {
  document.querySelectorAll(".counter").forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;
    const update = () => {
      count += target / 100;
      if (count < target) {
        counter.textContent = Math.floor(count) + "+";
        requestAnimationFrame(update);
      } else {
        counter.textContent = target + "+";
      }
    };
    update();
  });
}



 // === Stories Page Logic ===
const storyContainer = document.getElementById("storyContainer");
if (storyContainer) {
  const stories = [
    {
      title: "Faith’s First Speech",
      category: "leadership",
      quote: "I never thought I could speak in public.",
      full: "Faith joined MGCE’s bootcamp in 2025. She overcame her fear and gave her first speech at a school assembly. Today, she mentors others.",
      img: "assets/images/stories/ivy.png"
    },
    {
      title: "Linet’s Literacy Journey",
      category: "education",
      quote: "Books opened my world.",
      full: "Linet struggled with reading until she joined MGCE’s Literacy Labs. Now she reads to younger girls every weekend.",
      img: "assets/images/stories/jane.png"
    },
    {
      title: "Jane’s Mentorship Circle",
      category: "mentorship",
      quote: "We lift each other up.",
      full: "Jane started a peer mentorship group in her village. The circle now supports 20 girls through school and emotional challenges.",
      img: "assets/images/stories/emp1.jpg"
    }
  ];

  const storyModal = new bootstrap.Modal(document.getElementById("storyModal"));
  const storyModalLabel = document.getElementById("storyModalLabel");
  const storyFullText = document.getElementById("storyFullText");

  function renderStories(filter = "all") {
    storyContainer.innerHTML = "";
    const filtered = filter === "all" ? stories : stories.filter(s => s.category === filter);
    filtered.forEach(s => {
      const card = document.createElement("div");
      card.className = "col-md-4";
      card.innerHTML = `
        <div class="story-card p-3" data-title="${s.title}">
          <img src="${s.img}" alt="${s.title}" class="img-fluid rounded mb-3 story-img">
          <h5>${s.title}</h5>
          <p class="fst-italic">“${s.quote}”</p>
          <span class="badge bg-secondary">${s.category}</span>
          <button class="btn btn-sm btn-outline-primary mt-2">Read More</button>
        </div>
      `;
      storyContainer.appendChild(card);
    });

    document.querySelectorAll(".story-card button").forEach(btn => {
      btn.addEventListener("click", e => {
        const title = e.target.closest(".story-card").dataset.title;
        const story = stories.find(s => s.title === title);
        if (!story) return;
        storyModalLabel.textContent = story.title;
        storyFullText.textContent = story.full;
        storyModal.show();
      });
    });
  }

  renderStories();

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderStories(btn.dataset.filter);
    });
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("service_fuyyake", "template_r2j9u7g", this)
      .then(() => {
        document.getElementById("formStatus").textContent = "Message sent successfully!";
        document.getElementById("formStatus").style.display = "block";
        contactForm.reset();
      }, (error) => {
        document.getElementById("formStatus").textContent = "Failed to send message.";
        document.getElementById("formStatus").style.display = "block";
        console.error("EmailJS Error:", error);
      });
  });
}

  // Scroll-to-top button
  const scrollBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    if (scrollBtn) {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }

    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    }

    document.querySelectorAll(".timeline-item").forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        item.classList.add("visible");
      }
    });
  });

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.3 });

  items.forEach(item => observer.observe(item));
});


  // Quote carousel
  const quotes = [
    "“MGCE helped me find my voice.”",
    "“I now mentor others in my village.”",
    "“Leadership starts with believing in yourself.”",
    "“We are the change we’ve been waiting for.”"
  ];
  let quoteIndex = 0;
  const quoteDisplay = document.getElementById("quoteDisplay");
  if (quoteDisplay) {
    setInterval(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      quoteDisplay.textContent = quotes[quoteIndex];
    }, 4000);
  }

  // === Programs Page Logic ===
const container = document.getElementById("programContainer");
if (container) {
  const programs = [
    {
      title: "Mentor Circles",
      category: "mentorship",
      desc: "Peer-led mentorship groups for girls aged 13–18.",
      img: "assets/images/programs/pr1.png"
    },
    {
      title: "Health Talks",
      category: "health",
      desc: "Workshops on menstrual health, hygiene, and wellness.",
      img: "assets/images/programs/pr2.png"
    },
    {
      title: "Leadership Bootcamp",
      category: "leadership",
      desc: "Intensive training for emerging girl leaders.",
      img: "assets/images/programs/pr3.png"
    },
    {
      title: "STEM for Girls",
      category: "education",
      desc: "Hands-on coding and science projects.",
      img: "assets/images/programs/pr4.png"
    },
    {
      title: "Community Advocacy",
      category: "leadership",
      desc: "Girls lead local campaigns for change.",
      img: "assets/images/programs/pr5.png"
    },
    {
      title: "Literacy Labs",
      category: "education",
      desc: "Reading and writing support in rural schools.",
      img: "assets/images/programs/pr6.png"
    }
  ];

  const programDetails = {
    "Mentor Circles": {
      desc: "Peer-led mentorship groups for girls aged 17–24, focused on confidence, communication, and support.",
      goals: ["Build self-esteem", "Create safe spaces", "Train peer mentors"],
      pdf: "pdfs/mentor-circles.pdf"
    },
    "Health Talks": {
      desc: "Workshops on menstrual health, hygiene, and wellness led by trained facilitators.",
      goals: ["Normalize health conversations", "Distribute supplies", "Empower through knowledge"],
      pdf: "pdfs/health-talks.pdf"
    },
    "Leadership Bootcamp": {
      desc: "Intensive training for emerging girl leaders in schools and communities.",
      goals: ["Develop leadership skills", "Foster public speaking", "Encourage civic action"],
      pdf: "pdfs/leadership-bootcamp.pdf"
    },
    "STEM for Girls": {
      desc: "Hands-on coding and science projects to spark interest in STEM careers.",
      goals: ["Introduce coding", "Promote science literacy", "Break gender stereotypes"],
      pdf: "pdfs/stem-for-girls.pdf"
    },
    "Community Advocacy": {
      desc: "Girls lead local campaigns for change, from sanitation to school access.",
      goals: ["Train advocates", "Run campaigns", "Engage local leaders"],
      pdf: "pdfs/community-advocacy.pdf"
    },
    "Literacy Labs": {
      desc: "Reading and writing support in rural schools with volunteer mentors.",
      goals: ["Improve literacy", "Support teachers", "Create reading culture"],
      pdf: "pdfs/literacy-labs.pdf"
    }
  };

  const modal = new bootstrap.Modal(document.getElementById("programModal"));
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalGoals = document.getElementById("modalGoals");
  const modalDownload = document.getElementById("modalDownload");

  function renderPrograms(filter = "all") {
    container.innerHTML = "";
    const filtered = filter === "all" ? programs : programs.filter(p => p.category === filter);
    filtered.forEach(p => {
      const card = document.createElement("div");
      card.className = "col-md-4 program-card-wrapper";
      card.innerHTML = `
        <div class="program-card" data-title="${p.title}">
          <img src="${p.img}" alt="${p.title}" class="img-fluid rounded mb-3 program-img">
          <h5>${p.title}</h5>
          <p>${p.desc}</p>
          <span class="badge bg-secondary">${p.category}</span>
          <button class="btn btn-sm btn-outline-primary mt-2">Learn More</button>
        </div>
      `;
      container.appendChild(card);
    });

    document.querySelectorAll(".program-card button").forEach(btn => {
      btn.addEventListener("click", e => {
        const title = e.target.closest(".program-card").dataset.title;
        const detail = programDetails[title];
        if (!detail) return;
        modalTitle.textContent = title;
        modalDesc.textContent = detail.desc;
        modalGoals.innerHTML = detail.goals.map(g => `<li>${g}</li>`).join("");
        modalDownload.href = detail.pdf;
        modal.show();
      });
    });
  }

  renderPrograms();

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderPrograms(btn.dataset.filter);
    });
  });
}
});