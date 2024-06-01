import { useEffect, useState } from "react"
import TextBar from "../components/TextBar"
import Button from "../components/Button"
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
        <div className="relative">
            <div className="w-96 p-5 bg-cyan-200 absolute">
                <div className="flex flex-col items-center">
                    <p>Login</p>
                </div>
                <TextBar placeholder="Username" input={usernameInput} setInput={setUsernameInput} />
                <TextBar placeholder="Password" input={passwordInput} setInput={setPasswordInput} setSubmit={setSubmit} />
                <Button handleClick={handleClick}>Login</Button>
                <Link to="/signup">Create an Account</Link>
            </div>
        </div>
    )
}

export default LoginPage