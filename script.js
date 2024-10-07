$(document).ready(function() {

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
        event.preventDefault(); 
        hidePremiumRibbon();
    });

// Switch to Register Form from "Don't have an account?" link
$('.switch-to-register').on('click', function(e) {
    e.preventDefault();
    $('.loginForm').addClass('d-none');
    $('.registerForm').removeClass('d-none');
    $('#authModalLabel').text('Register');
});

// Switch to Login Form from "Already have an account?" link
$('.switch-to-login').on('click', function(e) {
    e.preventDefault();
    $('.registerForm').addClass('d-none');
    $('.loginForm').removeClass('d-none');
    $('#authModalLabel').text('Log In');
});

// Show Register Form directly when Register Button is clicked
$('#openRegisterModal').on('click', function() {
    $('.loginForm').addClass('d-none');
    $('.registerForm').removeClass('d-none');
    $('#authModalLabel').text('Register');
});

// Show Login Form directly when Log In Button is clicked
$('#openLoginModal').on('click', function() {
    $('.registerForm').addClass('d-none');
    $('.loginForm').removeClass('d-none');
    $('#authModalLabel').text('Log In');
});

});

