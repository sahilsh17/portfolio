import React from 'react';
import  './CenterTitle.css';
import {Link} from 'react-scroll'

function CenterTitle() {
  
  return(
  <div id="text_div">
    <div className="center_all">
      <h1 className="custom-subtitle">Building beautiful web experiences</h1>
      <Link to="about" spy={true} smooth={true}> <button className="portfolio-btn">Check my work</button></Link>
     
    </div>
  </div>
  );
}

export default CenterTitle;
