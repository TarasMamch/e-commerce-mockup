import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { createRoot } from "react-dom/client";
import App from "./App"
import './index.css'
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Signup from "./pages/SignupPage"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"

const el = document.getElementById('root')
const root = createRoot(el)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
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
            },
            {
                path: "/product:id",
                element: <ProductPage />
            },
            {
                path: "/cartPage",
                element: <CartPage />
            },
            {
                path: "/checkout",
                element: <CheckoutPage />
            }
        ]
    }
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)