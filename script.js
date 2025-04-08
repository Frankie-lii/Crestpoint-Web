document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu elements
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const closeBtn = document.querySelector('.close-menu');

    // Toggle mobile menu
    function toggleMenu() {
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }

    mobileToggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Mobile dropdown functionality
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.nextElementSibling;
            const icon = this.querySelector('i');

            // Close other dropdowns
            document.querySelectorAll('.mobile-dropdown-menu').forEach(menu => {
                if (menu !== dropdown) {
                    menu.classList.remove('active');
                    menu.previousElementSibling.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
                }
            });

            // Toggle current dropdown
            dropdown.classList.toggle('active');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    // Close desktop dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality for mission/vision card
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and content
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');

    const animateTimeline = () => {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemTop < windowHeight * 0.8) {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }
        });
    };

    // Set initial state
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `all 0.5s ease ${index * 0.2}s`;
    });

    // Run on load and scroll
    animateTimeline();
    window.addEventListener('scroll', animateTimeline);

    // Team member hover effect
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.querySelector('.team-photo').style.transform = 'scale(1.05)';
            this.querySelector('.team-photo').style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
        });

        member.addEventListener('mouseleave', function() {
            this.querySelector('.team-photo').style.transform = 'scale(1)';
            this.querySelector('.team-photo').style.boxShadow = 'none';
        });
    });

    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

// Add to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Service card animations
    const serviceCards = document.querySelectorAll('.service-card');

    const animateCards = () => {
        serviceCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight * 0.8) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });

    // Run on load and scroll
    animateCards();
    window.addEventListener('scroll', animateCards);

    // Process step animations
    const steps = document.querySelectorAll('.step');

    const animateSteps = () => {
        steps.forEach(step => {
            const stepTop = step.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (stepTop < windowHeight * 0.7) {
                step.style.opacity = '1';
                step.querySelector('.step-number').style.transform = 'scale(1)';
            }
        });
    };

    // Set initial state
    steps.forEach(step => {
        step.style.opacity = '0';
        step.querySelector('.step-number').style.transform = 'scale(0)';
        step.querySelector('.step-number').style.transition = 'transform 0.5s ease';
    });

    // Run on load and scroll
    animateSteps();
    window.addEventListener('scroll', animateSteps);
});

document.addEventListener('DOMContentLoaded', function() {
    // Testimonial Carousel
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
    }

    prevBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    // Auto-rotate testimonials
    let testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 8000);

    // Pause on hover
    const testimonialContainer = document.querySelector('.testimonials');
    testimonialContainer.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });

    testimonialContainer.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 8000);
    });

    // Partner logo animations
    const partnerLogos = document.querySelectorAll('.partner-logo');

    const animatePartners = () => {
        partnerLogos.forEach((logo, index) => {
            const logoTop = logo.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (logoTop < windowHeight * 0.8) {
                logo.style.opacity = '1';
                logo.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state
    partnerLogos.forEach((logo, index) => {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(20px)';
        logo.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });

    // Run on load and scroll
    animatePartners();
    window.addEventListener('scroll', animatePartners);
});

document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle active class on question
            this.classList.toggle('active');

            // Toggle icon
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');

            // Toggle answer
            const answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }

            // Close other open items
            faqQuestions.forEach(q => {
                if (q !== question && q.classList.contains('active')) {
                    q.classList.remove('active');
                    q.querySelector('i').classList.remove('fa-minus');
                    q.querySelector('i').classList.add('fa-plus');
                    q.nextElementSibling.style.maxHeight = null;
                }
            });
        });
    });

    // Animate claims process steps
    const processSteps = document.querySelectorAll('.step');

    const animateSteps = () => {
        processSteps.forEach(step => {
            const stepTop = step.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (stepTop < windowHeight * 0.8) {
                step.style.opacity = '1';
                step.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state
    processSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        step.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });

    // Run on load and scroll
    animateSteps();
    window.addEventListener('scroll', animateSteps);
});

document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const contactForm = document.getElementById('insurance-contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());

            // Here you would typically send the data to your server
            console.log('Form submitted:', formValues);

            // Show success message
            alert('Thank you for your message! We will contact you shortly.');

            // Reset form
            contactForm.reset();
        });
    }

    // Animate form elements on scroll
    const formGroups = document.querySelectorAll('.form-group');

    const animateForm = () => {
        formGroups.forEach((group, index) => {
            const groupTop = group.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (groupTop < windowHeight * 0.8) {
                group.style.opacity = '1';
                group.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        group.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });

    // Run on load and scroll
    animateForm();
    window.addEventListener('scroll', animateForm);
});