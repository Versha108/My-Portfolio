import ecom from "../images/Ecom.png";

export const portfolioData = {
  personal: {
    name: "Versha Gautam",
    title: "UI/UX Designer",
    description: "UI/UX Designer with a passion for human-centered design and digital experiences.",
    bio: "Designer. Thinker. Problem-solver. At ShadowFox, I sharpened my UI/UX skills by working on fast-paced, real-world projects. Whether it's building intuitive interfaces or crafting immersive design journeys, I’m here to make every pixel count.",
    location: "Gorakhpur, Uttar Pradesh",
    email: "gversha20@gmail.com",
    profileImage: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  
  skills: [
    { name: "Figma", level: 90, icon: "Figma" },
    { name: "Adobe XD", level: 80, icon: "Palette" },
    // { name: "Illustrator", level: 50, icon: "PenTool" },
    { name: "Photoshop", level: 50, icon: "Image" },
    { name: "Prototyping", level: 70, icon: "Zap" },
    { name: "User Research", level: 80, icon: "Users" },
    { name: "Wireframing", level: 90, icon: "Grid3X3" },
    { name: "Design Systems", level: 85, icon: "Layers" }
  ],

  timeline: [
    {
      year: "2024",
      title: "UI/UX Designer Intern",
      company: "ShadowFox",
      description: "Leading design for mobile and web applications, mentoring junior designers, and establishing design systems."
    },
    {
      year: "2021-2025",
      title: "Bachelor of Technology",
      company: "Institute of Enginnering and technology, Dr. RamManohar Lohia Awadh University, Ayodhya",
      description: "Specialized in Computer Science and Engineering "
    }
  ],

  projects: [
    {
      id: 1,
      title: "E-commerce Website",
      category: "Web Design",
      image: ecom,
      tools: ["Figma", "Prototyping", "User Research"],
      // overview: "A comprehensive e-commerce Web application focusing on seamless shopping experience and intuitive navigation.",
      // challenge: "The original UI felt cluttered and lacked a clear visual flow.",
      // solution: "Created a minimalist layout with clear hierarchy, consistent styling, and easy navigation elements.",
      // results: "Led to better user experience and seamless user interface.",
      link: "https://www.figma.com/proto/sDlewAkBrOzf53vCORYYOy/E-commerce-website?page-id=28%3A136&node-id=28-137&viewport=475%2C60%2C0.15&t=OniaGnZCUNdhNbt2-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=28%3A137"
    },
    {
      id: 2,
      title: "SaaS Dashboard Redesign",
      category: "Web Design",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tools: ["Figma", "Design Systems", "Analytics"],
      // overview: "Complete redesign of a complex SaaS dashboard to improve user efficiency and data visualization.",
      // challenge: "The existing dashboard was cluttered with poor information hierarchy, making it difficult for users to find key metrics.",
      // solution: "Created a clean, modular design with customizable widgets, improved data visualization, and better navigation.",
      // results: "50% reduction in user task completion time and 35% increase in daily active users."
      link: ""
    },
    {
      id: 3,
      title: "Banking App Interface",
      category: "Fintech",
      image: "https://images.pexels.com/photos/5849574/pexels-photo-5849574.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tools: ["Figma", "Prototyping", "Security Design"],
      // overview: "Secure and user-friendly banking application interface with focus on accessibility and trust.",
      // challenge: "Creating a balance between security requirements and user-friendly experience for digital banking.",
      // solution: "Implemented biometric authentication, clear transaction flows, and accessible design principles.",
      // results: "25% increase in mobile banking adoption and 99.9% security compliance rating."
      link: ""
    }
  ],

  social: {
    linkedin: "https://www.linkedin.com/in/versha-gautam-a33064228/",
    // dribbble: "https://dribbble.com/sarahjohnson",
    // behance: "https://behance.net/sarahjohnson",
    github: "https://github.com/Versha108"
  }
};