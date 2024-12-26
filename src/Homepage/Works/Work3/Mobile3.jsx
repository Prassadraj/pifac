"use client";
import { Lato, Montserrat } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
});
const montserratLight = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

gsap.registerPlugin(ScrollTrigger);

function Mobile3() {
  const container = useRef(null);

  useEffect(() => {
    // Check if element is found

    gsap.fromTo(
      ".section3 p",
      {
        y: 150,
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: ".section3",
          start: "top 80%",
          end: "top 20%",
          scrub: false,
        },
        duration: 0.5,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.1,
      }
    );

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={`my-20 h-full w-full px-5 ${montserrat.className}`}>
      <div className="flex flex-col gap-2 my-5">
        <div
          className="section3 flex overflow-hidden"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          {"3D Animation".split("").map((text, i) => (
            <p key={i} className={`${montserratLight.className} text-[35px]`}>
              {text === " " ? "\u00A0" : text}
            </p>
          ))}
        </div>
      </div>
      <div
        className={`flex flex-col gap-4 w-full ${montserratLight.className}`}
      >
        <div className="h-full">
          <video
            className="h-[400px] w-full object-cover"
            src="./car.mp4"
            autoPlay
            loop
            playsInline
            muted
          ></video>
          <div className="flex flex-col gap-2 my-3">
            <p className="text-white text-xl">About the Project1 Title...</p>
            <p className=" text-gray-200">About the Project1 subTitle...</p>
          </div>
        </div>
        <div className="h-full">
          <img
            className="h-[400px w-full object-cover"
            src="https://images.unsplash.com/photo-1622994690845-56efd20992c6?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="flex flex-col gap-2 my-3">
            <p className="text-white text-xl">About the Project1 Title...</p>
            <p className=" text-gray-200">About the Project1 subTitle...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile3;
