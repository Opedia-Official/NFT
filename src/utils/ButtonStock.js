import React from "react";

function ButtonStock({ title = "add", onClick, customClass = null }) {
  return (
    <button
      className={customClass ? "buttonstock" : "buttonstock"}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default ButtonStock;
