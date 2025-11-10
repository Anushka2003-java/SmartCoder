// backend/seedQuestions.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "./models/Question.js"; // make sure model exists

dotenv.config();

const QUESTIONS = [
  /* === DSA (10) === */
  {
    subject: "DSA",
    question: "What is the time complexity of binary search on a sorted array of size n?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: 1
  },
  {
    subject: "DSA",
    question: "Which data structure uses LIFO order?",
    options: ["Queue", "Stack", "Heap", "Graph"],
    correctAnswer: 1
  },
  {
    subject: "DSA",
    question: "Which algorithm is used for finding the shortest path in an unweighted graph?",
    options: ["Dijkstra", "Bellman-Ford", "Breadth-First Search", "Depth-First Search"],
    correctAnswer: 2
  },
  {
    subject: "DSA",
    question: "What is the average-case time complexity of QuickSort?",
    options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
    correctAnswer: 1
  },
  {
    subject: "DSA",
    question: "Which traversal of a binary tree yields nodes in non-decreasing order for a BST?",
    options: ["Preorder", "Inorder", "Postorder", "Level order"],
    correctAnswer: 1
  },
  {
    subject: "DSA",
    question: "What data structure is ideal for implementing a priority queue?",
    options: ["Array", "Stack", "Heap", "Linked List"],
    correctAnswer: 2
  },
  {
    subject: "DSA",
    question: "Which algorithm detects cycles in a directed graph?",
    options: ["Kruskal", "Topological sort (using DFS)", "Prim", "Dijkstra"],
    correctAnswer: 1
  },
  {
    subject: "DSA",
    question: "What is the worst-case time complexity of inserting into a hash table with chaining?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: 1
  },
  {
    subject: "DSA",
    question: "Which of these is NOT a divide-and-conquer algorithm?",
    options: ["Merge Sort", "QuickSort", "Heap Sort", "Binary Search"],
    correctAnswer: 2
  },
  {
    subject: "DSA",
    question: "Floyd–Warshall algorithm is used to find:",
    options: ["Single-source shortest paths", "All-pairs shortest paths", "Minimum spanning tree", "Maximum flow"],
    correctAnswer: 1
  },

  /* === Aptitude (10) === */
  {
    subject: "Aptitude",
    question: "If a train travels 120 km in 2 hours, its average speed is:",
    options: ["40 km/h", "60 km/h", "120 km/h", "240 km/h"],
    correctAnswer: 1
  },
  {
    subject: "Aptitude",
    question: "If x + y = 10 and x - y = 2, what is x?",
    options: ["4", "6", "8", "10"],
    correctAnswer: 1
  },
  {
    subject: "Aptitude",
    question: "The LCM of 12 and 15 is:",
    options: ["60", "30", "180", "6"],
    correctAnswer: 0
  },
  {
    subject: "Aptitude",
    question: "If 20% of a number is 30, the number is:",
    options: ["150", "100", "200", "75"],
    correctAnswer: 0
  },
  {
    subject: "Aptitude",
    question: "A bag contains 3 red and 2 blue balls. Probability of drawing a red ball is:",
    options: ["2/5", "3/5", "1/2", "3/2"],
    correctAnswer: 1
  },
  {
    subject: "Aptitude",
    question: "If the ratio of angles in a triangle is 2:3:4, the largest angle is:",
    options: ["80°", "60°", "100°", "90°"],
    correctAnswer: 2
  },
  {
    subject: "Aptitude",
    question: "A sum of money doubles in 5 years at simple interest. The rate is:",
    options: ["20%", "10%", "40%", "5%"],
    correctAnswer: 1
  },
  {
    subject: "Aptitude",
    question: "If 5 workers take 8 days to finish a job, how many days will 10 workers take (same efficiency)?",
    options: ["4", "8", "16", "6"],
    correctAnswer: 0
  },
  {
    subject: "Aptitude",
    question: "What is 15% of 240?",
    options: ["36", "32", "30", "40"],
    correctAnswer: 0
  },
  {
    subject: "Aptitude",
    question: "If 3^x = 81, then x =",
    options: ["3", "4", "2", "5"],
    correctAnswer: 1
  },

  /* === Cyber Security (10) === */
  {
    subject: "Cyber Security",
    question: "What does XSS stand for?",
    options: ["Cross-Site Scripting", "Cross-System Scripting", "XML Site Security", "External Script Sharing"],
    correctAnswer: 0
  },
  {
    subject: "Cyber Security",
    question: "A firewall primarily provides:",
    options: ["Encryption", "Network traffic filtering", "Malware scanning", "User authentication"],
    correctAnswer: 1
  },
  {
    subject: "Cyber Security",
    question: "Which protocol is secure for web traffic?",
    options: ["HTTP", "HTTPS", "FTP", "Telnet"],
    correctAnswer: 1
  },
  {
    subject: "Cyber Security",
    question: "What does CSRF attack exploit?",
    options: ["Cross-site scripting", "User's browser trust", "SQL Injection", "Buffer overflow"],
    correctAnswer: 1
  },
  {
    subject: "Cyber Security",
    question: "Which is a common hashing algorithm?",
    options: ["AES", "RSA", "SHA-256", "SSL"],
    correctAnswer: 2
  },
  {
    subject: "Cyber Security",
    question: "Which technique prevents eavesdropping on network traffic?",
    options: ["Plain HTTP", "Encryption", "Port forwarding", "DNS spoofing"],
    correctAnswer: 1
  },
  {
    subject: "Cyber Security",
    question: "A public key is used primarily for:",
    options: ["Encrypting data", "Decrypting private messages", "Signing with private key", "Hashing"],
    correctAnswer: 0
  },
  {
    subject: "Cyber Security",
    question: "What is social engineering?",
    options: ["Network scanning", "Exploiting human trust", "Malware injection", "Firewall configuration"],
    correctAnswer: 1
  },
  {
    subject: "Cyber Security",
    question: "Which tool is often used for packet capture?",
    options: ["Wireshark", "Git", "VSCode", "NPM"],
    correctAnswer: 0
  },
  {
    subject: "Cyber Security",
    question: "SSL/TLS primarily provides:",
    options: ["Authentication", "Confidentiality and integrity", "Data backup", "Compression"],
    correctAnswer: 1
  },

  /* === AI & ML (10) === */
  {
    subject: "AI & ML",
    question: "Which learning is used when labeled data is available?",
    options: ["Unsupervised", "Supervised", "Reinforcement", "Self-supervised"],
    correctAnswer: 1
  },
  {
    subject: "AI & ML",
    question: "What is overfitting?",
    options: ["Model too simple", "Model fits training too well and fails on new data", "Using too little data", "Model underperforms on training data"],
    correctAnswer: 1
  },
  {
    subject: "AI & ML",
    question: "Which algorithm is used for classification?",
    options: ["Linear Regression", "K-Means", "Logistic Regression", "PCA"],
    correctAnswer: 2
  },
  {
    subject: "AI & ML",
    question: "What does 'epoch' mean in training?",
    options: ["Number of layers", "One forward and backward pass over the entire dataset", "Batch size", "Learning rate"],
    correctAnswer: 1
  },
  {
    subject: "AI & ML",
    question: "Which activation function is commonly used in hidden layers?",
    options: ["Sigmoid", "ReLU", "Softmax", "Linear"],
    correctAnswer: 1
  },
  {
    subject: "AI & ML",
    question: "Which metric is used for regression performance?",
    options: ["Accuracy", "F1-score", "Mean Squared Error", "ROC AUC"],
    correctAnswer: 2
  },
  {
    subject: "AI & ML",
    question: "In unsupervised learning, which algorithm clusters data?",
    options: ["K-Means", "Decision Tree", "Linear Regression", "Random Forest"],
    correctAnswer: 0
  },
  {
    subject: "AI & ML",
    question: "Which technique reduces dimensionality?",
    options: ["PCA", "Logistic Regression", "KNN", "Naive Bayes"],
    correctAnswer: 0
  },
  {
    subject: "AI & ML",
    question: "Which optimizer often helps faster convergence?",
    options: ["SGD", "Adam", "RMSProp", "Adagrad"],
    correctAnswer: 1
  },
  {
    subject: "AI & ML",
    question: "Which framework is commonly used for deep learning?",
    options: ["Django", "React", "TensorFlow", "MySQL"],
    correctAnswer: 2
  },

  /* === DBMS (10) === */
  {
    subject: "DBMS",
    question: "Which normal form removes transitive dependencies?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correctAnswer: 2
  },
  {
    subject: "DBMS",
    question: "ACID stands for:",
    options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Integrity, Durability", "Atomicity, Concurrency, Integrity, Data"],
    correctAnswer: 0
  },
  {
    subject: "DBMS",
    question: "Which SQL command is used to remove a table?",
    options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "TRUNCATE TABLE"],
    correctAnswer: 1
  },
  {
    subject: "DBMS",
    question: "What does indexing do?",
    options: ["Speeds up search queries", "Slows down joins", "Removes duplicates", "Compresses data"],
    correctAnswer: 0
  },
  {
    subject: "DBMS",
    question: "Which is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    correctAnswer: 2
  },
  {
    subject: "DBMS",
    question: "In normalization, 2NF requires no partial dependency and table must be in:",
    options: ["1NF", "3NF", "BCNF", "4NF"],
    correctAnswer: 0
  },
  {
    subject: "DBMS",
    question: "Which join returns all rows from left and matched rows from right?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
    correctAnswer: 1
  },
  {
    subject: "DBMS",
    question: "Which command is used to add a column to a table?",
    options: ["ADD COLUMN", "ALTER TABLE ... ADD COLUMN", "UPDATE TABLE ADD", "MODIFY TABLE"],
    correctAnswer: 1
  },
  {
    subject: "DBMS",
    question: "What is a foreign key?",
    options: ["Unique identifier for table", "A key referencing primary key of another table", "A key used for encryption", "None of the above"],
    correctAnswer: 1
  },
  {
    subject: "DBMS",
    question: "Which isolation level allows dirty reads?",
    options: ["Serializable", "Read Committed", "Read Uncommitted", "Repeatable Read"],
    correctAnswer: 2
  },

  /* === OS (10) === */
  {
    subject: "OS",
    question: "What does OS stand for?",
    options: ["Open Source", "Operating System", "Output System", "Online Service"],
    correctAnswer: 1
  },
  {
    subject: "OS",
    question: "Which scheduling algorithm may cause starvation?",
    options: ["Round Robin", "Priority Scheduling", "FCFS", "SJF (non-preemptive)"],
    correctAnswer: 1
  },
  {
    subject: "OS",
    question: "Virtual memory allows:",
    options: ["More RAM", "Larger address space than physical memory", "Faster CPU", "Direct disk access"],
    correctAnswer: 1
  },
  {
    subject: "OS",
    question: "What is a 'deadlock'?",
    options: ["High CPU usage", "Two processes waiting indefinitely for resources", "Memory leak", "File corruption"],
    correctAnswer: 1
  },
  {
    subject: "OS",
    question: "Which is not a process state?",
    options: ["Running", "Waiting", "Frozen", "Blocked"],
    correctAnswer: 2
  },
  {
    subject: "OS",
    question: "Paging is used to:",
    options: ["Break process into pages for memory management", "Schedule CPU", "Manage I/O", "Encrypt data"],
    correctAnswer: 0
  },
  {
    subject: "OS",
    question: "Which is an example of an interrupt?",
    options: ["Timer", "Keyboard input", "Disk I/O completion", "All of the above"],
    correctAnswer: 3
  },
  {
    subject: "OS",
    question: "Which algorithm is used to avoid deadlock by resource ordering?",
    options: ["Banker's algorithm", "Round Robin", "FCFS", "SJF"],
    correctAnswer: 0
  },
  {
    subject: "OS",
    question: "Context switching does:",
    options: ["Switches processes by saving and restoring state", "Deletes process", "Allocates memory", "Schedules I/O"],
    correctAnswer: 0
  },
  {
    subject: "OS",
    question: "Kernel mode and user mode provide:",
    options: ["Multitasking", "Protection between OS and user processes", "Network access", "File sharing"],
    correctAnswer: 1
  },

  /* === Computer Networks (CN) (10) === */
  {
    subject: "CN",
    question: "OSI model has how many layers?",
    options: ["5", "7", "4", "6"],
    correctAnswer: 1
  },
  {
    subject: "CN",
    question: "Which protocol is connectionless?",
    options: ["TCP", "UDP", "HTTP", "FTP"],
    correctAnswer: 1
  },
  {
    subject: "CN",
    question: "What does IP stand for?",
    options: ["Internet Provider", "Internet Protocol", "Internal Process", "Intranet Protocol"],
    correctAnswer: 1
  },
  {
    subject: "CN",
    question: "Which device forwards packets between networks?",
    options: ["Switch", "Router", "Hub", "Bridge"],
    correctAnswer: 1
  },
  {
    subject: "CN",
    question: "DNS resolves:",
    options: ["IP to domain", "Domain to IP", "Port numbers", "MAC addresses"],
    correctAnswer: 1
  },
  {
    subject: "CN",
    question: "What is the default port for HTTP?",
    options: ["80", "443", "21", "22"],
    correctAnswer: 0
  },
  {
    subject: "CN",
    question: "Three-way handshake is used in which protocol?",
    options: ["UDP", "TCP", "ICMP", "ARP"],
    correctAnswer: 1
  },
  {
    subject: "CN",
    question: "Which topology is most fault tolerant?",
    options: ["Bus", "Ring", "Star", "Mesh"],
    correctAnswer: 3
  },
  {
    subject: "CN",
    question: "ARP is used to map:",
    options: ["IP to MAC address", "Domain to IP", "MAC to IP", "Port to service"],
    correctAnswer: 0
  },
  {
    subject: "CN",
    question: "Which layer handles routing?",
    options: ["Transport", "Network", "Data Link", "Physical"],
    correctAnswer: 1
  },

  /* === Web Development (10) === */
  {
    subject: "Web Development",
    question: "HTML stands for:",
    options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
    correctAnswer: 0
  },
  {
    subject: "Web Development",
    question: "Which tag links a stylesheet in HTML?",
    options: ["<script>", "<link>", "<style>", "<css>"],
    correctAnswer: 1
  },
  {
    subject: "Web Development",
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    correctAnswer: 1
  },
  {
    subject: "Web Development",
    question: "Which method retrieves data in HTTP?",
    options: ["POST", "GET", "PUT", "DELETE"],
    correctAnswer: 1
  },
  {
    subject: "Web Development",
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Display Object Management", "Data Object Model", "Document Oriented Model"],
    correctAnswer: 0
  },
  {
    subject: "Web Development",
    question: "Which JS function selects an element by id?",
    options: ["getElementsBySelector", "querySelectorAll", "getElementById", "getElementByClass"],
    correctAnswer: 2
  },
  {
    subject: "Web Development",
    question: "Which is a front-end framework?",
    options: ["Express", "Django", "React", "Flask"],
    correctAnswer: 2
  },
  {
    subject: "Web Development",
    question: "What is REST primarily used for?",
    options: ["Database design", "Web services/API design", "Styling pages", "Server hosting"],
    correctAnswer: 1
  },
  {
    subject: "Web Development",
    question: "CORS is related to:",
    options: ["Cross-Origin Resource Sharing", "Content-Origin Resource Security", "Cache Optimization Resource Sharing", "Cookie Origin Restrictions"],
    correctAnswer: 0
  },
  {
    subject: "Web Development",
    question: "Which HTTP status code means 'Not Found'?",
    options: ["200", "301", "404", "500"],
    correctAnswer: 2
  },

  /* === Cloud Computing (10) === */
  {
    subject: "Cloud Computing",
    question: "IaaS stands for:",
    options: ["Infrastructure as a Service", "Internet as a Service", "Integration as a Service", "Information as a Service"],
    correctAnswer: 0
  },
  {
    subject: "Cloud Computing",
    question: "Which is a cloud provider?",
    options: ["AWS", "MySQL", "Linux", "GitHub"],
    correctAnswer: 0
  },
  {
    subject: "Cloud Computing",
    question: "Which model provides software over the internet?",
    options: ["IaaS", "PaaS", "SaaS", "DaaS"],
    correctAnswer: 2
  },
  {
    subject: "Cloud Computing",
    question: "Auto-scaling helps to:",
    options: ["Manually scale servers", "Automatically adjust resources with demand", "Backup data", "Encrypt traffic"],
    correctAnswer: 1
  },
  {
    subject: "Cloud Computing",
    question: "What is serverless computing?",
    options: ["No servers at all", "Managed execution environment where the cloud handles servers", "Local hosting", "Shared hosting only"],
    correctAnswer: 1
  },
  {
    subject: "Cloud Computing",
    question: "Which storage is object-based commonly used in cloud?",
    options: ["Block storage", "File storage", "Object storage (S3)", "Memory storage"],
    correctAnswer: 2
  },
  {
    subject: "Cloud Computing",
    question: "Regions and Availability Zones are associated with:",
    options: ["Cloud provider infrastructure", "Database schemas", "Programming languages", "OS kernels"],
    correctAnswer: 0
  },
  {
    subject: "Cloud Computing",
    question: "Which offers versioned object storage?",
    options: ["S3", "EC2", "RDS", "Lambda"],
    correctAnswer: 0
  },
  {
    subject: "Cloud Computing",
    question: "What does CDN do?",
    options: ["Compress data", "Deliver content from edge servers to reduce latency", "Encrypt content", "Authenticate users"],
    correctAnswer: 1
  },
  {
    subject: "Cloud Computing",
    question: "Infrastructure as Code tools include:",
    options: ["Terraform", "Express", "Vue", "MySQL"],
    correctAnswer: 0
  },

  /* === ML Advanced (10) === */
  {
    subject: "ML Advanced",
    question: "Which technique reduces gradient variance and speeds up training?",
    options: ["Batch Normalization", "Dropout", "Data Augmentation", "Weight decay"],
    correctAnswer: 0
  },
  {
    subject: "ML Advanced",
    question: "Which kernel is commonly used in SVM for non-linear separation?",
    options: ["Linear", "Polynomial", "RBF (Gaussian)", "Sigmoid"],
    correctAnswer: 2
  },
  {
    subject: "ML Advanced",
    question: "What is transfer learning?",
    options: ["Training from scratch only", "Using pre-trained models and fine-tuning", "Unsupervised pretraining", "None"],
    correctAnswer: 1
  },
  {
    subject: "ML Advanced",
    question: "GAN stands for:",
    options: ["Generative Adversarial Network", "General Adversarial Node", "Graph Attention Network", "Gradient Adjusted Network"],
    correctAnswer: 0
  },
  {
    subject: "ML Advanced",
    question: "Which is a metric for imbalanced classification?",
    options: ["Accuracy", "Precision/Recall/F1", "MSE", "R^2"],
    correctAnswer: 1
  },
  {
    subject: "ML Advanced",
    question: "Which optimizer adapts learning rates per-parameter using moments?",
    options: ["SGD", "Adam", "Adagrad", "RMSProp"],
    correctAnswer: 1
  },
  {
    subject: "ML Advanced",
    question: "What is 'attention' mechanism primarily used for?",
    options: ["Image resizing", "Focusing on relevant parts of input in sequence models", "Normalization", "Data cleaning"],
    correctAnswer: 1
  },
  {
    subject: "ML Advanced",
    question: "Which transformer architecture component handles positional information?",
    options: ["Self-attention heads", "Positional encodings", "Feed-forward layer", "Layer norm"],
    correctAnswer: 1
  },
  {
    subject: "ML Advanced",
    question: "Which loss is used for multi-class classification?",
    options: ["MSE", "Cross-entropy loss", "MAE", "Hinge loss"],
    correctAnswer: 1
  },
  {
    subject: "ML Advanced",
    question: "Beam search is used in:",
    options: ["Optimization of convex functions", "Sequence generation and decoding", "Feature selection", "Clustering"],
    correctAnswer: 1
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB for seeding...");
    await Question.deleteMany({});
    await Question.insertMany(QUESTIONS);
    console.log("✅ Seeded", QUESTIONS.length, "questions");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
