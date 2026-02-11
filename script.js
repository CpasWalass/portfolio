// ===================================
// Modern Portfolio - JavaScript
// ===================================

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// ===================================
// Particles.js Configuration
// ===================================
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#FF3366'
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 0.3,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#FF3366',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// ===================================
// Custom Cursor
// ===================================
const cursor = {
    dot: document.querySelector('[data-cursor-dot]'),
    outline: document.querySelector('[data-cursor-outline]')
};

window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    
    if (cursor.dot && cursor.outline) {
        cursor.dot.style.opacity = '1';
        cursor.outline.style.opacity = '1';
        cursor.dot.style.left = `${clientX}px`;
        cursor.dot.style.top = `${clientY}px`;
        cursor.outline.style.left = `${clientX}px`;
        cursor.outline.style.top = `${clientY}px`;
    }
});

// Cursor effects on interactive elements
document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursor.outline) {
            cursor.outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.outline.style.borderColor = 'var(--primary-light)';
        }
    });
    
    el.addEventListener('mouseleave', () => {
        if (cursor.outline) {
            cursor.outline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.outline.style.borderColor = 'var(--primary)';
        }
    });
});

// ===================================
// Navigation
// ===================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNav);

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });
});

// ===================================
// Typing Animation
// ===================================
const typingText = document.getElementById('typingText');
const phrases = [
    'Développeur Full-Stack',
    'Développeur Java/Spring Boot',
    'Développeur Angular',
    'Développeur Laravel',
    'Développeur Flutter',
    'Analyste de Données',
    'Passionné par la technologie'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

if (typingText) {
    setTimeout(typeEffect, 1000);
}

const projectsGrid = document.getElementById('projectsGrid');

function createProjectCard(project) {
    return `
        <div class="project-card" data-category="${project.category}" data-aos="fade-up">
            <div class="project-icon" style="background: linear-gradient(135deg, ${project.color}15, ${project.color}05);">
                <img src="${project.image}" alt="${project.title}" class="project-img" />
            </div>
            <div class="project-content">
                <span class="project-category">${getCategoryName(project.category)}</span>
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
                
                ${project.features ? `
                    <div class="project-features">
                        <ul>
                            ${project.features.slice(0, 4).map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                <a href="${project.link}" target="_blank" class="project-link">
                    <span>Voir le projet</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
}

function getCategoryName(categoryId) {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
}

function loadProjects(filter = 'all') {
    if (!projectsGrid) return;
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);
    
    projectsGrid.innerHTML = filteredProjects.map(project => createProjectCard(project)).join('');
    
    // Reinitialize AOS for new elements
    AOS.refresh();
}

// Create filter buttons
function createFilterButtons() {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;
    
    const filtersContainer = document.createElement('div');
    filtersContainer.className = 'project-filters';
    filtersContainer.innerHTML = categories.map(cat => `
        <button class="filter-btn ${cat.id === 'all' ? 'active' : ''}" data-filter="${cat.id}">
            <i class="${cat.icon}"></i>
            <span>${cat.name}</span>
        </button>
    `).join('');
    
    projectsSection.querySelector('.container').insertBefore(
        filtersContainer,
        projectsGrid
    );
    
    // Add event listeners to filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadProjects(this.dataset.filter);
        });
    });
}

// Initialize projects
if (projectsGrid) {
    createFilterButtons();
    loadProjects();
}

// ===================================
// CV PDF Generation with jsPDF
// ===================================
const downloadCVBtn = document.getElementById('downloadCV');

if (downloadCVBtn) {
    downloadCVBtn.addEventListener('click', generatePDF);
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    
    // Configuration des couleurs
    const primaryColor = [255, 51, 102];
    const darkColor = [10, 14, 39];
    const grayColor = [108, 117, 125];
    const lightGray = [200, 200, 200];
    
    let yPos = 20;
    const margin = 15;
    const pageWidth = 210;
    const contentWidth = pageWidth - (2 * margin);
    
    // Helper function to check page break
    function checkPageBreak(height) {
        if (yPos + height > 280) {
            doc.addPage();
            yPos = 20;
            return true;
        }
        return false;
    }
    
    // Header Section
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, pageWidth, 50, 'F');
    
    // Name
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('LAWADAN KODJO WULFRED', pageWidth / 2, 20, { align: 'center' });
    
    doc.setFontSize(16);
    doc.text('GOMESE ELOM', pageWidth / 2, 28, { align: 'center' });
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text('Développeur Full-Stack & Analyste de Données', pageWidth / 2, 36, { align: 'center' });
    
    // Contact Info
    doc.setFontSize(8);
    const contactInfo = 'walasslawadan@gmail.com | +228 98 82 00 81 | Lomé, Togo';
    doc.text(contactInfo, pageWidth / 2, 43, { align: 'center' });
    
    yPos = 60;
    
    // Function to draw section header
    function drawSectionHeader(title) {
        checkPageBreak(15);
        doc.setFillColor(...primaryColor);
        doc.rect(margin, yPos, contentWidth, 8, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(title, margin + 3, yPos + 5.5);
        yPos += 12;
    }
    
    // Function to draw item
    function drawItem(title, subtitle, description, tags = []) {
        checkPageBreak(25);
        
        doc.setTextColor(...darkColor);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text(title, margin, yPos);
        yPos += 5;
        
        if (subtitle) {
            doc.setTextColor(...grayColor);
            doc.setFontSize(8);
            doc.setFont('helvetica', 'italic');
            doc.text(subtitle, margin, yPos);
            yPos += 5;
        }
        
        if (description) {
            doc.setTextColor(...grayColor);
            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            const lines = doc.splitTextToSize(description, contentWidth - 10);
            doc.text(lines, margin, yPos);
            yPos += lines.length * 4;
        }
        
        if (tags.length > 0) {
            yPos += 2;
            let xPos = margin;
            tags.forEach(tag => {
                const tagWidth = doc.getTextWidth(tag) + 4;
                if (xPos + tagWidth > pageWidth - margin) {
                    xPos = margin;
                    yPos += 6;
                }
                doc.setFillColor(255, 240, 245);
                doc.roundedRect(xPos, yPos - 3, tagWidth, 5, 1, 1, 'F');
                doc.setTextColor(...primaryColor);
                doc.setFontSize(7);
                doc.text(tag, xPos + 2, yPos);
                xPos += tagWidth + 2;
            });
            yPos += 6;
        }
        
        yPos += 4;
    }
    
    // EXPÉRIENCE & FORMATION
    drawSectionHeader('EXPÉRIENCE & FORMATION');
    
    drawItem(
        'Stage - Développeur Full-Stack',
        'Juin - Août 2025 | Groupe Atakora SARL',
        'Développement d\'un système modulaire de gestion de microfinance en Laravel avec architecture robuste pour la gestion clients, prêts et transactions.',
        ['Laravel', 'PHP', 'MySQL']
    );
    
    drawItem(
        '3ème Année - Institut Africain d\'Informatique',
        'En cours',
        'Renforcement en développement d\'applications distribuées, bases de données complexes et architectures orientées services.'
    );
    
    drawItem(
        '2ème Année - Institut Africain d\'Informatique',
        '2024 - 2025',
        'Développement logiciel, bases de données avancées, conception SI avec Merise et UML.'
    );
    
    // COMPÉTENCES TECHNIQUES
    drawSectionHeader('COMPÉTENCES TECHNIQUES');
    
    drawItem(
        'Backend Development',
        '',
        '',
        ['Java', 'Spring Boot', 'Python', 'Flask', 'PHP', 'Laravel', 'Node.js']
    );
    
    drawItem(
        'Frontend Development',
        '',
        '',
        ['Angular', 'TypeScript', 'HTML/CSS/JS', 'Bootstrap', 'Tailwind']
    );
    
    drawItem(
        'Mobile Development',
        '',
        '',
        ['Flutter', 'Dart', 'Android']
    );
    
    drawItem(
        'Bases de Données',
        '',
        '',
        ['MySQL', 'Oracle/PL-SQL', 'SQL Server/T-SQL', 'PostgreSQL', 'Firebase']
    );
    
    drawItem(
        'Outils & Méthodologies',
        '',
        '',
        ['Git/GitHub', 'Docker', 'Merise', 'UML', 'Agile', 'REST API', 'Figma']
    );
    
    drawItem(
        'Intelligence Artificielle & Vision',
        '',
        '',
        ['OpenCV', 'TensorFlow', 'Computer Vision', 'Object Detection', 'ML']
    );
    
    // PROJETS PRINCIPAUX
    checkPageBreak(40);
    drawSectionHeader('PROJETS PRINCIPAUX');
    
    drawItem(
        'Smart Home - Surveillance Intelligente',
        'Application Full-Stack Python',
        'Système de surveillance avec détection caméra, analyse d\'images IA, alertes email et streaming vidéo temps réel.',
        ['Python', 'Flask', 'OpenCV', 'TensorFlow', 'WebSocket']
    );
    
    drawItem(
        'Système de Gestion de Microfinance',
        'Application Web Laravel',
        'Plateforme complète de gestion des prêts, clients, remboursements et rapports financiers.',
        ['Laravel', 'PHP', 'MySQL', 'Chart.js']
    );
    
    drawItem(
        'Application Mobile Microfinance',
        'Application Flutter',
        'Interface agent & client avec synchronisation temps réel et notifications push.',
        ['Flutter', 'Dart', 'Firebase']
    );
    
    drawItem(
        'Gestion Salle de Sport',
        'Application Desktop Java',
        'Application complète avec interface Swing pour gestion membres et abonnements.',
        ['Java', 'Swing', 'MySQL', 'JDBC']
    );
    
    // LANGUES
    checkPageBreak(30);
    drawSectionHeader('LANGUES');
    
    doc.setFontSize(9);
    doc.setTextColor(...darkColor);
    doc.setFont('helvetica', 'normal');
    doc.text('Français: Courant  |  Anglais: Intermédiaire  |  Ewé: Langue maternelle', margin, yPos);
    yPos += 8;
    
    // ACTIVITÉS
    drawSectionHeader('ACTIVITÉS EXTRACURRICULAIRES');
    
    drawItem(
        'Club de Génie en Herbe IAI',
        'Responsable',
        'Animation et organisation d\'activités intellectuelles. Participation à BAPTISMUS et Génie Campus.'
    );
    
    drawItem(
        'Club d\'Art Oratoire IAI',
        'Membre actif',
        'Développement des compétences en expression orale. Concours JCI et Orathon.'
    );
    
    // Footer
    const footerY = 287;
    doc.setDrawColor(...lightGray);
    doc.line(margin, footerY, pageWidth - margin, footerY);
    doc.setTextColor(...grayColor);
    doc.setFontSize(8);
    doc.text('LinkedIn: walass-lawadan | GitHub: CpasWalass | TikTok: @cpaswalass', pageWidth / 2, footerY + 4, { align: 'center' });
    
    // Save PDF
    doc.save('CV_LAWADAN_KODJO_WULFRED.pdf');
}

// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Skill Bars Animation
// ===================================
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

// ===================================
// Initialize on DOM Load
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Highlight initial nav
    highlightNav();
    
    // Add loading animation end
    document.body.classList.add('loaded');
});

// ===================================
// Console Easter Egg
// ===================================
console.log('%c👋 Salut !', 'font-size: 24px; color: #FF3366; font-weight: bold;');
console.log('%cSi tu regardes ici, tu es probablement un développeur ! 🚀', 'font-size: 14px; color: #6C5CE7;');
console.log('%cN\'hésite pas à me contacter : walasslawadan@gmail.com', 'font-size: 12px; color: #00D9FF;');
console.log('%cDéveloppé avec ❤️ par Walass', 'font-size: 10px; color: #aaa;');