import React, { Fragment } from "react";
import "./Trending.css";
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
const Trending = (props) => {
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
      {/* <!-- trending section --> */}
      <section className="trending__section py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto max-width">
              <div className="row align-content-center justify-content-between">
                <div className="col-12">
                  <div className="d-flex justify-content-between">
                  {/* Trending Artwork */}
                    <h1 className="trendingheading">{props.TrendingArtwork}</h1>
                    <div className="s">
                      <button className="exploreBtn trendingbtn">
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>
                {/* --- */}
                {/* Explore some of the latest and most popular pieces 
                    of artwork that are trending right now. */}
                <div className="col-12">
                  <div className="d-flex justify-content-between">
                    <p className="banner__discription trendingsubheading">
                    {props.description}
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
                          <a href="/">
                            <img src={trending1} alt="" className="img-fluid" />
                          </a>
                          <div className="trendingImg_text">
                            <span className="trendingImg_Span">
                              20 ETH 12/14
                            </span>
                            <span className="trendingImg_Span">Bid 70 ETH</span>
                          </div>
                        </div>
                        <div className="trending-content">
                          <p className="trending-infinity">To Infinity</p>
                          <div className="box-heart">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.431"
                              height="12.949"
                              viewBox="0 0 14.431 12.949"
                            >
                              <path
                                id="heart"
                                d="M12.366,1.169A3.612,3.612,0,0,0,9.679,0a3.379,3.379,0,0,0-2.11.728,4.318,4.318,0,0,0-.853.891A4.315,4.315,0,0,0,5.863.728,3.378,3.378,0,0,0,3.752,0,3.612,3.612,0,0,0,1.066,1.169,4.2,4.2,0,0,0,0,4.036,5,5,0,0,0,1.333,7.309a28.405,28.405,0,0,0,3.335,3.13c.462.394.986.84,1.53,1.316a.788.788,0,0,0,1.038,0c.544-.476,1.068-.922,1.53-1.316A28.389,28.389,0,0,0,12.1,7.308a5,5,0,0,0,1.332-3.272,4.2,4.2,0,0,0-1.065-2.867Zm0,0"
                                transform="translate(0.5 0.5)"
                                fill="none"
                                stroke="#f14d5d"
                                stroke-width="1"
                              />
                            </svg>
                            <span className="heart-text">200</span>
                          </div>
                        </div>
                      </div>
                      {/* 1 */}
                      <div className="trending-box shadow-sm my-3">
                        <div className="trending-img">
                          <a href="/">
                            <img src={trending2} alt="" className="img-fluid" />
                          </a>
                          <div className="trendingImg_text">
                            <span className="trendingImg_Span">
                              20 ETH 12/14
                            </span>
                            <span className="trendingImg_Span">Bid 70 ETH</span>
                          </div>
                        </div>
                        <div className="trending-content">
                          <p className="trending-infinity">To Infinity</p>
                          <div className="box-heart">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.431"
                              height="12.949"
                              viewBox="0 0 14.431 12.949"
                            >
                              <path
                                id="heart"
                                d="M12.366,1.169A3.612,3.612,0,0,0,9.679,0a3.379,3.379,0,0,0-2.11.728,4.318,4.318,0,0,0-.853.891A4.315,4.315,0,0,0,5.863.728,3.378,3.378,0,0,0,3.752,0,3.612,3.612,0,0,0,1.066,1.169,4.2,4.2,0,0,0,0,4.036,5,5,0,0,0,1.333,7.309a28.405,28.405,0,0,0,3.335,3.13c.462.394.986.84,1.53,1.316a.788.788,0,0,0,1.038,0c.544-.476,1.068-.922,1.53-1.316A28.389,28.389,0,0,0,12.1,7.308a5,5,0,0,0,1.332-3.272,4.2,4.2,0,0,0-1.065-2.867Zm0,0"
                                transform="translate(0.5 0.5)"
                                fill="none"
                                stroke="#f14d5d"
                                stroke-width="1"
                              />
                            </svg>
                            <span className="heart-text">200</span>
                          </div>
                        </div>
                      </div>
                      {/* 1 */}
                      <div className="trending-box shadow-sm my-3">
                        <div className="trending-img">
                          <a href="/">
                            <img src={trending3} alt="" className="img-fluid" />
                          </a>
                          <div className="trendingImg_text">
                            <span className="trendingImg_Span">
                              20 ETH 12/14
                            </span>
                            <span className="trendingImg_Span">Bid 70 ETH</span>
                          </div>
                        </div>
                        <div className="trending-content">
                          <p className="trending-infinity">To Infinity</p>
                          <div className="box-heart">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.431"
                              height="12.949"
                              viewBox="0 0 14.431 12.949"
                            >
                              <path
                                id="heart"
                                d="M12.366,1.169A3.612,3.612,0,0,0,9.679,0a3.379,3.379,0,0,0-2.11.728,4.318,4.318,0,0,0-.853.891A4.315,4.315,0,0,0,5.863.728,3.378,3.378,0,0,0,3.752,0,3.612,3.612,0,0,0,1.066,1.169,4.2,4.2,0,0,0,0,4.036,5,5,0,0,0,1.333,7.309a28.405,28.405,0,0,0,3.335,3.13c.462.394.986.84,1.53,1.316a.788.788,0,0,0,1.038,0c.544-.476,1.068-.922,1.53-1.316A28.389,28.389,0,0,0,12.1,7.308a5,5,0,0,0,1.332-3.272,4.2,4.2,0,0,0-1.065-2.867Zm0,0"
                                transform="translate(0.5 0.5)"
                                fill="none"
                                stroke="#f14d5d"
                                stroke-width="1"
                              />
                            </svg>
                            <span className="heart-text">200</span>
                          </div>
                        </div>
                      </div>
                      {/* 1 */}
                      <div className="trending-box shadow-sm my-3">
                        <div className="trending-img">
                          <a href="/">
                            <img src={trending4} alt="" className="img-fluid" />
                          </a>
                          <div className="trendingImg_text">
                            <span className="trendingImg_Span">
                              20 ETH 12/14
                            </span>
                            <span className="trendingImg_Span">Bid 70 ETH</span>
                          </div>
                        </div>
                        <div className="trending-content">
                          <p className="trending-infinity">To Infinity</p>
                          <div className="box-heart">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.431"
                              height="12.949"
                              viewBox="0 0 14.431 12.949"
                            >
                              <path
                                id="heart"
                                d="M12.366,1.169A3.612,3.612,0,0,0,9.679,0a3.379,3.379,0,0,0-2.11.728,4.318,4.318,0,0,0-.853.891A4.315,4.315,0,0,0,5.863.728,3.378,3.378,0,0,0,3.752,0,3.612,3.612,0,0,0,1.066,1.169,4.2,4.2,0,0,0,0,4.036,5,5,0,0,0,1.333,7.309a28.405,28.405,0,0,0,3.335,3.13c.462.394.986.84,1.53,1.316a.788.788,0,0,0,1.038,0c.544-.476,1.068-.922,1.53-1.316A28.389,28.389,0,0,0,12.1,7.308a5,5,0,0,0,1.332-3.272,4.2,4.2,0,0,0-1.065-2.867Zm0,0"
                                transform="translate(0.5 0.5)"
                                fill="none"
                                stroke="#f14d5d"
                                stroke-width="1"
                              />
                            </svg>
                            <span className="heart-text">200</span>
                          </div>
                        </div>
                      </div>
                      {/* 1 */}
                      <div className="trending-box shadow-sm my-3">
                        <div className="trending-img">
                          <a href="/">
                            <img src={trending5} alt="" className="img-fluid" />
                          </a>
                          <div className="trendingImg_text">
                            <span className="trendingImg_Span">
                              20 ETH 12/14
                            </span>
                            <span className="trendingImg_Span">Bid 70 ETH</span>
                          </div>
                        </div>
                        <div className="trending-content">
                          <p className="trending-infinity">To Infinity</p>
                          <div className="box-heart">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.431"
                              height="12.949"
                              viewBox="0 0 14.431 12.949"
                            >
                              <path
                                id="heart"
                                d="M12.366,1.169A3.612,3.612,0,0,0,9.679,0a3.379,3.379,0,0,0-2.11.728,4.318,4.318,0,0,0-.853.891A4.315,4.315,0,0,0,5.863.728,3.378,3.378,0,0,0,3.752,0,3.612,3.612,0,0,0,1.066,1.169,4.2,4.2,0,0,0,0,4.036,5,5,0,0,0,1.333,7.309a28.405,28.405,0,0,0,3.335,3.13c.462.394.986.84,1.53,1.316a.788.788,0,0,0,1.038,0c.544-.476,1.068-.922,1.53-1.316A28.389,28.389,0,0,0,12.1,7.308a5,5,0,0,0,1.332-3.272,4.2,4.2,0,0,0-1.065-2.867Zm0,0"
                                transform="translate(0.5 0.5)"
                                fill="none"
                                stroke="#f14d5d"
                                stroke-width="1"
                              />
                            </svg>
                            <span className="heart-text">200</span>
                          </div>
                        </div>
                      </div>
                      {/* 1 */}
                      <div className="trending-box shadow-sm my-3">
                        <div className="trending-img">
                          <a href="/">
                            <img src={trending1} alt="" className="img-fluid" />
                          </a>
                          <div className="trendingImg_text">
                            <span className="trendingImg_Span">
                              20 ETH 12/14
                            </span>
                            <span className="trendingImg_Span">Bid 70 ETH</span>
                          </div>
                        </div>
                        <div className="trending-content">
                          <p className="trending-infinity">To Infinity</p>
                          <div className="box-heart">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.431"
                              height="12.949"
                              viewBox="0 0 14.431 12.949"
                            >
                              <path
                                id="heart"
                                d="M12.366,1.169A3.612,3.612,0,0,0,9.679,0a3.379,3.379,0,0,0-2.11.728,4.318,4.318,0,0,0-.853.891A4.315,4.315,0,0,0,5.863.728,3.378,3.378,0,0,0,3.752,0,3.612,3.612,0,0,0,1.066,1.169,4.2,4.2,0,0,0,0,4.036,5,5,0,0,0,1.333,7.309a28.405,28.405,0,0,0,3.335,3.13c.462.394.986.84,1.53,1.316a.788.788,0,0,0,1.038,0c.544-.476,1.068-.922,1.53-1.316A28.389,28.389,0,0,0,12.1,7.308a5,5,0,0,0,1.332-3.272,4.2,4.2,0,0,0-1.065-2.867Zm0,0"
                                transform="translate(0.5 0.5)"
                                fill="none"
                                stroke="#f14d5d"
                                stroke-width="1"
                              />
                            </svg>
                            <span className="heart-text">200</span>
                          </div>
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
      {/* <!-- End trending Section --> */}
    </Fragment>
  );
};

export default Trending;
