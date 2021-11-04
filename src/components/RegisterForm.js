import React, { useState } from 'react'

function RegisterForm({Login, control, error}) {

    const [regDetails, setRegregDetails] = useState({ name: "", email: "", password: "", secondpassword: "" });

    const loginPageHandler = () => {
        control(false)
    }

    const registerHandler = e => {
        e.preventDefault(this);

        Login(regDetails);
    }


    return (
        <form onSubmit={registerHandler}>
            <div className="form-inner">

                <h2>Sign Up</h2>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setRegregDetails({ ...regDetails, name: e.target.value })} value={regDetails.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setRegregDetails({ ...regDetails, email: e.target.value })} value={regDetails.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setRegregDetails({ ...regDetails, password: e.target.value })} value={regDetails.password} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password Again:</label>
                    <input type="password" name="secondpassword" id="secondpassword" onChange={e => setRegregDetails({ ...regDetails, secondpassword: e.target.value })} value={regDetails.secondpassword} />
                </div>

                <input type="submit" value="Sign Up" />
                <input style={{ marginLeft: 5 }} onClick={loginPageHandler} type="button" value="Back" />
            </div>
        </form>
    )
}

export default RegisterForm
