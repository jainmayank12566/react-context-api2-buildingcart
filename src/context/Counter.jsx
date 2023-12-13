import React, { useState } from 'react';
import { createContext } from 'react';
export const CounterContext=createContext(null);
export const CounterProvider=(props)=>{
    const[items,setitems]=useState([]);
    return(
        <CounterContext.Provider value={{items,setitems}}>
            {props.children}
        </CounterContext.Provider>
    )
}