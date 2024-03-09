import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Blog() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost/Node%20js/rakib5/Backend/blogs/listBlog.php")
      .then((res) => setData(res.data))
  }, [])

  return (
    <>
      {/* Start Blog Section */}
      <div className="blog-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2 className="section-title">Recent Blog</h2>
            </div>
            <div className="col-md-6 text-start text-md-end">
              <a href="#" className="more">
                View All Posts
              </a>
            </div>
          </div>
          <div className="row">
            {data.map((d, i) => {
              return (
                <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0" key={i}>
                  <div className="post-entry">
                    <a href="#" className="post-thumbnail">
                      <img
                        src={`http://localhost/Node%20js/rakib5/Backend/images//${d.photo}`}
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-content-entry">
                      <h3>
                        <NavLink href="#">{d.title}</NavLink>
                      </h3>
                      <div className="meta">
                        <span>
                          {d.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/* <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img
                    src="images/post-2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">How To Keep Your Furniture Clean</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Robert Fox</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 15, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img
                    src="images/post-3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">Small Space Furniture Apartment Ideas</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">Kristin Watson</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 12, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* End Blog Section */}
    </>
  );
}
