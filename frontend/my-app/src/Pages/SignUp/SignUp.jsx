import React, { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
    const [name,setName] = useState('');
    const [mail,setMail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const payload = {name:name,mail:mail,password:password};
    const userRegister = ()=>{
        if(name!==''&&mail!==''&&password!==''){

            fetch("http://localhost:4000/user/register", {
                method: "POST",
          headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
        .then((res) => res.json())
        .then((res) => {
            alert(`Signup successfully ${res.msg.name}`);
            navigate('/login');
          })
          .catch((err) => {
              console.log(err);
            });
            setName("")
            setMail("");
            setPassword("");
        }else{
            alert("Fill all credentials")
        }
    }
  return (
    <>
    <h1>SignUp Please!</h1>
    <div id='sign'>
      <label>Name</label><br />
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" /><br />
      <label>Email</label><br />
      <input value={mail} onChange={(e)=>setMail(e.target.value)} type="text" /><br />
      <label>Password</label><br />
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" /><br />
      <button onClick={userRegister}>Submit</button>
      <p style={{fontWeight:"normal"}}>Already have an account! <Link to={'/login'}>click here</Link> </p>
    </div>
    </>
  )
}

export default SignUp
