import React, { Fragment } from "react";
import "./Team.css";
import TeamImgCorner from "../../assets/TeamImgCorner.png";
import TeamImg from "../../assets/TeamImg.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Team = () => {
  const options = {
    loop: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      600: {
        items: 3,
        nav: false,
        dots: true,
      },
      1000: {
        items: 4,
        nav: false,
      },
      1200: {
        items: 4,
        nav: false,
      },
    },
  };
  return (
    <Fragment>
      {/* <!-- team --> */}
      <section className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto max-width py-5">
            <h2 className="teamHead">TEAM</h2>
            <p className="teamPara">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <div className="row">
              <OwlCarousel className="owl-theme" {...options} margin={10} nav>
                  {/* 1 */}
                <div class="item">
                  <div className="col-12">
                    <div className="teamWrapper">
                      <div className="teamImgWrapper">
                        <img
                          className="TeamImgCorner"
                          src={TeamImgCorner}
                          alt=""
                        />
                        <img
                          className="TeamImg"
                          src={TeamImg}
                          alt="MetaParrot"
                          title="Meta Parrot"
                        />
                      </div>

                      <div className="teamTextWrapper">
                        <button className="btn btnTeamFollow">Follow</button>
                        <div className="text-end">
                          <p className="TeamBP1">Lorem Ipsum</p>
                          <p className="TeamBP2">@loremIpsum67</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  {/* 1 */}
                <div class="item">
                  <div className="col-12">
                    <div className="teamWrapper">
                      <div className="teamImgWrapper">
                        <img
                          className="TeamImgCorner"
                          src={TeamImgCorner}
                          alt=""
                        />
                        <img
                          className="TeamImg"
                          src={TeamImg}
                          alt="MetaParrot"
                          title="Meta Parrot"
                        />
                      </div>

                      <div className="teamTextWrapper">
                        <button className="btn btnTeamFollow">Follow</button>
                        <div className="text-end">
                          <p className="TeamBP1">Lorem Ipsum</p>
                          <p className="TeamBP2">@loremIpsum67</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  {/* 1 */}
                <div class="item">
                  <div className="col-12">
                    <div className="teamWrapper">
                      <div className="teamImgWrapper">
                        <img
                          className="TeamImgCorner"
                          src={TeamImgCorner}
                          alt=""
                        />
                        <img
                          className="TeamImg"
                          src={TeamImg}
                          alt="MetaParrot"
                          title="Meta Parrot"
                        />
                      </div>

                      <div className="teamTextWrapper">
                        <button className="btn btnTeamFollow">Follow</button>
                        <div className="text-end">
                          <p className="TeamBP1">Lorem Ipsum</p>
                          <p className="TeamBP2">@loremIpsum67</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  {/* 1 */}
                <div class="item">
                  <div className="col-12">
                    <div className="teamWrapper">
                      <div className="teamImgWrapper">
                        <img
                          className="TeamImgCorner"
                          src={TeamImgCorner}
                          alt=""
                        />
                        <img
                          className="TeamImg"
                          src={TeamImg}
                          alt="MetaParrot"
                          title="Meta Parrot"
                        />
                      </div>

                      <div className="teamTextWrapper">
                        <button className="btn btnTeamFollow">Follow</button>
                        <div className="text-end">
                          <p className="TeamBP1">Lorem Ipsum</p>
                          <p className="TeamBP2">@loremIpsum67</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  {/* 1 */}
                <div class="item">
                  <div className="col-12">
                    <div className="teamWrapper">
                      <div className="teamImgWrapper">
                        <img
                          className="TeamImgCorner"
                          src={TeamImgCorner}
                          alt=""
                        />
                        <img
                          className="TeamImg"
                          src={TeamImg}
                          alt="MetaParrot"
                          title="Meta Parrot"
                        />
                      </div>

                      <div className="teamTextWrapper">
                        <button className="btn btnTeamFollow">Follow</button>
                        <div className="text-end">
                          <p className="TeamBP1">Lorem Ipsum</p>
                          <p className="TeamBP2">@loremIpsum67</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- team end --> */}
    </Fragment>
  );
};

export default Team;
