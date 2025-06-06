export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  figmaUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "nutribuddy",
    title: "NutriBuddy: AI Wellness Companion",
    description: "A comprehensive AI-powered fitness and nutrition web app designed to promote healthy living through personalized guidance.",
    longDescription: "NutriBuddy is a smart web-based wellness platform developed for the Creative Incubator module. It offers AI-generated workout and meal plans, animated exercises, a nutrition tracker, a supportive community forum, and an affiliate product store — all packed into a clean and responsive user interface.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Gemini API",
      "Spoonacular API",
      "ExerciseDB API",
      "YouTube API"
    ],
    achievements: [
      "Designed and built a full-stack wellness web application",
      "Integrated Gemini-powered AI chatbot for smart workout and recipe recommendations",
      "Developed custom workout tracker with rest timers and calorie calculations",
      "Implemented Spoonacular and ExerciseDB APIs for accurate nutrition and workout data",
      "Created animated workout demos via YouTube API integration",
      "Deployed live version and managed mobile responsiveness and SEO",
      "Produced promotional video and executed a digital marketing campaign"
    ],
    image: "/images/projects/nutribuddy/nutribuddy.jpg",
    github: "https://github.com/Asifyousaf/Nutribuddy",
    liveUrl: "https://nutribuddy.vercel.app/",
    featured: true
  },
  {
    id: "finscope",
    title: "Finscope",
    description: "A real-time financial dashboard with market data, crypto tracking, and currency exchange insights.",
    longDescription: "Finscope is a modern, responsive financial dashboard web application designed to display real-time data on global markets, individual stocks, cryptocurrencies, and currency exchange rates. Built with a clean user interface, it pulls live data from multiple APIs to provide up-to-date insights for investors and casual users alike.",
    technologies: [
      "HTML5",
      "Tailwind CSS",
      "JavaScript",
      "Chart.js",
      "Twelve Data API",
      "CoinMarketCap API",
      "CoinGecko API",
      "Frankfurter API"
    ],
    achievements: [
      "Developed a fully functional multi-section financial dashboard",
      "Integrated real-time stock and ETF data using Twelve Data and FMP APIs",
      "Added live cryptocurrency tracking with CoinMarketCap and CoinGecko",
      "Implemented currency exchange features with Frankfurter API",
      "Ensured responsive UI/UX for both desktop and mobile users",
      "Used intelligent API fallback and error handling logic"
    ],
    image: "/images/projects/finscope/finscope.jpg",
    github: "https://github.com/Asifyousaf/FinScope",
    liveUrl: "https://finscope-one.vercel.app/",
    featured: true
  },
  {
    id: "masat-al-nahar",
    title: "Masat Al Nahar",
    description: "A modern restaurant website with online ordering system and menu management",
    longDescription: "A modern restaurant website with comprehensive online ordering system and menu management capabilities. Features a clean, user-friendly interface and responsive design.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma"],
    achievements: [
      "Designed and developed a modern restaurant website",
      "Implemented online ordering system",
      "Created responsive menu management interface",
      "Optimized user experience across devices"
    ],
    image: "/images/projects/masatalnahar/masatalnahar.jpg",
    github: "https://github.com/Asifyousaf/masatalnahar.io",
    liveUrl: "https://asifyousaf.github.io/masatalnahar.io/",
    figmaUrl: "https://www.figma.com/design/EbVP0zAOfFQh47ipLr8vGj/Untitled?node-id=0-1&t=9fGXUPLwx2EvAr2C-1",
    featured: true
  },
  {
    id: "cybertronic",
    title: "Cybertronic Website",
    description: "Full-stack e-commerce platform with user authentication and product management",
    longDescription: "A comprehensive e-commerce platform featuring user authentication, product management, and a modern shopping experience.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    achievements: [
      "Built full-stack e-commerce functionality",
      "Implemented secure user authentication",
      "Created product management system",
      "Optimized site performance"
    ],
    image: "/images/projects/cybertronic/cybertronic.jpg",
    liveUrl: "https://cybertronicbot.com/",
    featured: true
  },
  {
    id: "time-magazine",
    title: "TIME Magazine Clone",
    description: "Responsive magazine website with dynamic content loading and modern layout",
    longDescription: "A responsive clone of TIME Magazine's website featuring dynamic content loading and a modern, clean layout design.",
    technologies: ["HTML5", "CSS3", "JavaScript", "REST API"],
    achievements: [
      "Created responsive magazine layout",
      "Implemented dynamic content loading",
      "Optimized performance across devices",
      "Maintained design consistency"
    ],
    image: "/images/projects/time-magazine/time-magazine.jpg",
    github: "https://github.com/Asifyousaf",
    liveUrl: "https://asifyousaf.github.io/Magazine.github.io/",
    featured: true
  },
  {
    id: "fix-my-ride",
    title: "Fix My Ride",
    description: "Mobile app for car service booking and maintenance tracking",
    longDescription: "A mobile application for booking car services and tracking maintenance history. Features an intuitive interface and comprehensive service management.",
    technologies: ["Kotlin", "Android SDK", "Firebase", "Material UI"],
    achievements: [
      "Developed complete car service booking system",
      "Implemented maintenance tracking features",
      "Created user-friendly mobile interface",
      "Integrated real-time updates"
    ],
    image: "/images/projects/fix-my-ride/fix-my-ride.jpg",
    github: "https://github.com/Asifyousaf",
    liveUrl: "https://www.figma.com/design/1d641mijroI1sBszp7QlSr/High-fi---Fix-My-Ride?node-id=0-1&t=aZph7JpeEYl7Gsch-1",
    featured: true
  },
  {
    id: "alan-partridge-soundboard",
    title: "Alan Partridge Soundboard",
    description: "A fun and interactive soundboard & text-to-speech app featuring Alan Partridge's iconic catchphrases.",
    longDescription: "This web-based soundboard lets users play popular Alan Partridge quotes with a single click and features a built-in Text-to-Speech (TTS) tool for custom phrases. Designed for entertainment, it's fully responsive and delivers a vibrant user experience with smooth audio playback and clean UI.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Web Speech API"],
    achievements: [
      "Designed and coded a dynamic soundboard with multiple phrases",
      "Implemented a functional Text-to-Speech box using Web Speech API",
      "Developed a paginated layout to handle more sound buttons",
      "Created a vibrant, responsive design using HTML/CSS",
      "Used vanilla JavaScript for full functionality (no external libraries)"
    ],
    image: "/images/projects/soundboard/soundboard.jpg",
    github: "https://github.com/Asifyousaf/Soundboard.github.io",
    liveUrl: "https://asifyousaf.github.io/Soundboard.github.io/",
    featured: false
  },
  {
    id: "the-lost-key",
    title: "The Lost Key",
    description: "A captivating puzzle-platformer game built with Unity, challenging players with intricate puzzles and magical landscapes.",
    longDescription: "Embark on an enchanting adventure in 'The Lost Key,' a captivating puzzle-platformer that will challenge your wit and dexterity. Dive into a mysterious world filled with intricate puzzles, magical landscapes, and hidden secrets waiting to be uncovered.",
    technologies: ["Unity", "C#", "Game Design", "2D Graphics"],
    achievements: [
      "Developed challenging puzzles with escalating complexity",
      "Created beautifully crafted environments with unique charm",
      "Implemented fluid and responsive controls",
      "Designed engaging platformer gameplay mechanics",
      "Integrated immersive soundtrack and sound effects"
    ],
    image: "/images/projects/lost-key/lost-key.jpg",
    liveUrl: "https://asif469.itch.io/the-lost-key",
    featured: false
  },
  {
    id: "labyrinth",
    title: "Labyrinth",
    description: "An engaging puzzle game that challenges players to navigate through intricate mazes.",
    longDescription: "A challenging puzzle game where players must navigate through complex labyrinths, testing their problem-solving skills and spatial awareness.",
    technologies: ["Unity", "C#", "Game Design", "Level Design"],
    achievements: [
      "Designed multiple challenging maze levels",
      "Implemented smooth player controls",
      "Created engaging puzzle mechanics",
      "Optimized game performance"
    ],
    image: "/images/projects/labyrinth/labyrinth.jpg",
    liveUrl: "https://asif469.itch.io/labyrinth",
    featured: false
  },
  {
    id: "meal-maker-api",
    title: "Meal Maker API",
    description: "A Python application with Tkinter GUI that leverages The Meal DB API for recipe discovery.",
    longDescription: "The 'Meal Maker API' is a Python application with a user-friendly Tkinter GUI that leverages The Meal DB API. This project enables users to explore and discover various meals effortlessly. Key features include a search bar allowing users to find detailed information about specific meals, a randomize button for a diverse and unpredictable meal selection, and seamless interaction with embedded YouTube links for additional culinary content.",
    technologies: ["Python", "Tkinter", "REST API", "GUI Design"],
    achievements: [
      "Developed a clean and intuitive graphical interface",
      "Integrated The Meal DB API for recipe data",
      "Implemented search and randomize functionality",
      "Created seamless YouTube video integration",
      "Optimized API response handling"
    ],
    image: "/images/projects/meal-maker/meal-maker.jpg",
    github: "https://github.com/Asifyousaf/MealMakerApi",
    featured: false
  }
];