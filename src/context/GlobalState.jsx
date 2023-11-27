import React, { createContext, useReducer } from 'react';
import AppReducer from  './AppReducer.js';
import axios from 'axios';


const initialState = {
  products: []
}

export const GlobalContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getProducts = async () => {
        try {
            const res = await axios.get("http://localhost:8080/products");
            const action = {
                type: "GET_PRODUCTS",
                payload: res.data,
              };
              dispatch(action);
        } catch (error) {
            console.error(error);
        };

        return (
            <GlobalContext.Provider
              value={{
                products: state.characters,
                getProducts,
              }}
            >
              {children}
            </GlobalContext.Provider>
          ); 
    };
    
};