import React, { useState } from 'react';
import './AddNew.css';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postPatientData } from '../../Redux/PatientReducer/action';

const AddNew = () => {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [gender,setGender] = useState('');
    const [address,setAddress] = useState('');
    const [image,setImage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const payload = {
        name:name,
        age:age,
        gender:gender,
        address:address,
        image:image
    }

    const addNewPatient = ()=>{
        if(name!==''&& age!==''&&gender!==''&&address!==''&&image!==''){
            dispatch(postPatientData(payload));
            alert("New patient added!");
            navigate("/");
        }else{
            alert("fill all inputs")
        }
    }
    
  return (
    <>
    <h1>Add new Patient</h1>
    <div className='sign'>
      <label>Name</label><br />
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" /><br />
      <label>Age</label><br />
      <input value={age} onChange={(e)=>setAge(e.target.value)} type="number" /><br />
      <select onChange={(e)=>setGender(e.target.value)}>
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select><br />
      <label>Address</label><br />
      <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text" /><br />
      <label>Image</label><br />
      <input value={image} onChange={(e)=>setImage(e.target.value)} type="url" /><br />
      <button onClick={addNewPatient}>Submit</button>
    </div>
    </>
  )
}

export default AddNew
