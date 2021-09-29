import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import ReactDOM from "react-dom";

export const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/").then((response) => {
            setData(response.data);
        });
    }, []);

    return (
        <>
            <div className="flex-1 flex-col md:flex-row">
                <div className="flex flex-wrap">
                    <div className="w-full p-6">
                        <div className="bg-gradient-to-b from-gray-200 to-gray-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                            <div className="flex justify-between items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="font-black md:text-3xl">
                                        <h1>Products</h1>
                                    </div>
                                </div>
                                <div className="order-last text-right md:text-center">
                                    {/* <button className="rounded-full p-1 md:py-3 md:px-6 sm:py-3 sm:px-6 md:text-xl bg-green-600 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
                                        Add products
                                    </button> */}
                                    <a
                                        href="addproducts"
                                        className="rounded-lg p-1 md:py-3  md:px-6 sm:py-3 sm:px-6 md:text-xl bg-green-600 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                                    >
                                        Add Product
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-8 mx-8">
                <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="table border-2 table-responsive min-w-full text-center">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-xs font-black leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Image
                                    </th>
                                    <th className="px-6 py-3 text-xs font-black leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-xs font-black leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Quantity
                                    </th>
                                    <th className="px-6 py-3 text-xs font-black leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Price
                                    </th>
                                    <th className="px-6 py-3 text-xs font-black leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Category
                                    </th>
                                    <th className="px-6 py-3 text-xs font-black leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Edit
                                    </th>
                                    <th className="px-6 py-3 text-xs font-black leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Delete
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="bg-white">
                                {data.map((row) => {
                                    return (
                                        <tr key={row.id}>
                                            <td
                                                scope="row"
                                                className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                                            >
                                                <div className="flex justify-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img
                                                            className="w-10 h-10 rounded-full"
                                                            src="https://source.unsplash.com/user/erondu"
                                                            alt="admin dashboard ui"
                                                        />
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500 font-medium">
                                                    {row.product_name}
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500 font-medium">
                                                    {row.product_quantity}
                                                </div>
                                            </td>

                                            <td
                                                width="15%"
                                                className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
                                            >
                                                <div className="text-sm leading-5 text-gray-500 font-medium">
                                                    <span>&#8369; </span>
                                                    {row.product_price}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500 font-medium">
                                                    {row.category_id}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                <div className="flex justify-center font-medium">
                                                    <a
                                                        href={
                                                            "updateproducts?" +
                                                            row.id
                                                        }
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-6 h-6 text-blue-400 cursor-pointer"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                <div className="flex justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-6 h-6 text-red-400 cursor-pointer"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        />
                                                    </svg>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                                {/* <tr></tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

// export default Products;

if (document.getElementById("products")) {
    ReactDOM.render(<Products />, document.getElementById("products"));
}
