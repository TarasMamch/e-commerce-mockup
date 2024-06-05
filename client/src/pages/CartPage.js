import { useLoaderData } from "react-router-dom"

function CartPage() {
    const { data } = useLoaderData()

    return (
        <div>Cart</div>
    )
}

export default CartPage