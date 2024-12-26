import React from "react";
import Content from "./Content";

export default function Footer() {
  return (
    <div
      className="relative h-screen overflow-x-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-screen w-full overflow-hidden">
        <Content />
      </div>
    </div>
  );
}
