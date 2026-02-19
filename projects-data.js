// Projects Data
const projects = [
    {
        id: 1,
        title: "Smart Home - Surveillance Intelligente",
        description: "Application complète de surveillance de maison intelligente avec détection par caméra en temps réel, analyse d'images et système d'alertes par email. Architecture backend Python avec interface web responsive.",
        category: "full-stack",
        technologies: ["Python", "Flask", "OpenCV", "TensorFlow", "JavaScript", "WebSocket"],
        image: "assets/images/cameraImg.webp",
        color: "#e74c3c",
        link: "https://github.com/CpasWalass",
        features: [
            "Détection de mouvement et reconnaissance d'objets",
            "Alertes email automatiques en temps réel",
            "Streaming vidéo en direct",
            "Analyse intelligente avec IA"
        ]
    },
    {
        id: 2,
        title: "Système de Gestion de Microfinance",
        description: "Système modulaire complet développé en Laravel pour la gestion des opérations de microfinance. Gestion des clients, prêts, remboursements et génération de rapports financiers.",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "Chart.js"],
        image: "assets/images/koraImg.png",
        color: "#3498db",
        link: "https://github.com/CpasWalass/exemple",
        features: [
            "Gestion complète des prêts",
            "Suivi des remboursements",
            "Rapports financiers détaillés",
            "Gestion des clients"
        ]
    },
    {
        id: 3,
        title: "Application Mobile Microfinance",
        description: "Application mobile pour le suivi des opérations de microfinance. Interface pour agents de terrain et clients avec synchronisation temps réel.",
        category: "mobile",
        technologies: ["Flutter", "Dart", "Firebase", "REST API"],
        image: "assets/images/microfinanceimg.png",
        color: "#9b59b6",
        link: "https://github.com/CpasWalass",
        features: [
            "Interface agent & client",
            "Synchronisation temps réel",
            "Paiements mobiles",
            "Notifications push"
        ]
    },
    {
        id: 4,
        title: "Mon Portfolio Professionnel",
        description: "Site web personnel moderne et responsive présentant mes projets, compétences et parcours académique avec animations fluides.",
        category: "web",
        technologies: ["HTML5", "CSS3", "JavaScript", "AOS", "Particles.js"],
        image: "assets/images/portfolioimg.png",
        color: "#e67e22",
        link: "https://portfolio-nine-steel-83.vercel.app/",
        features: [
            "Design moderne et responsive",
            "Animations fluides",
            "Génération de CV PDF",
            "Interface interactive"
        ]
    },
    {
        id: 5,
        title: "Site E-commerce Complet",
        description: "Plateforme e-commerce complète avec gestion des produits, panier d'achat, système de paiement et interface d'administration avancée.",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Stripe"],
        image: "assets/images/ecommerceimg.jpg",
        color: "#27ae60",
        link: "https://github.com/CpasWalass/ecommerce2",
        features: [
            "Catalogue de produits",
            "Panier intelligent",
            "Paiement sécurisé",
            "Back-office admin"
        ]
    },
    {
        id: 6,
        title: "MiniMarket App",
        description: "Application mobile de commerce avec géolocalisation permettant l'achat et la vente de produits localement.",
        category: "mobile",
        technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
        image: "assets/images/ecommerceimg.jpg",
        color: "#f39c12",
        link: "https://github.com/CpasWalass/minimarket",
        features: [
            "Géolocalisation des vendeurs",
            "Chat en temps réel",
            "Système de notation",
            "Notifications push"
        ]
    },
    {
        id: 7,
        title: "Gestion Salle de Sport",
        description: "Application desktop complète pour la gestion d'une salle de sport développée en Java pur avec Swing. Gestion des abonnés, abonnements et statistiques.",
        category: "desktop",
        technologies: ["Java", "Swing", "MySQL", "JDBC"],
        image: "assets/images/salleSport.png",
        color: "#16a085",
        link: "https://github.com/CpasWalass/GestionSalleSport",
        features: [
            "Gestion des membres", 
            "Suivi des abonnements",
            "Statistiques détaillées",
            "Interface graphique Swing"
        ]
    },
    {
        id: 8,
        title: "One Piece Quiz",
        description: "Site web interactif proposant un quiz de personnalité pour découvrir à quel membre de l'équipage One Piece on correspond.",
        category: "web",
        technologies: ["JavaScript", "HTML5", "CSS3", "Animations"],
        image: "assets/images/Onepieceimg.png",
        color: "#c0392b",
        link: "https://monprojetonepiece.vercel.app/",
        features: [
            "Quiz interactif",
            "Animations dynamiques",
            "Résultats personnalisés",
            "Design thématique"
        ]
    },
    {
        id: 9,
        title: "ThirdLine Game",
        description: "Jeu mobile inspiré du morpion avec des mécaniques améliorées et une interface moderne. Mode solo et multijoueur.",
        category: "mobile",
        technologies: ["Flutter", "Dart", "Game Logic"],
        image: "assets/images/thirdlineimg.jpeg",
        color: "#8e44ad",
        link: "https://github.com/CpasWalass",
        features: [
            "IA adaptative",
            "Mode multijoueur",
            "Système de score",
            "Animations fluides"
        ]
    }
];

// Filter categories
const categories = [
    { id: "all", name: "Tous les projets", icon: "fas fa-th" },
    { id: "full-stack", name: "Full-Stack", icon: "fas fa-layer-group" },
    { id: "web", name: "Web", icon: "fas fa-globe" },
    { id: "mobile", name: "Mobile", icon: "fas fa-mobile-alt" },
    { id: "desktop", name: "Desktop", icon: "fas fa-desktop" }
];