import React from "react";
import ReactDOM from "react-dom";

export function Register() {
    return (
        <>
            <div class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
                <strong>Register</strong>
            </div>

            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-normal mb-2"
                    for="firstname"
                >
                    First name
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="user_firstname"
                    type="text"
                    required
                    autofocus
                    placeholder="Enter first name"
                />
                <span id="error-firstname"></span>
            </div>

            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-normal mb-2"
                    for="middlename"
                >
                    Middle name
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="user_middlename"
                    type="text"
                    required
                    autofocus
                    placeholder="Enter middle name"
                />
            </div>

            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-normal mb-2"
                    for="lastname"
                >
                    Last name
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="user_lastname"
                    type="text"
                    required
                    autofocus
                    placeholder="Enter last name"
                />
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
                    required
                    autofocus
                    placeholder="Username"
                />
            </div>
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-normal mb-2"
                    for="password"
                >
                    Password
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    v-model="form.password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                />
            </div>

            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-normal mb-2"
                    for="confirmpassword"
                >
                    Confirm Password
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Confirm Password"
                    id="password_confirmation"
                    name="password_confirmation"
                    required
                />
            </div>

            <div class="flex items-center justify-between">
                <button
                    class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                    type="submit"
                >
                    Register
                </button>
                <a
                    class="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800 text-center"
                    href="login"
                >
                    Already have account? <br />
                    login here!
                </a>
            </div>
        </>
    );
}

// export default Register;

if (document.getElementById("register")) {
    ReactDOM.render(<Register />, document.getElementById("register"));
}
