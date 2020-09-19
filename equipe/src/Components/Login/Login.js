import React from "react"
import "./Login.css"
import { Button } from "@material-ui/core"
import { auth, provider } from "../../Firebase/Firebase"
import { useStateValue } from "../../Context/StateProvider"
import { actionTypes } from "../../Context/Reducer"

function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    //GOOGLE OAuth
    return (
        <div className="login">
            <div className="login_container">
                <img src="http://bit.ly/equipe-logo" alt="" />
                <h1>Sign in to Equipe</h1>
                <p>equipe.lsr.in</p>
                <Button onClick={signIn}> Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
