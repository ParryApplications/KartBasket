/**
 * KartBasket - Startup Product Showcase
 * Developed by ParryApplications
 * https://parryapplications.com/
 */

// ===================================
// Initialize Application
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadFeaturedProduct();
    loadStartupInfo();
    initializeScrollEffects();
    initializeNavbar();
    updateDynamicContent();
});

// ===================================
// Initialize App
// ===================================
function initializeApp() {
    console.log(`${SITE_CONFIG.SITE_NAME} - Startup Showcase Initialized`);
    console.log(`Developed by ${SITE_CONFIG.DEVELOPER_NAME}`);
}

// ===================================
// Update Dynamic Content from Constants
// ===================================
function updateDynamicContent() {
    // Update site name across the page
    const siteNameElements = document.querySelectorAll('#siteName, #heroSiteName, #aboutSiteName, #footerSiteName, #copyrightSiteName');
    siteNameElements.forEach(element => {
        if (element) {
            element.textContent = SITE_CONFIG.SITE_NAME;
        }
    });
    
    // Update tagline
    const taglineElement = document.getElementById('tagline');
    if (taglineElement) {
        taglineElement.textContent = SITE_CONFIG.TAGLINE;
    }
    
    const footerTaglineElement = document.getElementById('footerTagline');
    if (footerTaglineElement) {
        footerTaglineElement.textContent = SITE_CONFIG.TAGLINE;
    }
    
    // Update startup description
    const startupDescElement = document.getElementById('startupDescription');
    if (startupDescElement) {
        startupDescElement.textContent = SITE_CONFIG.STARTUP_DESCRIPTION;
    }
    
    // Update copyright year
    const copyrightYearElement = document.getElementById('copyrightYear');
    if (copyrightYearElement) {
        copyrightYearElement.textContent = SITE_CONFIG.COPYRIGHT_YEAR;
    }
    
    // Update developer links
    const developerLinks = document.querySelectorAll('#developerLink, #developerLink2');
    developerLinks.forEach(link => {
        if (link) {
            link.href = SITE_CONFIG.DEVELOPER_URL;
            link.textContent = SITE_CONFIG.DEVELOPER_NAME;
        }
    });
}

// ===================================
// Load Featured Product
// ===================================
function loadFeaturedProduct() {
    const product = FEATURED_PRODUCT;
    
    // Update product image
    const productImage = document.getElementById('productImage');
    if (productImage) {
        productImage.src = product.image;
        productImage.alt = product.name;
    }
    
    // Update product details
    const productCategory = document.getElementById('productCategory');
    if (productCategory) {
        productCategory.textContent = product.category;
    }
    
    const productName = document.getElementById('productName');
    if (productName) {
        productName.textContent = product.name;
    }
    
    const productDescription = document.getElementById('productDescription');
    if (productDescription) {
        productDescription.textContent = product.description;
    }
    
    const productPrice = document.getElementById('productPrice');
    if (productPrice) {
        productPrice.textContent = product.price;
    }
    
    const productOriginalPrice = document.getElementById('productOriginalPrice');
    if (productOriginalPrice) {
        productOriginalPrice.textContent = product.originalPrice;
    }
    
    const productDiscount = document.getElementById('productDiscount');
    if (productDiscount) {
        productDiscount.textContent = product.discount;
    }
    
    // Update rating
    const productStars = document.getElementById('productStars');
    if (productStars) {
        productStars.innerHTML = generateStars(product.rating);
    }
    
    const productReviews = document.getElementById('productReviews');
    if (productReviews) {
        productReviews.textContent = `${product.rating} (${product.reviews.toLocaleString()} reviews)`;
    }
    
    // Update buy link
    const productBuyLink = document.getElementById('productBuyLink');
    if (productBuyLink) {
        productBuyLink.href = product.amazonLink;
    }
    
    // Load features
    loadProductFeatures(product.features);
    
    // Load specifications
    loadProductSpecifications(product.specifications);
}

// ===================================
// Load Product Features
// ===================================
function loadProductFeatures(features) {
    const featuresContainer = document.getElementById('productFeatures');
    if (!featuresContainer) return;
    
    featuresContainer.innerHTML = features.map(feature => `
        <div class="col-md-6 col-lg-4">
            <div class="feature-item">
                <i class="bi bi-check-circle-fill text-premium me-2"></i>
                <span>${feature}</span>
            </div>
        </div>
    `).join('');
}

// ===================================
// Load Product Specifications
// ===================================
function loadProductSpecifications(specifications) {
    const specsContainer = document.getElementById('productSpecifications');
    if (!specsContainer) return;
    
    const specsHTML = Object.entries(specifications).map(([key, value]) => `
        <div class="spec-row">
            <div class="spec-label">${key}</div>
            <div class="spec-value">${value}</div>
        </div>
    `).join('');
    
    specsContainer.innerHTML = specsHTML;
}

// ===================================
// Load Startup Info
// ===================================
function loadStartupInfo() {
    // Update mission
    const missionText = document.getElementById('missionText');
    if (missionText) {
        missionText.textContent = STARTUP_INFO.mission;
    }
    
    // Update vision
    const visionText = document.getElementById('visionText');
    if (visionText) {
        visionText.textContent = STARTUP_INFO.vision;
    }
    
    // Load core values
    const coreValuesContainer = document.getElementById('coreValues');
    if (coreValuesContainer) {
        coreValuesContainer.innerHTML = STARTUP_INFO.values.map(value => `
            <div class="col-md-4">
                <div class="value-card">
                    <div class="value-icon">
                        <i class="${value.icon}"></i>
                    </div>
                    <h4>${value.title}</h4>
                    <p>${value.description}</p>
                </div>
            </div>
        `).join('');
    }
}

// ===================================
// Generate Star Rating
// ===================================
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="bi bi-star-fill"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        stars += '<i class="bi bi-star-half"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="bi bi-star"></i>';
    }
    
    return stars;
}

// ===================================
// Initialize Navbar Effects
// ===================================
function initializeNavbar() {
    const navbar = document.querySelector('.premium-nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
    
    // Update active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===================================
// Initialize Scroll Effects
// ===================================
function initializeScrollEffects() {
    // Scroll to top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// Scroll to Top Function
// ===================================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===================================
// Handle Newsletter Subscription
// ===================================
function handleNewsletter(event) {
    event.preventDefault();
    
    const form = event.target;
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput ? emailInput.value : '';
    
    // Simple validation
    if (email && validateEmail(email)) {
        // Show success message
        showNotification('Thank you for subscribing! Stay tuned for updates on our latest products.', 'success');
        
        // Reset form
        if (form.reset) {
            form.reset();
        }
    } else {
        showNotification('Please enter a valid email address.', 'error');
    }
}

// ===================================
// Email Validation
// ===================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===================================
// Show Notification
// ===================================
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'success' ? 'success' : 'danger'} position-fixed top-0 start-50 translate-middle-x mt-3`;
    notification.style.zIndex = '9999';
    notification.style.minWidth = '300px';
    notification.innerHTML = `
        <div class="d-flex align-items-center justify-content-between">
            <span>${message}</span>
            <button type="button" class="btn-close ms-3" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// ===================================
// Lazy Loading Images
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    // Observe all images after products are loaded
    setTimeout(() => {
        const images = document.querySelectorAll('.product-showcase-image img, .about-image img');
        images.forEach(img => imageObserver.observe(img));
    }, 100);
}

// ===================================
// Performance Optimization
// ===================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// Error Handling
// ===================================
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
    // You can add error reporting service here
});

// ===================================
// Console Welcome Message
// ===================================
console.log(`
%c╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║              Welcome to ${SITE_CONFIG.SITE_NAME}                      ║
║         ${SITE_CONFIG.TAGLINE}          ║
║                                                           ║
║              Developed by ${SITE_CONFIG.DEVELOPER_NAME}              ║
║              ${SITE_CONFIG.DEVELOPER_URL}              ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`, 'color: #D4AF37; font-weight: bold; font-size: 12px;');

// ===================================
// Export functions for global use
// ===================================
window.scrollToTop = scrollToTop;
window.handleNewsletter = handleNewsletter;
