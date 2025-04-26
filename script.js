document.addEventListener('DOMContentLoaded', function() {
    const openStoreBtn = document.getElementById('openStoreBtn');
    const closeStoreBtn = document.getElementById('closeStoreBtn');
    const storeOverlay = document.getElementById('storeOverlay');
    const toggleLangBtn = document.getElementById('toggleLang');
    const langButtons = document.querySelectorAll('.lang-btn');
    const storeContent = document.getElementById('storeContent');
    const checkoutSection = document.getElementById('checkoutSection');
    const checkoutForm = document.getElementById('checkoutForm');
    const orderConfirmation = document.getElementById('orderConfirmation');
    const orderIdDisplay = document.getElementById('orderId');
    const backToStoreBtn = document.getElementById('backToStore');
    const buyButtons = document.querySelectorAll('.buy-button');
    const shopNowPromoBtn = document.querySelector('.shop-now-promo');
    const shopRelatedButtons = document.querySelectorAll('.shop-related-btn');

    // Open Store
    if (openStoreBtn) {
        openStoreBtn.addEventListener('click', () => {
            storeOverlay.style.display = 'flex';
            storeContent.style.display = 'block';
            checkoutSection.style.display = 'none';
            orderConfirmation.style.display = 'none';
        });
    }

    // Close Store
    if (closeStoreBtn) {
        closeStoreBtn.addEventListener('click', () => {
            storeOverlay.style.display = 'none';
        });
    }

    // Toggle Language
    if (toggleLangBtn) {
        toggleLangBtn.addEventListener('click', () => {
            const currentLang = document.documentElement.lang;
            document.documentElement.lang = currentLang === 'en' ? 'hi' : 'en';
            toggleLangBtn.textContent = currentLang === 'en' ? 'English / हिन्दी' : 'हिन्दी / English';
            // In a real application, you would update the content based on the language.
        });
    }

    // Switch Language in Store
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const lang = button.getAttribute('data-lang');
            // In a real application, you would fetch and display content based on the selected language.
            console.log(`Language switched to: ${lang}`);
        });
    });

    // Simulate "Buy Now" button click
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            storeContent.style.display = 'none';
            checkoutSection.style.display = 'block';
        });
    });

    // Simulate "Shop Now" on Promotion
    if (shopNowPromoBtn) {
        shopNowPromoBtn.addEventListener('click', () => {
            // Simulate navigating to a specific product category
            alert('Navigating to "Show 1" merchandise...');
        });
    }

    // Simulate "Shop Related Merch" buttons
    shopRelatedButtons.forEach(button => {
        button.addEventListener('click', () => {
            const showName = button.getAttribute('data-show');
            alert(`Navigating to merchandise for "${showName}"...`);
            storeOverlay.style.display = 'flex';
            storeContent.style.display = 'block';
            checkoutSection.style.display = 'none';
            orderConfirmation.style.display = 'none';
        });
    });

    // Simulate Checkout Submission
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(event) {
            event.preventDefault();
            checkoutSection.style.display = 'none';
            orderConfirmation.style.display = 'block';
            const orderId = Math.random().toString(36).substring(7).toUpperCase();
            orderIdDisplay.textContent = orderId;
            alert(`Simulated Order Placed! Order ID: ${orderId}`);
            // In a real application, you would process the order data here.
        });
    }

    // Back to Store from Order Confirmation
    if (backToStoreBtn) {
        backToStoreBtn.addEventListener('click', () => {
            storeContent.style.display = 'block';
            checkoutSection.style.display = 'none';
            orderConfirmation.style.display = 'none';
        });
    }
});