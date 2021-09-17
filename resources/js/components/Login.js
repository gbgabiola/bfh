import React from "react";
import ReactDOM from "react-dom";

function Login() {
    return (
        <>
            <div class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
                <strong>Log-in</strong>
            </div>
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-normal mb-2"
                    for="username"
                >
                    Username
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="username"
                    type="text"
                    autofocus
                    placeholder="Username"
                />
            </div>
            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-normal mb-2"
                    for="password"
                >
                    Password
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Password"
                    name="password"
                    autocomplete="current-password"
                />
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                    type="submit"
                >
                    Sign In
                </button>
                <a
                    class="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                >
                    Forgot Password?
                </a>
            </div>
        </>
    );
}

export default Login;

if (document.getElementById("login")) {
    ReactDOM.render(<Login />, document.getElementById("login"));
}
