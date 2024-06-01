import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import axios from "axios";
import { useEffect } from "react";

function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default App