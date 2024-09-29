document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');

    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const animateServices = () => {
        serviceCards.forEach((card) => {
            if (isInViewport(card)) {
                card.classList.add('show');
            }
        });
    };

    // Initial check
    animateServices();

    // Animate on scroll
    window.addEventListener('scroll', animateServices);

    // Add hover effect
    serviceCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.03)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Accessibility improvements
    serviceCards.forEach((card) => {
        const serviceName = card.querySelector('h3').textContent;
        const learnMoreLink = card.querySelector('.learn-more');
        
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Service: ${serviceName}`);
        
        // Keyboard navigation
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                learnMoreLink.click();
            }
        });
    });

    // Simple modal for "Learn More" links
    const createModal = (content, price) => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>${content}</h3>
                <p>This is where you would put more detailed information about the ${content} service.</p>
                <p><strong>Price: ${price}</strong></p>
            </div>
        `;
        document.body.appendChild(modal);

        const closeModal = modal.querySelector('.close-modal');
        closeModal.addEventListener('click', () => {
            modal.remove();
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    };

    // Add click event to "Learn More" links
    const learnMoreLinks = document.querySelectorAll('.learn-more');
    learnMoreLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const card = e.target.closest('.service-card');
            const serviceName = card.querySelector('h3').textContent;
            const price = card.querySelector('.price-tag').textContent;
            createModal(serviceName, price);
        });
    });
});