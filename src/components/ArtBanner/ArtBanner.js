import React, { Fragment } from "react";
import "./ArtBanner.css";
import bannerright from "../../assets/Art-Banner.png";
const ArtBanner = () => {
  return (
    <Fragment>
      {/* <!-- Section Banner --> */}
      <div className="banner__section bannerArt">
      </div>
      <section className="banner__section1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto max-width">
              <div className="row justify-content-between BannerHight">
                <div className="col-xxl-5 col-lg-6 DisplayFlex">
                  <div className="Banner-content mx-auto">
                    <h4 className="banner__heading">
                    Welcome to the ultimate marketplace for all things art
                    </h4>
                    <p className="banner__discription banner__discriptions">An online space where you can buy or sell any type of artwork, from paintings and drawings in oil-on paper form up through abstract sculptures made out resin & metal - anything goes!</p>
                    <div className="ButtonWrapper">
                      <button className="exploreBtn me-3">Explore More</button>
                      <button className="connectNFT">Connect NFT</button>
                    </div>
                  </div>
                </div>
                {/* <!--  --> */}
                <div className="col-xxl-5 col-lg-6 mt-lg-0 mt-5 DisplayFlex">
                  <div className="">
                    <div className="top_img btop_img">
                      <img src={bannerright} alt="" className="img-fluid img-fluid21" />
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

export default ArtBanner;
