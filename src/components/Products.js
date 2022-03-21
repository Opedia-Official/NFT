import { Grid } from "@mui/material";
import React, { useState } from "react";
import ButtonStock from "../utils/ButtonStock";
import { products } from "../utils/fakedata";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";

function Products() {
  const [seletedItem, setSeletedItem] = useState("latest");
  const [totlaProduct, setTotlaProduct] = useState(8);

  const filteredData = products.filter((i) => i.category === seletedItem);

  return (
    <>
      <h4>
        Explorer The<span className="highlighted"> Best NFT</span> Assets
      </h4>
      {/* filter section */}

      <Filter setSeletedItem={setSeletedItem} seletedItem={seletedItem} />

      <Grid container>
        {seletedItem !== "latest"
          ? filteredData.slice(0, totlaProduct).map((item) => (
              <Grid item xl={3} lg={4} md={6} sm={12} xs={12}>
                <SingleProduct item={item} />
              </Grid>
            ))
          : products.slice(0, totlaProduct).map((item) => (
              <Grid item xl={3} lg={4} md={6} sm={12} xs={12}>
                <SingleProduct item={item} />
              </Grid>
            ))}
      </Grid>

      {
        <div
          onClick={() => setTotlaProduct(totlaProduct + 8)}
          className="loadmore"
        >
          <ButtonStock title="Load More" />
        </div>
      }
    </>
  );
}

export default Products;
