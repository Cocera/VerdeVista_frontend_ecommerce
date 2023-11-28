import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer.js';
import axios from 'axios';

const API_URL = "http://localhost:8080/users";

// Meter initial state?
// const initialState = {
//     products: []
// };

export const UserContext = createContext(initialState);

export const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(UserReducer, initialState);

    // METER LLAMADAS DE USER A LA API

    // const getProducts = async () => {
    //     try {
    //         const res = await axios.get(API_URL);
    //         dispatch({
    //             type: 'GET_PRODUCTS',
    //             payload: res.data,
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <UserContext.Provider
            value={{
                // METER VALORES 
            }}
        >
            {children}
        </UserContext.Provider>
    )
}