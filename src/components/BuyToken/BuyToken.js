import React, { Fragment } from "react";
import "./BuyToken.css";
import trending1 from "../../assets/trending-1.png";
import trending2 from "../../assets/trending-2.png";
import trending3 from "../../assets/trending-3.png";
import trending4 from "../../assets/trending-4.png";
import trending5 from "../../assets/trending-5.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import arrow_left from "../../assets/left-arrow.png";
import arrow_right from "../../assets/right-arrow.png";
const BuyToken = (props) => {
  // Owl Carousel
  const options = {
    loop: true,
    margin: 20,
    items: 5,
    dots: false,
    nav: true,
    navSpeed: 500,
    navText: [
      `<img src=${arrow_left} className="img-fluid" alt="">`,
      `<img src=${arrow_right} className="img-fluid" alt="">`,
    ],
    responsiveClass: true,
    responsive: {
      0: {
        stagePadding: 0,
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  };
  return (
    <Fragment>
      {/* <!-- Buy token section --> */}
      <section className="BuyToken__section py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto max-width">
              <div className="row align-content-center justify-content-between">
                <div className="col-12">
                  <div className="d-flex justify-content-between">
                  {/* Buy Tokens & Get Freebitco */}
                    <h1 className="trendingheading">
                      {props.buyHeading}
                    </h1>
                  </div>
                </div>
                  {/* --- */}
                  <div className="col-12">
                  <div className="d-flex justify-content-between">
                  {/* Get freebies when you buy a Token */}
                    <p className="banner__discription trendingsubheading">
                   {props.buyDescription}
                    </p>
                  </div>
                </div>
                  {/* --- */}
                <div className="col-12 mt-4">
                  <div className="row mx-3">
                    <OwlCarousel
                      className="owl-theme trending_slider"
                      {...options}
                    >
                      {/* 1 */}
                      <div className="trending-box shadow-sm my-3">
                        <div className="trending-img">
                          <a href="/e">
                            <img src={trending1} alt="" className="img-fluid" />
                          </a>
                          <div className="Buytoken_text Buytoken_text-1">
                            <h1 className="Buytoken_Span">S</h1>
                          </div>
                        </div>
                        <div className="trending-content">
                          <p className="buytoken-infinity">To Infinity</p>
                        </div>
                      </div>
                      {/* 1 */}
                      <div className="trending-box shadow-sm my-3">
                        <div className="trending-img">
                          <a href="/">
                            <img src={trending2} alt="" className="img-fluid" />
                          </a>
                          <div className="Buytoken_text Buytoken_text-2">
                            <h1 className="Buytoken_Span">C</h1>
                          </div>
                        </div>
                        <div className="trending-content">
                          <p className="buytoken-infinity">To Infinity</p>
                        </div>
                      </div>
                      {/* 1 */}
                      <div className="trending-box shadow-sm my-3">
                        <div className="trending-img">
                          <a href="/">
                            <img src={trending3} alt="" className="img-fluid" />
                          </a>
                          <div className="Buytoken_text Buytoken_text-3">
                            <h1 className="Buytoken_Span">S</h1>
                          </div>
                        </div>
                        <div className="trending-content">
                          <p className="buytoken-infinity">To Infinity</p>
                        </div>
                      </div>
                      {/* 1 */}
                      <div className="trending-box shadow-sm my-3">
                        <div className="trending-img">
                          <a href="/">
                            <img src={trending4} alt="" className="img-fluid" />
                          </a>
                          <div className="Buytoken_text Buytoken_text-4">
                            <h1 className="Buytoken_Span">C</h1>
                          </div>
                        </div>
                        <div className="trending-content">
                          <p className="buytoken-infinity">To Infinity</p>
                        </div>
                      </div>
                      {/* 1 */}
                      <div className="trending-box shadow-sm my-3">
                        <div className="trending-img">
                          <a href="/">
                            <img src={trending5} alt="" className="img-fluid" />
                          </a>
                          <div className="Buytoken_text Buytoken_text-5">
                            <h1 className="Buytoken_Span">C</h1>
                          </div>
                        </div>
                        <div className="trending-content">
                          <p className="buytoken-infinity">To Infinity</p>
                        </div>
                      </div>
                      {/* 1 */}
                      <div className="trending-box shadow-sm my-3">
                        <div className="trending-img">
                          <a href="/">
                            <img src={trending3} alt="" className="img-fluid" />
                          </a>
                          <div className="Buytoken_text Buytoken_text-3">
                            <h1 className="Buytoken_Span">M</h1>
                          </div>
                        </div>
                        <div className="trending-content">
                          <p className="buytoken-infinity">To Infinity</p>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Buy token section --> */}
    </Fragment>
  );
};

export default BuyToken;
