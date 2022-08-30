import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope, faFile} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faEnvelope, faFile); 
const Footer = () => {
  

  return (
    <div class="footer-dark">
    <footer>
        <div class="container">
          <h1 className="header-contact">CONTACT</h1>
            <div class="row">
                
                <div className="col item social">

                <div className="con-att"> 
                  <a href="https://www.linkedin.com/in/sahil-sharma-63a14797/"><FontAwesomeIcon className="social-icon" color="white" size="3x" icon={faLinkedin} /></a>
                  <p>Visit my Linkedin Profile</p>
                </div>

                <div  className="con-att"> 
                  <FontAwesomeIcon className="social-icon" size="3x" icon={faEnvelope} />
                  <p>Contact me by my email address: {"\n"}<strong>sahil.sharma237333@gmail.com</strong></p>
                </div>
                
                <div  className="con-att">
                 <FontAwesomeIcon className="social-icon" size="3x" icon={faFile} />
                 <p>Download my Resume</p>
                </div>
                </div>
            </div>
            <p className="copyright">Sahil Sharma © 2022</p>
        </div>
      
    </footer>
</div>
  );
}

export default Footer;