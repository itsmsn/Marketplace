import React, { Fragment } from "react";
import "./Header.css";
import Logo from "../../assets/Logo.png";
import profileimg from "../../assets/profile-img.png";
import $ from "jquery";
import { Link } from "react-router-dom";

const Header = () => {
  const [stikyValue, setstikyValue] = React.useState(false);
  $(window).scroll(function () {
    if ($(window).scrollTop() <= 420) {
      setstikyValue(false);
    } else {
      setstikyValue(true);
    }
  });
  // sidebar
  const OpenSidebarHandler = (e) => {
    e.preventDefault();
    $("#navbar-nav").css("width", "100%");
  };
  const CloseSidebarHandler = (e) => {
    e.preventDefault();
    $("#navbar-nav").css("width", "0px");
  };
  return (
    <Fragment>
      {/* <!-- header --> */}
      <header className={`main-header ${stikyValue ? "navbar-sticky" : null}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto max-width">
              <div className="row">
                <div className="col-md-12">
                  <div className="navbar navbar-expand-lg px-lg-3">
                    <a href="/" className="navbar-brand">
                      <img src={Logo} className="img-fluid" alt="" />
                    </a>
                    <button
                      className="navbar-toggler"
                      onClick={OpenSidebarHandler}
                    >
                      <span className="navbar-toggler-icon">&#9776;</span>
                    </button>
                    <div
                      className="collapse navbar-collapse show"
                      id="my_navbar"
                    >
                      {/* <!-- <ul className="navbar-nav mr-auto">
                      <li className="nav-item"><a href="" className="nav-link">Home</a></li> --> */}
                      <ul id="navbar-nav" className="navbar-nav">
                        <div>
                          <a
                            className="close_btn"
                            onClick={CloseSidebarHandler}
                            href="/"
                          >
                            &times;
                          </a>
                        </div>
                        <ul className="custom_nav ms-lg-auto">
                          <li>
                            <Link  to="/" className="active">
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link to="/MissionAndTeam">Mission and Team</Link>
                          </li>
                          <li className="ProejectLi">
                            <a href="/" onClick={(e) => e.preventDefault()}>
                              Marketplace
                              <i
                                className="fa fa-angle-down ms-1"
                                aria-hidden="true"
                              ></i>
                            </a>
                            {/* <!-- Dropdown --> */}
                            <ul className="DropDown">
                              <li>
                                <Link to="/">Community</Link>
                              </li>
                              <li>
                                <Link to="/Athletic">Athletics</Link>
                              </li>
                              <li>
                                <Link to="/Art">Art</Link>
                              </li>
                              <li>
                                <Link to="/Entertainment">Entertainment</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/TopPlayers">Top PLayers</Link>
                          </li>
                          <li>
                            <Link to="/Support">Support</Link>
                          </li>
                          <li className="ms-3">
                            <a href="/">
                              <img
                                src={profileimg}
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header end --> */}
    </Fragment>
  );
};

export default Header;
