import SearchBar from "../components/SearchBar"

function LoginPage() {
    return (
        <div className="relative">
            <div className="w-96 p-5 bg-cyan-200 absolute">
                <div className="flex flex-col items-center">
                    <p>Login</p>
                </div>
                <SearchBar placeholder="Username" />
                <SearchBar placeholder="Password" />
            </div>
        </div>
    )
}

export default LoginPage