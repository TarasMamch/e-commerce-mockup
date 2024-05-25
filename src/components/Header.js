import { SlBasket, SlMagnifier } from "react-icons/sl";

function Header() {
    return (
        <div className="flex items-center justify-between border-b">
            <div className="flex items-center justify-between px-4 h-14 w-11/12">
                <div className="flex item-center space-x-2 text-sm">
                    <div className="text-lg font-bold">
                        E-Commerce mockup
                    </div>
                </div>
                <div className="w-full max-w-xl ml-4">
                    <form>
                        <div className="relative">
                            <div className="absolute inset-y-0 flex items-center pl-3">
                                <SlMagnifier className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                className="pl-10 py-2 w-full border-0 shadow-none"
                                placeholder="Search"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="mr-10">
                <SlBasket />
            </div>
        </div>

    )
}

export default Header