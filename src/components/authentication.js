import React from 'react'

function authentication({Authentication}) {

    const [regDetails, setRegregDetails] = useState({ auth:"" });

    const authHandler = e => {
        e.preventDefault(this);

        Authentication(regDetails);
    }
    return (
        <form onSubmit={authHandler}>
            <div className="form-inner">

                <h2>Authentication</h2>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="auth" id="auth" onChange={e => setRegregDetails({ ...regDetails, auth: e.target.value })} value={regDetails.auth} />
                </div>                
                <input type="submit" value="Sign Up" />
            </div>
        </form>
    )
}

export default authentication
