const userData = {
  githubUsername: "mirza-sync",
  name: "Mirza Syahmi",
  designation: "Software Developer",
  avatarUrl: "/Mirza-picture.jpg",
  email: "mirzasyahmi123@gmail.com",
  phone: "+6011-56551091",
  address: "Johor, Malaysia",
  projects: [
    {
      title: "E-Voting",
      link: "https://github.com/mirza-sync/evoting2",
      imgUrl: "/projects/votes_chart.png",
    },
    {
      title: "PC Recommendation Using Genetic Algorithm",
      link: "https://github.com/mirza-sync/PCWorld_v2.5",
      imgUrl: "/projects/recommend.png",
    },
  ],
  about: {
    title:
      "I'm a young & enthusiast software developer. I'm eager to learn new things to improve my skillset.",
    description: [
      `My work experience focuses on frontend develoment. I love to do CSS, make interactive & responsive websites to provide viewers with good user experience.`,
      `I'm also familiar with backend development using Golang, PHP (Laravel) & Java, along with databases such as MySQL and Firebase.`,
    ],
  },
  experience: [
    {
      title: "Junior Software Engineer",
      company: "NFT Technologies",
      year: "Sept 2021 - Present",
      companyLink: "",
      details: [
        {
          desc: "Maintain the new Chinapress website by fixing bugs and add new features.",
          link: "https://mywheels.my/",
          stack: ["Next.js", "Redux", "Graphql", "Ant Design"],
        },
        {
          desc: "Involved in upgrading MyEG's old car transfer website to a modernized version.",
          stack: ["React", "Rest API", "Axios", "Ant Design"],
        },
        {
          desc: "Work together with Monsta team in developing an interactive marketplace webapp for Monsta web3 game.",
          link: "https://marketplace.monstainfinite.com/marketplace",
          stack: ["React", "Typescript", "Ethers.js", "Graphql", "Styled-Components"],
        },
      ],
    },
    {
      title: "Frontend Developer",
      company: "Smartpeep",
      year: "Feb 2021 - Aug 2021",
      companyLink: "https://www.smartpeep.ai/",
      details: [
        {
          desc: [
            "Lead the frontend development of a webapp for Android device access control.",
            "Code the UI based on the design created by the UI/UX designer.",
            "Work closely with backend C# developer to implement API on the frontend using Axios.",
            "Train and mentor an intern by doing code reviews.",
          ],
          stack: ["Vue3", "TypeScript", "Vuex", "RestAPI", "Swagger", "PrimeVue"],
        },
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Smartpeep",
      year: "Sep 2020 - Feb 2021",
      companyLink: "https://www.smartpeep.ai/",
      details: [
        {
          desc: [
            "Involved in frontend and backed development of an AI fall detection system.",
            "Uses Angular and vanilla CSS to code the frontend based on Figma design.",
            "Used Golang to query/update data from DB and write the graphql resolvers.",
            "Wrote a Flutter app to connect IoT device to Wi-Fi using Bluetooth.",
          ],
          stack: ["Angular", "TypeScript", "Golang", "GraphQL", "PostgreSQL", "Docker", "Flutter", "Firebase"],
        },
      ]
    },
  ],
  education: [
    {
      title: "Bachelor in Information Technology (Hons), Information Systems Engineering",
      school: "Universiti Teknologi MARA Kampus Jasin, Melaka, Malaysia",
      year: "2017 -2021",
      exam: "CGPA 3.81",
    },
    {
      title: "Foundation In Engineering",
      school: "Universiti Teknologi MARA Kampus Dengkil, Selangor, Malaysia",
      year: "2016 -2017",
      exam: "CGPA 3.33",
    },
    {
      title: "High School (Science Stream)",
      school: "SMK Permas Jaya",
      year: "2014 -2015",
      exam: "SPM 9A 1B",
    },
  ],
  resumeUrl:
    "",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/mirza-syahmi/",
    github: "https://github.com/mirza-sync",
  },
};

export default userData;
