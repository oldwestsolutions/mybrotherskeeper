// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality (to be implemented)
    const setupMobileMenu = () => {
        // This would be expanded in a real implementation
        console.log('Mobile menu functionality ready');
    };

    // Hero image slideshow effect
    const setupHeroSlideshow = () => {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;
        
        // Array of hero background images (would be replaced with actual images)
        const images = [
            'https://via.placeholder.com/1920x1080/E4382D/FFFFFF',
            'https://via.placeholder.com/1920x1080/0C3992/FFFFFF',
            'https://via.placeholder.com/1920x1080/111111/FFFFFF'
        ];
        
        let currentImageIndex = 0;
        
        // Change hero background image every 5 seconds
        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${images[currentImageIndex]}')`;
        }, 5000);
    };

    // Smooth scrolling for anchor links
    const setupSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // Product hover effect
    const setupProductHoverEffects = () => {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            });
        });
    };

    // Scroll animations
    const setupScrollAnimations = () => {
        const sections = document.querySelectorAll('section');
        
        // Simple fade-in animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        sections.forEach(section => {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    };

    // Eastern European decorative element: Add ornamental elements
    const addOrnamentalElements = () => {
        // Function to create a decorative element
        const createOrnament = (className) => {
            const ornament = document.createElement('div');
            ornament.classList.add(className);
            return ornament;
        };
        
        // Add ornaments to headings
        document.querySelectorAll('h2').forEach(heading => {
            if (!heading.classList.contains('no-ornament')) {
                const ornamentLeft = createOrnament('ornament-left');
                const ornamentRight = createOrnament('ornament-right');
                
                // Insert ornaments before and after heading text
                heading.insertBefore(ornamentLeft, heading.firstChild);
                heading.appendChild(ornamentRight);
            }
        });
    };

    // Initialize all functions
    const init = () => {
        setupMobileMenu();
        setupHeroSlideshow();
        setupSmoothScroll();
        setupProductHoverEffects();
        setupScrollAnimations();
        addOrnamentalElements();
        
        console.log('MBK website initialized');
    };

    // Start the application
    init();
}); 