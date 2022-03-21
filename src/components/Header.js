import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/header.css";

function Header() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    console.log(active);
  }, [active]);

  const SignOutHandler = () => {
    localStorage.setItem("logedIn", false);
  };

  return (
    // <div className="navbar">
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <Link className={`Link navbar-brand me-auto`} to="/">
          {/* <img
            style={{ width: "70px", height: "40px" }}
            src="https://images.unsplash.com/photo-1643101447013-bba33bb702d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="alt"
          /> */}
          <b>
            NFT <small>space</small>
          </b>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse navbarMenu"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav alcauto  mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">
                <Link
                  onClick={() => setActive("Home")}
                  className={`Link  ${active === "Home" && "active"}`}
                  to="/"
                >
                  Home
                </Link>
              </a>
            </li>
            <li class="nav-item " onClick={() => setActive("About")}>
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: "red" }}
              >
                <Link
                  className={`Link ${active === "About" && "active"}`}
                  to="/about"
                >
                  About
                </Link>
              </a>
            </li>
            <li class="nav-item " onClick={() => setActive("About")}>
              {localStorage.getItem("logedIn") === "true" ? (
                <a
                  onClick={SignOutHandler}
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "red" }}
                >
                  <div className="img">
                    <img
                      style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                      src="https://images.unsplash.com/photo-1646498749176-b4ddb3b3b4a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                      alt=""
                    />
                    <Link className={`Link `} to="/signin">
                      Sign Out
                    </Link>
                  </div>
                </a>
              ) : (
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "red" }}
                >
                  <Link className={`Link `} to="/signin">
                    Sign In
                  </Link>
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // </div>
  );
}

export default Header;
