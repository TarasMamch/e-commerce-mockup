import { SlMagnifier } from "react-icons/sl"

function TextBar({ placeholder, input, setInput, setSubmit }) {

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmit(true)
    }

    return (
        <div className="w-full max-w-xl ml-4">
            <form onSubmit={handleSubmit}>
                <input
                    className="pl-3 py-2 w-full border-0 shadow-none"
                    placeholder={placeholder}
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
            </form>
        </div>
    )
}

export default TextBar