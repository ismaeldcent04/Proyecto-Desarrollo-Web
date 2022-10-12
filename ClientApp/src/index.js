import React from "react";
import ReactDOM from "react-dom/client";
import "./components/CSS/index.css";
import App from "./components/App";
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);


