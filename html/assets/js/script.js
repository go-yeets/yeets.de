//STICKY NAV ON SCROLL
var scrollPosition = window.scrollY;
var navbar = document.getElementsByClassName('navigation');

window.addEventListener('scroll', function() {
    
    if(window.location.href.indexOf("impressum") > -1) {

    } else if(window.location.href.indexOf("datenschutz") > -1) {
    
    } else {
        scrollPosition = window.scrollY;
    
        if (scrollPosition >= 658) {
            navbar[0].classList.add('sticky');
        } else {
            navbar[0].classList.remove('sticky');
        }
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

//CONTACT_FORM
function submitForm(){
    function _(id){ return document.getElementById(id); }
    _("submit-btn").disabled = true;
    _("submit-btn").innerHTML = "Bitte warten ...";
    _("submit-btn").classList.add("wait");
    _("status").classList.add("wait");
    var formdata = new FormData();
    formdata.append( "name", _("name").value );
    formdata.append( "mail", _("mail").value );
    formdata.append( "message", _("message").value );
    var ajax = new XMLHttpRequest();
    ajax.open( "POST", "form.php" );
    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200) {
            if(ajax.responseText == "success"){
                _("contactform").innerHTML = '<h3>Danke '+_("name").value+', Ihre Nachricht wurde versendet. Wir werden uns in Kürze mit Ihnen in Verbindung setzen.</h3>';
            } else {
                _("status").innerHTML = ajax.responseText;
                _("submit-btn").disabled = false;
            }
        }
    }
    ajax.send( formdata );
}