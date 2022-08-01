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
         <div className="wrapper">
         <article className="card">
         <div className="card__media">
           <img src={project.images[0].image} alt="Card image" />
         </div>

         <div className="card__content">
           <header className="card__header">
             <h2 className="card__title">{project.name}</h2>
            
           </header>
           {/* <p class="card__excerpt">{product.description}</p>
           <h2 className="card__price">${product.price}</h2> */}
           {/* <div className="overlay">
           <Link to={{pathname:'/product-details', state: {SliderData: product.SliderData, title: product.name, price: product.price, description: product.description, link:product.link}}}> <button className="view">View</button> </Link>
           </div> */}
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
