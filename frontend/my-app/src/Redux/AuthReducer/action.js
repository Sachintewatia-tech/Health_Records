import React from "react";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const userLogin = (payload) => async (dispatch)=>{
    dispatch({type:LOGIN_REQUEST});
    try {
        const response = await fetch('http://localhost:4000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        
        const data = await response.json();
        if (!response.ok) {
       alert(data.msg);
    }
    
    const token = data.token;
    if (token) {
        localStorage.setItem("token", data.token);
        dispatch({type:LOGIN_SUCCESS,payload:data});
        alert("Login Successfully!");
        return data;
      } else {
        dispatch({type:LOGIN_FAILURE,payload:data.msg});
        return data;
      }
} catch (error) {
    console.error('Login failed:', error);
}
}