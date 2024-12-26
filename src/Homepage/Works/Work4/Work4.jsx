import React from "react";
import Mobile4 from "./Mobile4";

import Laptop4 from "./Laptop";

function Work4() {
  return (
    <>
      <div className="hidden tablet:block">
        <Laptop4 />
      </div>
      <div className="tablet:hidden block">
        <Mobile4 />
      </div>
    </>
  );
}

export default Work4;
