import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Design() {
  const [design, setdesign] = useState([]);
  const [data, setdata] = useState({ photo1: '', photo2: '', photo3: '', title: '', content: '', btn: '' });
  useEffect(() => {
    axios
      .get("http://localhost/Node%20js/rakib5/Backend/design/listDesign.php")
      .then((res) => { setdesign(res.data); setdata((res.data)[0]) });
  }, [])
  return (
    <>
      {/* Start We Help Section */}
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src={`http://localhost/Node%20js/rakib5/Backend/images/${data.photo1}`} alt="Untree.co" />
                </div>
                <div className="grid grid-2">
                  <img src={`http://localhost/Node%20js/rakib5/Backend/images/${data.photo2}`} alt="Untree.co" />
                </div>
                <div className="grid grid-3">
                  <img src={`http://localhost/Node%20js/rakib5/Backend/images/${data.photo3}`} alt="Untree.co" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                {data.title}
              </h2>
              <p>
                {data.content}
              </p>
              <ul class="list-unstyled custom-list my-4">
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
							<li>Donec vitae odio quis nisl dapibus malesuada</li>
						</ul>
              <p>
                <a herf="#" className="btn">
                  {data.btn}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End We Help Section */}
    </>
  );
}
