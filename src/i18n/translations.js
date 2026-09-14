export const translations = {
  he: {
    langToggle: 'EN',
    nav: {
      home: 'דף הבית',
      collection: 'קולקציה',
      board: 'לוח השראה',
      about: 'אודות',
    },
    cta: 'להזמנות',
    hero: {
      title: 'מטפחות בעיצוב נקי ונשי',
      subtitle: 'נוחות לכל יום ולכל סגנון – באהבה ובעיצוב אישי',
      cta: 'גלי את הקולקציה',
      imgAlt: 'מטפחת',
    },
    collection: {
      title: 'הקולקציה שלנו',
      imgAlt: (i) => `מטפחת ${i}`,
    },
    board: {
      title: 'לוח השראה',
      types: ['קלאסיות', 'יומיומיות', 'מעוצבות'],
      description: (type) => `גלי מגוון מטפחות ${type} בעיצוב נקי ונשי.`,
    },
    about: {
      title: 'אודות',
      p1Before: 'היי, אני ',
      name: 'חגית עוקבי',
      p1After: ' – מעצבת מטפחות בעבודת יד, עם אהבה גדולה ליופי, לנשיות ולנוחות. כל מטפחת שאני יוצרת נולדת מתוך מחשבה על אישה אמיתית – עם סגנון, עם לב, ועם נשמה',
      p2: 'העסק שלי נולד מתוך רצון לשלב בין אלגנטיות יומיומית לבין נוחות ובדים איכותיים',
      p3: 'כאן תמצאי עיצובים שמותאמים לכל רגע – מהיום־יום הפשוט ועד לאירועים המיוחדים שלך',
      p4: 'כל מטפחת היא חלק קטן מסיפור – שלך ושלי',
      imgAlt: 'חגית יוצרת מטפחות',
    },
    footer: {
      rights: (year) => `© ${year} Hagit | כל הזכויות שמורות`,
      order: 'להזמנות ופרטים בוואטסאפ',
    },
    whatsappMessage: 'היי, אשמח להזמין מטפחת',
    meta: {
      title: 'Hagit - מטפחות',
      description: 'חגית עוקבי - מטפחות בעיצוב אישי בעבודת יד, נוחות לכל יום ולכל סגנון.',
    },
  },
  en: {
    langToggle: 'עב',
    nav: {
      home: 'Home',
      collection: 'Collection',
      board: 'Inspiration',
      about: 'About',
    },
    cta: 'Order Now',
    hero: {
      title: 'Clean, Feminine Scarf Designs',
      subtitle: 'Comfortable for everyday wear and every style — made with love and personal design',
      cta: 'Explore the Collection',
      imgAlt: 'Scarf',
    },
    collection: {
      title: 'Our Collection',
      imgAlt: (i) => `Scarf ${i}`,
    },
    board: {
      title: 'Inspiration Board',
      types: ['Classic', 'Everyday', 'Designer'],
      description: (type) => `Discover a range of ${type} scarves with a clean, feminine design.`,
    },
    about: {
      title: 'About',
      p1Before: "Hi, I'm ",
      name: 'Hagit Okabi',
      p1After: ' — a handmade scarf designer with a deep love for beauty, femininity, and comfort. Every scarf I create is born from thinking about a real woman — with style, heart, and soul.',
      p2: 'My business was born from a desire to combine everyday elegance with comfort and quality fabrics.',
      p3: "Here you'll find designs suited to every moment — from simple everyday looks to your special occasions.",
      p4: 'Every scarf is a small part of a story — yours and mine.',
      imgAlt: 'Hagit creating scarves',
    },
    footer: {
      rights: (year) => `© ${year} Hagit | All rights reserved`,
      order: 'Order & details on WhatsApp',
    },
    whatsappMessage: "Hi, I'd love to order a scarf",
    meta: {
      title: 'Hagit - Scarves',
      description: 'Hagit Okabi - handmade, personally designed scarves, comfortable for everyday wear and every style.',
    },
  },
}

export const DEFAULT_LANG = 'he'
