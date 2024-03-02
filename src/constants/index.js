import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    Compass,
    sum,
    Bank,
    Resturant,
    commerce,
    portfolio,
    threejs,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Back-end Developer",
      icon: backend,
    },
    {
      title: "Front-end Developer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
 
  
    {
      name: "figma",
      icon: figma,
    },
 
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      iconBg: "#E6DEDD",
      points: [
        "Crafting and managing web applications with a focus on React.js and associated technologies.",
        "Engaging in collaborative efforts with cross-functional teams, including designers, product managers, and fellow developers, to deliver top-notch products.",
        "Executing responsive design principles and ensuring seamless cross-browser compatibility.",
        "Taking part in code reviews and offering constructive feedback to fellow developers.",
      ],
    },
    {
      title: "React Native Developer",
      iconBg: "#E6DEDD",
      points: [
        "Building and upkeeping web applications through the utilization of React.js and associated technologies.",
        "Enforcing responsive design principles and ensuring compatibility across various browsers.",
        "Contributing to code reviews and furnishing constructive feedback to fellow developers.",
      ],
    },
    {
      title: "Web Developer",
      iconBg: "#383E56",
      points: [
        "Crafting and maintaining web applications leveraging React.js and other relevant technologies.",
        "Implementing responsive design practices and ensuring compatibility across different browsers.",
      ],
    },
    {
      title: "Full stack Developer",
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Proficiency in both front-end and back-end technologies, including React.js and server-side languages.",
        "Implementation of responsive design principles to ensure a seamless and user-friendly experience across diverse devices.",
        "Strong problem-solving skills, enabling the resolution of complex technical challenges and optimization of web application performance.",
        "Adaptable and quick to learn, keeping up-to-date with emerging technologies and industry best practices.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Nesrine proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Nesrine does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Nesrine optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI article summraizer",
      description:
        "An open-source tool for summarizing articles.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: sum,
      source_code_link: "https://github.com/Nesrinetech/Nesrines-AI-summraizer-app/",
      project_link: "https://sensational-pavlova-397fed.netlify.app/",
    },
    {
      name: "Nesrine's AI Compass",
      description:
        "world of artificial intelligence.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        
      ],
      image: Compass,
      source_code_link: "https://github.com/Nesrinetech/Nesrine-AICompass/",
      project_link: "https://nesrine-ai-compass-kqwn.vercel.app/",
    },
    {
      name: "Modern Bank Website",
      description:
        "Discover a new era in payment solutions.",
      tags: [
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
  
      ],
      image: Bank,
      source_code_link: "https://github.com/Nesrinetech/Modern-Bank/",
      project_link: "https://modern-bank-six.vercel.app/",
    },
    {
      name: "E-commerce",
      description:
        "Unrivalled Fashion House",
      tags: [
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: commerce,
      source_code_link: "https://github.com/Nesrinetech/ecommerce-test/",
      project_link: "https://nesrinetech.github.io/ecommerce-test/",
    },
    {
      name: "portfolio",
      description:
        "Personal Pertfolio",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
      project_link: "https://nesrine-portfolio.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  