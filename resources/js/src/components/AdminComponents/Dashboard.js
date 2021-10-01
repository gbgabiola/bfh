import React from "react";
import ReactDOM from "react-dom";

export function Dashboard() {
    return (
        <>
            <div className="md:relative md:min-h-full md:flex">
                <div className="flex-1 flex-col md:flex-row">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                            <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pr-4">
                                        <div className="rounded-full p-5 bg-green-600">
                                            <i className="fa fa-wallet fa-2x fa-inverse"></i>
                                        </div>
                                    </div>
                                    <div className="flex-1 text-right md:text-center">
                                        <h5 className="font-bold uppercase text-gray-600">
                                            Total Products
                                        </h5>
                                        <h3 className="font-bold text-3xl">
                                            50{" "}
                                            <span className="text-green-500">
                                                <i className="fas fa-caret-up"></i>
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                            <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pr-4">
                                        <div className="rounded-full p-5 bg-pink-600">
                                            <i className="fas fa-users fa-2x fa-inverse"></i>
                                        </div>
                                    </div>
                                    <div className="flex-1 text-right md:text-center">
                                        <h5 className="font-bold uppercase text-gray-600">
                                            Customers
                                        </h5>
                                        <h3 className="font-bold text-3xl">
                                            249{" "}
                                            <span className="text-pink-500">
                                                <i className="fas fa-exchange-alt"></i>
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                            <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pr-4">
                                        <div className="rounded-full p-5 bg-yellow-600">
                                            <i className="fas fa-user-plus fa-2x fa-inverse"></i>
                                        </div>
                                    </div>
                                    <div className="flex-1 text-right md:text-center">
                                        <h5 className="font-bold uppercase text-gray-600">
                                            Deceased
                                        </h5>
                                        <h3 className="font-bold text-3xl">
                                            2{" "}
                                            <span className="text-yellow-600">
                                                <i className="fas fa-caret-up"></i>
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// export default Sidebar;

if (document.getElementById("dashboard")) {
    ReactDOM.render(<Dashboard />, document.getElementById("dashboard"));
}
