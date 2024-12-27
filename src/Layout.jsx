import React from "react";
import Header from "./components/header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
// import './App.css'
function Layout(){
    return (
        <>
    <Header/>
    <Outlet/>
    {/* outlet is used so that hearder and footer remains intact and outlet can be changed according to input */}
    <Footer/>
        </>
    )
}
export default Layout