import logo from '../../logo.svg';
import react from 'react';
import  './Progress.css';

function Progress({done}) {
  return (
   <div className="progress">
     <div className="progress-done" style={{
       opacity: 1,
       width : `${done}%`

     }}>{done}%</div> 
   </div>
  );
}

export default Progress;
