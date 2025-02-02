import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  rails,
  postgres,
  git,
  figma,
  ubuntu,
  microverse,
  australianimport,
  bookadoctor,
  spacetravel,
  australianimports_web,
  threejs,
  tan,
  hab,
  logo,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-End ",
    icon: mobile,
  },
  {
    title: "Back-End ",
    icon: backend,
  },
  {
    title: " Full-Stack ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PG Admin",
    icon: rails,
  },
  {
    name: "RubyOnRails",
    icon: postgres,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "ubuntu",
    icon: ubuntu,
  },
];

const experiences = [
  {
    title: "I.T. TECHNICAL SUPPORT ",
    company_name: "Self-employment",
    icon: logo,
    iconBg: "#fff",
    date: "Jan 2020 - Present",
    points: [
      "Delivered comprehensive software solutions to over 150 clients, including the installation and maintenance of 50+ point-of-sales (POS) systems, enhancing operational efficiency for retail businesses.",
      "Developed and implemented an appointment booking system, streamlining the scheduling process for clients and improving user experience.",
      "Assisted with the maintenance and troubleshooting of a delivery application (dailyvery), ensuring consistent performance and addressing technical issues to minimize downtime.",
      "Installed and configured CCTV systems for clients, enhancing security and surveillance capabilities.",
      "Provided technical support and resolved computer issues, repaired hardware, and evaluated software and hardware solutions to meet client needs effectively.",
    ],
  },
    {
    title: "Web Developer",
    company_name: "Australian Imports",
    icon: australianimport,
    iconBg: "#383E56",
    date: "Feb 2024 - March 2024",
    points: [
      "Modifiying and maintaining a web application using javascript and other related technologies. Based on the client's need.",
      "Collaborating with cross-functional teams including IT teams and other developers to maintain a high-quality Web App."
    ],
  },

  {
    title: "Full Stack Developer",
    company_name: "MICROVERSE",
    icon: microverse,
    iconBg: "#6F23FF",
    date: "March 2023 – December 2023",
    points: [
      "Mentored 20 Junior Web Developers, providing comprehensive technical guidance (e.g., code reviewing, feedback provision, etc.) and hands-on program oversight.",
      "Offered technical and mental advice on maintaining motivation and program longevity to 20+ Micronauts.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Supported 100+ Micronauts through code reviews.","Proposed code organization enhancements, boosting quality and performance by 25%"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Antoine was a fantastic experience. He transformed our Point of Sales Web App with a touch of magic, making it faster, more reliable, and easy to use. Now, managing our shop's data feels like a breeze, thanks to his expertise in setting up secure server systems. I couldn't be happier with the results!",
    name: "Peter Merched",
    designation: "Owner",
    company: "of Australian Imports",
    image: australianimport,
  },
  {
    testimonial:
      "I worked with Antonie on a challenging Rails project. Antonie's ability to remain calm under pressure sets him apart as an exceptional professional. Throughout the project, even during tight deadlines and unexpected challenges, Antonie exhibited a remarkable composure that positively influenced our collaboration."
      ,
    name: "Tanmayi Manku",
    designation: "Full Stack Software Developer",
    company: "",
    image: tan,
  },
  {
    testimonial:
      "Antoine's expertise and coding background laid a strong foundation for our success. His knack for simplifying complex concepts fueled our progress. Besides technical prowess, his communication and collaboration skills were invaluable. Antoine's proactive problem-solving greatly enriched our partnership. He'd undoubtedly excel as a coding partner for anyone lucky enough to collaborate with him",
    name: "Habtamu (ቤናዊ) Alemayehu",
    designation: "Full Stack Software Developer",
    company: " at Lois Smart IT Solutions",
    image: hab,
  },
];

const projects = [
  {
    name: "Book A Doctor",
    description:
      "Web-based platform designed for users to view doctor qualifications, experience and schedule appointments seamlessly",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "RubyOnRails",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: bookadoctor,
    source_code_link: "https://github.com/ANTOINE1128/BookADoctor-front-end",
    live_demo_link :"https://book-doctor-appointment-frontend.netlify.app/signup",
  },
  {
    name: "Space Travel ",
    description:
      "The Space Travel Project is a web application enabling users to reserve rockets and explore detailed information about available spaceships and their corresponding space trip itineraries.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: spacetravel,
    source_code_link: "https://github.com/ANTOINE1128/Space-Travelers-Hub",
    live_demo_link:"https://cosmos-travelers-hub.netlify.app/",
  },
  {
    name: "Australian Imports POS",
    description:
      "A Point of Sales Web App modified and maintained using javascript and other related technologies. Based on the client's need. The app is hosted and maintained on a server using ZeroTier, Proxmox and Ubuntu Server allowing access from the client's shop environment and preserving the data in two different hard drives. ",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: australianimports_web,
    
  },
];

export { services, technologies, experiences, testimonials, projects };