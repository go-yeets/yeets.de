import foo from "../images/parceljs-logo.png"; console.log(foo);


const Footer = () => {

    const template = `
    <footer class="bullets-background violet">
        <div class="container">
            <div class="row"> 
                <div class="col-sm-6 footer-left">
                    <h3>Jobs</h3>
                    <p>Derzeit haben wir keine Festanstellungen zu vergeben, aber wir wollen unser Netzwerk erweitern und sind immer auf der Suche nach Spezialisten, Freaks und Geeks, die das was sie tun mit Herzblut tun! Einfach über das Kontaktformular oben melden oder direkt an <a href="mailto:kontakt@yeets.de">kontakt@yeets.de</a> schreiben.</p>
                </div>
                <div class="col-sm-push-3 col-sm-3 footer-right">
                   <div class="social-media">
                        <img src={foo} alt="test" /> 
                    </div>
                    <div class="legal-protection">
                        <a href="">Impressum</a>
                        <a href="">Datenschutz</a>
                    </div> 
                </div>
            </div>
        </div>
    </footer>
  `;

    return template;
};

export default Footer;