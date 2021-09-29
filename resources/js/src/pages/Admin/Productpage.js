import React from "react";
import { Sidebar } from "../../components/AdminComponents/Sidebar";
import { Products } from "../../components/AdminComponents/Products";

export const Productpage = () => {
    return (
        <div>
            <Sidebar />
            <Products />
        </div>
    );
};
