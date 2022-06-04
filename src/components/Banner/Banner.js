import React, { Fragment } from "react";
import "./Banner.css";
import bannerright from "../../assets/banner-right.png";
const Banner = (props) => {
  return (
    <Fragment>
      {/* <!-- Section Banner --> */}
      <section className="banner__section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto max-width">
              <div className="row justify-content-between BannerHight">
              <div className="col-xxl-5 col-lg-6 DisplayFlex">
                  <div className="Banner-content mx-auto">
                    <h4 className="banner__heading">
                    {/* The ultimate NFT marketplace for digital assets */}
                   {props.banner__heading}
                    </h4>
                    {/* Find everything from unique artwork to sports memorabilia on our easy-to-use platform. */}
                  <p className="banner__discription banner__discriptions">{props.description}</p>
                    <div className="ButtonWrapper">
                    {/* Explore More */}
                      <button className="exploreBtn me-3">{props.ExploreMore}</button>
                      {/* Connect NFT */}
                    <button className="connectNFT">{props.ConnectNFT}</button>
                    </div>
                  </div>
                </div>
                {/* <!--  --> */}
                <div className="col-xxl-5 col-lg-6 mt-lg-0 mt-5 DisplayFlex">
                  <div className="Banner-right-box">
                    <div className="top_img">
                      <img src={bannerright} alt="" className="img-fluid" />
                    </div>
                    <div className="row right_img_content w-100 mt-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="Walking mb-3">Walking On Air</h6>
                        <div className="Banner_heart">
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
                          <span className="ms-2">200</span>
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="">
                          <p className="Start_w3s">Start Bid</p>
                          <p className="Eth_w3">30,00 ETH</p>
                        </div>
                      </div>
                      <div className="col-sm-3 col-6">
                        <p className="Start_w3s">Remaining Time</p>
                        <p className="Eth_w3">20:03:10:29</p>
                      </div>
                      <div className="col-sm-3"></div>
                      <div className="s">
                        <button className="place_bid_btn">Place Bid</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--  --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Section Banner --> */}
    </Fragment>
  );
};

export default Banner;
