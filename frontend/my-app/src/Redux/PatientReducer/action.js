import axios from "axios";
const { PATIENT_REQUEST, PATIENT_FAILURE, PATIENT_SUCCESS, PATIENT_POST, PATIENT_DELETE_REQUEST, PATIENT_DELETE_SUCCESS, PATIENT_DELETE_FAILURE } = require("./actionTypes")
 

export const getPatientData = ()=> async(dispatch)=>{
    dispatch({type:PATIENT_REQUEST});
    try {
        let res = await axios.get('http://localhost:4000/patient');
        dispatch({type:PATIENT_SUCCESS,payload:res.data.msg})
    } catch (error) {
        dispatch({type:PATIENT_FAILURE})
    }
};

export const postPatientData = (item) =>async (dispatch) =>{
    console.log(item);
     await fetch(`http://localhost:4000/patient/add`, {
    method: "POST",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(item),
  })
    .then((res) => {
        res.json();
        dispatch({ type: PATIENT_POST, payload: item });
        return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export const deletePatient = (id)=> (dispatch)=>{
    dispatch({ type: PATIENT_DELETE_REQUEST });
  axios
    .delete(`http://localhost:4000/patient/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      },
    })
    .then(() => {
        dispatch({ type: PATIENT_DELETE_SUCCESS, payload: id })
        alert("Patient Deleted!")
    })
    .catch(() => dispatch({ type: PATIENT_DELETE_FAILURE }));
}