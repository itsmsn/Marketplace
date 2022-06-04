import React, { Fragment } from "react";
import "./Loader.css";
import $ from "jquery";
import BounceLoader from "react-spinners/BounceLoader";

const Loader = () => {
  $(window).on("load", function () {
    setTimeout(function () {
      $("#loader").css("display", "none");
    }, 50);
  });
  return (
    <Fragment>
      <div id="loader" class="container ">
        <div
          class="row justify-content-center align-content-center "
          style={{ height: "100vh" }}
        >
          <BounceLoader color={"#F14D5D"} size={100} />
        </div>
      </div>
    </Fragment>
  );
};

export default Loader;
