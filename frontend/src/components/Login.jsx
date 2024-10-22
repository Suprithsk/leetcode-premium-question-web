

function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-center bg-cover" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="w-full max-w-md p-8 bg-white rounded shadow-md opacity-80">
                <h1 className="mb-2 text-3xl font-bold">Login</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none border-red focus:outline-none focus:shadow-outline" />
                        <p className="text-xs italic text-red-500">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <a className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800" >
                            Sign Up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login