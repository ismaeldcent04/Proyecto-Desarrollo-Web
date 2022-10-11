import React from "react"
import HomePage from "./Pages/HomePage"
import ExplorePage from "./Pages/ExplorePage"
import ProfilePage from "./Pages/ProfilePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Registrar from "./Feed/Registrar"
import LoginPage from "./Pages/LoginPage"

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} exact></Route>
                    <Route path="/home" element={<HomePage />} exact></Route>
                    <Route path="/explore" element={<ExplorePage />}exact></Route>
                    <Route path="/profile" element={<ProfilePage />}exact></Route>
                </Routes> 
            </BrowserRouter>
        </div>
    );
}

export default App;