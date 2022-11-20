// Header Mobil Menu 
const menu = document.querySelector('#menu');
const navbarCollapse = document.querySelector('.navbar-collapse')
const TogglerHamburger = document.querySelector('#hamburger');
const TogglerX = document.querySelector('#close-menu');

TogglerHamburger.addEventListener('click', function() {
    TogglerHamburger.classList.add('d-none');
    TogglerX.classList.remove('d-none');
    TogglerX.classList.add('d-block');
    addOverlay();
})
TogglerX.addEventListener('click', function() {
    TogglerHamburger.classList.add('d-block');
    TogglerHamburger.classList.remove('d-none');
    TogglerX.classList.add('d-none');
    removeOverlay();
})

function addOverlay() {
    menu.classList.add('overlay');
}
function removeOverlay() {
    menu.classList.remove('overlay');
}