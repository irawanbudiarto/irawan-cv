import { Ieraone } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Irawan Budiarto",
  initials: "IB",
  location: "Jakarta, Indonesia",
  locationLink: "https://maps.app.goo.gl/YiRLdwRNRQtiiEvR8",
  about: "React Native Specialist | Mobile App Developer",
  summary:
    "As a Mobile App Developer with over 3 years of experience, specializing in the creation of dynamic apps using React Native. I am interested in joining a team of talented developers to help build world-class mobile apps.",
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
      company: "Hitztar - PT. Bintang Data Prima Inovasi",
      link: "https://www.hitztar.com/",
      badges: ["Remote"],
      title: "Mobile App Developer, Jakarta, Indonesia",
      logo: Ieraone,
      start: "July 2023",
      end: null,
      description:
        "Leading the development of Social Networking Platform for Talents and Entertainers. Technologies: React Native, RESTfull Api",
    },
    {
      company: "PT. Kreasinet Indo Mandiri",
      link: "#",
      badges: ["Remote"],
      title: "Mobile App Developer, Jakarta, Indonesia",
      logo: Ieraone,
      start: "January 2022",
      end: "June 2023",
      description:
        "Leading the mobile app development of a course for people studying vocal, music, dance & stage act, and role model. Technologies: React Native, RESTfull Api",
    },
    {
      company: "CUBE Social Media App",
      link: "#",
      badges: ["Freelance Remote"],
      title: "Mobile App Developer, Jakarta, Indonesia",
      logo: Ieraone,
      start: "January 2022",
      end: "January 2023",
      description:
        "Contribute to the mobile app development of Social Media App. Technologies: React Native, Firebase Database",
    },
    {
      company: "PT Rekayasa Aplikasi Digital",
      link: "#",
      badges: ["Fulltime"],
      title: "Mobile App Developer",
      logo: Ieraone,
      start: "April 2021",
      end: "December 2021",
      description:
        "Developed and maintained the mobile application. Technologies: React Native, RESTful Api",
    },
    {
      company: "Moxa by Astra Financial - PT DIA",
      link: "#",
      badges: ["Fulltime"],
      title: "Mobile App Developer",
      logo: Ieraone,
      start: "March 2020",
      end: "March 2021",
      description:
        "Developed and maintained the mobile application. Technologies: React Native, RESTful Api",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React Native",
    "Firebase",
    "RESTfull Api",
    "Redux & Redux Toolkit",
    "UI / UX Design",
    "Git / Github / Gitlab",
    "Deploy App to Appstore",
    "Deploy App to Playstore",
    "Deploy App to App Gallery Huawei",
  ],
  projects: [
    {
      title: "Hitztar",
      techStack: [
        "Mobile App Developer",
        "React Native",
        "RESTfull Api",
        "Deploy App to Appstore",
        "PlayStore",
        "App Gallery Huawei",
      ],
      description:
        "Leading the development of Social Networking Platform for Talents and Entertainers.",
      logo: Ieraone,
      link: {
        label: "#",
        href: "https://hitztar.com/",
      },
    },
    {
      title: "KBL Performing Arts",
      techStack: [
        "Mobile App Developer",
        "React Native",
        "RESTfull Api",
        "Deploy App to Appstore",
        "PlayStore",
      ],
      description:
        "Leading the mobile app development of a course for people studying vocal, music, dance & stage act, and role model.",
      logo: Ieraone,
    },
    {
      title: "KBL Instructor",
      techStack: [
        "Mobile App Developer",
        "React Native",
        "RESTfull Api",
        "Deploy App to Appstore",
        "PlayStore",
      ],
      description:
        "Leading the mobile app development of a course for people studying vocal, music, dance & stage act, and role model.",
      logo: Ieraone,
    },
    {
      title: "CUBE Social Media App",
      techStack: ["Mobile App Developer", "React Native", "Firebase"],
      description:
        "Contribute to the mobile app development of Social Media App.",
      logo: Ieraone,
    },
    {
      title: "Sekolahdigi",
      techStack: ["Mobile App Developer", "React Native", "RESTfull Api"],
      description: "Contribute to the mobile app development",
      logo: Ieraone,
    },
    {
      title: "BantuBeli",
      techStack: ["Mobile App Developer", "React Native", "RESTfull Api"],
      description: "Contribute to the mobile app development",
      logo: Ieraone,
    },
    {
      title: "Bantubeli Kasir",
      techStack: ["Mobile App Developer", "React Native", "RESTfull Api"],
      description: "Contribute to the mobile app development",
      logo: Ieraone,
    },
    {
      title: "Bantubeli Driver",
      techStack: ["Mobile App Developer", "React Native", "RESTfull Api"],
      description: "Contribute to the mobile app development",
      logo: Ieraone,
    },
    {
      title: "Food Dev",
      techStack: ["Mobile App Developer", "React Native", "RESTfull Api"],
      description: "Contribute to the mobile app development",
      logo: Ieraone,
    },
    {
      title: "Moxa by Astra Financial",
      techStack: ["Mobile App Developer", "React Native", "RESTfull Api"],
      description: "Contribute to the mobile app development",
      logo: Ieraone,
      link: {
        label: "#",
        href: "https://www.moxa.id/",
      },
    },
  ],
} as const;
