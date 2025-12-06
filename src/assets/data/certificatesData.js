const certificatesData = [
  {
    id: 1,
    title: "AWS Academy Graduate - AWS Academy Cloud Architecting",
    organization: "Amazon Web Services (AWS)",
    dateIssued: "February 2025",
    expirationDate: null,
    credentialId: "1740d725-73bc-4729-9605-4403d17f95aa",
    description: "This certification validates expertise in AWS cloud architecture principles and best practices. It covers designing and deploying scalable, highly available, and fault-tolerant systems on AWS. The program includes hands-on labs and projects to develop practical skills in cloud architecture design.",
    category: "cloud",
    image: require("../images/AWS Academy Cloud Architecting.png"),
    verificationLink: "https://www.credly.com/badges/1740d725-73bc-4729-9605-4403d17f95aa/linked_in_profile",
    skills: [
      "AWS", "Cloud Architecture", "EC2", "S3", "VPC", "IAM", "RDS", "High Availability", "Scalability"
    ]
  },
  {
    id: 20,
    title: "AWS Academy Graduate - Microservices and CI/CD Pipeline Builder",
    organization: "Amazon Web Services (AWS)",
    dateIssued: "November 2025",
    expirationDate: null,
    credentialId: "2238908f-fab5-4d78-943f-9ff61ea82ad9",
    description: "This certification validates expertise in microservices architecture and CI/CD pipeline implementation. It covers breaking down monolithic applications into containerized microservices and implementing continuous integration and deployment strategies using AWS services. The program includes hands-on labs in AWS Cloud9, ECS, and CodePipeline.",
    category: "cloud",
    image: require("../images/CI-CD.pdf"),
    verificationLink: "https://www.credly.com/badges/2238908f-fab5-4d78-943f-9ff61ea82ad9/print",
    skills: [
      "Microservices Architecture", "CI/CD Pipeline", "Docker Containers", "AWS ECS", "Application Load Balancer", "Blue/Green Deployment", "AWS CodePipeline", "AWS Cloud9"
    ]
  },
  {
    id: 21,
    title: "AWS Cloud Quest: Cloud Practitioner",
    organization: "Amazon Web Services (AWS)",
    dateIssued: "November 2025",
    expirationDate: null,
    credentialId: "CQ-PRACTITIONER-2024",
    description: "This certification demonstrates foundational AWS Cloud knowledge earned through completion of all solution building assignments in the Cloud Quest game-based learning experience. It covers hands-on experience with compute, networking, database, and security services including EC2, VPC, S3, RDS, and IAM.",
    category: "cloud",
    image: require("../images/Quest_Cloud.png"),
    verificationLink: "https://www.credly.com/badges/2a322ece-26da-4f35-a0ce-23b5d0153063/public_url",
    skills: [
      "AWS Cloud Fundamentals", "Amazon EC2", "Amazon VPC", "Amazon S3", "Amazon RDS", "Security Groups", "IAM", "Cloud Architecture"
    ]
  },
  {
    id: 22,
    title: "AWS Cloud Quest: Generative AI",
    organization: "Amazon Web Services (AWS)",
    dateIssued: "November 2025",
    expirationDate: null,
    credentialId: "CQ-GENAI-2024",
    description: "This certification validates hands-on experience with generative AI solutions using AWS services. It demonstrates practical skills in building AI applications with Amazon Bedrock, Amazon Q, and Amazon SageMaker. Covers foundation models, prompt engineering, RAG implementation, and deploying generative AI solutions.",
    category: "ai",
    image: require("../images/Generative_AI.png"),
    verificationLink: "https://www.credly.com/badges/44fa4859-a7c0-45da-912f-3aef7e0093a2/public_url",
    skills: [
      "Generative AI", "Amazon Bedrock", "Amazon Q Developer", "Foundation Models", "Prompt Engineering", "RAG (Retrieval Augmented Generation)", "Amazon SageMaker", "Large Language Models"
    ]
  },
  {
    id: 2,
    title: "Microsoft Certified: Azure Fundamentals",
    organization: "Microsoft",
    dateIssued: "June 2025",
    expirationDate: null,
    credentialId: "36d21eb7-3060-44ef-b9c1-52d02057abd3",
    description: "This certification validates foundational understanding of cloud concepts, core Azure services, pricing, SLA, and the basics of Azure governance and compliance. It demonstrates knowledge of cloud computing principles and Microsoft Azure's core services, workloads, security, privacy, pricing, and support options.",
    category: "cloud",
    image: require("../images/microsoft-certified-azure-fundamentals.png"),
    verificationLink: "https://www.credly.com/badges/36d21eb7-3060-44ef-b9c1-52d02057abd3/linked_in_profile",
    skills: [
      "Microsoft Azure", "Cloud Computing", "Azure Services", "Cloud Concepts", "Azure Governance", "Azure Compliance", "Cloud Pricing", "SLA Management"
    ]
  },
  {
    id: 3,
    title: "Scrum Master Certified (SMC)",
    organization: "Udemy",
    dateIssued: "June 2025",
    expirationDate: null,
    credentialId: "1003948",
    description: "This certification validates expertise in Scrum methodology and agile project management. It covers Scrum framework, sprint planning, backlog management, and agile leadership principles. The certification demonstrates proficiency in facilitating Scrum events, managing sprint backlogs, and leading agile teams effectively.",
    category: "agile",
    image: require("../images/Scrum Master Certified.jpg"),
    verificationLink: null,
    skills: [
      "Scrum", "Sprint Planning", "Sprint Backlog", "Agile Methodologies", "Agile Project Management", "Agile Leadership"
    ]
  },
  {
    id: 4,
    title: "Hedera Certified Developer",
    organization: "The Hashgraph Association",
    dateIssued: "February 2025",
    expirationDate: null,
    credentialId: "24b46454-bf4d-434d-9e58-919b913fd335",
    description: "This certification demonstrates proficiency in developing applications on the Hedera Hashgraph platform. It covers distributed ledger technology, smart contracts, tokenization, and building decentralized applications using Hedera services. The certification validates skills in implementing secure and scalable blockchain solutions.",
    category: "blockchain",
    image: require("../images/Hedera Certified Developer.png"),
    verificationLink: "https://certs.hashgraphdev.com/24b46454-bf4d-434d-9e58-919b913fd335.pdf",
    skills: [
      "Hedera Hashgraph", "Distributed Ledger Technology", "Smart Contracts", "Tokenization", "DApps", "Consensus Algorithms", "Blockchain"
    ]
  },
  {
    id: 5,
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    organization: "Amazon Web Services (AWS)",
    dateIssued: "December 2024",
    expirationDate: null,
    credentialId: "b14f4199-cd36-4df6-8680-75747ebd17b4",
    description: "This certification provides a comprehensive introduction to cloud computing concepts and AWS services. It covers fundamental AWS services related to compute, storage, databases, and networking. The program includes hands-on labs to develop practical skills in using the AWS Management Console and understanding cloud service models.",
    category: "cloud",
    image: require("../images/AWS Academy Cloud Foundations.png"),
    verificationLink: "https://www.credly.com/badges/b14f4199-cd36-4df6-8680-75747ebd17b4/linked_in_profile",
    skills: [
      "AWS", "Cloud Computing", "EC2", "S3", "RDS", "IAM", "Cloud Security", "AWS Management Console", "Cloud Service Models"
    ]
  },
  {
    id: 6,
    title: "JavaScript (Basic) Certificate",
    organization: "HackerRank",
    dateIssued: "November 2024",
    expirationDate: null,
    credentialId: "5677E1ABB9E9",
    description: "This certification validates fundamental JavaScript programming skills including variables, data types, functions, loops, conditionals, and basic DOM manipulation. It demonstrates the ability to solve basic programming challenges using JavaScript.",
    category: "programming",
    image: require("../images/JavaScript (Basic) Certificate.png"),
    verificationLink: "https://www.hackerrank.com/certificates/iframe/5677e1abb9e9",
    skills: [
      "JavaScript", "Node.js", "Web Development", "Programming Fundamentals"
    ]
  },
  {
    id: 7,
    title: "Python (Basic) Certificate",
    organization: "HackerRank",
    dateIssued: "November 2024",
    expirationDate: null,
    credentialId: "4A5E1EA54B2F",
    description: "This certification validates fundamental Python programming skills including syntax, data types, control structures, functions, and basic problem-solving. It demonstrates the ability to write efficient Python code and debug simple programs.",
    category: "programming",
    image: require("../images/Python (Basic) Certificate.png"),
    verificationLink: "https://www.hackerrank.com/certificates/iframe/4a5e1ea54b2f",
    skills: [
      "Python (Programming Language)", "Debugging", "Data Structures", "Algorithms"
    ]
  },
  {
    id: 8,
    title: "JavaScript (Intermediate) Certificate",
    organization: "HackerRank",
    dateIssued: "August 2024",
    expirationDate: null,
    credentialId: "B33357BC0409",
    description: "This certification validates intermediate JavaScript programming skills including closures, prototypes, asynchronous programming with Promises, error handling, and ES6+ features. It demonstrates the ability to solve complex programming challenges and implement efficient solutions.",
    category: "programming",
    image: require("../images/JavaScript (Intermediate) Certificate.png"),
    verificationLink: "https://www.hackerrank.com/certificates/iframe/b33357bc0409",
    skills: [
      "JavaScript", "ES6+", "Asynchronous Programming", "Promises", "Object-Oriented Programming"
    ]
  },
  {
    id: 9,
    title: "Software Development",
    organization: "Prodigy InfoTech",
    dateIssued: "July-August 2024",
    expirationDate: null,
    credentialId: "PIT/JUL24/20004",
    description: "This certification recognizes completion of a comprehensive software development program covering programming fundamentals, web development, database management, and software engineering principles. It demonstrates practical skills in building and deploying software applications.",
    category: "development",
    image: require("../images/Prodigy InfoTech.png"),
    verificationLink: "https://prodigyinfotech.dev/verify?cin=PIT/JUL24/20004",
    skills: [
      "Problem Solving", "Software Engineering", "Web Development", "Database Management", "API Integration"
    ]
  },
  {
    id: 10,
    title: "Java (Basic) Certificate",
    organization: "HackerRank",
    dateIssued: "July 2024",
    expirationDate: null,
    credentialId: "E9D32F1368F2",
    description: "This certification validates fundamental Java programming skills including syntax, object-oriented programming concepts, exception handling, and basic data structures. It demonstrates the ability to write and debug Java applications.",
    category: "programming",
    image: require("../images/Java (Basic) Certificate.png"),
    verificationLink: "https://www.hackerrank.com/certificates/iframe/e9d32f1368f2",
    skills: [
      "Java", "Debugging", "Object-Oriented Programming", "Exception Handling"
    ]
  },
  {
    id: 11,
    title: "JavaScript Algorithms and Data Structures (Beta)",
    organization: "freeCodeCamp",
    dateIssued: "July 2024",
    expirationDate: null,
    credentialId: "youssef_fawel-jaads",
    description: "This certification represents approximately 300 hours of coursework covering JavaScript fundamentals, ES6, regular expressions, debugging, data structures, algorithm scripting, object-oriented programming, and functional programming. It includes building multiple projects to demonstrate mastery of these concepts.",
    category: "programming",
    image: require("../images/JavaScript Algorithms and Data Structures (Beta).png"),
    verificationLink: "https://freecodecamp.org/certification/Youssef_Fawel/javascript-algorithms-and-data-structures-v8",
    skills: [
      "JavaScript", "Algorithms", "Data Structures", "Problem Solving", "Functional Programming", "Object-Oriented Programming"
    ]
  },
  {
    id: 12,
    title: "Problem Solving (Intermediate) Certificate",
    organization: "HackerRank",
    dateIssued: "July 2024",
    expirationDate: null,
    credentialId: "B85DBD7BBFA4",
    description: "This certification validates intermediate problem-solving skills including algorithm design, data structures, time and space complexity analysis, and optimization techniques. It demonstrates the ability to solve complex computational problems efficiently.",
    category: "programming",
    image: require("../images/Problem Solving (Intermediate) Certificate.png"),
    verificationLink: "https://www.hackerrank.com/certificates/iframe/b85dbd7bbfa4",
    skills: [
      "Problem Solving", "Algorithms", "Data Structures", "Computational Thinking", "Optimization"
    ]
  },
  {
    id: 13,
    title: "Responsive Web Design",
    organization: "freeCodeCamp",
    dateIssued: "July 2024",
    expirationDate: null,
    credentialId: "youssef_fawel-rwd",
    description: "This certification represents approximately 300 hours of coursework covering HTML, CSS, responsive design principles, accessibility, and visual design. It includes building multiple projects such as a survey form, tribute page, technical documentation page, product landing page, and personal portfolio website.",
    category: "web",
    image: require("../images/Responsive Web Design.png"),
    verificationLink: "https://freecodecamp.org/certification/Youssef_Fawel/responsive-web-design",
    skills: [
      "HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid", "Accessibility", "Visual Design"
    ]
  },
  {
    id: 14,
    title: "Software Engineer Certificate",
    organization: "HackerRank",
    dateIssued: "July 2024",
    expirationDate: null,
    credentialId: "7B199A472052",
    description: "This certification validates comprehensive software engineering skills including problem-solving, data structures, algorithms, system design, and coding proficiency in multiple programming languages. It demonstrates the ability to design and implement efficient, scalable software solutions.",
    category: "engineering",
    image: require("../images/Software Engineer Certificate.png"),
    verificationLink: "https://www.hackerrank.com/certificates/iframe/7b199a472052",
    skills: [
      "Software Engineering", "Problem Solving", "Data Structures", "Algorithms", "System Design", "Code Quality"
    ]
  },
  {
    id: 15,
    title: "Web Development",
    organization: "Encryptix",
    dateIssued: "July-August 2024",
    expirationDate: null,
    credentialId: "EXM241011",
    description: "This certification recognizes completion of a comprehensive web development program covering front-end and back-end technologies, responsive design, database integration, and deployment. It demonstrates practical skills in building modern, interactive web applications.",
    category: "web",
    image: require("../images/Encryptix.png"),
    verificationLink: "https://encryptix.in/verification/",
    skills: [
      "HTML5", "CSS3", "JavaScript", "Responsive Design", "Backend Development", "Database Integration", "API Development"
    ]
  },
  {
    id: 16,
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    organization: "Cisco",
    dateIssued: "June 2024",
    expirationDate: null,
    credentialId: null,
    description: "This certification validates knowledge and skills in network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability. It covers switching concepts, VLANs, inter-VLAN routing, STP, EtherChannel, and wireless networking.",
    category: "networking",
    image: require("../images/CCNA Switching, Routing, and Wireless Essentials.jpg"),
    verificationLink: "https://www.credly.com/badges/0265552a-d5af-4f57-8c7e-c8907ca9c1dc/linked_in_profile",
    skills: [
      "Network Switching", "VLANs", "Routing", "Wireless Networks", "Network Security", "Network Troubleshooting"
    ]
  },
  {
    id: 17,
    title: "CCNA: Introduction to Networks",
    organization: "Cisco",
    dateIssued: "May 2024",
    expirationDate: null,
    credentialId: null,
    description: "This certification validates foundational knowledge in networking concepts, protocols, and architectures. It covers network components, IP addressing, network models, Ethernet, TCP/IP, and basic network security principles. It demonstrates understanding of how networks operate and communicate.",
    category: "networking",
    image: require("../images/CCNA Introduction to Networks.jpg"),
    verificationLink: "https://www.credly.com/badges/cc71535d-3885-425c-8c10-564d4b368935/linked_in_profile",
    skills: [
      "Network Fundamentals", "IP Addressing", "TCP/IP", "Ethernet", "Network Models", "Basic Network Security"
    ]
  },
  {
    id: 18,
    title: "Attestation de Participation à la Nuit de l'info 2023",
    organization: "EPI - International Multidisciplinary School",
    dateIssued: "December 2023",
    expirationDate: null,
    credentialId: null,
    description: "This certificate recognizes participation in 'La Nuit de l'Info 2023', an overnight national competition where teams of students work on web development challenges. It demonstrates teamwork, problem-solving under time constraints, and practical application of web development skills.",
    category: "competition",
    image: require("../images/Attestation de Participation à la Nuit de l'info 2023.jpg"),
    verificationLink: "https://www.episup.com/fr",
    skills: [
      "Web Development", "Teamwork", "Problem Solving", "Time Management", "Hackathon", "Rapid Prototyping"
    ]
  },
  {
    id: 19,
    title: "Introduction to Front-End Development",
    organization: "Coursera",
    dateIssued: "November 2023",
    expirationDate: null,
    credentialId: "L7RK4QBRM3GK",
    description: "This certification covers the fundamentals of front-end web development including HTML, CSS, JavaScript, and responsive design principles. It includes hands-on projects to build interactive web pages and understand the role of front-end development in the web development process.",
    category: "web",
    image: require("../images/Introduction to Front-End Development.png"),
    verificationLink: "https://www.coursera.org/account/accomplishments/records/L7RK4QBRM3GK",
    skills: [
      "HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Development", "UI Design Principles"
    ]
  }
];

export default certificatesData;
