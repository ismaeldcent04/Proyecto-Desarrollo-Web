import React from "react";
import Sidebar from "./Sidebar";
import "../Page.css";
import Feed from "./Feed";
import Widgets from "./Widgets";

function HomePage() {
    return (
        <div className="app">
            {/* Sidebar */}
            <Sidebar />
            {/*Feed */}
            <Feed />
            {/*Widgets */}
            <Widgets />
        </div>
    );
}

export default HomePage;
