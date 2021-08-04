import logo from '../../logo.svg';
import {react, useEffect, useState} from 'react';
import  './Progress.css';

function Progress({done}) {

  const [style, setStyle] = useState({});
    setTimeout(() => {
      const newStyle = {opacity: 1, width: `${done}%`};
      setStyle(newStyle);
    }, 1000)
  return (
   <div className="progress">
     <div className="progress-done" style={style}>{done}%</div> 
   </div>
  );
}

export default Progress;
