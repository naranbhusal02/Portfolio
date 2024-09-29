document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.testimonial-track');
    const items = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.control-btn.prev');
    const nextBtn = document.querySelector('.control-btn.next');
    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showTestimonial(index) {
        currentIndex = index;
        updateCarousel();
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);

    // GSAP Animations
    gsap.from('.section-title', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.testimonial-item', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.control-btn', {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.5
    });

    // Hover animations for control buttons
    const controlBtns = document.querySelectorAll('.control-btn');
    controlBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Auto-play functionality
    let autoplayInterval = setInterval(nextTestimonial, 5000);

    // Pause auto-play on hover
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    testimonialCarousel.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    testimonialCarousel.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextTestimonial, 5000);
    });

    // Initial animation for the first testimonial
    gsap.from('.testimonial-content', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
    });

    // Animation for testimonial change
    function animateTestimonialChange() {
        gsap.to('.testimonial-content', {
            opacity: 0,
            y: -30,
            duration: 0.5,
            ease: 'power3.out',
            onComplete: () => {
                updateCarousel();
                gsap.fromTo('.testimonial-content',
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
                );
            }
        });
    }

    // Update event listeners to use the new animation
    nextBtn.addEventListener('click', () => {
        clearInterval(autoplayInterval);
        nextTestimonial();
        animateTestimonialChange();
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(autoplayInterval);
        prevTestimonial();
        animateTestimonialChange();
    });
});