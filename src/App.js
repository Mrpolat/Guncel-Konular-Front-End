import React , {useState} from 'react' 
import LoginForm from './components/LoginForm';

 function App() {
   const adminUser= {
     email:"polat@gmail.com",
     password:"polat44"

   }
  
  const [user,setUser]=useState({name:"", email:""});
  const[error,setError]=useState("");

  const Login=details=> {
    console.log(details);
    
    if (details.email == adminUser.email && adminUser.password == details.password ){
    console.log("Başarılı...");
    setUser({
      name: details.name,
      email: details.email
  
    });
  }
    else 
    console.log("Başarısız...")
    setError("Giriş Başarısız")
  }


  const Logout = () => {
    setUser({
      name: "",
      email: ""
  
    });
  }


  return (
    <div className="App">
      {(user.email != "")? (
       <div className="welcome">
         <h2>Welcome, <span>{user.name}</span></h2>
         <button onClick={Logout}>Logout</button>
       </div>
      ):
      <LoginForm Login={Login} error={error}/>
      }
    </div>
  )
}
export default App;