var hamburgerMenu = document.querySelector('#hamburger-menu');
var closeBtn = document.querySelector('#close-btn');
var navMenu = document.querySelector('header nav');

hamburgerMenu.addEventListener('click', function() {

    navMenu.style.width = '70vw';
});

closeBtn.addEventListener('click', function() {

    navMenu.style.width = '0';
})