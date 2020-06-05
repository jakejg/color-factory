import React from 'react';
import './ColorDetail.css';
import { Link } from 'react-router-dom';

function ColorDetail({color}) {
  return (
    <div className="ColorDetail" style={{backgroundColor: color.hexCode}}>
        <div className="ColorDetail-text">This is {color.name}! <br />
        <button ><Link className="ColorDetail-link" to='/colors'>Go back</Link></button>
        </div>
       
    </div>
  );
}

export default ColorDetail;

