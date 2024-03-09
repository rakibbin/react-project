import React from "react";
import Navbar from "./includes/Navbar";
import Banner from "./home/Banner";
import Choose from "./home/Choose";
import Product from "./home/Product";
import Testimonials from "./home/Testimonials";

export default function Service() {
  return (
    <>
    <Navbar/>
    <>
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>Services</h1>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <p>
              <a href="#" className="btn btn-secondary me-2">
                Shop Now
              </a>
              <a href="#" className="btn btn-white-outline">
                Explore
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hero-img-wrap">
            <img src="images/couch.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  &gt;
</>

    <Choose/>
      {/* Start Why Choose Us Section */}
      
      {/* End Why Choose Us Section */}
      {/* Start Product Section */}
      <Product/>
      {/* End Product Section */}
      {/* Start Testimonial Slider */}
      <Testimonials/>
      {/* End Testimonial Slider */}
    </>
  );
}
