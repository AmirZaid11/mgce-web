export const EMPOWERING_QUOTES = [
  { text: "There is no limit to what we, as women, can accomplish.", author: "Michelle Obama" },
  { text: "I raise up my voice—not so that I can shout, but so that those without a voice can be heard.", author: "Malala Yousafzai" },
  { text: "Do not wait for leaders; do it alone, person to person.", author: "Mother Teresa" },
  { text: "You must do the things you think you cannot do.", author: "Eleanor Roosevelt" },
  { text: "We realize the importance of our voices only when we are silenced.", author: "Malala Yousafzai" },
  { text: "Feminism isn't about making women stronger. Women are already strong, it's about changing the way the world perceives that strength.", author: "G.D. Anderson" },
  { text: "A girl should be two things: who and what she wants.", author: "Coco Chanel" },
  { text: "When you educate a girl, you educate a nation.", author: "African Proverb" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "African women in general need to know that it is OK for them to be the way they are.", author: "Wangari Maathai" },
  { text: "To all the little girls who are watching this, never doubt that you are valuable and powerful.", author: "Hillary Clinton" },
  { text: "A woman with a voice is, by definition, a strong woman.", author: "Melinda Gates" },
  { text: "The most common way people give up their power is by thinking they don't have any.", author: "Alice Walker" },
  { text: "No country can ever truly flourish if it stifles the potential of its women.", author: "Michelle Obama" },
  { text: "If you want something said, ask a man; if you want something done, ask a woman.", author: "Margaret Thatcher" },
  { text: "Don't let anyone rob you of your imagination, your creativity, or your curiosity.", author: "Mae Jemison" },
  // Adding more to pad it realistically for a daily rotating array (typically an array of 31 is great)
  { text: "Step out of the history that is holding you back. Step into the new story you are willing to create.", author: "Oprah Winfrey" },
  { text: "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.", author: "Madeleine Albright" },
  { text: "I alone cannot change the world, but I can cast a stone across the waters to create many ripples.", author: "Mother Teresa" },
  { text: "Women are the real architects of society.", author: "Harriet Beecher Stowe" },
  { text: "You educate a man; you educate a man. You educate a woman; you educate a generation.", author: "Brigham Young" },
  { text: "The question isn't who's going to let me; it's who is going to stop me.", author: "Ayn Rand" },
  { text: "I can't think of any better representation of beauty than someone who is unafraid to be herself.", author: "Emma Stone" },
  { text: "Always aim high, work hard, and care deeply about what you believe in.", author: "Hillary Clinton" },
  { text: "I am learning every day to allow the space between where I am and where I want to be to inspire me.", author: "Tracee Ellis Ross" },
  { text: "Little girls with dreams become women with vision.", author: "Unknown" },
  { text: "We need women at all levels, including the top, to change the dynamic.", author: "Sheryl Sandberg" },
  { text: "Girls with dreams become women with vision. May we empower them.", author: "MGCE Community" },
  { text: "There is no force more powerful than a woman determined to rise.", author: "W.E.B. Du Bois" },
  { text: "Above all, be the heroine of your life, not the victim.", author: "Nora Ephron" },
  { text: "Courage, sacrifice, determination, commitment, toughness, heart, talent, guts. That's what little girls are made of.", author: "Bethany Hamilton" },
  { text: "Empower a girl, change the world.", author: "Unknown" }
];

export function getDailyQuote() {
  const today = new Date().toDateString();
  const hash = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = hash % EMPOWERING_QUOTES.length;
  return EMPOWERING_QUOTES[index];
}
