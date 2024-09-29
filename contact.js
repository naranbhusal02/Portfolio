document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate section title
    gsap.from('.section-title', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
        },
        opacity: 0,
        y: -50,
        duration: 1,
    });

    // Animate contact info
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
        },
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.3,
    });

    // Animate contact form
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
        },
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.3,
    });

    // Animate decoration elements
    gsap.from('.decoration-element', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
        },
        opacity: 0,
        scale: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
    });

    // Animate form inputs on focus
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.05,
                duration: 0.3,
            });
        });

        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                duration: 0.3,
            });
        });
    });

    // Form submission animation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Animate submit button
        gsap.to('.submit-btn', {
            scale: 0.9,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
        });

        // Here you would typically send the form data to a server
        // For this example, we'll just show a success message
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
        }, 500);
    });

    // Social icons hover animation
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                y: -5,
                scale: 1.1,
                duration: 0.3,
            });
        });

        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                y: 0,
                scale: 1,
                duration: 0.3,
            });
        });
    });
});