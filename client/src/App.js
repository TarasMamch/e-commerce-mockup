import { Outlet } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"

function App() {
    const [loginStatus, setLoginStatus] = useState(false);

    return (
        <>
            <Header />
            <Outlet loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
        </>
    )
}

export default App