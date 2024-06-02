import { useEffect, useState } from "react"
import TextBar from "../components/TextBar"
import Button from "../components/Button"
import LoginContainer from "../components/LoginContainer"
import { Link } from "react-router-dom"
import axios from "axios"

function LoginPage() {
    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [submit, setSubmit] = useState(false)

    useEffect(() => {
        if (submit) {
            axios.post("http://localhost:5000/api/users/login", {
                username: usernameInput,
                password: passwordInput,
            }).then((response) => {
                if (response.data.username) {
                    // changeLoginStatus(response.data.username);
                    // changeUserId(response.data.id);
                    // navigate("/")
                    console.log(response.data)
                }
            });
        }
    }, [submit])

    const handleClick = () => {
        setSubmit(true)
    }

    return (
        <LoginContainer text={"Login"}>
            <TextBar placeholder="Username" input={usernameInput} setInput={setUsernameInput} />
            <TextBar placeholder="Password" input={passwordInput} setInput={setPasswordInput} setSubmit={setSubmit} />
            <Button handleClick={handleClick}>Login</Button>
            <Link to="/signup">Create an Account</Link>
        </LoginContainer>
    )
}

export default LoginPage