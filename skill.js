document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    const skillBars = document.querySelectorAll('.skill-progress');

    const animateSkillCards = () => {
        skillCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.2}s`;
            }, 100);
        });
    };

    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = `${progress}%`;
        });
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillCards();
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.1
    });

    observer.observe(document.querySelector('#skills'));

    // Hover effect and tooltip for skill cards
    skillCards.forEach(card => {
        const skillName = card.getAttribute('data-skill');
        const progressBar = card.querySelector('.skill-progress');
        const progress = progressBar.getAttribute('data-progress');

        const tooltip = document.createElement('div');
        tooltip.classList.add('skill-tooltip');
        tooltip.textContent = `${skillName}: ${progress}%`;
        card.appendChild(tooltip);

        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05) translateY(-10px)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });

        // Accessibility improvements
        card.setAttribute('aria-label', `${skillName}: ${progress}% proficiency`);
        progressBar.setAttribute('role', 'progressbar');
        progressBar.setAttribute('aria-valuenow', progress);
        progressBar.setAttribute('aria-valuemin', '0');
        progressBar.setAttribute('aria-valuemax', '100');
    });
});