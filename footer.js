document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate footer sections
    gsap.from('.footer-section', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top bottom-=100px',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2
    });

    // Animate social icons
    gsap.from('.social-icon', {
        scrollTrigger: {
            trigger: '.socials',
            start: 'top bottom-=50px',
            toggleActions: 'play none none reverse'
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
        stagger: 0.1
    });

    // Animate quick links
    gsap.from('.links ul li', {
        scrollTrigger: {
            trigger: '.links',
            start: 'top bottom-=50px',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        stagger: 0.1
    });

    // Animate newsletter form
    gsap.from('.newsletter-input, .newsletter-btn', {
        scrollTrigger: {
            trigger: '.newsletter',
            start: 'top bottom-=50px',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        stagger: 0.1
    });

    // Animate footer bottom
    gsap.from('.footer-bottom', {
        scrollTrigger: {
            trigger: '.footer-bottom',
            start: 'top bottom-=20px',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Handle newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Animate button on submit
        gsap.to('.newsletter-btn', {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1
        });

        // Here you would typically send the form data to a server
        // For this example, we'll just show a success message
        const formData = new FormData(newsletterForm);
        console.log('Newsletter subscription:', Object.fromEntries(formData));

        // Show success message (you can replace this with your own logic)
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });

    // Hover animation for social icons
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, { y: -5, duration: 0.3, ease: 'power2.out' });
        });
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, { y: 0, duration: 0.3, ease: 'power2.out' });
        });
    });

    // Hover animation for quick links
    document.querySelectorAll('.links ul li a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, { x: 5, duration: 0.3, ease: 'power2.out' });
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(link, { x: 0, duration: 0.3, ease: 'power2.out' });
        });
    });
});