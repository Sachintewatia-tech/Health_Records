import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { userLogin } from '../../Redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';
import './Login.css';
const Login = () => {
  const [mail,setMail] = useState('');
  const [password,setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isAuth} = useSelector((store)=>store.AuthReducer);


  const payload = {
    password:password, mail:mail
  }
  const userLog = ()=>{
    dispatch(userLogin(payload));
  }
  useEffect(()=>{
    if(isAuth){
      navigate("/");
      window.location.reload();
    }
  },[isAuth]);
  return (
    <>
    <h1>Login Page</h1>
    <div id='login'>
      <label>Email</label><br />
      <input value={mail} onChange={(e)=>setMail(e.target.value)} type="text" /><br />
      <label>Password</label><br />
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" /><br />
      <button onClick={userLog}>Submit</button>
    </div>
    </>
  )
}

export default Login
