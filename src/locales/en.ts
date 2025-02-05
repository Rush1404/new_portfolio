export default {
  hero: {
    title: "Hey, I'm",
    subtitle: "Software Developer.",
    wave_alt: "Wave",
    scroll: "scroll",
  },
  about: {
    title: "A bit about me 😺",
    p1: "I'm Rushabh, a Computer Science undergraduate student at Carleton University, in Canada. 🇨🇦",
    p2: "I aspire to pursue a career at the forefront of advancements in tech, and I'm looking for opportunities to create positive change with the software I write! 🌱",
    p3: "Feel free to connect with me on socials, I'd love to talk about web development, virtual reality, or anything tech related! 💻",
  },
  work: {
    title: "Work 🚀",
    subtitle: "Here are some of the companies I've worked for!",
    content: [
      {
        title: "Jina's Jewels",
        description: "Full Stack Software Developer",
        website: "https://www.jinasjewels.com/",
        tags: ["Java", "Spring Boot", "AWS", "Docker", "Kubernetes"],
        img: "jinas",
        show_border_passive: false,
      },
      {
        title: "PM Communications",
        description: "Full Stack Software Engineer",
        website: "https://www.pmcommu.com/",
        tags: ["React", "C", "Python"],
        img: "pmcommu",
        show_border_passive: false,
      },
    ],
  },
  projects: {
    title: "Projects 🛠️",
    subtitle: "Here are some of the projects I've worked on!",
    content: [
      {
        title: "MyoCharm",
        description: "Determine whether you have neuropathy or myopathy",
        github: "https://github.com/faymo/MyoCharm",
        devpost: "https://devpost.com/software/myocharm",
        website: "https://myo-charm-1omr.vercel.app/",
        tags: ["React", "Flask", "Python", "Tensorflow", "XML", "Keras"],
        img: "myocharm",
        show_border_passive: true,
      },
      {
        title: "Jinas",
        description: "Helped develop an ecommerce platform with thousands of monthly users",
        website: "https://jinasjewels.com",
        tags: ["PHP", "PostGRESQL", "Figma"],
        img: "jinas",
        show_border_passive: true,
      },
      {
        title: "Synapse",
        description:
          "Processed databases for clinical researchers to use.",
        github: "https://github.com/Rush1404/Synapse",
        devpost: "https://devpost.com/software/synapse-vo56gh",
        tags: ["HTML5", "Astro", "React", "NPL", "Redis", "Tailwind"],
        img: "synapse",
        show_border_passive: true,
      },
      {
        title: "SRMD",
        description:
          "Website for information and registration regarding an international event",
        website: "https://srmd-test-site.vercel.app/",
        github: "https://github.com/Rush1404/SRMD---Test-Site",
        tags: ["HTML5", "React", "Javascript", "Git"],
        img: "SRMD",
        show_border_passive: true,
      },
    ],
  },
  footer: {
    title: "Made with ❤️ by Rushabh Shah",
  },
  fourofour: {
    title: "404",
    p1: "How did you even get here? 🤔",
    button_text: "Go back home",
  },
} as const;
