import React from "react";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading:false,
    isError : false,
    msg: "",
    isAuth: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") || ""
};

export const reducer = (state=initialState,{type,payload})=>{
    switch (type){
        case LOGIN_REQUEST:
            return {...state,isLoading:true}
        case LOGIN_SUCCESS:
            return {...state,isLoading:false,token: payload?.token,isAuth:true}
        case LOGIN_FAILURE:
            return {...state,isError:true,isAuth: false,msg: payload,isLoading:false}
        default :
        return initialState;
    }
}