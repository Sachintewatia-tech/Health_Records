import React from 'react';
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deletePatient, getPatientData } from '../../Redux/PatientReducer/action';
import { useNavigate,Link } from 'react-router-dom';
const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoading,isError,data} = useSelector((store)=>store.PatientReducer);
    const {isAuth} = useSelector((store)=>store.AuthReducer);
    const deletePatien = (id)=>{
        if(isAuth){
            dispatch(deletePatient(id));
            alert("deleted!");
        }else{
            navigate('/signup')
        }
    }
    let i=1;
    useEffect(()=>{
        dispatch(getPatientData());
    },[isAuth,deletePatient]);
  return (
   isLoading?<h1>Loading...</h1>:
    <div id='home'>
        <div style={{marginBottom:"15px"}}>
            <h1>Patient Details</h1>
            <Link to={isAuth?'newpatient':'/signup'}>Add More Patient</Link>
        </div>
      <table>
        <thead>
            <tr>
                <th>S.no.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        {
            data.length>0 && data.map((ele)=>{
                return(
                    <tbody key={ele._id}>
                        <tr>
                            <td>{i>=1?i++:i}</td>
                            <td><img style={{width:"70px",height:"70px"}} src={ele.image} alt="image" /></td>
                            <td>{ele.name}</td>
                            <td>{ele.age}</td>
                            <td>{ele.gender}</td>
                            <td>{ele.address}</td>
                            <td><button id='edit'>Edit</button></td>
                            <td><button onClick={()=>deletePatien(ele._id)} id='delete'>Delete</button></td>
                        </tr> 
                    </tbody>
                )
            })
        }
      </table>
    </div>
  )
}

export default Home
