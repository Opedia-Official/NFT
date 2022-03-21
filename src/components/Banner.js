import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ButtonFill from "../utils/ButtonFill";
import ButtonStock from "../utils/ButtonStock";

function Banner() {
  return (
    <Grid container>
      <Grid item xl={6} xs={12} md={8} sm={12}>
        <div className="banner">
          <h1>
            Best Collection Of <span className="highlighted">NFT</span> Digital
            Assets
          </h1>
          <p>
            More easier to collect the best NFT digital assets from various
            creators and figures in this part of the world with your crypto
            money now
          </p>
          <div className="buttons">
            <Link to="/about">
              <ButtonFill title="Start Collection NFT" />
            </Link>
            <Link to="/signin">
              <ButtonStock title="Create Account" />
            </Link>
          </div>
          <div className="profits">
            <div>
              <h4>50M+</h4>
              <p>Executive assets </p>
            </div>
            <div>
              <h4>350K+</h4>
              <p>NFT Best Creator</p>
            </div>
            <div>
              <h4>100+</h4>
              <p>Platform Support</p>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Banner;
