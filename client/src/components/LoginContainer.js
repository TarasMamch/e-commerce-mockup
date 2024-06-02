function LoginContainer({ text, children }) {
    return (
        <div className="relative">
            <div className="w-96 p-5 bg-cyan-200 absolute">
                <div className="flex flex-col items-center">
                    <p>{text}</p>
                </div>
                {children}
            </div>
        </div>
    )
}

export default LoginContainer