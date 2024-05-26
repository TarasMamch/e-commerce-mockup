import { SlMagnifier } from "react-icons/sl"

function SearchBar({ placeholder }) {
    return (
        <div className="w-full max-w-xl ml-4">
            <form>
                <div className="relative">
                    <div className="absolute inset-y-0 flex items-center pl-3">
                        <SlMagnifier className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                        className="pl-10 py-2 w-full border-0 shadow-none"
                        placeholder={placeholder}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar