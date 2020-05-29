import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import dribble from "../images/dribble.svg";

const Footer = () => {

    const template = `
    <footer class="bullets-background violet">
        <div class="container">
            <div class="row"> 
                <div class="col-sm-7">
                    <div class="footer-left">
                        <h3>Jobs</h3>
                        <p>Derzeit haben wir keine Festanstellungen zu vergeben, aber wir wollen unser Netzwerk erweitern und sind immer auf der Suche nach Spezialisten, Freaks und Geeks, die das was sie tun mit Herzblut tun! Einfach über das Kontaktformular oben melden oder direkt an <a href="mailto:kontakt@yeets.de">kontakt@yeets.de</a> schreiben.</p>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="footer-right">
                        <div class="social-media">
                            <a href="" class="facebook">
                                <img src="${facebook}" alt="Facebook Icon" />
                            </a> 
                            <a href="" class="twitter">
                                <img src="${twitter}" alt="Twitter Icon" /> 
                            </a>
                            <a href="" class="dribble">
                                <img src="${dribble}" alt="Dribble Icon" /> 
                            </a>
                        </div>
                        <div class="legal-protection">
                            <a href="">Impressum</a>
                            <span>|</span>
                            <a href="">Datenschutz</a>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </footer>
  `;

    return template;
};

export default Footer;