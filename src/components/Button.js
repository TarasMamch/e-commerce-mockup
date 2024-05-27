export default function Button({ children }) {
    return (
        <button className="border border-black rounded py-1 px-3">
            {children}
        </button>
    )
}