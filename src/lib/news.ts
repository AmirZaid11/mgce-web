export const NEWS_ARTICLES = [
  {
    title: "'The Girl I Am, The Change I Lead': Celebrating International Day of the Girl Child",
    slug: "girl-i-am-change-i-lead",
    excerpt: "Kenyan girls take the lead in community transformation through storytelling and digital advocacy.",
    content: "On October 11, 2025, MGCE joined the global community to celebrate adolescent girls. In Kibera, our partnership with Polycom Girls saw the launch of 'Siri Ya Mwezi' comic sessions, empowering girls to find dignity and agency in their reproductive health journeys.",
    date: "2025-10-11",
    readTime: "3 min read",
    category: "Events",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Media Team"
  },
  {
    title: "Inspire Her Mentorship: Celebrating our 2025 Graduates",
    slug: "inspire-her-graduation-2025",
    excerpt: "200 girls from Embakasi and Ngara Girls Secondary schools graduate from our intensive year-long mentorship program.",
    content: "February and March 2025 marked a season of celebration as hundreds of girls completed the KCDF-backed 'Inspire Her' program. These young leaders now have the toolkit to navigate university applications and career choices with confidence.",
    date: "2025-03-20",
    readTime: "4 min read",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Grace Achieng"
  },
  {
    title: "Nashapai Maasai Community: Breaking Norms Through Education",
    slug: "nashapai-maasai-education-success",
    excerpt: "How a grassroots initiative in Kenya is helping Maasai girls overcome cultural barriers to complete their schooling.",
    content: "Recognized by UNESCO in late 2025, the Nashapai project has successfully kept 150 Maasai girls in school by providing scholarships and community dialogues centered on ending early marriage and FGM.",
    date: "2025-09-15",
    readTime: "5 min read",
    category: "Impact",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Joy Mutua"
  },
  {
    title: "Girl Effect's 'Tukisonga Campaign' Reaches Rural Kenya",
    slug: "tukisonga-campaign-rural-kenya",
    excerpt: "Inspiring the next generation of Kenyan women through health and economic empowerment media.",
    content: "The 'Tukisonga' campaign, launched in late 2024, uses radio and mobile technology to reach girls in deep rural areas. It provides critical knowledge on personal development and economic independence, reaching over 20 counties.",
    date: "2024-11-05",
    readTime: "4 min read",
    category: "Programs",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Media Team"
  },
  {
    title: "Imarisha Msichana: Reducing Teenage Pregnancy Across 20 Counties",
    slug: "imarisha-msichana-milestone-2024",
    excerpt: "FAWE and Mastercard Foundation celebrate progress in keeping adolescent girls in school.",
    content: "By June 2024, the 'Imarisha Msichana' program has seen a significant drop in teenage pregnancies within its target counties. Through school re-entry policies and community advocacy, more young mothers are returning to finish their education.",
    date: "2024-06-16",
    readTime: "5 min read",
    category: "Advocacy",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Lilian Omondi"
  }
];
];

export function getNewsCategories() {
  const categories = NEWS_ARTICLES.map(article => article.category);
  return ["All", ...Array.from(new Set(categories))];
}

export function getDailyNews(limit = 3) {
  const today = new Date().toDateString();
  const hash = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Sort by date mostly, but then pick a window based on the day
  const sorted = [...NEWS_ARTICLES].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const startIndex = hash % (Math.max(1, sorted.length - limit + 1));
  return sorted.slice(startIndex, startIndex + limit);
}
