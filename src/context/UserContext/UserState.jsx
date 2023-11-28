import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer.js';
import axios from 'axios';

const API_URL = "http://localhost:8080/users";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
    token: token ? token : null,
    user: null,
};

export const UserContext = createContext(initialState);

export const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(UserReducer, initialState);

    // METER LLAMADAS DE USER A LA API

    const login = async (userValues) => {
        try {
            const res = await axios.post(API_URL + '/login', userValues);
            dispatch({
                type: 'LOGIN',
                payload: res.data
            })
            if (res.data) {
                localStorage.setItem('token', JSON.stringify(res.data.token));
                localStorage.setItem('user', JSON.stringify(res.data.user));
            }
            console.log(res.data); // ELIMIAR DESPUES
        } catch (error) {
            console.error(error);
        };
    };

    return (
        <UserContext.Provider
          value={{
            token: state.token,
            user: state.user,
            login,
          }}
        >
          {children}
        </UserContext.Provider>
    );
};    