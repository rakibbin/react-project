import axios from "axios"
import React, {useEffect, useState} from "react"
import { NavLink } from "react-router-dom"

export default function Products() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost/Node%20js/rakib5/Backend/product1/listProduct.php")
      .then((res) => setData(res.data[0]))
  }, [])
    return(
        <>
        {/* Start Column 1 */}
        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
              {data.title}
              </h2>
              <p className="mb-4">
              {data.content}
              </p>
              <p>
                <NavLink href="shop.html" className="btn">
                {data.btn}
                </NavLink>
              </p>
            </div>
            {/* End Column 1 */}
        </>
    )
}