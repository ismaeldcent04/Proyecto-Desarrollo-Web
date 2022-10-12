import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "../CSS/Page.css";
import HomePageFeed from "../Feed/HomePageFeed";
import Widgets from "../Widgets/Widgets";
import axios from 'axios';

function HomePage() {
    const config = {
        headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('jwt')
        }
    }
    const obtenerUsuario = async () => {
        axios.get('http://samuelch-001-site1.btempurl.com/api/Usuario/ObtenerUsuario', )
            .then(
                res => {
                    console.log(res);
                },

                err => {
                    console.log(err)
                }
            )
    }
    useEffect(() => {
        obtenerUsuario();
    }, []);
   
    return (
        <div className="app">
            {/* Sidebar */}
            <Sidebar  />
            {/*Feed */}
            <HomePageFeed />
            {/*Widgets */}
            <Widgets />
        </div>
    );
}

export default HomePage;
