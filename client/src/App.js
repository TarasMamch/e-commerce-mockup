import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import axios from "axios";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        axios.get("http://localhost:5000")
            .then((results) => {
                console.log(results)
            })
    }, [])

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default App