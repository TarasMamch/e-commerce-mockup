import { useLoaderData } from "react-router-dom"
import Button from "../components/Button"
import axios from "axios"

function CartPage() {
    const { data } = useLoaderData()

    const handleDelete = async (id) => {
        const response = await axios.delete(`http://localhost:5000/api/user_products/${id}`)
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
            <Button>
                Proceed to Checkout
            </Button>
        </div>
    )
}

export default CartPage