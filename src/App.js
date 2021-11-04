import React , {useState} from 'react' 
import LoginForm from './components/LoginForm';
import MainPage from './components/MainPage';
import RegisterForm from './components/RegisterForm';

 function App() {
   const adminUser= {
     email:"polat@gmail.com",
     password:"polat44"

   }
  
  const [user,setUser]=useState({name:"", email:""});
  const[error,setError]=useState("");
  const[regControl,setRegControl]=useState(false)
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
  
  const RegisterLogin=details=> {
    console.log(details);
    console.log("kayıt oluşturuldu")

  }
  const Logout = () => {
    setUser({
      name: "",
      email: ""
  
    });
  }
    console.log(regControl)
  console.log(setRegControl)
  const Registerpage = e =>{
    console.log(e)
    setRegControl(e);

  }
  const exitHandler = e =>{
    if(e==false){
      setUser({
        name: "",
        email: ""
    
      });
    }
  }


  console.log(regControl)
  
  return (
    <div className="App">
      {
        (user.name!="")?(
          <MainPage control={exitHandler}/>
        ):
        <div>
        {
          (regControl!=true)?(
            <LoginForm 
            Login={Login} 
            control={Registerpage} 
            error={error}/>
          )
          :
          <RegisterForm Login={RegisterLogin} control={Registerpage}  
          />
        }
        </div>
      }
     
    </div>
  )
}
export default App;