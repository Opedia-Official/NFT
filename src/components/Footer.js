import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    // <div className="navbar">
    <>
      <hr />

      <nav class=" footer navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand me-auto" href="#">
            {/* <img
            style={{ width: "70px", height: "40px" }}
            src="https://images.unsplash.com/photo-1643101447013-bba33bb702d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="alt"
          /> */}
            <b>
              NFT <small>space</small>
            </b>
          </a>
          <p>
            ©
            <Link style={{ textDecoration: "none", margin: "0px 5px" }} to="/">
              <span>NFTSpace</span>
            </Link>
            2021 all rights reserved
          </p>
        </div>
      </nav>
    </>
  );
}

export default Footer;
