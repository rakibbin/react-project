
import axios from "axios"
import React, {useEffect, useState} from "react"
import { NavLink } from "react-router-dom"

export default function Banner() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost/Node%20js/rakib5/Backend/banners/listBanner.php")
      .then((res) => setData(res.data[0]))
  }, [])
  console.log(data);
  return (
    <>
      
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                {data.title}
                </h1>
                <p className="mb-4">
                {data.content}
                </p>
                <p>
                  <NavLink href="#" className="btn btn-secondary me-2">
                  {data.btn1}
                  </NavLink>
                  <NavLink href="#" className="btn btn-white-outline">
                  {data.btn2}
                  </NavLink>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={`http://localhost/Node%20js/rakib5/Backend/images/${data.photo}`}  className="img-fluid" alt={data.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}
