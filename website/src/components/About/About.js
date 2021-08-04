import logo from '../../logo.svg';
import react from 'react';
import './About.css';
import Progress from '../Progress/Progress'

function About() {
  return (
    <section className="about">
    <div className="section-image">
      <div className="content-wrap">
        <h4>Thunderstrike was born to fill in the gap for Motorcycle Gear for Canadian buyers and redefine the options that are available to the Canadian motorcycle rider.<br></br><br></br>

        We are a Canadian company and are working to create motorcycle gear that is stylish and protective. We are trying to bridge the gap of most brands and websites showing products as unavailable. Pricing has been an important factor in our partner meetings and we have kept the prices affordable. With riding season being so short in Canada we will try out best to meet demands for our clients.<br></br><br></br>
        
        Our mission is to provide affordable but stylish Motorcycle Gear to Canadians. </h4>
        </div>
    </div>
    <div className="section-skills">
  
        <div className="skills">
          <Progress done="70" />
        </div>
        <div className="skills">
          <Progress done="50" />
        </div>
        <div className="skills"> 
          <Progress done="90" />
        </div>
        <div className="skills">
          <Progress done="70" />
        </div>
        <div className="skills">
          <Progress done="70" />
        </div>
      </div>
   
  </section>
  );
}

export default About;
