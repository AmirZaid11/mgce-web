export const NEWS_ARTICLES = [
  {
    title: "Cradle in Classroom Event Appreciation",
    slug: "cradle-in-classroom-event-appreciation",
    excerpt: "MGCE executives and student leaders express gratitude to all participants of the successful Cradle in Classroom event.",
    content: "Maseno Girlchild Empowerment executives together with Young Mums in school and Somu vice chair, would like to thank everyone who took time out of their busy schedule to attend the Cradle in classroom event❤️.\n\n#masenouniversitytiktokers #kisumutiktoker #goviral #masenotiktokers",
    date: "2026-03-14",
    readTime: "2 min read",
    category: "Events",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Media Team"
  },
  {
    title: "Menstrual Health Hygiene Workshop at St Williams Primary",
    slug: "menstrual-health-hygiene-st-williams",
    excerpt: "Partnering with Odi agency, MGCE conducted a successful menstrual health hygiene workshop for children at St Williams Primary School.",
    content: "Maseno Girlchild Empowerment partnered with Odi agency and held an event at St Williams primary school in Kisian Kisumu county. We taught the kids about menstrual health hygiene. The event was successful ❤️",
    date: "2026-02-07",
    readTime: "2 min read",
    category: "Health",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Media Team"
  },
  {
    title: "745 Girls Rescued from Early Marriage: A Milestone in our 'Big Dream' Campaign",
    slug: "745-girls-rescued-early-marriage",
    excerpt: "In partnership with World Vision, our 'Big Dream' initiative has successfully rescued and reintegrated 745 girls across Kenya.",
    content: "Our concerted efforts to end child marriage have reached a significant milestone. As of October 2025, the 'Big Dream to End Child Marriage' (BDECM) program has rescued 745 girls who escaped early marriages. These girls are being reintegrated into schools and provided with comprehensive support systems to ensure they can pursue their dreams without fear of exploitation.",
    date: "2025-10-15",
    readTime: "4 min read",
    category: "Advocacy",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Grace Achieng"
  },
  {
    title: "Breaking the Poverty Cycle: New UNICEF Report Highlights Women's Power",
    slug: "unicef-report-women-power",
    excerpt: "The latest 'Brighter Futures' report confirms that empowering women in Kenya significantly improves child health and community wealth.",
    content: "A joint report by KNBS, UNICEF, and UN Women titled 'Brighter Futures: Breaking Cycles of Poverty for Children in Kenya' has revealed that women's empowerment in Kenya has risen to 40.6% in 2025. This increase is directly linked to better educational outcomes for girls and improved health metrics in rural households.",
    date: "2025-08-22",
    readTime: "5 min read",
    category: "Impact",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Media Team"
  },
  {
    title: "Empowering Through Storytelling: Room to Read Partnership in Kibera",
    slug: "room-to-read-partnership-kibera",
    excerpt: "Adolescent girls in Kibera and Homa Bay are gaining agency through a new creative storytelling and mentorship program.",
    content: "Partnering with Polycom Girls and Room to Read, we have launched a creative initiative to help girls in marginalized areas address sexual and reproductive health rights. By using storytelling as a tool for advocacy, these girls are now leading community dialogues and staying in school despite systemic barriers.",
    date: "2024-10-11",
    readTime: "3 min read",
    category: "Programs",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Joyce Wanjiku"
  },
  {
    title: "AU Year of Education: Kenya's CBC Seen as Key to Gender Equity in STEM",
    slug: "au-year-education-stem-equity",
    excerpt: "The African Union highlights the Competency-Based Curriculum as a powerful tool for fostering girl child empowerment in science and tech.",
    content: "During the 2024 Year of Education summit, Kenya's progress in STEM inclusivity was highlighted. The shift toward skills-based learning is allowing more girls to explore careers in technology and engineering, areas previously dominated by boys. MGCE is proud to be at the forefront of this digital revolution.",
    date: "2024-05-20",
    readTime: "4 min read",
    category: "Education",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Dr. Lilian Omondi"
  },
  {
    title: "Investing in the Girl Child: A National Priority for Kenya",
    slug: "national-priority-girl-child-kenya",
    excerpt: "Government and NGO leaders convene to reinforce legal frameworks protecting girls from FGM and early marriage.",
    content: "Kenya has reiterated its commitment to 2026 targets for eradicating FGM. Through strengthened legal frameworks and the establishment of new rescue centers, the nation is building a protective shield for every girl child. MGCE continues to support these efforts through grassroots community engagement.",
    date: "2024-04-05",
    readTime: "5 min read",
    category: "Advocacy",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Media Team"
  }
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
