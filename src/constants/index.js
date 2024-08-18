import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `I am a passionate fullstack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile fullstack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with various technologies, including React, Next.js, Node.js, MySQL, Express.js, Meteor.js, and MongoDB. My journey in web development began with a deep curiosity about how things work, which has evolved into a career where I continually strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Staying active and exploring new technologies is something I am passionate about.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Backend Developer",
    company: "PT Digital Seucom Indonesia",
    description: `As a Backend Developer at PT Digital Seucom Indonesia, I designed, developed, and maintained high-performance, responsive, and secure server-side web applications. I created RESTful APIs with Node.js and Express.js, implemented real-time features using Socket.io, and managed MySQL databases with Sequelize ORM. I collaborated with front-end developers, ensured data protection through robust authentication and authorization, and resolved server-side issues to maintain smooth application operations.`,
    technologies: ["Node.js", "Express.js", "mySQL", "SequelizeORM", "Socket.io"],
  },
  {
    year: "2021 - 2023",
    role: "Node Js Developer",
    company: "PT Egogohub Indonesia",
    description: `As a Node.js Developer at PT Egogohub Indonesia, I was involved in both backend and frontend development, building robust and scalable web applications. I developed server-side applications with Node.js, created RESTful APIs using Express.js, and implemented real-time features with Meteor.js. I managed databases using MongoDB and MySQL and ensured seamless integration between server. Additionally, I participated in frontend development to enhance user experience and optimized application security and performance.`,
    technologies: ["Meteor.js", "Node.js", "Express.js", "mySQL", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "Developed a personal portfolio website using Next.js, TailwindCSS, and Framer Motion to showcase my projects, skills, and contact information.",
    technologies: ["Next.js", "TailwindCSS", "Frammer Motion"],
    url: "https://portfolio-muhamad-hilman.vercel.app/"
  },
  {
    title: "3D Landing Page Website",
    image: project1,
    description:
      "Developed a cutting-edge 3D responsive website using Next.js, TailwindCSS, and Spline design to create an immersive user experience. This project demonstrates my ability to integrate modern web technologies to deliver dynamic and engaging user interfaces.",
    technologies: ["Next.js", "TailwindCSS", "Spline 3D Design"],
    url: "https://3d-website-nextjs.vercel.app/"
  },
];

export const CONTACT = {
  address: "West Jakarta City, Jakarta 11720",
  phoneNo: "+62 8968 4130 569",
  email: "muhamadhilman885@gmail.com",
};
