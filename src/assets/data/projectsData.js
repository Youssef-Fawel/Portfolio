const projectsData = [
  {
    id: 1,
    title: {
      en: "Albert Einstein Tribute",
      fr: "Hommage à Albert Einstein"
    },
    description: {
      en: "An interactive web tribute dedicated to Albert Einstein, showcasing his life, achievements, and lasting impact on science. The site features dynamic animations, including a unique intro with Einstein's famous E=mc² equation, and sections highlighting his qualities, achievements, and legacy.",
      fr: "Un hommage web interactif dédié à Albert Einstein, présentant sa vie, ses réalisations et son impact durable sur la science. Le site comprend des animations dynamiques, dont une introduction unique avec la célèbre équation E=mc² d'Einstein, et des sections mettant en valeur ses qualités, réalisations et son héritage."
    },
    image: require("../images/Einstein_Tribute.png"),
    category: "html",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    features: {
      en: [
        "Timeline of Einstein's life",
        "Gallery of historical photos",
        "List of scientific contributions",
        "Famous quotes",
        "Responsive layout",
        "Dynamic animations with GSAP"
      ],
      fr: [
        "Chronologie de la vie d'Einstein",
        "Galerie de photos historiques",
        "Liste des contributions scientifiques",
        "Citations célèbres",
        "Design réactif",
        "Animations dynamiques avec GSAP"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_encryptix-internship-webdevelopment-activity-7232793727537168386-RdTw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 2,
    title: {
      en: "Temperature Conversion Program",
      fr: "Programme de Conversion de Température"
    },
    description: {
      en: "A web-based tool designed to convert temperatures between Celsius, Fahrenheit, and Kelvin. Users can input a temperature and select the unit they want to convert from and to, with real-time conversion results.",
      fr: "Un outil web conçu pour convertir les températures entre Celsius, Fahrenheit et Kelvin. Les utilisateurs peuvent saisir une température et sélectionner l'unité à partir de laquelle et vers laquelle convertir, avec des résultats de conversion en temps réel."
    },
    image: require("../images/Temperature.png"),
    category: "javascript",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: {
      en: [
        "Conversion between Celsius, Fahrenheit, and Kelvin",
        "Real-time conversion as you type",
        "Responsive design",
        "Input validation",
        "Conversion history",
        "Copy results to clipboard"
      ],
      fr: [
        "Conversion entre Celsius, Fahrenheit et Kelvin",
        "Conversion en temps réel pendant la saisie",
        "Design réactif",
        "Validation des entrées",
        "Historique de conversion",
        "Copier les résultats dans le presse-papiers"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_encryptix-internship-webdevelopment-activity-7232793727537168386-RdTw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 3,
    title: {
      en: "Guessing Game",
      fr: "Jeu de Devinettes"
    },
    description: {
      en: "An interactive game where the user tries to guess a randomly generated number between 1 and 100. The game provides feedback on whether the guess is too high or too low and tracks the number of attempts until the user guesses correctly.",
      fr: "Un jeu interactif où l'utilisateur essaie de deviner un nombre généré aléatoirement entre 1 et 100. Le jeu fournit un retour indiquant si la supposition est trop haute ou trop basse et suit le nombre de tentatives jusqu'à ce que l'utilisateur devine correctement."
    },
    image: require("../images/Guessing.png"),
    category: "javascript",
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage API"],
    features: {
      en: [
        "Random number generation",
        "Difficulty levels",
        "Hint system",
        "Score tracking",
        "High score leaderboard",
        "Sound effects"
      ],
      fr: [
        "Génération de nombres aléatoires",
        "Niveaux de difficulté",
        "Système d'indices",
        "Suivi des scores",
        "Classement des meilleurs scores",
        "Effets sonores"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "null",
    completed: true
  },
  {
    id: 4,
    title: {
      en: "Contact Management System",
      fr: "Système de Gestion de Contacts"
    },
    description: {
      en: "A web-based system that allows users to add, edit, and delete contacts. The system features a form for inputting contact details such as name, email, and phone number. Contacts are stored in the browser's localStorage for persistent data management, and users can view and manage their contact list easily.",
      fr: "Un système web qui permet aux utilisateurs d'ajouter, modifier et supprimer des contacts. Le système comprend un formulaire pour saisir les détails du contact tels que le nom, l'email et le numéro de téléphone. Les contacts sont stockés dans le localStorage du navigateur pour une gestion persistante des données, et les utilisateurs peuvent facilement consulter et gérer leur liste de contacts."
    },
    image: require("../images/Contact.png"),
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    features: {
      en: [
        "Add, edit, and delete contacts",
        "Contact details storage",
        "Search and filter contacts",
        "Data persistence with localStorage",
        "Responsive design",
        "Form validation"
      ],
      fr: [
        "Ajouter, modifier et supprimer des contacts",
        "Stockage des détails de contact",
        "Rechercher et filtrer les contacts",
        "Persistance des données avec localStorage",
        "Design réactif",
        "Validation de formulaire"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_task03-task04-task05-activity-7224411917233082368-nlPc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 5,
    title: {
      en: "Sudoku Solver",
      fr: "Résolveur de Sudoku"
    },
    description: {
      en: "An application that solves Sudoku puzzles automatically. Users can input the numbers of a Sudoku puzzle into a grid, and the solver uses algorithms to fill in the remaining cells to complete the puzzle. This project demonstrates problem-solving techniques and algorithmic thinking.",
      fr: "Une application qui résout automatiquement les puzzles Sudoku. Les utilisateurs peuvent saisir les chiffres d'un puzzle Sudoku dans une grille, et le résolveur utilise des algorithmes pour remplir les cellules restantes et compléter le puzzle. Ce projet démontre des techniques de résolution de problèmes et la pensée algorithmique."
    },
    image: require("../images/Sudoku.png"),
    category: "java",
    technologies: ["Java"],
    features: {
      en: [
        "Interactive Sudoku board",
        "Automatic puzzle generation",
        "Difficulty levels",
        "Step-by-step solution visualization",
        "Hint system",
        "Backtracking algorithm implementation"
      ],
      fr: [
        "Grille Sudoku interactive",
        "Génération automatique de puzzles",
        "Niveaux de difficulté",
        "Visualisation de la solution étape par étape",
        "Système d'indices",
        "Implémentation de l'algorithme de retour arrière"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_task03-task04-task05-activity-7224411917233082368-nlPc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 6,
    title: {
      en: "Web Scraping Program",
      fr: "Programme de Web Scraping"
    },
    description: {
      en: "A Python tool that extracts data from e-commerce websites. It scrapes product details such as names, prices, and ratings, and saves the data in a CSV file for further analysis or processing. This project highlights the use of web scraping techniques for data collection.",
      fr: "Un outil Python qui extrait des données de sites e-commerce. Il récupère les détails des produits tels que les noms, prix et notes, et enregistre les données dans un fichier CSV pour une analyse ou un traitement ultérieur. Ce projet met en avant l'utilisation de techniques de web scraping pour la collecte de données."
    },
    image: require("../images/Scraping.png"),
    category: "python",
    technologies: ["Python", "BeautifulSoup", "Selenium", "Flask", "MongoDB", "React"],
    features: {
      en: [
        "Customizable web scraping parameters",
        "Scheduled data collection",
        "Data cleaning and processing",
        "Export to CSV, JSON, or Excel",
        "Visual data analysis",
        "API access to scraped data"
      ],
      fr: [
        "Paramètres de scraping personnalisables",
        "Collecte de données programmée",
        "Nettoyage et traitement des données",
        "Export vers CSV, JSON ou Excel",
        "Analyse visuelle des données",
        "Accès API aux données récupérées"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_task03-task04-task05-activity-7224411917233082368-nlPc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 7,
    title: {
      en: "Calculator Web Application",
      fr: "Application Web Calculatrice"
    },
    description: {
      en: "A responsive web calculator built with HTML, CSS, and JavaScript. It performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator features a user-friendly interface and handles various edge cases to ensure accurate calculations.",
      fr: "Une calculatrice web responsive construite avec HTML, CSS et JavaScript. Elle effectue des opérations arithmétiques de base telles que l'addition, la soustraction, la multiplication et la division. La calculatrice dispose d'une interface conviviale et gère divers cas limites pour garantir des calculs précis."
    },
    image: require("../images/calculator.png"),
    category: "javascript",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    features: {
      en: [
        "Basic arithmetic operations",
        "Scientific calculations",
        "Memory functions",
        "Keyboard support",
        "Calculation history",
        "Responsive design"
      ],
      fr: [
        "Opérations arithmétiques de base",
        "Calculs scientifiques",
        "Fonctions de mémoire",
        "Support clavier",
        "Historique des calculs",
        "Design réactif"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_encryptix-internship-webdevelopment-activity-7232793727537168386-RdTw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 8,
    title: {
      en: "Healthy Eating Website",
      fr: "Site Web Alimentation Saine"
    },
    description: {
      en: "A website dedicated to promoting healthy living through nutrition and exercise. It features recipes for balanced meals, sports routines for physical fitness, and tips for maintaining a healthy lifestyle. The site is built with HTML, CSS, JavaScript, PHP, and SQL for dynamic content management.",
      fr: "Un site web dédié à la promotion d'une vie saine à travers la nutrition et l'exercice. Il propose des recettes pour des repas équilibrés, des routines sportives pour la forme physique, et des conseils pour maintenir un mode de vie sain. Le site est construit avec HTML, CSS, JavaScript, PHP et SQL pour une gestion dynamique du contenu."
    },
    image: require("../images/healthy-eating-website.png"),
    category: "web",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL"],
    features: {
      en: [
        "Personalized meal recommendations",
        "Nutritional information tracking",
        "Recipe search and filtering",
        "Shopping list generation",
        "User profile with dietary preferences",
        "Exercise routines and tracking"
      ],
      fr: [
        "Recommandations de repas personnalisées",
        "Suivi des informations nutritionnelles",
        "Recherche et filtrage de recettes",
        "Génération de liste de courses",
        "Profil utilisateur avec préférences alimentaires",
        "Routines d'exercice et suivi"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "null",
    completed: true
  },
  {
    id: 9,
    title: {
      en: "EcoSmartHome Website",
      fr: "Site Web EcoSmartHome"
    },
    description: {
      en: "A website focused on sustainable and smart home solutions. It provides information about eco-friendly technologies, smart home devices, and energy-saving practices. The site is designed with HTML, CSS, and JavaScript to offer an engaging user experience and promote green living.",
      fr: "Un site web axé sur les solutions de maison intelligente et durable. Il fournit des informations sur les technologies écologiques, les appareils de maison intelligente et les pratiques d'économie d'énergie. Le site est conçu avec HTML, CSS et JavaScript pour offrir une expérience utilisateur engageante et promouvoir un mode de vie écologique."
    },
    image: require("../images/ecosmarthome.png"),
    category: "web",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: {
      en: [
        "Real-time device monitoring",
        "Energy usage analytics",
        "Device control interface",
        "Automated scheduling",
        "Mobile responsive design",
        "User permission management"
      ],
      fr: [
        "Surveillance des appareils en temps réel",
        "Analyse de la consommation d'énergie",
        "Interface de contrôle des appareils",
        "Planification automatisée",
        "Design responsive mobile",
        "Gestion des permissions utilisateur"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_task-encryptix-internship-activity-7228784812872855552-7Wt8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 10,
    title: {
      en: "E-commerce Website for Home Building",
      fr: "Site E-commerce pour Construction Immobilière"
    },
    description: {
      en: "An e-commerce platform specializing in products for home construction and renovation. It includes features such as product listings, shopping cart functionality, and user accounts. The website is developed using HTML5, CSS3, JavaScript, PHP, and SQL for a complete shopping experience.",
      fr: "Une plateforme e-commerce spécialisée dans les produits pour la construction et la rénovation domiciliaire. Elle comprend des fonctionnalités telles que des listes de produits, un panier d'achat et des comptes utilisateur. Le site est développé avec HTML5, CSS3, JavaScript, PHP et SQL pour une expérience d'achat complète."
    },
    image: require("../images/ecommerce-home-building.png"),
    category: "web",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL"],
    features: {
      en: [
        "User authentication and profile management",
        "Product search and filtering",
        "Shopping cart functionality",
        "Secure payment processing with Stripe",
        "Order history and tracking",
        "Admin dashboard for product management"
      ],
      fr: [
        "Authentification et gestion de profil utilisateur",
        "Recherche et filtrage de produits",
        "Fonctionnalité de panier d'achat",
        "Traitement de paiement sécurisé avec Stripe",
        "Historique et suivi des commandes",
        "Tableau de bord admin pour gestion produits"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "null",
    completed: true
  },
  {
    id: 11,
    title: {
      en: "Task Management System",
      fr: "Système de Gestion de Tâches"
    },
    description: {
      en: "A comprehensive tool for managing user tasks with features like adding, updating, and deleting tasks, session management, priority settings, and automated reminders for tasks due the next day. The system is built using HTML5, CSS3, JavaScript, PHP, MySQL, and Bootstrap for efficient task handling and a user-friendly interface.",
      fr: "Un outil complet pour gérer les tâches des utilisateurs avec des fonctionnalités comme l'ajout, la mise à jour et la suppression de tâches, la gestion de session, les paramètres de priorité et les rappels automatisés pour les tâches dues le lendemain. Le système est construit avec HTML5, CSS3, JavaScript, PHP, MySQL et Bootstrap pour une gestion efficace des tâches et une interface conviviale."
    },
    image: require("../images/Task.png"),
    category: "web",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    features: {
      en: [
        "Task creation and assignment",
        "Due date tracking and notifications",
        "Project organization and categorization",
        "Team collaboration features",
        "Progress tracking and reporting",
        "Mobile responsive design"
      ],
      fr: [
        "Création et attribution de tâches",
        "Suivi des dates d'échéance et notifications",
        "Organisation et catégorisation de projets",
        "Fonctionnalités de collaboration d'équipe",
        "Suivi des progrès et rapports",
        "Design responsive mobile"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "null",
    completed: true
  },
  {
    id: 12,
    title: {
      en: "E-learning Platform",
      fr: "Plateforme E-learning"
    },
    description: {
      en: "An advanced e-learning management platform designed for three user roles: Administrators, who manage courses and users; Trainers, who create courses and track learner progress; and Learners, who access educational content and complete assessments. The platform includes a personalized dashboard for a streamlined and engaging experience.",
      fr: "Une plateforme avancée de gestion e-learning conçue pour trois rôles utilisateur : les Administrateurs, qui gèrent les cours et les utilisateurs ; les Formateurs, qui créent des cours et suivent la progression des apprenants ; et les Apprenants, qui accèdent au contenu éducatif et complètent les évaluations. La plateforme comprend un tableau de bord personnalisé pour une expérience rationalisée et engageante."
    },
    image: require("../images/main.png"),
    category: "web",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Postman"],
    features: {
      en: [
        "Multi-role user management",
        "Course creation and management",
        "Progress tracking and assessments",
        "Personalized learning dashboards",
        "Content delivery system",
        "User authentication and authorization"
      ],
      fr: [
        "Gestion multi-rôles des utilisateurs",
        "Création et gestion de cours",
        "Suivi des progrès et évaluations",
        "Tableaux de bord d'apprentissage personnalisés",
        "Système de diffusion de contenu",
        "Authentification et autorisation utilisateur"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_reactjs-nodejs-mongodb-activity-7278024254611181568-0ctr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 13,
    title: {
      en: "Product Management System",
      fr: "Système de Gestion de Produits"
    },
    description: {
      en: "A comprehensive product management system with a modern interface and integrated dark mode. This application offers advanced CRUD functionalities for efficient product management, including real-time filtering, dynamic sorting, and smart pagination. The system enables instant product editing, optimized search, and perfectly adapts to all devices thanks to its responsive design.",
      fr: "Un système complet de gestion de produits avec une interface moderne et un mode sombre intégré. Cette application offre des fonctionnalités CRUD avancées pour une gestion efficace des produits, incluant le filtrage en temps réel, le tri dynamique et la pagination intelligente. Le système permet l'édition instantanée de produits, une recherche optimisée et s'adapte parfaitement à tous les appareils grâce à son design responsive."
    },
    image: require("../images/product-management.png"),
    category: "web",
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "REST API", "JSON"],
    features: {
      en: [
        "Product lifecycle management",
        "Inventory tracking and alerts",
        "Sales analytics dashboard",
        "User role management",
        "Dark mode interface",
        "Export reports to PDF/Excel"
      ],
      fr: [
        "Gestion du cycle de vie des produits",
        "Suivi des stocks et alertes",
        "Tableau de bord d'analyse des ventes",
        "Gestion des rôles utilisateur",
        "Interface en mode sombre",
        "Export de rapports en PDF/Excel"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "null",
    completed: true
  },
  {
    id: 14,
    title: {
      en: "Movie Management System",
      fr: "Système de Gestion de Films"
    },
    description: {
      en: "A feature-rich movie management platform that empowers users to curate their personal movie collections. Users can add new movies, mark favorites, assign ratings, and efficiently manage their library through complete CRUD operations. The platform features an advanced category-based search system, making it simple to discover and organize films. With an intuitive interface, users can seamlessly edit movie details, remove entries, and access comprehensive movie information.",
      fr: "Une plateforme riche en fonctionnalités de gestion de films qui permet aux utilisateurs de gérer leurs collections personnelles de films. Les utilisateurs peuvent ajouter de nouveaux films, marquer leurs favoris, attribuer des notes et gérer efficacement leur bibliothèque via des opérations CRUD complètes. La plateforme dispose d'un système de recherche avancé basé sur les catégories, facilitant la découverte et l'organisation des films. Avec une interface intuitive, les utilisateurs peuvent modifier facilement les détails des films, supprimer des entrées et accéder à des informations complètes sur les films."
    },
    image: require("../images/movie.png"),
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "REST API", "JWT"],
    features: {
      en: [
        "Personalized movie recommendations",
        "Content-based and collaborative filtering",
        "User preference learning",
        "Movie search and filtering",
        "User ratings and reviews",
        "Watchlist management"
      ],
      fr: [
        "Recommandations de films personnalisées",
        "Filtrage basé sur le contenu et collaboratif",
        "Apprentissage des préférences utilisateur",
        "Recherche et filtrage de films",
        "Notes et avis des utilisateurs",
        "Gestion de la liste de visionnage"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_mernstack-reactjs-frontenddevelopment-activity-7332344694636462080-Cg-x?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 15,
    title: {
      en: "Online Art Gallery",
      fr: "Galerie d'Art en Ligne"
    },
    description: {
      en: "My first Spring Boot and Thymeleaf project as part of our Full Stack course. This project is an online art gallery where Admins can manage artworks, artists, and users (add, update, deactivate). Users can browse the gallery, add artworks to the cart, update their profile, and manage their account. A great opportunity to deepen my experience in Full Stack development by applying MVC architecture, data persistence with JPA, and frontend-backend integration using Thymeleaf.",
      fr: "Mon premier projet Spring Boot et Thymeleaf dans le cadre de notre cours Full Stack. Ce projet est une galerie d'art en ligne où les Admins peuvent gérer les œuvres d'art, les artistes et les utilisateurs (ajouter, mettre à jour, désactiver). Les utilisateurs peuvent parcourir la galerie, ajouter des œuvres au panier, mettre à jour leur profil et gérer leur compte. Une excellente opportunité d'approfondir mon expérience en développement Full Stack en appliquant l'architecture MVC, la persistance des données avec JPA et l'intégration frontend-backend en utilisant Thymeleaf."
    },
    image: require("../images/art-gallery.png"),
    category: "java",
    technologies: ["Java", "Spring Boot", "Thymeleaf", "JPA", "MySQL", "Bootstrap"],
    features: {
      en: [
        "User and admin role management",
        "Artwork catalog and browsing",
        "Shopping cart functionality",
        "Artist profiles and portfolios",
        "MVC architecture implementation",
        "Responsive design with Thymeleaf templates"
      ],
      fr: [
        "Gestion des rôles utilisateur et administrateur",
        "Catalogue et navigation des œuvres d'art",
        "Fonctionnalité de panier d'achat",
        "Profils et portfolios d'artistes",
        "Implémentation de l'architecture MVC",
        "Design responsive avec templates Thymeleaf"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_springboot-thymeleaf-fullstackdevelopment-activity-7330185471639138305-aZ5j?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
        id: 16,
    title: {
      en: "Weather Visualization Project",
      fr: "Projet de Visualisation Météo"
    },
    description: {
      en: "As part of my data analysis course, I completed a comprehensive project analyzing and visualizing daily weather data from the weatherHistory.csv file. The objective: to explore climate trends, detect anomalies, and visualize the evolution of variables such as temperature, humidity, and visibility.",
      fr: "Dans le cadre de mon cours d'analyse de données, j'ai réalisé un projet complet d'analyse et de visualisation des données météorologiques quotidiennes du fichier weatherHistory.csv. L'objectif : explorer les tendances climatiques, détecter les anomalies et visualiser l'évolution de variables telles que la température, l'humidité et la visibilité."
    },
    image: require("../images/weather-visualization.png"),
    category: "data",
    technologies: ["Python", "Pandas", "Seaborn", "Plotly", "Jupyter Notebook", "Data Analysis"],
    features: {
      en: [
        "Box plots to identify extreme values",
        "Scatter plots to explore correlations",
        "Histograms to analyze distribution",
        "Heatmaps in interactive dashboard",
        "Temporal analysis of weather data",
        "Interactive visualizations with Plotly"
      ],
      fr: [
        "Boxplots pour identifier les valeurs extrêmes",
        "Nuages de points pour explorer les corrélations",
        "Histogrammes pour analyser la distribution",
        "Heatmaps dans un dashboard interactif",
        "Analyse temporelle des données météorologiques",
        "Visualisations interactives avec Plotly"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_dataanalysis-datascience-python-activity-7331280213613477888-u-pb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 17,
    title: {
      en: "Digital Meeting Minutes Management System",
      fr: "Système de Gestion de Comptes Rendus Numériques"
    },
    description: {
      en: "A comprehensive MERN Stack web application for digitalizing corporate meeting minutes with electronic signatures and secure archiving. Built as a Final Year Project, this platform offers a modern and intuitive interface for teams to create, edit, and store meeting records digitally with enhanced accuracy and convenience.",
      fr: "Une application web MERN Stack complète pour la numérisation des comptes rendus de réunions d'entreprise avec signatures électroniques et archivage sécurisé. Construit comme Projet de Fin d'Études, cette plateforme offre une interface moderne et intuitive pour les équipes afin de créer, éditer et stocker les procès-verbaux de réunions numériquement avec une précision et une commodité accrues."
    },
    image: require("../images/meeting-minutes.png"),
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "JWT", "Express.js", "SMTP"],
    features: {
      en: [
        "SMTP Integration for real-time automated email notifications",
        "AI-Powered error detection and correction for meeting summaries",
        "Role-based access control for admins and users",
        "Advanced search and filtering for meeting records",
        "Electronic signatures and secure archiving",
        "Clean and intuitive UI/UX design focused on productivity"
      ],
      fr: [
        "Intégration SMTP pour notifications email automatisées en temps réel",
        "Détection et correction d'erreurs alimentées par l'IA pour les résumés de réunions",
        "Contrôle d'accès basé sur les rôles pour admins et utilisateurs",
        "Recherche et filtrage avancés pour les comptes rendus de réunions",
        "Signatures électroniques et archivage sécurisé",
        "Design UI/UX épuré et intuitif axé sur la productivité"
      ]
    },
    demoLink: "null",
    codeLink: "null",
    linkedinPostUrl: "https://www.linkedin.com/posts/youssef-fawel_finalyearproject-mernstack-webapp-activity-7337463412701958144-XanV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA",
    completed: true
  },
  {
    id: 18,
    title: {
      en: "GuardPet – Pet Services Mobile App Design",
      fr: "GuardPet – Design d'Application Mobile pour Services Animaliers"
    },
    description: {
      en: "A comprehensive mobile application design for pet services featuring optimized user experience and modern interface. This design project focuses on creating an intuitive and engaging platform for pet owners to access various services for their beloved companions. The design emphasizes user-centered approach with clean aesthetics and seamless navigation.",
      fr: "Un design complet d'application mobile pour services animaliers avec une expérience utilisateur optimisée et une interface moderne. Ce projet de design se concentre sur la création d'une plateforme intuitive et engageante pour les propriétaires d'animaux afin d'accéder à divers services pour leurs compagnons bien-aimés. Le design met l'accent sur une approche centrée utilisateur avec une esthétique épurée et une navigation fluide."
    },
    image: require("../images/guardpet-design.png"),
    category: "design",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research", "UI/UX Design"],
    features: {
      en: [
        "Modern and intuitive mobile interface design",
        "User research and persona development",
        "Interactive prototyping and wireframing",
        "Optimized user experience flow",
        "Pet service booking interface",
        "Responsive design principles for mobile devices"
      ],
      fr: [
        "Design d'interface mobile moderne et intuitif",
        "Recherche utilisateur et développement de personas",
        "Prototypage interactif et wireframing",
        "Flux d'expérience utilisateur optimisé",
        "Interface de réservation de services animaliers",
        "Principes de design responsive pour appareils mobiles"
      ]
    },
    demoLink: "null",
    codeLink: "",
    linkedinPostUrl: "null",
    completed: true
  },
{
  id: 19,
  title: {
    en: "Weather Forecast App",
    fr: "Application de Prévisions Météo"
  },
  description: {
    en: "A comprehensive, modern weather application built with React that delivers real-time weather data and detailed forecasts for locations worldwide. Features an elegant, responsive interface with advanced search capabilities, autocomplete functionality, and comprehensive weather details including sunrise/sunset times, humidity, wind patterns, and atmospheric pressure.",
    fr: "Une application météo moderne et complète construite avec React qui fournit des données météorologiques en temps réel et des prévisions détaillées pour des emplacements du monde entier. Dispose d'une interface élégante et responsive avec des capacités de recherche avancées, une fonctionnalité d'autocomplétion et des détails météorologiques complets incluant les heures de lever/coucher du soleil, l'humidité, les configurations de vent et la pression atmosphérique."
  },
  image: require("../images/weather.png"),
  category: "web",
  technologies: ["React.js", "OpenWeatherMap API", "Framer Motion", "Axios", "CSS3", "LocalStorage API", "Geolocation API", "React Icons"],
  features: {
    en: [
      "Real-time weather data with comprehensive current conditions",
      "5-Day detailed forecast with temperature highs/lows and precipitation probability",
      "Smart autocomplete search with city suggestions as you type",
      "Keyboard navigation support for accessibility (Arrow keys, Enter, Escape)",
      "Geolocation API integration for automatic local weather detection",
      "Dark/Light theme toggle with smooth animations and system preference detection",
      "Temperature unit conversion between Celsius and Fahrenheit",
      "Search history with quick access to recently searched locations",
      "Detailed weather metrics (humidity, wind speed/direction, pressure, visibility)",
      "Sunrise and sunset times with precise formatting",
      "Weather-based dynamic backgrounds that change based on conditions",
      "Responsive design optimized for desktop, tablet, and mobile devices",
      "Smooth animations and transitions using Framer Motion",
      "Error handling with user-friendly messages",
      "Loading states with elegant spinners and progress indicators",
      "Local storage persistence for user preferences and search history"
    ],
    fr: [
      "Données météo en temps réel avec conditions actuelles complètes",
      "Prévisions détaillées sur 5 jours avec températures max/min et probabilité de précipitations",
      "Recherche intelligente avec suggestions de villes pendant la saisie",
      "Support de navigation au clavier pour l'accessibilité (Flèches, Entrée, Échap)",
      "Intégration API de géolocalisation pour détection météo locale automatique",
      "Basculement thème sombre/clair avec animations fluides et détection préférence système",
      "Conversion d'unités de température entre Celsius et Fahrenheit",
      "Historique de recherche avec accès rapide aux emplacements récents",
      "Métriques météo détaillées (humidité, vitesse/direction vent, pression, visibilité)",
      "Heures de lever et coucher du soleil avec formatage précis",
      "Arrière-plans dynamiques basés sur les conditions météo",
      "Design responsive optimisé pour ordinateur, tablette et mobile",
      "Animations et transitions fluides avec Framer Motion",
      "Gestion d'erreurs avec messages conviviaux",
      "États de chargement avec spinners élégants et indicateurs de progression",
      "Persistance du stockage local pour préférences utilisateur et historique"
    ]
  },
  demoLink: "null",
  codeLink: "null",
  linkedinPostUrl: "null",
  completed: true
}
];

export default projectsData;

