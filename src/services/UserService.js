import React, { useState ,useEffect} from 'react'
import axios from "axios";
import { ReactDOM } from 'react';



const USER_REST_API_URL = 'http://localhost:8081/user/login';


 function Logins(e){

    const [veri, setVeri] = useState([]);

    useEffect(() => {
        
        fetch(USER_REST_API_URL,e)
        .then(res=>res.json())
        .then(
                (Result)=>{
                    this.setVeri(Result);
                }
        )
        console.log("veriler",veri);
    },[]);
console.log("veriler: ",veri)
}

export default  Logins;