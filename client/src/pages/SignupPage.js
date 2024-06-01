import { useEffect, useState } from "react"
import TextBar from "../components/TextBar"
import Button from "../components/Button"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

function SignupPage() {
    const [usernameInput, setUsernameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [submit, setSubmit] = useState(false)
    let navigate = useNavigate()

    useEffect(() => {
        if (submit) {
            axios.post("http://localhost:5000/api/users", {
                username: usernameInput,
                email: emailInput,
                password: passwordInput
            }).then((response) => {
                navigate("/")
            })
        }
    }, [submit])

    const handleClick = () => {
        setSubmit(true)
    }

    return (
        <div className="relative">
            <div className="w-96 p-5 bg-cyan-200 absolute">
                <div className="flex flex-col items-center">
                    <p>Create Account</p>
                </div>
                <TextBar placeholder="Username" input={usernameInput} setInput={setUsernameInput} />
                <TextBar placeholder="Email" input={emailInput} setInput={setEmailInput} />
                <TextBar placeholder="Password" input={passwordInput} setInput={setPasswordInput} setSubmit={setSubmit} />
                <Button handleClick={handleClick}>Sign Up</Button>
                <Link to="/login">Login instead</Link>
            </div>
        </div>
    )
}

export default SignupPage