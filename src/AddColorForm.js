import React, { useState } from 'react';
import './ColorList.css'
import { Link } from 'react-router-dom';
import './AddColorForm.css'

function AddColorForm({addColor}) {
    const [color, setColor] = useState({name: '', hexCode: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setColor(color => ({
            ...color,
            [name]: value
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addColor({name: color.name, hexCode: color.hexCode})
    }
    return (
        <form className="AddColor">
            <label htmlFor="color-name">Choose a name for your color </label>
            <input id="color-name" type="text" name='name' value={color.name} onChange={handleChange} /> <br />
            <label htmlFor='hexCode'>Choose color </label>
            <input id="hexCode" type="color" name='hexCode' value={color.hexCode} onChange={handleChange} /> <br />
            <button onClick={handleSubmit}><Link to='/colors'>Select</Link></button>
        </form>
    );
}

export default AddColorForm;
