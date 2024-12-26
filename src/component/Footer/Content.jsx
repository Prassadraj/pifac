"use client";
import MyContext from "@/context/MyContext";
import { Montserrat } from "next/font/google";
import React, { useContext, useEffect, useRef } from "react";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
});
const montserratLight = Montserrat({
  subsets: ["latin"],
  weight: "300", // Specify weight as a string instead of an array
});
const montserraMedium = Montserrat({
  subsets: ["latin"],
  weight: "500", // Specify weight as a string instead of an array
});
export default function Content() {
  return (
    <div className="relative h-full w-full">
      <div className="bg-gradient-to-tr px-2 py-5 tablet:py-10 bg-black tablet:px-12 h-full w-full flex flex-col justify-between">
        <Nav />
      </div>
    </div>
  );
}

const Nav = () => {
  const videoRef = useRef(null);
  const { state, setState } = useContext(MyContext);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);
  return (
    <div className="h-screen w-full  flex flex-col justify-around tablet:gap-7">
      {/* first */}
      <div className="flex flex-col justify-evenly gap-6">
        <div className="flex items-start tablet:gap-2 w-full h-fit ">
          {/* left */}
          <div className="flex tablet:flex-col tablet:gap-10 gap-5 items-center tablet:items-start">
            <div className="z-50">
              <p className="font-medium text-[90px] tablet:text-[100px] laptop:text-[120px]">
                Our{" "}
              </p>
              <p className="font-medium  text-[90px] tablet:text-[100px] laptop:text-[120px]">
                Story
              </p>
            </div>
            {/* mobile */}
            <div className="tablet:hidden">
              <video
                ref={videoRef}
                className="tablet:h-full tablet:w-full scale-[2.2] rotate-90 tablet:scale-y-150 tablet:scale-x-125  
             opacity-85  z-0"
                autoPlay
                muted
                loop
                playsInline
                src="/footer.mp4"
              ></video>
            </div>
            <p className="tablet:text-2xl hidden  tablet:block tablet:max-w-md laptop:max-w-lg font-light">
              PiFactor merges creativity and curiosity, making each project a
              journey in visual discovery.
            </p>
          </div>
          {/* right */}
          <div className="w-1/2 mt-10 tablet:mt-0 hidden tablet:block">
            <video
              ref={videoRef}
              className="tablet:h-full tablet:w-full scale-[2.2] rotate-90 tablet:scale-y-150 tablet:scale-x-125  
             opacity-85  z-0"
              autoPlay
              muted
              loop
              playsInline
              src="/footer.mp4"
            ></video>
          </div>
        </div>
        {/* mobile */}
        <p
          className={`text-3xl z-20 tablet:hidden tablet:max-w-md laptop:max-w-lg font-light ${montserratLight.className}`}
        >
          PiFactor merges creativity and curiosity, making each project a
          journey in visual discovery.
        </p>
      </div>

      {/* second */}
      <div className="w-full h-[1px] bg-white z-10 hidden tablet:block"></div>
      <div className="flex flex-col gap-2">
        <div className="w-full h-[1px] bg-white z-10  tablet:hidden"></div>
        <div className="flex justify-between gap-2 tablet:justify-normal tablet:gap-20">
          <div>
            <ul
              className={`text-gray-200 text-lg tablet:text-xl font-thin ${montserratLight.className}`}
            >
              <li>TTK Road,chennai</li>
              <li className="flex gap-1">
                <strong className="text-lg tablet:text-xl font-semibold tablet:font-normal hidden tablet:block">
                  Email :
                </strong>{" "}
                <a href="mailto:pifactor@gmail.com"> pifactor@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <ul
              className={`${montserratLight.className}  text-gray-200 font-thin`}
            >
              <li className="cursor-pointer ">
                <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300 text-lg tablet:text-xl">
                  Work
                </span>
              </li>
              <li className="cursor-pointer ">
                <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300 text-lg tablet:text-xl">
                  Studio
                </span>
              </li>
              <li className="cursor-pointer">
                <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300 text-lg tablet:text-xl ">
                  Contact Us
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div>
              {" "}
              <ul
                className={`${montserratLight.className}  text-gray-200 font-thin`}
              >
                <li className="cursor-pointer ">
                  <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300 text-lg tablet:text-xl">
                    Behance
                  </span>
                </li>
                <li className="cursor-pointer ">
                  <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300 text-lg tablet:text-xl">
                    Twitter
                  </span>
                </li>
                <li className="cursor-pointer">
                  <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300 text-lg tablet:text-xl">
                    Youtube
                  </span>
                </li>
                <li className="cursor-pointer">
                  <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300 text-lg tablet:text-xl">
                    Instagram
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="flex   h-full flex-col ">
<div className="flex gap-2 w-full h-fit">
  <div className="flex  flex-col gap-10 z-50">
    <div>
      <h1 className="font-medium tablet:text-[100px] laptop:text-[120px]">
        Our{" "}
      </h1>
      <h1 className="font-medium tablet:text-[100px] laptop:text-[120px]">
        Story
      </h1>
    </div>
    <div>
      <p className="tablet:text-2xl tablet:max-w-md laptop:max-w-lg font-light">
        PiFactor merges creativity and curiosity, making each project a
        journey in visual discovery
      </p>
    </div>
  </div>
  <div className="w-1/2 h-full flex items-start">
    <video
      ref={videoRef}
      className="h-full w-full tablet:scale-x-[2] tablet:scale-y-[2] laptop:scale-x-150 
      laptop:scale-y-150  opacity-85 z-0 "
      autoPlay
      muted
      loop
      playsInline
      src="/footer.mp4"
    ></video>
  </div>
</div>
<div className="flex flex-col h-full   gap-4 ">
  <div className="w-full h-[2px] bg-violet-900 "></div>
  <div className="flex  gap-20">
    <div>
      <ul className="text-gray-200 font-thin">
        <li>TTK Road,chennai</li>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:pifactor@gmail.com">pifactor@gmail.com</a>
        </li>
      </ul>
    </div>
    <div>
      <ul className="text-gray-200 font-thin">
        <li className="cursor-pointer ">
          <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300">
            Work
          </span>
        </li>
        <li className="cursor-pointer ">
          <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300">
            Studio
          </span>
        </li>
        <li className="cursor-pointer">
          <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300">
            Contact Us
          </span>
        </li>
      </ul>
    </div>
    <div>
      <div>
        {" "}
        <ul className="text-gray-200 font-thin">
          <li className="cursor-pointer ">
            <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300">
              Behance
            </span>
          </li>
          <li className="cursor-pointer ">
            <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300">
              Twitter
            </span>
          </li>
          <li className="cursor-pointer">
            <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300">
              Youtube
            </span>
          </li>
          <li className="cursor-pointer">
            <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300">
              Instagram
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div> */
}
