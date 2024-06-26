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
import productLoader from "./loaders/productLoader";
import homeLoader from "./loaders/homeLoader";
import cartLoader from "./loaders/cartLoader";

const el = document.getElementById('root')
const root = createRoot(el)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                loader: homeLoader
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
                path: "/product/:id",
                element: <ProductPage />,
                loader: productLoader
            },
            {
                path: "/cart",
                element: <CartPage />,
                loader: cartLoader
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