"use client";

import React, { useEffect } from "react";
import SwiperBtn from "@/component/Swiper/SwiperBtn";
import gsap from "gsap";
import "./nav.css";
import { usePathname } from "next/navigation";

function Works() {
  const path = usePathname();

  useEffect(() => {
    gsap
      .timeline({ delay: 0 })
      .to(".block", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.7,
        stagger: { amount: 0.5, from: "random", ease: "power3.out" },
      })
      .to(".blocks", { zIndex: 0 });
  }, []);

  return (
    <div>
      {/* Blocks Animation Layer */}
      <div className={`blocks ${path === "/works" ? "z-50" : "z-0"}`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="block"></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-black w-full h-full">
        <SwiperBtn />
      </div>
    </div>
  );
}

export default Works;
