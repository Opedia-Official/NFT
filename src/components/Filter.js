import React from "react";
import ButtonFill from "../utils/ButtonFill";
import ButtonStock from "../utils/ButtonStock";

function Filter({ seletedItem, setSeletedItem }) {
  const cfunc = (a) => {
    setSeletedItem(a);
  };
  return (
    <div style={{ margin: "20px 0px" }}>
      <div>
        {seletedItem === "latest" ? (
          <ButtonFill title="Latest" onClick={() => cfunc("latest")} />
        ) : (
          <ButtonStock title="Latest" onClick={() => cfunc("latest")} />
        )}
        {seletedItem === "art" ? (
          <ButtonFill title="Art" onClick={() => cfunc("art")} />
        ) : (
          <ButtonStock title="Art" onClick={() => cfunc("art")} />
        )}
        {seletedItem === "memes" ? (
          <ButtonFill title="Memes" onClick={() => cfunc("memes")} />
        ) : (
          <ButtonStock title="Memes" onClick={() => cfunc("memes")} />
        )}
        {seletedItem === "video" ? (
          <ButtonFill
            customClass="active"
            title="Video"
            onClick={() => cfunc("video")}
          />
        ) : (
          <ButtonStock
            customClass="active"
            title="Video"
            onClick={() => cfunc("video")}
          />
        )}
      </div>
      <div></div>
    </div>
  );
}

export default Filter;
