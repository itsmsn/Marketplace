import React, { Fragment } from "react";
import "./CreateAndSell.css";
import SellNowTopImg from "../../assets/SellNow_TopImg-1.png";
import SellNowTopImg2 from "../../assets/SellNow_TopImg-2.png";
import SellNowTopImg3 from "../../assets/SellNow_TopImg-3.png";
import SellNowTopImg4 from "../../assets/SellNow_TopImg-4.png";
import sellnowleft1 from "../../assets/sellnow-left-1.png";
import sellnowleft2 from "../../assets/sellnow-left-2.png";
import sellnowleft3 from "../../assets/sellnow-left-3.png";
import sellnowleft4 from "../../assets/sellnow-left-4.png";

const CreateAndSell = () => {
  return (
    <Fragment>
      {/* <!-- SellNow section --> */}
      <section className="SellNow__section py-5">
        <div className="container-fluid pb-5">
          <div className="row">
            <div className="col-11 mx-auto SellNow-max-width">
              <div className="row align-content-center justify-content-between">
                <div className="col-12">
                  <h1 className="trendingheading text-white">
                    Create And Sell New
                  </h1>
                </div>
             {/* --- */}
             <div className="col-12">
                  <div className="d-flex justify-content-between">
                  {/* trendingsubheading */}
                    <p className="banner__discription banner__discriptions">
                    NFTs are the future of collectibles. You can now sell your own artwork on our platform, and it's easier than ever to get into this new market because there is no need for large amounts - just start with what you want in order to make some tokens!
                    </p>
                  </div>
                </div>
                  {/* --- */}
                <div className="col-12 mt-4">
                  <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-sm-6 mt-xl-0 mt-4">
                      <div className="SellNow_Box">
                        <div className="SellNow_TopImg">
                          <img
                            src={SellNowTopImg}
                            alt=""
                            className="img-fluid SellNowTopImg"
                          />
                        </div>
                        <div className="SellNow_Content">
                          <div className="d-flex">
                            <div className="leftImg_w3 me-3">
                              <img
                                src={sellnowleft1}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="right_txtw3">
                              <p className="BecomeTxt">Become On Nature</p>
                              <span className="jenarTxt">@ jenar</span>
                            </div>
                          </div>
                          <div className="Followers">
                            <div className="FolloerLeft mt-1">
                              <p className="followerTxt">Followers</p>
                              <span className="followerTxt1">4056</span>
                            </div>
                            <button className="followerBtn">Follow</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 mt-xl-0 mt-4">
                      <div className="SellNow_Box">
                        <div className="SellNow_TopImg">
                          <img
                            src={SellNowTopImg2}
                            alt=""
                            className="img-fluid SellNowTopImg"
                          />
                        </div>
                        <div className="SellNow_Content">
                          <div className="d-flex">
                            <div className="leftImg_w3 me-3">
                              <img
                                src={sellnowleft2}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="right_txtw3">
                              <p className="BecomeTxt">Become On Nature</p>
                              <span className="jenarTxt">@ jenar</span>
                            </div>
                          </div>
                          <div className="Followers">
                            <div className="FolloerLeft mt-1">
                              <p className="followerTxt">Followers</p>
                              <span className="followerTxt1">4056</span>
                            </div>
                            <button className="followerBtn">Follow</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 mt-xl-0 mt-4">
                      <div className="SellNow_Box">
                        <div className="SellNow_TopImg">
                          <img
                            src={SellNowTopImg3}
                            alt=""
                            className="img-fluid SellNowTopImg"
                          />
                        </div>
                        <div className="SellNow_Content">
                          <div className="d-flex">
                            <div className="leftImg_w3 me-3">
                              <img
                                src={sellnowleft3}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="right_txtw3">
                              <p className="BecomeTxt">Become On Nature</p>
                              <span className="jenarTxt">@ jenar</span>
                            </div>
                          </div>
                          <div className="Followers">
                            <div className="FolloerLeft mt-1">
                              <p className="followerTxt">Followers</p>
                              <span className="followerTxt1">4056</span>
                            </div>
                            <button className="followerBtn">Follow</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 mt-xl-0 mt-4">
                      <div className="SellNow_Box">
                        <div className="SellNow_TopImg">
                          <img
                            src={SellNowTopImg4}
                            alt=""
                            className="img-fluid SellNowTopImg"
                          />
                        </div>
                        <div className="SellNow_Content">
                          <div className="d-flex">
                            <div className="leftImg_w3 me-3">
                              <img
                                src={sellnowleft4}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="right_txtw3">
                              <p className="BecomeTxt">Become On Nature</p>
                              <span className="jenarTxt">@ jenar</span>
                            </div>
                          </div>
                          <div className="Followers">
                            <div className="FolloerLeft mt-1">
                              <p className="followerTxt">Followers</p>
                              <span className="followerTxt1">4056</span>
                            </div>
                            <button className="followerBtn">Follow</button>
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
      {/* <!-- End SellNow Section --> */}
    </Fragment>
  );
};

export default CreateAndSell;
