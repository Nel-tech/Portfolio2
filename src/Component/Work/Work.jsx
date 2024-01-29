import React, { useEffect, useState } from "react";
import Preloader from "../../Pages/Preloader"
import Nav from "../../Pages/Nav";
import Footer from "../../Pages/Footer";
 import "../../css/style.css";
import Magnetic from "../../Pages/Magnetic";

function Work() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay, replace this with your actual data loading logic
    const fakeDataLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Adjust the time as needed
    };

    fakeDataLoading();
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className="container">
          <Nav />
          <div className="work-container">
            <h1 className="heading">
              Crafting Engaging Experiences, Designing Innovative Solutions,
              Bridging Frontiers.
            </h1>
            <main className="lat__works">
              <p className="lat-title">Latest Works</p>

              <small>
                <div className="work-sect">
                  <div className="img-container">
                    <img
                      src="/images/Designo.png"
                      alt="Designo-Multi-Page"
                      className="img-works"
                    />
                  </div>

                  <div className="work-title">
                    <p>Designo-Multi-Page-Website</p>
                    <div className="horizontal"></div>
                  </div>

                  <div className="button-container">
                    <Magnetic>
                      <div>
                        <a href="#about">
                          <button className="btn-link">Description</button>
                        </a>
                      </div>
                    </Magnetic>

                    <Magnetic>
                      <div>
                        <a href="#a">
                          <button className="btn-link">Live Site</button>
                        </a>
                      </div>
                    </Magnetic>
                  </div>
                </div>

                <div className="work-sect">
                  <div className="img-container">
                    <img
                      src="/images/Designo.png"
                      alt="Designo-Multi-Page"
                      className="img-works"
                    />
                  </div>

                  <div className="work-title">
                    <p>Designo-Multi-Page-Website</p>
                    <div className="horizontal"></div>
                  </div>

                  <div className="button-container">
                    <Magnetic>
                      <div>
                        <a href="#about">
                          <button className="btn-link">Description</button>
                        </a>
                      </div>
                    </Magnetic>

                    <Magnetic>
                      <div>
                        <a href="#a">
                          <button className="btn-link">Live Site</button>
                        </a>
                      </div>
                    </Magnetic>
                  </div>
                </div>

                <div className="work-sect">
                  <div className="img-container">
                    <img
                      src="/images/Designo.png"
                      alt="Designo-Multi-Page"
                      className="img-works"
                    />
                  </div>

                  <div className="work-title">
                    <p>Designo-Multi-Page-Website</p>
                    <div className="horizontal"></div>
                  </div>

                  <div className="button-container">
                    <Magnetic>
                      <div>
                        <a href="#about">
                          <button className="btn-link">Description</button>
                        </a>
                      </div>
                    </Magnetic>

                    <Magnetic>
                      <div>
                        <a href="#a">
                          <button className="btn-link">Live Site</button>
                        </a>
                      </div>
                    </Magnetic>
                  </div>
                </div>

                <div className="work-sect">
                  <div className="img-container">
                    <img
                      src="/images/Designo.png"
                      alt="Designo-Multi-Page"
                      className="img-works"
                    />
                  </div>

                  <div className="work-title">
                    <p>Designo-Multi-Page-Website</p>
                    <div className="horizontal"></div>
                  </div>

                  <div className="button-container">
                    <Magnetic>
                      <div>
                        <a href="#about">
                          <button className="btn-link">Description</button>
                        </a>
                      </div>
                    </Magnetic>

                    <Magnetic>
                      <div>
                        <a href="#a">
                          <button className="btn-link">Live Site</button>
                        </a>
                      </div>
                    </Magnetic>
                  </div>
                </div>
              </small>
            </main>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default Work;
