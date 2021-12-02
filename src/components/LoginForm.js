import React, { useState } from 'react'

function LoginForm({ Login, control, error }) {
    const [details, setDetails] = useState({ email: "",  password: "" });

    const singUpPageHandler = () => {
        control(true)
    }

    const submitHandler = e => {
        e.preventDefault(this);

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">

                <h2>Login</h2>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="Login" />
                <input style={{ marginLeft: 5 }} onClick={singUpPageHandler} type="button" value="Register" />

            </div>
        </form>
    )
}
export default LoginForm;