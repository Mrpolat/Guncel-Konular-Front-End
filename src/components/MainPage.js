import React from 'react'

function MainPage({control}) {

    const loginPageHandler = () => {
        control(false)
    }


    return (
        <div>
            polat
            <input style={{ marginLeft: 5 }} onClick={loginPageHandler} type="button" value="exit" />
        </div>
    )
}

export default MainPage