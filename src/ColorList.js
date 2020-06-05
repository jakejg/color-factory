import React from 'react';
import './ColorList.css'
import { Link } from 'react-router-dom';

function ColorList({colors}) {
    return (
        <div className="Colors">
            <h1 className="Colors-title">Select a Color</h1>
            <ul className="Colors-list">
                {colors.map(color => <li key={color.hexCode}><Link to={`colors/${color.name}`}>{color.name}</Link></li>)}
            </ul>
            <h2>Or add a <Link to="/colors/new">color</Link></h2>
        </div>
    );
}

export default ColorList;
