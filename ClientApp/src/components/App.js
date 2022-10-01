import React from "react"
import HomePage from "./Pages/HomePage"
import ExplorePage from "./Pages/ExplorePage"
import ProfilePage from "./Pages/ProfilePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}exact></Route>
                    <Route path="/explore" element={<ExplorePage />}exact></Route>
                    <Route path="/profile" element={<ProfilePage />}exact></Route>
                </Routes> 
            </BrowserRouter>
        </div>
    );
}

export default App;