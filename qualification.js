document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const animateTimeline = () => {
        timelineItems.forEach((item) => {
            if (isInViewport(item)) {
                item.classList.add('show');
            }
        });
    };

    // Initial check
    animateTimeline();

    // Animate on scroll
    window.addEventListener('scroll', animateTimeline);

    // Add hover effect
    timelineItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // Accessibility improvements
    timelineItems.forEach((item, index) => {
        const year = item.getAttribute('data-year');
        const content = item.querySelector('.timeline-content');
        const title = content.querySelector('h3').textContent;
        
        item.setAttribute('tabindex', '0');
        item.setAttribute('aria-label', `Qualification from ${year}: ${title}`);
        
        // Keyboard navigation
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                item.style.transform = 'scale(1.05)';
            }
        });

        item.addEventListener('blur', () => {
            item.style.transform = 'scale(1)';
        });
    });
});