document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('modal');
    const modalBtn = document.querySelector('.fab');
    const closeBtn = document.querySelector('.close');
    const closeBtns = document.querySelectorAll('.close-btn');

    modalBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Smooth scrolling for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Animation on scroll
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.animationDelay = `${section.getAttribute('data-delay') || 0}s`;
        observer.observe(section);
    });

    // Facts section toggle
    const factsBtn = document.querySelector('.facts-btn');
    const factsSection = document.getElementById('facts');

    factsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (factsSection.style.display === 'none' || !factsSection.style.display) {
            factsSection.style.display = 'block';
            factsBtn.textContent = 'Hide Facts';
        } else {
            factsSection.style.display = 'none';
            factsBtn.textContent = 'Key Facts';
        }
    });

    // Initialize modal with a small delay
    setTimeout(() => {
        modal.style.display = 'none';
    }, 3000);
});