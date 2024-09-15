$(document).ready(function() {
    console.log('DOM fully loaded and parsed');

    // Menu toggle
    $('#menu-toggle').on('click', function() {
        $('#navbarContent').toggleClass('show');
        console.log('Menu toggle clicked');
    });

    // Language switcher
    $('#language-picker').on('click', 'a', function(event) {
        event.preventDefault();
        const lang = $(this).text().trim();
        alert(`Switched to ${lang}`);
        console.log(`Language switched to ${lang}`);
    });

     // Hide premium ribbon function
     window.hidePremiumRibbon = function() {
        var $premiumRibbon = $('#premium');
        if ($premiumRibbon.length) {
            $premiumRibbon.hide();
        } else {
            console.error('Premium ribbon element not found');
        }
    };

    // Close button functionality for premium ribbon
    $('#premium .ribbon-btn').on('click', function(event) {
        event.preventDefault(); // Prevent default action if necessary
        hidePremiumRibbon();
    });
});


