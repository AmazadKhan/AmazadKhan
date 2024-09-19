
const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

revealElements.forEach(element => {
    scrollReveal.observe(element);
});
