import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import axios from "axios";
import Products from "./Products";

export default function Product() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost/Node%20js/rakib5/Backend/product2/listProduct.php")
      .then((res) => setData(res.data))
  }, [])
  return (
    <>
      {/* Start Product Section */}
      <div className="product-section">
        <div className="container">
          <div className="row">
            <Products />

            {/* Start Column 2 */}
            {data.map((d, i) => {
              return (
                <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0" key={i}>
                  <a className="product-item" href="cart.html">
                    <img
                      src={`http://localhost/Node%20js/rakib5/Backend/images/${d.photo}`} alt={d.name}
                      className="img-fluid product-thumbnail"
                    />
                    <h3 className="product-title">{d.name}</h3>
                    <strong className="product-price">{d.price}</strong>
                    <span className="icon-cross">
                      <img src="images/cross.svg" className="img-fluid" />
                    </span>
                  </a>
                </div>
              )
            })}
            {/* End Column 2 */}
            
          </div>
        </div>
      </div>
      {/* End Product Section */}
    </>
  );
}
