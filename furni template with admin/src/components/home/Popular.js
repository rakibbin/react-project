import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Popular() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost/Node%20js/rakib5/Backend/populars/listPopular.php")
      .then((res) => setData(res.data))
  }, [])
  return (
    <>
      {/* Start Popular Product */}
      <div className="popular-product">
        <div className="container">
          <div className="row">
          {data.map((d, i) => {
                return (
              <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" key={i}>
                <div className="product-item-sm d-flex">
                  <div className="thumbnail">
                    <img
                      src={`http://localhost/Node%20js/rakib5/Backend/images/${d.photo}`}
                      alt={d.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="pt-3">
                    <h3>{d.name}</h3>
                    <p>
                      {d.content}
                    </p>
                    <p>
                      <NavLink href="#">{d.btn}</NavLink>
                    </p>
                  </div>
                </div>
              </div>
                )
            })}
          </div>
        </div>
      </div>
      {/* End Popular Product */}
    </>
  );
}
