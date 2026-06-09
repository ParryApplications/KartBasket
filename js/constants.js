/**
 * Constants file for KartBasket - Startup Product Showcase
 * Developed by ParryApplications
 */

// Site Configuration
const SITE_CONFIG = {
    SITE_NAME: 'KartBasket',
    DEVELOPER_NAME: 'ParryApplications',
    DEVELOPER_URL: 'https://parryapplications.com/',
    TAGLINE: 'Revolutionizing Your Shopping Experience',
    STARTUP_DESCRIPTION: 'We are a startup dedicated to bringing you the finest curated products with unmatched quality and service.',
    COPYRIGHT_YEAR: new Date().getFullYear()
};

// Featured Product
const FEATURED_PRODUCT = {
    id: 1,
    name: 'Premium Wireless Earbuds Pro',
    category: 'Electronics',
    price: '₹2,999',
    originalPrice: '₹5,999',
    discount: '50% OFF',
    rating: 4.8,
    reviews: 1250,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=800&fit=crop',
    description: 'Experience premium audio quality with our flagship wireless earbuds featuring advanced noise cancellation, crystal-clear sound, and all-day battery life.',
    features: [
        'Active Noise Cancellation (ANC)',
        'Premium Sound Quality with Deep Bass',
        '30-Hour Battery Life with Charging Case',
        'IPX7 Water Resistance',
        'Touch Controls & Voice Assistant',
        'Ergonomic Design for All-Day Comfort'
    ],
    specifications: {
        'Bluetooth Version': '5.3',
        'Driver Size': '10mm Dynamic Drivers',
        'Battery Life': '6 hours (earbuds) + 24 hours (case)',
        'Charging Time': '1.5 hours',
        'Water Resistance': 'IPX7',
        'Weight': '4.5g per earbud'
    },
    amazonLink: 'https://www.amazon.in/dp/B0D1YP5ZNB',
    featured: true
};

// Startup Mission & Values
const STARTUP_INFO = {
    mission: 'To deliver exceptional products that enhance everyday life through innovation and quality.',
    vision: 'Becoming the most trusted name in curated premium products.',
    values: [
        {
            icon: 'bi-shield-check',
            title: 'Quality First',
            description: 'Every product is carefully selected and tested to meet our high standards.'
        },
        {
            icon: 'bi-heart',
            title: 'Customer Focused',
            description: 'Your satisfaction is our priority. We listen, adapt, and deliver.'
        },
        {
            icon: 'bi-lightning-charge',
            title: 'Innovation Driven',
            description: 'We embrace cutting-edge technology to bring you the best products.'
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SITE_CONFIG, FEATURED_PRODUCT, STARTUP_INFO };
}
