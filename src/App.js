import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/login",
            element: <LoginPage />
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