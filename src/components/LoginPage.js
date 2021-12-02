import React, { useState } from 'react'
import LoginForm from './LoginForm';
import MainPage from './MainPage';
import RegisterForm from './RegisterForm';
import UserService from '../services/UserService.js';

function LoginPage() {

  const [user, setUser] = useState({ user_email: "", password: "" });
  const [register, setRegister] = useState([]);
  const [userControl, setUserControl] = useState([])
  const [regControl, setRegControl] = useState(false)

  const Login = details => {
    setUser({
      user_email: details.email,
      password: details.password
    });
  }

  const componentDidMount = () => {
    UserService.Logins(user)
    setUserControl(UserService.state.veri)
  }

  if (user.user_email !== "") {
    componentDidMount();
  }

  const RegisterLogin = details => {
    setRegister(details)
    console.log(details)
    console.log("kayıt oluşturuldu")
  }

  const registerDataRequest = () => {
    UserService.Register(register)
  }

  if (register.email !== "") {
    registerDataRequest();
  }

  const exitHandler = e => {
    if (e == false) {
      setUser({
        user_email: ""
      });
    }
  }

  const Registerpage = e => {
    console.log(e)
    setRegControl(e);
  }

  return (
    <div className="App">
      {
        (user.user_email===userControl.email) ? (
          <MainPage control={exitHandler} />
        ) :
          <div>
            {
              (regControl != true) ? (
                <LoginForm
                  Login={Login}
                  control={Registerpage}
                  error={""} />
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