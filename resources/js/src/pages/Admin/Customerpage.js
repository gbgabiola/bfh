import React from "react";
import { Sidebar } from "../../components/AdminComponents/Sidebar";
import { Customers } from "../../components/AdminComponents/Customers";

export const Customerpage = () => {
    return (
        <div>
            <Sidebar />
            <Customers />
        </div>
    );
};
