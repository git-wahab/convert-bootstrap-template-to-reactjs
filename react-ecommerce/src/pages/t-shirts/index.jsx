import React from "react";
import Header from "../../partials/Header";
import Navbar from "../../partials/Navbar";
import Footer from "../../partials/Footer";
import Tshirts from "./t-shirts";
const tshirtPage = () => {
    return (
        <>
        <Header />
        <Navbar />
        <Tshirts />
        <Footer />
    </>
    )
}

export default tshirtPage;