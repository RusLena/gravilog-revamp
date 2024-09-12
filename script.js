// jQuery for menu toggle
$(document).ready(function() {
    $('#menu-toggle').on('click', function() {
        $('#nav-menu').toggle(); // Toggle menu visibility
    });
});

$(document).ready(function() {
    $('#english').on('click', function() {
        // Implement the logic to switch to English content
        alert('Switched to English');
    });

    $('#arabic').on('click', function() {
        // Implement the logic to switch to Arabic content
        alert('Switched to Arabic');
    });
});

// Example form validation
$(document).ready(function() {
    $('#sign-in-form').on('submit', function(event) {
        var email = $('#email').val();
        var password = $('#password').val();

        if (!email || !password) {
            alert('Please fill in all fields.');
            event.preventDefault(); // Prevent form submission
        }
    });
});
// Hamburger Menu Toggle
const hamburger = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.navbar-collapse');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Get the modals
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');

// Get the buttons (since we can't change HTML, select by position or text)
const authButtons = document.querySelectorAll('.custom-btn');
const loginBtn = Array.from(authButtons).find(btn => btn.innerText === 'Log In');
const signupBtn = Array.from(authButtons).find(btn => btn.innerText === 'Register');

// Get the close button (for modals)
const closeButtons = document.querySelectorAll('.close');

// Open login modal when the "Log in" button is clicked
loginBtn.addEventListener('click', () => {
    loginModal.classList.add('show');
});

// Open signup modal when the "Sign up" button is clicked
signupBtn.addEventListener('click', () => {
    signupModal.classList.add('show');
});

// Close the modal when the user clicks on the close button
closeButtons.forEach((close) => {
    close.addEventListener('click', () => {
        loginModal.classList.remove('show');
        signupModal.classList.remove('show');
    });
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.classList.remove('show');
    }
    if (event.target === signupModal) {
        signupModal.classList.remove('show');
    }
});


// Initialize Bootstrap Carousel (optional if you need custom control)
const carouselElement = document.querySelector('#carouselExampleCaptions');
const carouselInstance = new bootstrap.Carousel(carouselElement, {
    interval: 3000,  // Change slide every 3 seconds (you can adjust this value)
    ride: 'carousel'
});

// Optional: Add Event Listeners for custom control if needed
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');

// Move to previous slide when "Previous" button is clicked
prevButton.addEventListener('click', () => {
    carouselInstance.prev();
});

// Move to next slide when "Next" button is clicked
nextButton.addEventListener('click', () => {
    carouselInstance.next();
});
