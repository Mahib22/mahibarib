const getMenu = () => ["skills", "projects", "contact"];

const getIdentity = () => ({
  welcomeText: "Hi! I'm Muhammad Mahib Arib",
  typeWriterText: [
    "Web Programmer",
    "Mobile Programmer",
    "Freelance Programmer",
  ],
  descriptionText:
    "I am currently a student of informatics engineering at Indraprasta University, PGRI. I have a passion in programming, I'm always on the lookout for new challenges and opportunities to further improve my knowledge and skills. I love coding websites and mobile. I have 3+ years experiences in the web development with Laravel Framework.",
  contactText:
    "I am currently looking for a freelance or part time job. If you see me as a good fit, feel free to contact me. Let's work together!",
  socialLink: {
    mail: "mahib.arib@gmail.com",
    resume: "#a",
    github: "https://github.com/Mahib22",
    linkedin: "https://www.linkedin.com/in/mahib-arib",
    medium: "https://mahib-arib.medium.com",
    devto: "https://dev.to/mahib22",
  },
});

export { getMenu, getIdentity };
