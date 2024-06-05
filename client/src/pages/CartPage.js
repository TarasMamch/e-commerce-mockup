import { useLoaderData, useNavigate, Link } from "react-router-dom"
import Button from "../components/Button"
import axios from "axios"

function CartPage() {
    const { data } = useLoaderData()
    const navigate = useNavigate()

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/user_products/${id}`)
        navigate(0)
    }

    return (
        <div className="flex flex-col">
            {data.map((d) => {
                return (
                    <div key={d.id} className="flex border w-6/12">
                        <img src={d.image} className="h-24" />
                        <div className="m-4 flex flex-col justify-between">
                            <p>{d.name}</p>
                            <p>{d.price}</p>
                        </div>
                        <div>
                            <Button handleClick={() => handleDelete(d.id)}>Delete</Button>
                        </div>
                    </div>
                )
            })}
            <Link to="/checkout">
                <Button>
                    Proceed to Checkout
                </Button>
            </Link>
        </div>
    )
}

export default CartPage