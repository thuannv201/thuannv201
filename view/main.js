// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Skill bars animation on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const skillsSection = document.querySelector('#skills');

const animateSkillBars = () => {
    const skillsSectionTop = skillsSection.offsetTop;
    const skillsSectionHeight = skillsSection.offsetHeight;
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    
    if (scrollTop + windowHeight > skillsSectionTop + 200) {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
        // Remove event listener after animation
        window.removeEventListener('scroll', animateSkillBars);
    }
};

window.addEventListener('scroll', animateSkillBars);

// Contact form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        const errorMsg = window.PortfolioUtils?.LanguageManager?.translate('contact.form.error') || 'Vui lòng điền đầy đủ thông tin!';
        showNotification(errorMsg, 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        const emailErrorMsg = window.PortfolioUtils?.LanguageManager?.translate('contact.form.emailError') || 'Email không hợp lệ!';
        showNotification(emailErrorMsg, 'error');
        return;
    }
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    const sendingText = window.PortfolioUtils?.LanguageManager?.translate('contact.form.sending') || 'Đang gửi...';
    
    submitButton.textContent = sendingText;
    submitButton.disabled = true;
    
    setTimeout(() => {
        const successMsg = window.PortfolioUtils?.LanguageManager?.translate('contact.form.success') || 'Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.';
        showNotification(successMsg, 'success');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        max-width: 400px;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background-color: #10b981; color: white;' : ''}
        ${type === 'error' ? 'background-color: #ef4444; color: white;' : ''}
        ${type === 'info' ? 'background-color: #3b82f6; color: white;' : ''}
    `;
    
    const notificationContent = notification.querySelector('.notification-content');
    notificationContent.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    `;
    
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: inherit;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    const autoRemove = setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    // Close button functionality
    closeButton.addEventListener('click', () => {
        clearTimeout(autoRemove);
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .contact-info, .contact-form');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .project-card,
    .skill-category,
    .contact-info,
    .contact-form {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .project-card.animate-in,
    .skill-category.animate-in,
    .contact-info.animate-in,
    .contact-form.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-link.active {
        color: #6366f1;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    /* Hamburger animation */
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    // Parse HTML to separate text content from tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;
    
    // Extract text content and maintain tag positions
    const textContent = tempDiv.textContent || tempDiv.innerText;
    const htmlStructure = text;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < textContent.length) {
            const currentChar = textContent.charAt(i);
            
            // Build the current text
            const currentText = textContent.substring(0, i + 1);
            
            // Apply HTML structure to the current text
            if (htmlStructure.includes('<span class="highlight">')) {
                const beforeHighlight = 'Xin chào, tôi là ';
                const highlightText = 'Nguyễn Văn Thuần';
                
                if (currentText.length <= beforeHighlight.length) {
                    element.innerHTML = currentText;
                } else {
                    const highlightPart = currentText.substring(beforeHighlight.length);
                    element.innerHTML = beforeHighlight + '<span class="highlight">' + highlightPart + '</span>';
                }
            } else {
                element.innerHTML = currentText;
            }
            
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Use plain text for typing effect, HTML structure will be applied dynamically
        typeWriter(heroTitle, 'Xin chào, tôi là Nguyễn Văn Thuần', 80);
    }
});

// Project links functionality (since they're placeholder links)
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification('Đây là link demo. Trong thực tế, bạn sẽ thay thế bằng link thật của dự án.', 'info');
    });
});

// Social links functionality
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification('Đây là link demo. Hãy thay thế bằng link mạng xã hội thật của bạn.', 'info');
    });
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    transform: translateY(20px);
`;

document.body.appendChild(backToTopButton);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
        backToTopButton.style.transform = 'translateY(0)';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
        backToTopButton.style.transform = 'translateY(20px)';
    }
});

// Back to top functionality
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to back to top button
backToTopButton.addEventListener('mouseenter', () => {
    backToTopButton.style.transform = 'translateY(-5px) scale(1.1)';
});

backToTopButton.addEventListener('mouseleave', () => {
    backToTopButton.style.transform = 'translateY(0) scale(1)';
});
