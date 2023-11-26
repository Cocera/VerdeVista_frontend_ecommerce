import React, { createContext, useReducer } from 'react';
import AppReducer from  './AppReducer.js';


const initialState = {
  characters: []
}


export const GlobalContext = createContext(initialState);


export const GlobalProvider = () => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
};