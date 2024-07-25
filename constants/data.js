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
      title: "Connect Metamask",
      link: "https://github.com/mirza-sync/connect-metamask",
      imgUrl: "/projects/connect-meta.png",
    },
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
      `I'm a software developer with 3 years working experience in frontend, backend, and a little bit of mobile app development.`,
    description: [
      `What I like about coding is the ability to create cool stuff with just a laptop and internet connection. 
      It is like having a superpower. With great power, comes great responsibility. 
      Hence, I wanted to build software that will give positive impact for people.`,
      `I love to do CSS, make interactive & responsive websites to provide viewers with good user experience.`,
      `I can also do backend development using Java, Golang and PHP.`,
      `I'm familiar with Flutter mobile app development, BLoC state management and in-app notification.`,
      `I'm eager to learn other languages, concepts and frameworks to keep myself up to date with the latest trends.`,
    ],
  },
  experience: [
    {
      title: "Software Engineer",
      company: "Tiong Nam Logistics Solutions Sdn. Bhd.",
      year: "Mar 2022 - Present",
      companyLink: "https://www.tiongnam.com/",
      details: [
        {
          desc: [
            "Design and develop a Transport Management System web application that supports company's day-to-day logistic operations to handle customers' orders and delivery records.",
          ],
          stack: ["Angular", "TypeScript", "Java (Spring Boot)", "RestAPI", "Microservices"],
        },
      ]
    },
    {
      title: "Frontend Developer",
      company: "Redsquare Software Sdn. Bhd.",
      year: "Sep 2021 - Jan 2022",
      companyLink: "https://www.redsquare.software/",
      details: [
        {
          desc: "Maintain the new Chinapress website by fixing bugs and adding new features.",
          link: "https://mywheels.my/",
          stack: ["Next.js", "Redux", "Graphql", "Ant Design"],
        },
        {
          desc: "Involved in upgrading MyEG's old car transfer website to a modernized version.",
          stack: ["React", "Rest API", "Axios", "Ant Design"],
        },
        {
          desc: "Work together with Monsta team in developing an interactive marketplace webapp for Monsta Infinite web3 game.",
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
            "Lead the frontend development of a webapp for Android device data leakage protection.",
            "Code the UI based on the design created by the UI/UX designer.",
            "Work closely with remote backend C# developer to implement API on the frontend using Axios.",
            "Train and mentor a junior developer by doing code reviews.",
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
            "Involved in full-stack development of an AI fall detection webapp.",
            "Uses Angular and vanilla CSS to code the frontend based on Figma design.",
            "Uses Golang to query/update data from database and write the graphql resolvers.",
            "Involved in designing & developing a mobile app prototype using Flutter that receives fall notification from Firebase (FCM).",
            "Wrote a Flutter app to connect IoT device to Wi-Fi through Bluetooth.",
          ],
          stack: ["Angular", "TypeScript", "Golang", "GraphQL", "PostgreSQL", "Docker", "Flutter", "Firebase"],
        },
      ]
    },
  ],
  education: [
    {
      title: "Bachelor in Information Technology (Hons), Information Systems Engineering",
      school: "Universiti Teknologi MARA (Kampus Jasin), Melaka, Malaysia",
      year: "2017 -2021",
      exam: "CGPA 3.83",
    },
    {
      title: "Foundation In Engineering",
      school: "Universiti Teknologi MARA (Kampus Dengkil), Selangor, Malaysia",
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
    "https://drive.google.com/file/d/17-wVvXds71_hnGpxSlqs41fjB3kpgif6/view?usp=sharing",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/mirza-syahmi/",
    github: "https://github.com/mirza-sync",
  },
  isJobHunting: true,
};

export default userData;
