import React from 'react';
import './About.css';
import Progress from '../Progress/Progress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faTachometerAlt, faLaptop, faRocket } from '@fortawesome/free-solid-svg-icons'


function About() {


  return (
    <>
    <h1 id="about" className="header-about">ABOUT </h1>
    <div  className="icon-container">
      <div className="icon-bar">
         <div className="icon"><FontAwesomeIcon color="#5C5CFF" icon={faTachometerAlt} size='4x'/></div>
         <h3 className='Font-header'>Fast</h3>
         <p>Fast load times and lag free interaction, my highest priority.</p>
      </div>
      
      <div className="icon-bar">
         <div className="icon"><FontAwesomeIcon color="#5C5CFF" icon={faLightbulb} size='4x'/></div>
         <h3 className="Font-header">Responsive</h3>
         <p>Strong preference for easy to use, intuitive UX/UI.</p>
      </div>
      <div className="icon-bar">
      <div className="icon"><FontAwesomeIcon color="#5C5CFF" icon={faLaptop} size='4x'/></div>
      <h3 className="Font-header">Intuitive</h3>
      <p>My layouts will work on any device, big or small.</p>
      </div>
      <div className="icon-bar">
      <div className='icon'><FontAwesomeIcon color="#5C5CFF" icon={faRocket} size='4x'/></div>
      <h3 className="Font-header">Dynamic</h3>
      <p>Websites don't have to be static, I love making pages come to life.</p>
      </div>
      
   </div>
    <section className="about">
    <div className="section-image">
      <div className="content-wrap">
        <div className="image-container"> <img className="image" src="profile.jpg" alt="profile"/></div>
        <p>I am a Front-end developer based out of Surrey, BC, Canada. I have a serious passion for creating fast and responsive websites using the latest technologies.</p>
        </div>
    </div>
    <div className="section-skills">
    <div className="skills"> 
        <div className="skill-name">JavaScript</div> <Progress done="90" />
        </div>
        <div className="skills">
          <div className="skill-name">React</div><Progress done="70" />
        </div>
        <div className="skills">
        <div className="skill-name">HTML</div> <Progress done="70" />
        </div>
        <div className="skills">
        <div className="skill-name">CSS</div> <Progress done="70" />
        
        </div>
        
        <div className="skills">
        <div className="skill-name">Node.js</div> <Progress done="60" />
        
        </div>
        <div className="skills">
        <div className="skill-name">Express.js</div> <Progress done="50" />
        
        </div>
        <div className="skills">
        <div className="skill-name">UI Design</div> <Progress done="50" />
        
        </div>
        <div className="skills">
        <div className="skill-name">Angular</div><Progress done="50" />
        </div>
      </div>
   
  </section>
  </>
  );
}

export default About;
