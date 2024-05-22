/**
 * Name: Nikunj Lalitkumar Hudka
 * Banner ID: B00959783
 */
import React from "react";
import VerifiedUsers from "./VerifiedUsers";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="flex">
                {/* SIDEBAR */}
                <Sidebar />
                {/* TABLE COMPONENT */}
                <VerifiedUsers />
            </div>
        </>
    );
};

export default Dashboard;
