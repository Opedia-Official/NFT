import { Grid } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Signin() {
  const signinhandlere = () => {
    localStorage.setItem("logedIn", true);
  };

  return (
    <>
      <Header />
      {/* <p onClick={signinhandlere}>sign In</p> */}
      <div className="signin"></div>

      <Grid container>
        <Grid item xl={6} lg={6} md={0}>
          <div className="signContent">
            <h1>
              NFT <span>Space</span>
            </h1>
            <p>
              Best Collection Of <span>NFT</span> Digital Assets
            </p>
          </div>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sx={{ alignSelf: "center" }}>
          <div class="container">
            <form>
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />

              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />

              <input type="submit" value="Submit" onClick={signinhandlere} />
            </form>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Signin;
