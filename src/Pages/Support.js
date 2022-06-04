import React from "react";
import { OpacityCard } from "../components/OpacityCard/OpacityCard";
import banner_image from "../assets/support_banner_91.png";
import thinkingImage from "../assets/MissionThinking.png";
import "./Support.css";
import trending1 from "../assets/trending-1.png";
import trending2 from "../assets/trending-2.png";
import trending3 from "../assets/trending-3.png";
import trending4 from "../assets/trending-4.png";
import trending5 from "../assets/trending-5.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import arrow_left from "../assets/left-arrow.png";
import arrow_right from "../assets/right-arrow.png";

export const Support = () => {
  // Owl Carousel

  const heading = "Support";
  const description =
    "Our passionate support team will be there for you every step of the way. We're happy to help, just contact us at gmail.com!";

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
    <div>
      <section>
        <div className="banner_section1 banner_section2">
          <img src={banner_image} width="100%" alt="Loading" className="img" />
          <div className="image_card image_card1">
            <OpacityCard heading={heading} description={description} />
          </div>
        </div>

        <div class="container container1">
          <img
            src={thinkingImage}
            className="thinkingimage"
            width="30%"
            alt=""
          />
          <div class="container__text">
            <h2 className="marketHeading1">SUPPORT</h2>
            <p>
              "Our passionate support team will be there for you every step of
              the way. We're happy to help, just contact us at gmail.com! The
              team of experts at our company are dedicated to providing you with
              excellent customer service. We have an outstanding reputation for
              being fast, efficient and effective - so much that it's hard not
              be satisfied when working alongside us! "
            </p>
          </div>
        </div>

        <center>
          <h1>Support</h1>
          <div className="marketHeading teamH"></div>
        </center>

        <div className="team">
          <OwlCarousel className="owl-theme trending_slider" {...options}>
            {/* 1 */}
            <div className="trending-box shadow-sm my-3">
              <div className="trending-img">
                <a href="/">
                  <img src={trending1} alt="" className="img-fluid" />
                </a>
              </div>
              <div className="trending-content">
                <p className="trending-infinity marketHeading1 mark">Name</p>
                <p className="trending-infinity">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            {/* 1 */}
            <div className="trending-box shadow-sm my-3">
              <div className="trending-img">
                <a href="/">
                  <img src={trending2} alt="" className="img-fluid" />
                </a>
              </div>
              <div className="trending-content">
                <p className="trending-infinity marketHeading1 mark">Name</p>
                <p className="trending-infinity">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            {/* 1 */}
            <div className="trending-box shadow-sm my-3">
              <div className="trending-img">
                <a href="/">
                  <img src={trending3} alt="" className="img-fluid" />
                </a>
              </div>
              <div className="trending-content">
                <p className="trending-infinity marketHeading1 mark">Name</p>
                <p className="trending-infinity">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            {/* 1 */}
            <div className="trending-box shadow-sm my-3">
              <div className="trending-img">
                <a href="/">
                  <img src={trending4} alt="" className="img-fluid" />
                </a>
              </div>
              <div className="trending-content">
                <p className="trending-infinity marketHeading1 mark">Name</p>
                <p className="trending-infinity">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            {/* 1 */}
            <div className="trending-box shadow-sm my-3">
              <div className="trending-img">
                <a href="/">
                  <img src={trending5} alt="" className="img-fluid" />
                </a>
              </div>
              <div className="trending-content">
                <p className="trending-infinity marketHeading1 mark">Name</p>
                <p className="trending-infinity">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            {/* 1 */}
            <div className="trending-box shadow-sm my-3">
              <div className="trending-img">
                <a href="/">
                  <img src={trending1} alt="" className="img-fluid" />
                </a>
              </div>
              <div className="trending-content">
                <p className="trending-infinity marketHeading1 mark">Name</p>
                <p className="trending-infinity">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
};
