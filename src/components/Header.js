import { useState, useEffect } from "react"
import { SlBasket } from "react-icons/sl";
import TextBar from "./TextBar"
import Button from "./Button";

function Header() {
    const [searchInput, setSearchInput] = useState("")
    const [submit, setSubmit] = useState(false)

    useEffect(() => {
        // console.log(searchInput)
    }, [submit])

    return (
        <div className="flex items-center justify-between border-b">
            <div className="flex items-center justify-between px-4 h-14 w-11/12">
                <div className="flex item-center space-x-2 text-sm">
                    <div className="text-lg font-bold cursor-pointer">
                        E-Commerce mockup
                    </div>
                </div>
                <TextBar placeholder="Search" input={searchInput} setInput={setSearchInput} setSubmit={setSubmit} />
            </div>
            <div className="mr-10">
                <Button>Login</Button>
                {/* <SlBasket /> */}
            </div>
        </div>

    )
}

export default Header