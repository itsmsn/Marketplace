import React, { Fragment } from "react";
import "./Footer.css";
import footerBg from "../../assets/footer-bg.png";
import Logo from "../../assets/Logo.png";
import footerIcon from "../../assets/footer-icon.png";
import $ from "jquery";
const Footer = () => {
  // const [state, setstate] = React.useState(false);

  function topFunction() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  // $(window).scroll(function () {
  //   if ($(window).scrollTop() <= 420) {
  //     setstate(false);
  //   } else {
  //     setstate(true);
  //   }
  // });
  return (
    <Fragment>
      {/* <!-- Footer section --> */}
      <footer className="py-5">
        <div className="container-fluid py-sm-5">
          <div className="row">
            <img src={footerBg} alt="" className="footer-left img-fluid" />
            <div className="col-11 mx-auto max-width">
              <div className="row footerwrapper">
                <div className="col-lg-3 col-sm-9 mx-auto mb-lg-0 mb-4">
                  <div className="footer-subscribe">
                    <a href="/">
                      <img src={Logo} alt="" />
                    </a>
                    <p className="newsletter my-2">
                      Subscribe to our newsletter
                    </p>
                    <div className="subscribe mt-3">
                      <input
                        type="email"
                        required
                        placeholder="Enter Your Email"
                        name=""
                        className="subscribeInput"
                        id=""
                      />
                      <button className="subscribeBtn">Subscribe Now</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-6 mt-lg-0 mt-4">
                  <div className="marketplace">
                    <h4 className="marketHeading">Marketplace</h4>
                    <ul className="marketUl">
                      <li>
                        <a href="/"> Art </a>
                      </li>
                      <li>
                        <a href="/"> All NFTs </a>
                      </li>
                      <li>
                        <a href="/"> Music </a>
                      </li>
                      <li>
                        <a href="/"> Trending Cards </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-6 mt-lg-0 mt-4">
                  <div className="marketplace">
                    <h4 className="marketHeading">My Account</h4>
                    <ul className="marketUl">
                      <li>
                        <a href="/"> Authors </a>
                      </li>
                      <li>
                        <a href="/"> Collection </a>
                      </li>
                      <li>
                        <a href="/"> Author Profile </a>
                      </li>
                      <li>
                        <a href="/"> Create Collection </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-6 mt-lg-0 mt-4">
                  <div className="marketplace">
                    <h4 className="marketHeading">Resources</h4>
                    <ul className="marketUl">
                      <li>
                        <a href="/"> Helps & Support </a>
                      </li>
                      <li>
                        <a href="/"> Live Auctions </a>
                      </li>
                      <li>
                        <a href="/"> Item Details </a>
                      </li>
                      <li>
                        <a href="/"> Activity </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-6 mt-lg-0 mt-4">
                  <div className="marketplace">
                    <h4 className="marketHeading">Company</h4>
                    <ul className="marketUl">
                      <li>
                        <a href="/"> About Us </a>
                      </li>
                      <li>
                        <a href="/"> Contact Us </a>
                      </li>
                      <li>
                        <a href="/"> Our Blog </a>
                      </li>
                      <li>
                        <a href="/"> Discover </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-1 col-sm-12">
                  <button
                    className="footer-arrowbtn"
                    onClick={topFunction}
                    // className={` ${state ? "d-block" : "d-none"}`}
                  >
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer Section --> */}

      {/* <!-- Bottom Footer section --> */}
      <section className="bootom-footer py-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-11 mx-auto max-width">
              <div className="row align-items-center">
                <div className="col-md-4 mb-lg-0 mb-4">
                  <p className="All_right">
                    <img src={footerIcon} alt="" className="img-fluid me-2" />
                    <span className="pt-1"> All Rights Reserved by </span>
                    <span className=" ms-1 mt-1">
                      {" "}
                      <a href="/" className="EtoElogo">
                        EtoElogo
                      </a>
                    </span>
                  </p>
                </div>
                <div className="col-md-4 mb-lg-0 mb-4">
                  <p className="TermsCondition">
                    Terms & Conditions Privacy Policy
                  </p>
                </div>
                <div className="col-md-4">
                  <ul className="social-icons">
                    <li>
                      <a href="/">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i
                          className="fa fa-linkedin-square"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Bottom Footer --> */}
    </Fragment>
  );
};

export default Footer;
