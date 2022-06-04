import React, { Fragment } from "react";
import "./HotCollection.css";
import hotcollection1 from "../../assets/hot-collection-1.png";
import hotcollection2 from "../../assets/hot-collection-2.png";
import hotcollection3 from "../../assets/hot-collection-3.png";
import hotcollection4 from "../../assets/hot-collection-4.png";
import hotcollection5 from "../../assets/hot-collection-5.png";
import hotcollection6 from "../../assets/hot-collection-6.png";
import hotcollection7 from "../../assets/hot-collection-7.png";
import hotcollection8 from "../../assets/hot-collection-8.png";

const HotCollection = (props) => {
  return (
    <Fragment>
      {/* <!-- HotCollection section --> */}
      <section className="HotCollection__section py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto max-width">
              <div className="row align-content-center justify-content-between">
                <div className="col-12">
                  <div className="d-flex justify-content-between px-2">
                  {/* Hot Collections */}
                    <h1 className="trendingheading">{props.bannerHeading}</h1>
                    <div className="s">
                    {/* Explore More */}
                      <button className="exploreBtn trendingbtn">
                       {props.ExploreMore}
                      </button>
                    </div>
                  </div>
                </div>
                  {/* --- */}
                  <div className="col-12">
                  <div className="d-flex justify-content-between">
                  {/* Collect, trade, and enjoy the hottest digital assets related to sports, art, and entertainment. */}
                    <p className="banner__discription trendingsubheading">
                    {props.bannerDiscription}
                    </p>
                  </div>
                </div>
                  {/* --- */}
                {/* <!-- Carousel --> */}
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide mt-4 carousel-HotCollection"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    {/* <!-- 1 --> */}
                    <div className="carousel-item active">
                      <div className="col-12 p-md-3">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection1}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-sm-0 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection2}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-sm-0 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection3}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-sm-0 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection4}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection5}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection6}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection7}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection8}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- 2 --> */}
                    <div className="carousel-item">
                      <div className="col-12 p-3">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection1}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-sm-0 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection2}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-sm-0 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection3}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-sm-0 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection4}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection5}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection6}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection7}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection8}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- 3 --> */}
                    <div className="carousel-item">
                      <div className="col-12 p-3">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection1}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-sm-0 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection2}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-sm-0 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection3}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-sm-0 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection4}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection5}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection6}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection7}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div className="HotCollection-box">
                              <div className="trending-img">
                                <a href="/">
                                  <img
                                    src={hotcollection8}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="HotCollectionImg_text">
                                  <span className="HotCollectionImg_Span">
                                    20 ETH 12/14
                                  </span>
                                  <span className="HotCollectionImg_Span">
                                    Bid 70 ETH
                                  </span>
                                </div>
                              </div>
                              <div className="HotColllection-content">
                                <div className="d-flex justify-content-between">
                                  <p className="HotColllection-Become mb-2">
                                    Become On Nature
                                  </p>
                                  <div className="HotColllection-heart">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="8.431"
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
                                    <span className="textheart-HotColllection">
                                      200
                                    </span>
                                  </div>
                                </div>
                                <div className="startBidWrapper">
                                  <p className="startbid mb-0">Start Bid</p>
                                  <p className="startbid mb-0">Highest Bid</p>
                                </div>
                                <div className="EthWrapper mt-2">
                                  <p className="EthTxt mb-0">30,00 ETH</p>
                                  <p className="EthTxt mb-0">40,00 ETH</p>
                                </div>
                                <button className="place_bid">Place Bid</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End HotCollection Section --> */}
    </Fragment>
  );
};

export default HotCollection;
