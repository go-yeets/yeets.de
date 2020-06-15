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

//SMOOTH SCROLL TO TOP
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 16);
    }
};

//SMOOTH SCROLL ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});