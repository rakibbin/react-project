import React from "react";
import Navbar from "./includes/Navbar";
import Footer from "./includes/Footer";
import Banner from "./home/Banner";
import Product from "./home/Product";
import Choose from "./home/Choose";
import Design from "./home/Design";
import Popular from "./home/Popular";
import Testimonials from "./home/Testimonials";
import Blog from "./home/Blog";

function Home(){
    return(
        <>
        <Navbar/>
        <Banner/>
        <Product/>
        <Choose/>
        <Design/>
        <Popular/>
        <Testimonials/>
        <Blog/>
        <Footer/>
        </>
        
    )
}
export default Home