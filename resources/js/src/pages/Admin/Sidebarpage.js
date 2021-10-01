import React from "react";
import { Sidebar } from "../../../src/components/AdminComponents/Sidebar";
import { Dashboard } from "../../../src/components/AdminComponents/Dashboard";

export const Sidebarpage = () => {
    return (
        <div>
            <Sidebar />
            <Dashboard />
        </div>
    );
};
