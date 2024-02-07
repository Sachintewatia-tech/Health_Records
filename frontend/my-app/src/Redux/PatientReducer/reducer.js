import React from "react";
import { PATIENT_DELETE_FAILURE, PATIENT_DELETE_REQUEST, PATIENT_DELETE_SUCCESS, PATIENT_FAILURE, PATIENT_POST, PATIENT_REQUEST, PATIENT_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    data: []
};

export const reducer = (state=initialState,{type,payload})=>{
    switch (type){
        case PATIENT_REQUEST:
            return {...state,isLoading:true,isError:false}
        case PATIENT_SUCCESS:
            return {...state,isLoading:false,isError:false,data:payload}
        case PATIENT_FAILURE:
            return {...state,isLoading:false,isError:true}
        case PATIENT_DELETE_REQUEST:
            return {...state,isLoading:true,isError:false}
        case PATIENT_DELETE_SUCCESS:
            return {...state,isLoading:false,isError:false,data:[...state.data.filter((el)=>el._id!==payload)]}
        case PATIENT_DELETE_FAILURE:
            return {...state,isLoading:false,isError:true}
        case PATIENT_POST:
            return {...state,data:[...state.data,payload]}
        default:
            return initialState;
    }
}