import React from "react";
import Laptop1 from "./Laptop1";
import Mobile1 from "./Mobile1";

function Work1() {
  return (
    <>
      <div className="hidden tablet:block">
        <Laptop1 />
      </div>
      <div className="tablet:hidden block">
        <Mobile1 />
      </div>
    </>
  );
}

export default Work1;
