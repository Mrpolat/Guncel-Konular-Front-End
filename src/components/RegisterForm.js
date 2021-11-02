import React, { useState } from 'react'
import LoginForm from './LoginForm';

function RegisterForm() {

    const[details, setDetails]=useState({name:"", email:"", password:"",secondpassword:""});
    const[register,setRegister]=useState(false);

    const registerHandler = () =>{
        setRegister(true);
    }
    

  
    return (
        <div>
            {(register===false)?(
        <div className="form-inner">
            
            <h2>Sing Up</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name:e.target.value})} value = {details.name} />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email:e.target.value})} value = {details.email} />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value = {details.password}  />
            </div> 
            <div className="form-group">
            <label htmlFor="password">Password Again:</label>
                <input type="password" name="secondpassword" id="secondpassword" onChange={e => setDetails({...details, secondpassword:e.target.value})} value = {details.secondpassword}  />
            </div> 
            
            <input type="submit" value="Sing Up"/>    
            <input style={{marginLeft:5}} type="button" value="Back" onClick={registerHandler} />
        </div>
        ):<LoginForm/> }
        </div>
    )
}

export default RegisterForm
