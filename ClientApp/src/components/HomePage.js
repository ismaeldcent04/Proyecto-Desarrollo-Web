import React from "react";
import Sidebar from "./Sidebar";
import "../Page.css";
import HomePageFeed from "./HomePageFeed";
import Widgets from "./Widgets";

function HomePage() {
    return (
        <div className="app">
            {/* Sidebar */}
            <Sidebar />
            {/*Feed */}
            <HomePageFeed />
            {/*Widgets */}
            <Widgets />
        </div>
    );
}

export default HomePage;
