import React, { createContext, useReducer } from 'react';
import ProductReducer from  './ProductReducer.js';
import axios from 'axios';

const API_URL = "http://localhost:8080/products";

const initialState = {
    products: []
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({children}) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = async () => {
        try {
            const res = await axios.get(API_URL);
            dispatch({
                type: 'GET_PRODUCTS',
                payload: res.data,
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ProductContext.Provider
          value={{
            products: state.products,

            getProducts,
          }}
        >
          {children}
        </ProductContext.Provider>
    );

};