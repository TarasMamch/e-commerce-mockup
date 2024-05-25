import { SlBasket, SlMagnifier } from "react-icons/sl";

function Header() {
    return (
        <div className="flex justify-between border-5 bg-cyan-200">
            <div className="m-5">
                E-Commerce mockup
            </div>
            <div className="m-5 flex w-4/12 justify-between">
                <div className="flex items-center mx-10 w-max">
                    <input className="w-full" />
                    <SlMagnifier className="ml-5" />
                </div>
                <SlBasket />
            </div>
        </div>
    )
}

export default Header