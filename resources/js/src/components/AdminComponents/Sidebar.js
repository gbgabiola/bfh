import React from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";

export const Sidebar = () => {
    return (
        <>
            <div className="md:relative md:min-h-full md:flex">
                {/* mobile menu bar */}
                <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                    <a href="#" className="block p-4 text-white font-bold">
                        Balungao Funeral Homes
                    </a>

                    <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Sidebar */}
                <div className="sidebar bg-green-800 text-red-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
                    <a
                        href="/dashboard"
                        className="text-white flex items-center space-x-2 px-4"
                    >
                        <span className="text-2xl font-extrabold text-center">
                            <img
                                className="h-32 md:max-h-screen my--8 md:my--8 mx-8 md:mx-8"
                                src="/images/BFH_Logo.png"
                                alt="Balungao Funeral Homes Logo"
                            />
                        </span>
                    </a>

                    <nav>
                        <hr />
                        <a
                            href="/dashboard"
                            className="md:text-xl font-black block py-2.5 px-4 rounded transition duration-200 hover:bg-red-500 hover:text-black"
                        >
                            Dashboard
                        </a>
                        <a
                            href="/products"
                            className="md:text-xl font-black block py-2.5 px-4 rounded transition duration-200 hover:bg-red-500 hover:text-black"
                        >
                            Products
                        </a>
                        <a
                            href="#"
                            className="md:text-xl font-black block py-2.5 px-4 rounded transition duration-200 hover:bg-red-500 hover:text-black"
                        >
                            Categories
                        </a>
                        <a
                            href=""
                            className="md:text-xl font-black block py-2.5 px-4 rounded transition duration-200 hover:bg-red-500 hover:text-black"
                        >
                            Customers
                        </a>
                        <a
                            href=""
                            className="md:text-xl font-black block py-2.5 px-4 rounded transition duration-200 hover:bg-red-500 hover:text-black"
                        >
                            Deceased
                        </a>
                        <hr />
                        <br />
                        <a
                            href="logout"
                            className="md:text-xl font-black block py-2.5 px-4 rounded transition duration-200 hover:bg-red-500 hover:text-black"
                        >
                            Logout
                        </a>
                    </nav>
                </div>

                {/* <div className="flex-1 p-10 text-2xl font-bold">
                    content goes here
                </div> */}
            </div>
        </>
    );
};

// export default Sidebar;

if (document.getElementById("sidebar")) {
    ReactDOM.render(<Sidebar />, document.getElementById("sidebar"));
}
