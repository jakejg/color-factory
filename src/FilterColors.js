import ColorDetail from './ColorDetail';
import React from 'react';
import {useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


function FilterColors({colors}) {
    const { color } = useParams();
    const currColor = colors.find(colour => colour.name.toLowerCase() === color.toLowerCase())
    if (!currColor) return <Redirect to='/colors' />

    return (
      <ColorDetail color={currColor} />
    );
  }
  
  export default FilterColors;
  
  