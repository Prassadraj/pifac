import React from "react";
import Laptop from "./Laptop";
import SpreadMobile from "./SpreadMobile";

function Spread() {
  return (
    <>
      <div className="hidden tablet:block">
        <Laptop />
      </div>
      <div className="tablet:hidden block">
        <SpreadMobile />
      </div>
    </>
  );
}

export default Spread;
