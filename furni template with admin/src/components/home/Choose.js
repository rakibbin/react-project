import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Choose() {
  const [Choose, setChoose] = useState([]);
  const [chooses, setChooses] = useState({ title: '', content: '', photo: '' });
  useEffect(() => {
    axios
      .get("http://localhost/Node%20js/rakib5/Backend/chooses/listChooses.php")
      .then((res) => { setChoose(res.data); setChooses((res.data)[0]) });
  }, [])

  return (
    <>
      {/* Start Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">{chooses.title}</h2>
              <p>
                {chooses.content}
              </p>
              <div className="row my-5">
                {Choose.map((d, i) => {
                  return (
                    <>
                      {i > 0 ? (
                        <div className="col-6 col-md-6">
                          <div className="feature">
                            <div className="icon">
                              <img
                                src={`http://localhost/Node%20js/rakib5/Backend/images/${d.photo}`}
                                alt="Image"
                                className="imf-fluid"
                              />
                            </div>
                            <h3>{d.title}</h3>
                            <p>
                            {d.content}
                            </p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}

              </div>
            </div>
            <div className="col-lg-5">
              <div className="img-wrap">
                <img
                  src={`http://localhost/Node%20js/rakib5/Backend/images/${chooses.photo}`}
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Why Choose Us Section */}
    </>
  );
}
