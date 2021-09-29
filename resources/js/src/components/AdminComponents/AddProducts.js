import React from "react";
import ReactDOM from "react-dom";

export const AddProducts = () => {
    return (
        <div className="max-w-full">
            <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
                <strong>Add Products</strong>
            </div>

            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="productname"
                >
                    Product Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="product_name"
                    type="text"
                    required
                    autofocus
                    placeholder="Enter Product Name"
                />
                <span id="error-firstname"></span>
            </div>

            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="price"
                >
                    Price
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="product_price"
                    type="number"
                    required
                    autofocus
                    placeholder="Enter Product Price"
                />
            </div>

            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="quantity"
                >
                    Quantity
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="product_quantity"
                    type="number"
                    required
                    autofocus
                    placeholder="Enter Quantity"
                />
            </div>

            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="size"
                >
                    Size
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="product_size"
                    type="text"
                    required
                    autofocus
                    placeholder="Enter Size"
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="category"
                >
                    Category
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter Category"
                    name="category_id"
                    required
                />
            </div>

            <div className="flex items-center justify-between">
                <button
                    className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </div>
    );
};
// export default AddProducts;

if (document.getElementById("addproducts")) {
    ReactDOM.render(<AddProducts />, document.getElementById("addproducts"));
}
