
        // Initialize particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random size between 2px and 6px
                const size = Math.random() * 4 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                particlesContainer.appendChild(particle);
            }
        }
        
        // GSAP Animations
        function initAnimations() {
            // Hero section animations
            gsap.to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8, delay: 0.2 });
            gsap.to('.hero-title', { opacity: 1, y: 0, duration: 0.8, delay: 0.4 });
            gsap.to('.hero-description', { opacity: 1, y: 0, duration: 0.8, delay: 0.6 });
            gsap.to('.hero-cta', { opacity: 1, y: 0, duration: 0.8, delay: 0.8 });
            
            // Animate particles
            gsap.to('.particle', {
                y: -100,
                duration: 10,
                ease: 'none',
                repeat: -1,
                yoyo: true,
                stagger: 0.1,
                yoyoEase: true
            });
            
            // Services section animations
            gsap.registerPlugin(ScrollTrigger);
            gsap.utils.toArray('.service-card').forEach((card, i) => {
                gsap.to(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                        toggleActions: 'play none none none'
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: i * 0.1
                });
            });
        }

        // Section Intro Animation
        gsap.to('.section-intro', {
            scrollTrigger: {
                trigger: '.section-intro',
                start: 'top 80%'
            },
            opacity: 1,
            y: 0,
            duration: 0.8
        });

        // Step Cards Animation
        gsap.utils.toArray('.step-card').forEach((card, index) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%'
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.1
            });
        });

        // FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// FAQ Animation with GSAP
gsap.utils.toArray('.faq-item').forEach((item, index) => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%'
        },
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: index * 0.1
    });
});

// Initial state for FAQ items
gsap.set('.faq-item', { opacity: 0, x: -30 });


// Demo Section Animation
gsap.to('.demo-text', {
    scrollTrigger: {
        trigger: '.demo-section',
        start: 'top 70%'
    },
    opacity: 1,
    x: 0,
    duration: 0.8
});

gsap.to('.demo-visual', {
    scrollTrigger: {
        trigger: '.demo-section',
        start: 'top 70%'
    },
    opacity: 1,
    x: 0,
    duration: 0.8,
    delay: 0.2
});

// Animate demo metrics
gsap.utils.toArray('.demo-metric').forEach((metric, index) => {
    gsap.to(metric, {
        scrollTrigger: {
            trigger: '.demo-section',
            start: 'top 70%'
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.4 + (index * 0.1)
    });
});

// Initial state for demo section
gsap.set('.demo-text', { opacity: 0, x: -50 });
gsap.set('.demo-visual', { opacity: 0, x: 50 });
gsap.set('.demo-metric', { opacity: 0, y: 20 });

        // Custom cursor
        function initCursor() {
            const cursor = document.querySelector('.cursor');
            const cursorDot = document.querySelector('.cursor-dot');
            
            document.addEventListener('mousemove', (e) => {
                gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.3 });
                gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.1 });
            });
            
            document.addEventListener('mouseenter', () => {
                gsap.to(cursor, { opacity: 1 });
                gsap.to(cursorDot, { opacity: 1 });
            });
            
            document.addEventListener('mouseleave', () => {
                gsap.to(cursor, { opacity: 0 });
                gsap.to(cursorDot, { opacity: 0 });
            });
            
            // Scale cursor on clickable elements
            const clickables = document.querySelectorAll('a, button, input, textarea');
            clickables.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    gsap.to(cursor, { width: 40, height: 40, backgroundColor: 'rgba(100, 255, 218, 0.1)' });
                });
                
                el.addEventListener('mouseleave', () => {
                    gsap.to(cursor, { width: 20, height: 20, backgroundColor: 'transparent' });
                });
            });
        }
        
        // Navbar scroll effect
        function initNavbar() {
            window.addEventListener('scroll', () => {
                const navbar = document.getElementById('navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }
        
        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
            initAnimations();
            initCursor();
            initNavbar();
        });
        document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navContainer = document.querySelector('.nav-container');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        // Toggle menu open/closed when hamburger is clicked
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navContainer.classList.toggle('active');
            document.body.classList.toggle('menu-open'); // Prevent scrolling when menu is open
        });
        
        // Close menu when a nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navContainer.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Additional style for preventing body scroll when menu is open
        document.head.insertAdjacentHTML('beforeend', `
            <style>
                body.menu-open {
                    overflow: hidden;
                }
            </style>
        `);
    });