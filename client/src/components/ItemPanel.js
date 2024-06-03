import axios from "axios"
import Button from "./Button"
import { Link } from "react-router-dom"

function ItemPanel({ id, name, price, image }) {

    const handleButtonClick = () => {
        axios.post("http://localhost:5000/api/user_products", {
            name,
            price,
            image,
            UserId: 1
        }).then((res) => {
            console.log(res.data)
        })
    }

    return (
        <div className="border h-80 w-4/5 m-3 flex">
            <img src={image} className="cursor-pointer" />
            <div className="flex flex-col ml-5 mt-5 relative">
                <Link to="/product">
                    <p className="font-bold text-4xl mb-10 cursor-pointer">{name}</p>
                    <p className="text-xl cursor-pointer">${price}</p>
                </Link>
                <div className="flex absolute bottom-5 left-0">
                    <Button handleClick={handleButtonClick}>Add to Cart</Button>
                    <Button>Buy Now</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemPanel