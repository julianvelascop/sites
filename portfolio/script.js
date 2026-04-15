// ============================================
// Julian Velasco Plaza - Portfolio Scripts
// ============================================

// --- i18n Translations ---
const translations = {
    en: {
        nav_about: 'About',
        nav_experience: 'Experience',
        nav_skills: 'Skills',
        nav_certifications: 'Certifications',
        nav_education: 'Education',
        nav_contact: 'Contact',
        hero_greeting: "Hello, I'm",
        hero_title: 'Data Governance Consultant | Digital Transformation & Data Strategy Consultant | Data-Driven Leader',
        hero_cta1: 'Get in Touch',
        hero_cta2: 'View Experience',
        stat_years: 'Years Experience',
        stat_companies: 'Companies',
        stat_certs: 'Certifications',
        about_title: 'About Me',
        about_subtitle: 'Driving Business Transformation through Data & BI',
        about_p1: 'I am a Digital Transformation & Data Strategy Consultant with expertise in business intelligence, data governance, and process optimization. I help organizations modernize operations, foster data-driven cultures, and gain a competitive edge through BI strategies.',
        about_p2: 'At VUMI, I advanced from Data Analyst to Data Analyst III, leading cross-functional initiatives, strengthening data governance frameworks, and developing BI solutions that provided executives with real-time insights. My career reflects consistent growth from technical execution to project leadership and team management.',
        about_p3: 'Currently, I also serve as a Data Governance Consultant at Azurian Consulting, contributing to projects focused on data migration, quality policies, and governance frameworks.',
        hl_1_title: 'Strategic Data Leadership',
        hl_1_desc: 'Building data-driven business models for sustainable growth.',
        hl_2_title: 'Governance & Optimization',
        hl_2_desc: 'Implementing frameworks that ensure compliance, security, and efficiency.',
        hl_3_title: 'Decision Intelligence',
        hl_3_desc: 'Designing BI solutions that drive operational efficiency and executive decision-making.',
        hl_4_title: 'Transformational Impact',
        hl_4_desc: 'Leading digital transformation initiatives aligned with business objectives.',
        exp_title: 'Professional Experience',
        exp_subtitle: 'A career built on data, leadership, and transformation',
        skills_title: 'Skills & Expertise',
        skills_subtitle: 'Tools and competencies I bring to every project',
        cert_title: 'Certifications & Courses',
        cert_subtitle: 'Continuous learning and professional development',
        edu_title: 'Education',
        edu_subtitle: 'Academic foundation',
        contact_title: 'Get in Touch',
        contact_subtitle: 'Open to leadership opportunities in BI, data governance, and digital transformation',
        contact_location: 'Location',
        contact_workpref: 'Work Preference',
        contact_workpref_val: 'On-site \u00b7 Hybrid \u00b7 Remote',
        contact_cta_text: 'I am passionate about leveraging data to drive efficiency, innovation, and long-term business impact.',
        contact_cta_btn: 'Connect on LinkedIn'
    },
    es: {
        nav_about: 'Acerca de',
        nav_experience: 'Experiencia',
        nav_skills: 'Habilidades',
        nav_certifications: 'Certificaciones',
        nav_education: 'Educacion',
        nav_contact: 'Contacto',
        hero_greeting: 'Hola, soy',
        hero_title: 'Consultor de Gobernanza de Datos | Consultor de Transformacion Digital y Estrategia de Datos | Lider Data-Driven',
        hero_cta1: 'Contactar',
        hero_cta2: 'Ver Experiencia',
        stat_years: 'Anos de Experiencia',
        stat_companies: 'Empresas',
        stat_certs: 'Certificaciones',
        about_title: 'Sobre Mi',
        about_subtitle: 'Impulsando la Transformacion Empresarial a traves de Datos y BI',
        about_p1: 'Soy Consultor de Transformacion Digital y Estrategia de Datos con experiencia en inteligencia de negocios, gobernanza de datos y optimizacion de procesos. Ayudo a las organizaciones a modernizar operaciones, fomentar culturas basadas en datos y obtener ventaja competitiva a traves de estrategias de BI.',
        about_p2: 'En VUMI, avance de Data Analyst a Data Analyst III, liderando iniciativas interfuncionales, fortaleciendo marcos de gobernanza de datos y desarrollando soluciones de BI que proporcionaron a los ejecutivos informacion en tiempo real. Mi carrera refleja un crecimiento constante desde la ejecucion tecnica hasta el liderazgo de proyectos y la gestion de equipos.',
        about_p3: 'Actualmente, tambien me desempeno como Consultor de Gobernanza de Datos en Azurian Consulting, contribuyendo a proyectos enfocados en migracion de datos, politicas de calidad y marcos de gobernanza.',
        hl_1_title: 'Liderazgo Estrategico de Datos',
        hl_1_desc: 'Construyendo modelos de negocio basados en datos para un crecimiento sostenible.',
        hl_2_title: 'Gobernanza y Optimizacion',
        hl_2_desc: 'Implementando marcos que aseguran cumplimiento, seguridad y eficiencia.',
        hl_3_title: 'Inteligencia de Decisiones',
        hl_3_desc: 'Disenando soluciones de BI que impulsan la eficiencia operativa y la toma de decisiones ejecutiva.',
        hl_4_title: 'Impacto Transformacional',
        hl_4_desc: 'Liderando iniciativas de transformacion digital alineadas con los objetivos del negocio.',
        exp_title: 'Experiencia Profesional',
        exp_subtitle: 'Una carrera construida sobre datos, liderazgo y transformacion',
        skills_title: 'Habilidades y Experiencia',
        skills_subtitle: 'Herramientas y competencias que aporto a cada proyecto',
        cert_title: 'Certificaciones y Cursos',
        cert_subtitle: 'Aprendizaje continuo y desarrollo profesional',
        edu_title: 'Educacion',
        edu_subtitle: 'Formacion academica',
        contact_title: 'Contacto',
        contact_subtitle: 'Abierto a oportunidades de liderazgo en BI, gobernanza de datos y transformacion digital',
        contact_location: 'Ubicacion',
        contact_workpref: 'Preferencia de Trabajo',
        contact_workpref_val: 'Presencial \u00b7 Hibrido \u00b7 Remoto',
        contact_cta_text: 'Me apasiona aprovechar los datos para impulsar la eficiencia, la innovacion y el impacto empresarial a largo plazo.',
        contact_cta_btn: 'Conectar en LinkedIn'
    }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    const langLabel = document.querySelector('#langToggle .lang-label');
    langLabel.textContent = lang === 'en' ? 'ES' : 'EN';
}

// --- Dark Mode ---
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);

    const icon = document.querySelector('#darkToggle i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // --- Initialize theme (dark is default) ---
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);

    // --- Initialize language ---
    setLanguage(currentLang);

    // --- Dark mode toggle ---
    document.getElementById('darkToggle').addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
    });

    // --- Language toggle ---
    document.getElementById('langToggle').addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'es' : 'en');
    });

    // --- Mobile Navigation Toggle ---
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('open');
        });
    });

    // --- Navbar scroll effect ---
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Active nav link on scroll ---
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNav() {
        const scrollY = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // --- Counter animation ---
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-target]');

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    }

    // --- Fade-in on scroll (Intersection Observer) ---
    const fadeElements = document.querySelectorAll(
        '.timeline-item, .highlight-card, .skill-category, .cert-card, .education-card, .contact-item, .contact-cta'
    );

    fadeElements.forEach(el => el.classList.add('fade-in'));

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // --- Trigger counter animation when hero is visible ---
    const heroSection = document.getElementById('hero');
    let countersAnimated = false;

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    heroObserver.observe(heroSection);

    // --- Smooth scroll for all anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
