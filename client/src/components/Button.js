export default function Button({ children, handleClick }) {
    return (
        <button className="border border-black rounded py-1 px-3 mr-5" onClick={handleClick}>
            {children}
        </button>
    )
}