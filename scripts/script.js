// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Page load animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
document.querySelectorAll('.experience-card').forEach(card => {
    card.querySelectorAll('li').forEach((li, index) => {
        li.style.transitionDelay = `${index * 0.1}s`;
    });
});

const listObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.card-list li').forEach(li => listObserver.observe(li));

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
});

// Initialize AOS with custom settings
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-quad',
    offset: 150
});

// Add smooth appear effect for about section
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.25 });

document.querySelectorAll('.about-container').forEach(container => {
    aboutObserver.observe(container);
});