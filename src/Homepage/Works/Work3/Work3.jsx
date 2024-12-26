import React from "react";
import Laptop3 from "./Laptop3";
import Mobile3 from "./Mobile3";

const Work3 = () => {
  return (
    <>
      <div className="hidden tablet:block">
        <Laptop3 />
      </div>
      <div className="tablet:hidden block">
        <Mobile3 />
      </div>
    </>
  );
};

export default Work3;
