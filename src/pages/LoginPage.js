import { useState } from "react"
import TextBar from "../components/TextBar"
import Button from "../components/Button"
import { Link } from "react-router-dom"

function LoginPage() {
    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [submit, setSubmit] = useState(false)

    if (submit) {
        console.log(submit)
    }

    return (
        <div className="relative">
            <div className="w-96 p-5 bg-cyan-200 absolute">
                <div className="flex flex-col items-center">
                    <p>Login</p>
                </div>
                <TextBar placeholder="Username" input={usernameInput} setInput={setUsernameInput} />
                <TextBar placeholder="Password" input={passwordInput} setInput={setPasswordInput} setSubmit={setSubmit} />
                <Button>Login</Button>
                <Link to="/signup">Create an Account</Link>
            </div>
        </div>
    )
}

export default LoginPage