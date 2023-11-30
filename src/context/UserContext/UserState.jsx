import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer.js';
import axios from 'axios';

const API_URL = "http://localhost:8080/users";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token || null,
  user: null,
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {

  const [state, dispatch] = useReducer(UserReducer, initialState);

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
      };
    } catch (error) {
      console.error(error);
    };
  };

  const getUserInfo = async () => {
    // SI NO HAY TOKEN, MENSAJE TIENES QUE INICIAR SESION
    // PARA QUE SIRVE ESTA? LA ANTERIOR YA ME TRAE AL USUARIO
    // HACER ENDPOINT PARA UTILIZAR ESTE

    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + "/info",
      {
        headers: {
          authorization: token,
        },
      });
    dispatch({
      type: "GET_USER_INFO",
      payload: res.data,
    })
  };

  const logout = async () => {
    // NO ENTIENDO LA LOGICA

    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "/logout",
      {
        headers: {
          authorization: token,
        },
      });

    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });
    if (res.data) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };

  // EL SIGNUP TIENE QUE GENERAR UN TOKEN YA Y GUARDARLO

  const signup = async (newUserValues) => {
    const res = await axios.post(API_URL, newUserValues);
    dispatch({
      type: 'LOGIN',
      payload: res.data
    })
    if (res.data) {
      // localStorage.setItem('token', JSON.stringify(res.data.token));
      localStorage.setItem('user', JSON.stringify(res.data.user));
    };
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
        getUserInfo,
        logout,
        signup
      }}
    >
      {children}
    </UserContext.Provider>
  );
};   