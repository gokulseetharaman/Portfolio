document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('welcome-dialog');
    const remainButton = document.getElementById('remain-button');
    const portfolioButton = document.getElementById('portfolio-button');

    dialog.style.display = 'flex';

    remainButton.addEventListener('click', () => {
        dialog.style.display = 'none';
    });

    portfolioButton.addEventListener('click', () => {
        window.location.href = 'recruiter.html';
    });

    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        sidebar.classList.toggle('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            sidebar.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });

    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = link.getAttribute('href');
            window.open(url, '_blank', 'noopener,noreferrer') || (window.location.href = url);
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card, .certificate-card, .skill-category, .section h2, .section h3, .education-card, .intern-card').forEach(el => {
        observer.observe(el);
    });
});