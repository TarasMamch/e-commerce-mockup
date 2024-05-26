import { SlBasket } from "react-icons/sl";
import SearchBar from "./SearchBar"

function Header() {
    return (
        <div className="flex items-center justify-between border-b">
            <div className="flex items-center justify-between px-4 h-14 w-11/12">
                <div className="flex item-center space-x-2 text-sm">
                    <div className="text-lg font-bold cursor-pointer">
                        E-Commerce mockup
                    </div>
                </div>
                <SearchBar placeholder="Search" />
            </div>
            <div className="mr-10">
                <button className="border border-black rounded py-1 px-3">
                    Login
                </button>
                {/* <SlBasket /> */}
            </div>
        </div>

    )
}

export default Header