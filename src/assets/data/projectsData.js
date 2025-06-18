const projectsData = [
  {
    id: 1,
    title: "Albert Einstein Tribute",
    description: "An interactive web tribute dedicated to Albert Einstein, showcasing his life, achievements, and lasting impact on science. The site features dynamic animations, including a unique intro with Einstein's famous E=mc² equation, and sections highlighting his qualities, achievements, and legacy.",
    image: require("../images/Einstein_Tribute.png"),
    category: "html",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    features: [
      "Timeline of Einstein's life",
      "Gallery of historical photos",
      "List of scientific contributions",
      "Famous quotes",
      "Responsive layout",
      "Dynamic animations with GSAP"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_encryptix-internship-webdevelopment-activity-7232793727537168386-RdTw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 2,
    title: "Temperature Conversion Program",
    description: "A web-based tool designed to convert temperatures between Celsius, Fahrenheit, and Kelvin. Users can input a temperature and select the unit they want to convert from and to, with real-time conversion results.",
    image: require("../images/Temperature.png"),
    category: "javascript",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Conversion between Celsius, Fahrenheit, and Kelvin",
      "Real-time conversion as you type",
      "Responsive design",
      "Input validation",
      "Conversion history",
      "Copy results to clipboard"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_encryptix-internship-webdevelopment-activity-7232793727537168386-RdTw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 3,
    title: "Guessing Game",
    description: "An interactive game where the user tries to guess a randomly generated number between 1 and 100. The game provides feedback on whether the guess is too high or too low and tracks the number of attempts until the user guesses correctly.",
    image: require("../images/Guessing.png"),
    category: "javascript",
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage API"],
    features: [
      "Random number generation",
      "Difficulty levels",
      "Hint system",
      "Score tracking",
      "High score leaderboard",
      "Sound effects"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "null",
    completed: true
  },
  {
    id: 4,
    title: "Contact Management System",
    description: "A web-based system that allows users to add, edit, and delete contacts. The system features a form for inputting contact details such as name, email, and phone number. Contacts are stored in the browser's localStorage for persistent data management, and users can view and manage their contact list easily.",
    image: require("../images/Contact.png"),
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    features: [
      "Add, edit, and delete contacts",
      "Contact details storage",
      "Search and filter contacts",
      "Data persistence with localStorage",
      "Responsive design",
      "Form validation"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_task03-task04-task05-activity-7224411917233082368-nlPc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 5,
    title: "Sudoku Solver",
    description: "An application that solves Sudoku puzzles automatically. Users can input the numbers of a Sudoku puzzle into a grid, and the solver uses algorithms to fill in the remaining cells to complete the puzzle. This project demonstrates problem-solving techniques and algorithmic thinking.",
    image: require("../images/Sudoku.png"),
    category: "java",
    technologies: ["Java"],
    features: [
      "Interactive Sudoku board",
      "Automatic puzzle generation",
      "Difficulty levels",
      "Step-by-step solution visualization",
      "Hint system",
      "Backtracking algorithm implementation"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_task03-task04-task05-activity-7224411917233082368-nlPc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 6,
    title: "Web Scraping Program",
    description: "A Python tool that extracts data from e-commerce websites. It scrapes product details such as names, prices, and ratings, and saves the data in a CSV file for further analysis or processing. This project highlights the use of web scraping techniques for data collection.",
    image: require("../images/Scraping.png"),
    category: "python",
    technologies: ["Python", "BeautifulSoup", "Selenium", "Flask", "MongoDB", "React"],
    features: [
      "Customizable web scraping parameters",
      "Scheduled data collection",
      "Data cleaning and processing",
      "Export to CSV, JSON, or Excel",
      "Visual data analysis",
      "API access to scraped data"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_task03-task04-task05-activity-7224411917233082368-nlPc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 7,
    title: "Calculator Web Application",
    description: "A responsive web calculator built with HTML, CSS, and JavaScript. It performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator features a user-friendly interface and handles various edge cases to ensure accurate calculations.",
    image: require("../images/calculator.png"),
    category: "javascript",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    features: [
      "Basic arithmetic operations",
      "Scientific calculations",
      "Memory functions",
      "Keyboard support",
      "Calculation history",
      "Responsive design"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_encryptix-internship-webdevelopment-activity-7232793727537168386-RdTw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 8,
    title: "Healthy Eating Website",
    description: "A website dedicated to promoting healthy living through nutrition and exercise. It features recipes for balanced meals, sports routines for physical fitness, and tips for maintaining a healthy lifestyle. The site is built with HTML, CSS, JavaScript, PHP, and SQL for dynamic content management.",
    image: require("../images/healthy-eating-website.png"),
    category: "web",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL"],
    features: [
      "Personalized meal recommendations",
      "Nutritional information tracking",
      "Recipe search and filtering",
      "Shopping list generation",
      "User profile with dietary preferences",
      "Exercise routines and tracking"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "null",
    completed: true
  },
  {
    id: 9,
    title: "EcoSmartHome Website",
    description: "A website focused on sustainable and smart home solutions. It provides information about eco-friendly technologies, smart home devices, and energy-saving practices. The site is designed with HTML, CSS, and JavaScript to offer an engaging user experience and promote green living.",
    image: require("../images/ecosmarthome.png"),
    category: "web",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Real-time device monitoring",
      "Energy usage analytics",
      "Device control interface",
      "Automated scheduling",
      "Mobile responsive design",
      "User permission management"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_task-encryptix-internship-activity-7228784812872855552-7Wt8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 10,
    title: "E-commerce Website for Home Building",
    description: "An e-commerce platform specializing in products for home construction and renovation. It includes features such as product listings, shopping cart functionality, and user accounts. The website is developed using HTML5, CSS3, JavaScript, PHP, and SQL for a complete shopping experience.",
    image: require("../images/ecommerce-home-building.png"),
    category: "web",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL"],
    features: [
      "User authentication and profile management",
      "Product search and filtering",
      "Shopping cart functionality",
      "Secure payment processing with Stripe",
      "Order history and tracking",
      "Admin dashboard for product management"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "null",
    completed: true
  },
  {
    id: 11,
    title: "Task Management System",
    description: "A comprehensive tool for managing user tasks with features like adding, updating, and deleting tasks, session management, priority settings, and automated reminders for tasks due the next day. The system is built using HTML5, CSS3, JavaScript, PHP, MySQL, and Bootstrap for efficient task handling and a user-friendly interface.",
    image: require("../images/Task.png"),
    category: "web",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Task creation and assignment",
      "Due date tracking and notifications",
      "Project organization and categorization",
      "Team collaboration features",
      "Progress tracking and reporting",
      "Mobile responsive design"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "null",
    completed: true
  },
  {
    id: 12,
    title: "E-learning Platform",
    description: "An advanced e-learning management platform designed for three user roles: Administrators, who manage courses and users; Trainers, who create courses and track learner progress; and Learners, who access educational content and complete assessments. The platform includes a personalized dashboard for a streamlined and engaging experience.",
    image: require("../images/main.png"),
    category: "web",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Postman"],
    features: [
      "Multi-role user management",
      "Course creation and management",
      "Progress tracking and assessments",
      "Personalized learning dashboards",
      "Content delivery system",
      "User authentication and authorization"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_reactjs-nodejs-mongodb-activity-7278024254611181568-0ctr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 13,
    title: "Product Management System",
    description: "A comprehensive product management system with a modern interface and integrated dark mode. This application offers advanced CRUD functionalities for efficient product management, including real-time filtering, dynamic sorting, and smart pagination. The system enables instant product editing, optimized search, and perfectly adapts to all devices thanks to its responsive design.",
    image: require("../images/product-management.png"),
    category: "web",
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "REST API", "JSON"],
    features: [
      "Product lifecycle management",
      "Inventory tracking and alerts",
      "Sales analytics dashboard",
      "User role management",
      "Dark mode interface",
      "Export reports to PDF/Excel"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "null",
    completed: true
  },
  {
    id: 14,
    title: "Movie Management System",
    description: "A feature-rich movie management platform that empowers users to curate their personal movie collections. Users can add new movies, mark favorites, assign ratings, and efficiently manage their library through complete CRUD operations. The platform features an advanced category-based search system, making it simple to discover and organize films. With an intuitive interface, users can seamlessly edit movie details, remove entries, and access comprehensive movie information.",
    image: require("../images/movie.png"),
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "REST API", "JWT"],
    features: [
      "Personalized movie recommendations",
      "Content-based and collaborative filtering",
      "User preference learning",
      "Movie search and filtering",
      "User ratings and reviews",
      "Watchlist management"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_mernstack-reactjs-frontenddevelopment-activity-7332344694636462080-Cg-x?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 15,
    title: "Online Art Gallery",
    description: "My first Spring Boot and Thymeleaf project as part of our Full Stack course. This project is an online art gallery where Admins can manage artworks, artists, and users (add, update, deactivate). Users can browse the gallery, add artworks to the cart, update their profile, and manage their account. A great opportunity to deepen my experience in Full Stack development by applying MVC architecture, data persistence with JPA, and frontend-backend integration using Thymeleaf.",
    image: require("../images/art-gallery.png"),
    category: "java",
    technologies: ["Java", "Spring Boot", "Thymeleaf", "JPA", "MySQL", "Bootstrap"],
    features: [
      "User and admin role management",
      "Artwork catalog and browsing",
      "Shopping cart functionality",
      "Artist profiles and portfolios",
      "MVC architecture implementation",
      "Responsive design with Thymeleaf templates"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_springboot-thymeleaf-fullstackdevelopment-activity-7330185471639138305-aZ5j?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
        id: 16,
    title: "Weather Visualization Project",
    description: "As part of my data analysis course, I completed a comprehensive project analyzing and visualizing daily weather data from the weatherHistory.csv file. The objective: to explore climate trends, detect anomalies, and visualize the evolution of variables such as temperature, humidity, and visibility.",
    image: require("../images/weather-visualization.png"),
    category: "data",
    technologies: ["Python", "Pandas", "Seaborn", "Plotly", "Jupyter Notebook", "Data Analysis"],
    features: [
      "Boxplots pour identifier les valeurs extrêmes",
      "Nuages de points pour explorer les corrélations",
      "Histogrammes pour analyser la distribution",
      "Heatmaps dans un dashboard interactif",
      "Analyse temporelle des données météorologiques",
      "Visualisations interactives avec Plotly"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_dataanalysis-datascience-python-activity-7331280213613477888-u-pb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 17,
    title: "Digital Meeting Minutes Management System",
    description: "A comprehensive MERN Stack web application for digitalizing corporate meeting minutes with electronic signatures and secure archiving. Built as a Final Year Project, this platform offers a modern and intuitive interface for teams to create, edit, and store meeting records digitally with enhanced accuracy and convenience.",
    image: require("../images/meeting-minutes.png"),
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "JWT", "Express.js", "SMTP"],
    features: [
      "SMTP Integration for real-time automated email notifications",
      "AI-Powered error detection and correction for meeting summaries",
      "Role-based access control for admins and users",
      "Advanced search and filtering for meeting records",
      "Electronic signatures and secure archiving",
      "Clean and intuitive UI/UX design focused on productivity"
    ],
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_finalyearproject-mernstack-webapp-activity-7337463412701958144-XanV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 18,
    title: "GuardPet – Pet Services Mobile App Design",
    description: "A comprehensive mobile application design for pet services featuring optimized user experience and modern interface. This design project focuses on creating an intuitive and engaging platform for pet owners to access various services for their beloved companions. The design emphasizes user-centered approach with clean aesthetics and seamless navigation.",
    image: require("../images/guardpet-design.png"),
    category: "design",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research", "UI/UX Design"],
    features: [
      "Modern and intuitive mobile interface design",
      "User research and persona development",
      "Interactive prototyping and wireframing",
      "Optimized user experience flow",
      "Pet service booking interface",
      "Responsive design principles for mobile devices"
    ],
    demoLink: "null",
    codeLink: "",
    linkedinPostUrl: "null",
    completed: true
  },
  {
  id: 19,
  title: "Weather Forecast App",
  description: "A modern, responsive weather application that provides real-time weather data and forecasts for locations worldwide. The app features a clean, intuitive interface with dark/light mode support, unit conversion, and location-based weather information.",
  image: require("../images/weather.png"), 
  category: "react",
  technologies: ["React.js", "OpenWeatherMap API", "Axios", "CSS3", "LocalStorage API", "Geolocation API"],
  features: [
    "Real-time weather data with current conditions",
    "5-Day forecast with temperature highs and lows",
    "Geolocation for automatic local weather",
    "Dark/Light theme with smooth transitions",
    "Unit conversion between metric and imperial",
    "Search history with quick access to recent locations"
  ],
  demoLink: "null", 
  codeLink: "null", 
  linkedinPostUrl: "null", 
  completed: true
}

];

export default projectsData;

