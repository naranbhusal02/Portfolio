document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const skillBars = document.querySelectorAll('.skill-bar');

    // Animate skill bars
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const skill = bar.getAttribute('data-skill');
            bar.style.width = skill;
        });
    }

    // Animate sections on scroll
    function animateSections() {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    // Change header style on scroll
    function styleHeader() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = contactForm.elements.name.value;
        const email = contactForm.elements.email.value;
        const message = contactForm.elements.message.value;

        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });

        // Clear the form
        contactForm.reset();

        // Show a success message (you can replace this with a more user-friendly notification)
        alert('Thank you for your message! I\'ll get back to you soon.');
    });

    // Initial call to set up animations
    animateSkillBars();
    animateSections();
    styleHeader();

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        animateSections();
        styleHeader();
    });
});