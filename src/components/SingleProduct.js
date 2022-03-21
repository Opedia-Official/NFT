import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
// import { SnackbarProvider, useSnackbar } from "notistack";
import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

import ButtonStock from "../utils/ButtonStock";

function SingleProduct({ item }) {
  const [login, setLogin] = useState([localStorage.getItem("logedIn")]);

  const priceHandler = () => {
    localStorage.getItem("logedIn") === "true"
      ? alert("Price Bid added successfully")
      : alert("Login in first");
  };

  useEffect(() => {}, [login]);

  console.log(localStorage.getItem("logedIn"));
  return (
    <div>
      <div style={{ margin: "10px" }} className="singlereomandation">
        <div className="img">
          <img
            style={{
              height: "300px",
              borderRadius: "15px",
              width: "100%",
              objectFit: "cover",
            }}
            src={item.image}
            alt=""
          />
        </div>
        <div className="upper">
          <p>{item.name}</p>
          <small className="Atname">{item.uri}</small>

          <div className="recomandLow">
            <div>
              <small>Total Assets </small>
              <p>5.207 ETH</p>
            </div>
            <div>
              <small>Total Assets </small>
              <p>5.207 ETH</p>
            </div>
          </div>

          <SnackbarProvider maxSnack={3} transitionDuration={15000}>
            <MyApp priceHandler={priceHandler} />
          </SnackbarProvider>
        </div>
      </div>
    </div>
  );
}

function MyApp({ priceHandler }) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    localStorage.getItem("logedIn") === "true"
      ? enqueueSnackbar("Your bid is successfull!", { variant })
      : enqueueSnackbar("Login First!", { variant: "error" });
  };

  return (
    <React.Fragment>
      <div className="loadmore" onClick={handleClickVariant("success")}>
        <ButtonStock title="Price a bid" />
      </div>
    </React.Fragment>
  );
}
export default SingleProduct;
