import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Signup from "./pages/SignupPage"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/login",
            element: <LoginPage />
        },
        {
            path: "/signup",
            element: <Signup />
        }
    ])

    return (
        <React.StrictMode>
            <Header />
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}

export default App