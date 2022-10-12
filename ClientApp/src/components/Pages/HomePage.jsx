import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "../CSS/Page.css";
import HomePageFeed from "../Feed/HomePageFeed";
import Widgets from "../Widgets/Widgets";

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
