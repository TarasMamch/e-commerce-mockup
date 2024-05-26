import { useState, useEffect } from "react"
import TextBar from "../components/TextBar"

function LoginPage() {
    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [submit, setSubmit] = useState(false)

    useEffect(() => {
        console.log(usernameInput, passwordInput)
    }, [submit])

    return (
        <div className="relative">
            <div className="w-96 p-5 bg-cyan-200 absolute">
                <div className="flex flex-col items-center">
                    <p>Login</p>
                </div>
                <TextBar placeholder="Username" input={usernameInput} setInput={setUsernameInput} setSubmit={setSubmit} />
                <TextBar placeholder="Password" input={passwordInput} setInput={setPasswordInput} setSubmit={setSubmit} />
            </div>
        </div>
    )
}

export default LoginPage