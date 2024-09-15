document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Language switcher
    const englishBtn = document.getElementById('english');
    const arabicBtn = document.getElementById('arabic');

    if (englishBtn) {
        englishBtn.addEventListener('click', () => {
            alert('Switched to English');
        });
    }

    if (arabicBtn) {
        arabicBtn.addEventListener('click', () => {
            alert('Switched to Arabic');
        });
    }

    // Form validation
    const signInForm = document.getElementById('sign-in-form');

    if (signInForm) {
        signInForm.addEventListener('submit', (event) => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!email || !password) {
                alert('Please fill in all fields.');
                event.preventDefault();
            }
        });
    }

    // Function to close the ribbon
    function closeRibbon() {
        const ribbon = document.getElementById('premiumSubscription');
        if (ribbon) {
            ribbon.style.display = 'none'; // Hides the ribbon
        }
    }

    // Add event listener to close button
    const closeBtn = document.querySelector('.close-ribbon-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeRibbon);
    }
    
    // Optionally, check if the ribbon should be shown or hidden
    function checkRibbonStatus() {
        // Example logic to show the ribbon
        // Add logic to determine if the ribbon should be shown
        const ribbon = document.getElementById('premiumSubscription');
        if (ribbon) {
            ribbon.style.display = 'block'; // Ensure ribbon is shown initially
        }
    }

    checkRibbonStatus();
});
