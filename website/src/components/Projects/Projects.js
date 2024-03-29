import React from 'react';  
import  './Projects.css';
import {ProjectList} from './ProjectList';

function Projects() {
  

  return (

    <>
    <div className="project-section">
     <h1 className="project-title">PROJECTS</h1>
    <div className="row card-container">
    {ProjectList.map(project => {
      
      return (
       
        <>
         <div key={project.id} className="wrapper">
         <article className="card">
         <div className="card__media">
           <img src={project.images[0].image} alt="Projects"/>
         </div>

         <div className="card__content">
           <header className="card__header">
             <h2 className="card__title">{project.name}</h2>
            
           </header>
           {/* <p class="card__excerpt">{product.description}</p>
            */}
          
           <a href={project.link}>
          <button className="button-61">View</button> 
          </a>
          
         </div>
         
        </article>
        </div>
       
      </>
      )
      
    })}
   
    
  
  </div>

  </div>
  </>
  );
}

export default Projects;
