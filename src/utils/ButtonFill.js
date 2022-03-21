import React from "react";

function ButtonFill({ title = "add", onClick }) {
  return (
    <button className="buttonFill" onClick={onClick}>
      {title}
    </button>
  );
}

export default ButtonFill;
