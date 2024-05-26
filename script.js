// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-item a');

    // Change navbar background color when scrolling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Add hover effect to navigation links
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#ff6347';
        });
        link.addEventListener('mouseleave', () => {
            link.style.color = '';
        });
    });
});
