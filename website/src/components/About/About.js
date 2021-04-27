import logo from '../../logo.svg';
import react from 'react';
import './About.css';
import Progress from '../Progress/Progress'

function About() {
  return (
    <div className="about">
      <h1 className="title">ABOUT</h1>
      <div className="skills-section">
        <div className="skills">
          <span>React</span>
          <Progress done="70" />
        </div>
        <div className="skills">
          <span>Angular</span>
          <Progress done="50" />
        </div>
        <div className="skills"> 
          <span>HTML</span>
          <Progress done="90" />
        </div>
        <div className="skills">
          <span>CSS</span>
          <Progress done="70" />
        </div>
        <div className="skills">
          <span>JavaScript</span>
          <Progress done="70" />
        </div>
      </div>

    </div>
  );
}

export default About;
