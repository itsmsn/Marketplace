import React, { Fragment } from "react";
import "./EntertainmentBanner.css";
import bannerright from "../../assets/EntertainmentBanner.jpg";
const EntertainmentBanner = () => {
  return (
    <Fragment>
      {/* <!-- Section Banner --> */}
      <div className="banner__section bannerArt bannerEntertainment">
      </div>
      <section className="banner__section1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto max-width">
              <div className="row justify-content-between BannerHight">
                <div className="col-xxl-5 col-lg-6 DisplayFlex">
                  <div className="Banner-content mx-auto">
                    <h4 className="banner__heading">
                    The world's first marketplace for buying and selling entertainment content
                    </h4>
                    <p className="banner__discription banner__discriptions">  Introducing a new way to buy and sell entertainment content.
                     The world's advance NFT marketplace for buying, selling & 
                     collaborating on digital goods like video games, musics 
                     TV shows or even concert tickets! </p>
                    <div className="ButtonWrapper">
                      <button className="exploreBtn me-3">Explore More</button>
                      <button className="connectNFT">Connect NFT</button>
                    </div>
                  </div>
                </div>
                {/* <!--  --> */}
                <div className="col-xxl-5 col-lg-6 mt-lg-0 mt-5 DisplayFlex">
                  <div className="">
                    <div className="top_img">
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

export default EntertainmentBanner;
