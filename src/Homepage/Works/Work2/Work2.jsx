import React from "react";
import Laptop2 from "./Laptop2";
import Mobile2 from "./Mobile2";

function Work2() {
  return (
    <>
      <div className="hidden tablet:block">
        <Laptop2 />
      </div>
      <div className="tablet:hidden block">
        <Mobile2 />
      </div>
    </>
  );
}

export default Work2;
