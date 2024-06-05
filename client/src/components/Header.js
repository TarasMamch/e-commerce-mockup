import { SlBasket } from "react-icons/sl";
import Button from "./Button";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="flex items-center justify-between border-b">
            <div className="flex items-center justify-between px-4 h-14 w-11/12">
                <div className="flex item-center space-x-2 text-sm">
                    <div className="text-lg font-bold cursor-pointer">
                        <Link to="/">E-Commerce mockup</Link>
                    </div>
                </div>
            </div>
            <div className="flex mr-10 items-center">
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
                <Link to="/cart">
                    <SlBasket className="m-4 cursor-pointer" />
                </Link>
            </div>
        </div>

    )
}

export default Header