import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope, faFile, faPhone} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faEnvelope, faFile, faGithub, faPhone); 
const Footer = () => {
  

  return (
    <div class="footer-dark">
    <footer>
        <div class="container">
          <h1 className="header-contact">Hire Me</h1>
          <p> Feel free to contact me any time, through any method below.</p>
            <div class="row">
                
                <div className="col item social">
                <div  className="con-att"> 
                  <FontAwesomeIcon className="social-icon" size="4x" icon={faEnvelope} />
                  <a href="mailto: sahil.sharma237333@gmail.com">sahil.sharma237333@gmail.com</a>
                </div>

                <div  className="con-att">
                 <FontAwesomeIcon className="social-icon" size="4x" icon={faPhone} />
                 <p>+17788629056</p>
                </div>
                <div className="con-att"> 
                  <a href="https://www.linkedin.com/in/sahil-sharma-63a14797/"><FontAwesomeIcon className="social-icon" color="white" size="4x" icon={faLinkedin} /></a>
                 
                </div>

                <div  className="con-att">
                 <a href="https://github.com/sahilsh17"><FontAwesomeIcon className="social-icon" size="4x" color="white" icon={faGithub} />
                 </a>
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