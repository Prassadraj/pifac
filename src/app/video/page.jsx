import React from "react";

function page() {
  return (
    <div className="h-screen tablet:pt-2 w-full flex items-center justify-center">
      <video
        className="w-full h-auto tablet:h-full sm:w-auto max-h-screen"
        src="./intro.mp4"
        controls
        autoPlay
        muted
      ></video>
    </div>
  );
}

export default page;
