import React, { useEffect, useState } from "react";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost/Node%20js/rakib5/Backend/testimonials/listSlider.php"
      )
      .then((res) => setData(res.data));
  }, []);
  console.log(data);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <span className="prev" data-controls="prev">
        <span className="fa fa-chevron-left" />
      </span>
    ),
    nextArrow: (
      <span className="next" data-controls="next">
        <span className="fa fa-chevron-right" />
      </span>
    ),
  };
  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="section-title">Testimonials</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="testimonial-slider-wrap text-center">
              <Slider {...sliderSettings}>
                {data.map((d, i) => {
                  return (
                    <>
                      <div>
                        <div className="item">
                          <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">
                              <div className="testimonial-block text-center">
                                <blockquote className="mb-5">
                                  <p>
                                    {d.content}
                                  </p>
                                </blockquote>
                                <div className="author-info text-center">
                                  <div className="author-pic">
                                    <img
                                      src="images/person-1.png"
                                      alt="Maria Jones"
                                      className="img-fluid"
                                      style={{ margin: "0 auto" }}
                                    />
                                  </div>
                                  <h3 className="font-weight-bold">
                                    {d.name}
                                  </h3>
                                  <span className="position d-block mb-3">
                                    {d.designation}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
