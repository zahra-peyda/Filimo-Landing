interface moviesInfo {
  imageFile: string;
  title: string;
  englishTitle: string;
  year: number;
  genres: string[];
  rating: number;
  age: string;
  description: string;
}

export const moviesData: moviesInfo[] = [
  {
    imageFile: "تاج و تخت.jpg",
    title: "بازی تاج و تخت",
    englishTitle: "Game Of Thrones",
    year: 2011,
    genres: ["درام و فانتزی"],
    rating: 9.2,
    age: "+18",
    description:
      "هفت خاندان اشرافی برای تسلط بر سرزمین افسانه‌ای وستروس در حال ستیزند ...",
  },
  {
    imageFile: "silo.jpg",
    title: "سیلو",
    englishTitle: "Silo",
    year: 2023,
    genres: ["درام و علمی و تخیلی"],
    rating: 8.1,
    age: "+18",
    description:
      "مردان و زنان در یک سیلوی غول پیکر زمینی زندگی می‌کنند که دارای چندین مقرران است ...",
  },
  {
    imageFile: "the-boys.jpg",
    title: "پسران",
    englishTitle: "The Boys",
    year: 2019,
    genres: ["اکشن و جنایی و علمی و تخیلی و کمدی"],
    rating: 8.6,
    age: "+16",
    description:
      "گروهی از هوشیاران تصمیم می‌گیرند تاابر قهرمانان فاسدی را که از قدرت خود سوء استفاده می‌کنند، نابود کنند ...",
  },
  {
    imageFile: "کنسل.jpg",
    title: "کنکل",
    englishTitle: "Cankel",
    year: 2026,
    genres: ["معمایی"],
    rating: 5.6,
    age: "+15",
    description:
      "زندگی یک راننده مهمتره یا یک دکتر؟ بستگی داره کدوم یکی با کارش حال کنه ...",
  },
  {
    imageFile: "ونزدی.jpg",
    title: "ونزدی",
    englishTitle: "Wednesday",
    year: 2022,
    genres: [" جنایی و خانوادگی و کمدی"],
    rating: 8.0,
    age: "+14",
    description:
      "این سریال دوران تحصیلی «ونزدی آدامز» در دبیرستان نورمور را روایت می‌کند ...",
  },
];
