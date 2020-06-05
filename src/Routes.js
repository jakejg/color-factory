import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import FilterColors from './FilterColors';
import ColorList from './ColorList';
import AddColorForm from './AddColorForm'
import useLocalStorage from './useLocalStorage'

function Routes() {
    const INITIAL_STATE = [
        {name:"Red", hexCode: '#FF0000'},
        {name:"Green", hexCode: '#008000'},
        {name:"Aqua", hexCode: '#00FFFF'}
    ]
    const [colors, setColors ] = useLocalStorage('colors', INITIAL_STATE)

    return (
        <div>
            <Switch>
                <Route exact path='/colors'>   
                    <ColorList colors={colors}/>
                </Route>
                <Route exact path='/colors/new'>
                    <AddColorForm addColor={setColors}/>
                </Route>
                <Route exact path='/colors/:color'>
                    <FilterColors colors={colors} />
                </Route>
                <Route>
                    <Redirect to='/colors' />
                </Route>
            </Switch>
        </div>
    );
}

export default Routes;



