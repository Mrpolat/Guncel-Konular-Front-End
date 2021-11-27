import React, { useState } from 'react'
import LoginForm from './LoginForm';
import MainPage from './MainPage';
import RegisterForm from './RegisterForm';
import UserService from '../services/UserService.js';
import Logins from '../services/UserService.js';

function LoginPage() {

  const [user, setUser] = useState({ user_name: "", password: "" });
  const [userControl, setUserControl] = useState([])
  const [regControl, setRegControl] = useState(false)

  const Login = details => {
    setUser({
      user_name: details.name,
      password: details.password
    });
  }

  const componentDidMount = () => {
        Logins(user)

    }

  if (user.user_name !== "") {
    componentDidMount();
  }
 
  

  const RegisterLogin = details => {
      console.log(details)
    console.log("kayıt oluşturuldu")
  }

  const Registerpage = e => {
    console.log(e)
    setRegControl(e);
  }

  const exitHandler = e => {
    if (e == false) {
      setUser({
        user_name: ""
      });
    }
  }

  return (
    <div className="App">
      {
        (user.user_name != "") ? (
          <MainPage control={exitHandler} />
        ) :
          <div>
            {
              (regControl != true) ? (
                <LoginForm
                  Login={Login}
                  control={Registerpage}
                  error={"giriş başarısız"} />
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
export default LoginPage;