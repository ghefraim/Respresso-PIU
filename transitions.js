const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        }
    });
    });

    const elements = document.querySelectorAll('.transition-in');

    elements.forEach(function(element) {
    observer.observe(element);
});
