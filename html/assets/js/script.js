//STICKY NAV ON SCROLL

var scrollPosition = window.scrollY;
var navbar = document.getElementsByClassName('navigation');

window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition >= 658) {
        navbar[0].classList.add('sticky');
    } else {
        navbar[0].classList.remove('sticky');
    }
}); 