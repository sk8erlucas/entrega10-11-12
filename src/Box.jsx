import React, { useState } from "react";

const Box = () => {
  const [enabled, setenabled] = useState(true);

  const style = {
    width: "255px",
    height: "255px",
    border: "1px solid black",
    backgroundColor: "black",
  };

  function giveColor(e) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  function colorBack(e) {
    e.target.style.backgroundColor = "black";
  }

  function eneabledisable() {
    if (enabled) {
      return setenabled(false);
    } else {
      return setenabled(true);
    }
  }

  return (
    <>
      {enabled ? (
        <div
          style={style}
          onMouseOut={(e) => colorBack(e)}
          onMouseEnter={(e) => giveColor(e)}
          onDoubleClick={eneabledisable}
        >
          Change color enabled
        </div>
      ) : (
        <div
          style={style}
          onDoubleClick={eneabledisable}
        >
          Change color disabled
        </div>
      )}
    </>
  );
};

export default Box;
