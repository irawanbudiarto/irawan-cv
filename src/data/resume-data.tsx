import { Ieraone } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Irawan Budiarto",
  initials: "IB",
  location: "Jakarta, Indonesia",
  locationLink: "https://maps.app.goo.gl/YiRLdwRNRQtiiEvR8",
  about: "React Native Specialist",
  summary:
    "Mobile App Developer with over 4 years of experience, specializing in the creation of dynamic apps using React Native. I am interested in joining a team of talented developers to help build world-class mobile apps.",
  avatarUrl: "https://avatars.githubusercontent.com/u/34003625?v=4",
  personalWebsiteUrl: "#",
  contact: {
    email: "irawanbudiarto96@gmail.com",
    tel: "+6287886791512",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/irawanbudiarto",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/irawan-budiarto-95463a132/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Mercu Buana University",
      degree:
        "Bachelor's Degree in Computer Science, specializing in Information Systems",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "PT. Bintang Data Prima Inovasi (HITZTAR)",
      link: "https://www.hitztar.com/",
      badges: ["Jakarta, Indonesia"],
      title: "Senior Mobile App Developer",
      logo: Ieraone,
      start: "Jul 2023",
      end: null,
      description:
        "Lead the end-to-end development of Hitztar, an innovative social networking platform connecting talents and entertainers. Implemented real-time messaging, video streaming, and social interactions. Successfully deployed to iOS, Android, and Huawei stores. Tech: React Native, TypeScript, Redux Toolkit, Firebase.",
    },
    {
      company: "PT. Kreasinet Indo Mandiri (KBL)",
      link: "#",
      badges: ["Jakarta, Indonesia"],
      title: "React Native Developer",
      logo: Ieraone,
      start: "January 2022",
      end: "June 2023",
      description:
        "Led development of KBL Performing Arts, an e-learning platform for performing arts. Built dual apps for students and instructors with live classes, scheduling, and progress tracking. Integrated payments and notifications. Tech: React Native, TypeScript, Redux, Video SDK.",
    },
    {
      company: "CUBE SOCIAL MEDIA",
      link: "#",
      badges: ["Jakarta, Indonesia"],
      title: "Freelance React Native Developer",
      logo: Ieraone,
      start: "January 2022",
      end: "January 2023",
      description:
        "Developed a social media platform featuring real-time feeds, user interactions, and multimedia sharing. Built reusable component library and Firebase integration for chat and notifications.",
    },
    {
      company: "PT. Rekayasa Aplikasi Digital",
      link: "#",
      badges: ["Jakarta, Indonesia"],
      title: "Mobile App Developer",
      logo: Ieraone,
      start: "April 2021",
      end: "December 2021",
      description:
        "Developed client-facing mobile apps including e-commerce and delivery platforms. Implemented order tracking, payment gateways, and driver management systems. Tech: React Native, Redux, RESTful API.",
    },
    {
      company: "PT. Digital Integrasi Asia",
      link: "https://www.moxa.id/",
      badges: ["Jakarta, Indonesia"],
      title: "Mobile App Developer",
      logo: Ieraone,
      start: "March 2020",
      end: "March 2021",
      description:
        "Built core fintech app features including secure authentication. Ensured compliance with banking security standards. Tech: React Native, Secure Storage, Biometric Auth.",
    },
    {
      company: "Freelance & Early Career Projects",
      link: "#",
      badges: ["Freelance"],
      title: "Mobile App Developer, Jakarta, Indonesia",
      logo: Ieraone,
      start: "2019",
      end: "February 2020",
      description:
        "Launched professional career building custom mobile applications for various clients and startups. Gained foundational expertise in React Native development, UI/UX implementation, and client communication. Developed applications ranging from food delivery, education platforms, to business management tools. Established strong foundation in mobile development best practices, version control (Git), and agile methodologies. Technologies: React Native, JavaScript, RESTful API, Firebase.",
    },
  ],
  skills: [
    "React Native",
    "TypeScript",
    "JavaScript (ES6+)",
    "Redux & Redux Toolkit",
    "React Navigation",
    "RESTful API Integration",
    "GraphQL",
    "Firebase (Auth, Database, Storage, Analytics)",
    "State Management (Redux, Context API, Zustand)",
    "Native Modules & Bridges",
    "Push Notifications (FCM, APNs)",
    "Real-time Features (WebSocket, Socket.io)",
    "Third-party SDK Integration",
    "Payment Gateway Integration",
    "App Performance Optimization",
    "Debugging & Profiling Tools",
    "Unit Testing (Jest, React Native Testing Library)",
    "CI/CD (GitHub Actions, Bitrise)",
    "Git & Version Control (GitHub, GitLab, Bitbucket)",
    "App Store Deployment (iOS App Store, Google Play, Huawei AppGallery)",
    "UI/UX Implementation",
    "Responsive Design",
    "Agile/Scrum Methodologies",
    "Code Review & Mentoring",
  ],
  projects: [
    {
      title: "Hitztar",
      techStack: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "Video Streaming",
        "Real-time Chat",
      ],
      description:
        "Social networking platform connecting talents and entertainers with video streaming, real-time messaging, and social interactions.",
      logo: Ieraone,
      link: {
        label: "hitztar.com",
        href: "https://hitztar.com/",
      },
    },
    {
      title: "KBL Performing Arts",
      techStack: [
        "React Native",
        "TypeScript",
        "Video SDK",
        "Payment Integration",
      ],
      description:
        "E-learning platform for performing arts with video courses, live classes, scheduling, and progress tracking for students.",
      logo: Ieraone,
    },
    {
      title: "KBL Instructor",
      techStack: ["React Native", "TypeScript", "Video Streaming", "Analytics"],
      description:
        "Instructor app for managing courses, scheduling sessions, tracking student progress, and analyzing performance metrics.",
      logo: Ieraone,
    },
    {
      title: "CUBE Social Media App",
      techStack: [
        "React Native",
        "Firebase",
        "Real-time Database",
        "Push Notifications",
      ],
      description:
        "Social media platform with real-time feeds, messaging, and multimedia sharing using Firebase.",
      logo: Ieraone,
    },
    {
      title: "Sekolahdigi",
      techStack: [
        "React Native",
        "Video Player",
        "Quiz System",
        "Progress Tracking",
      ],
      description:
        "Digital education platform with video lessons, interactive quizzes, and progress tracking.",
      logo: Ieraone,
    },
    {
      title: "BantuBeli Marketplace",
      techStack: ["React Native", "Redux", "Payment Gateway", "Order Tracking"],
      description:
        "E-commerce marketplace with product catalog, shopping cart, order management, and real-time tracking.",
      logo: Ieraone,
    },
    {
      title: "BantuBeli Kasir",
      techStack: [
        "React Native",
        "Offline Storage",
        "Bluetooth Printer",
        "Sales Analytics",
      ],
      description:
        "Mobile cashier app for merchants with inventory management, transaction processing, Bluetooth receipt printing, and sales reports.",
      logo: Ieraone,
    },
    {
      title: "BantuBeli Driver",
      techStack: [
        "React Native",
        "Google Maps",
        "Real-time Tracking",
        "Background Location",
      ],
      description:
        "Delivery driver app with order management, GPS navigation, route optimization, and real-time tracking.",
      logo: Ieraone,
    },
    {
      title: "Food Dev",
      techStack: [
        "React Native",
        "Cart Management",
        "Order Tracking",
        "Payment Integration",
      ],
      description:
        "Food delivery app with menu browsing, cart management, order tracking, and payment options.",
      logo: Ieraone,
    },
    {
      title: "Moxa by Astra Financial",
      techStack: [
        "React Native",
        "Secure Storage",
        "Biometric Auth",
        "Encryption",
      ],
      description:
        "Fintech app providing digital loans, investments, and payments with bank-grade security and biometric authentication.",
      logo: Ieraone,
      link: {
        label: "moxa.id",
        href: "https://www.moxa.id/",
      },
    },
  ],
} as const;
