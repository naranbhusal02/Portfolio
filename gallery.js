document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const seeMoreBtn = document.getElementById('toggle-more');

    // Initially display only 6 items
    const initialItems = 6;
    galleryItems.forEach((item, index) => {
        if (index >= initialItems) {
            item.style.display = 'none';
        }
    });

    // Toggle visibility for extra items
    let showingMore = false;
    seeMoreBtn.addEventListener('click', () => {
        showingMore = !showingMore;
        galleryItems.forEach((item, index) => {
            if (index >= initialItems) {
                item.style.display = showingMore ? 'block' : 'none';
            }
        });
        seeMoreBtn.textContent = showingMore ? 'See Less' : 'See More';
    });

    // Filtering functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter gallery items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});