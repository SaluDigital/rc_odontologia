document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.height = '80px';
        } else {
            header.style.padding = '0';
            header.style.height = '100px';
        }
    });

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Testimonials Carousel
let currentTestimonial = 0;
let autoRotateInterval;

function showTestimonial(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');

    if (index >= cards.length) currentTestimonial = 0;
    if (index < 0) currentTestimonial = cards.length - 1;

    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    cards[currentTestimonial].classList.add('active');
    dots[currentTestimonial].classList.add('active');
}

function moveCarousel(direction) {
    currentTestimonial += direction;
    showTestimonial(currentTestimonial);
    resetAutoRotate();
}

function currentSlide(index) {
    currentTestimonial = index;
    showTestimonial(currentTestimonial);
    resetAutoRotate();
}

function autoRotate() {
    currentTestimonial++;
    showTestimonial(currentTestimonial);
}

function resetAutoRotate() {
    clearInterval(autoRotateInterval);
    autoRotateInterval = setInterval(autoRotate, 5000);
}

// Start auto-rotation when page loads
document.addEventListener('DOMContentLoaded', () => {
    showTestimonial(0);
    autoRotateInterval = setInterval(autoRotate, 5000);
});
