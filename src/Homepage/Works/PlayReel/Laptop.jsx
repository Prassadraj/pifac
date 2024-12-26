"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import windowImg from "../../../app/images/window.png";
import Image from "next/image";
import { Lato, Montserrat } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
const montserrat = Montserrat({
  subsets: ["latin"],
});
gsap.registerPlugin(ScrollTrigger);

function Laptop() {
  const container = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false); // Local hover state
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    // GSAP animation for text gap
    gsap.to(".play", {
      gap: "10px",
      ease: "power2.inOut",
      duration: 0.2,
      scrollTrigger: {
        trigger: ".video",
        scrub: 1,

        start: "top 60%",
        end: "bottom center",
      },
    });
    gsap.fromTo(
      ".reel",
      {
        scale: 0.1,
      },
      {
        scale: 1,
        ease: "power2.inOut",
        duration: 0.2,
        scrollTrigger: {
          trigger: ".video",
          scrub: 1,

          start: "top 60%",
          end: "bottom center",
        },
      }
    );

    // GSAP animation for image scaling
    gsap.to(".img", {
      scale: 100, // Adjust scale as needed
      ease: "power1.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: ".video",
        scrub: 3,
        start: "top top",
        end: "bottom center",
      },
    });
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const cursorVariants = {
    hover: { x: mousePosition.x, y: mousePosition.y },
    default: {},
  };
  return (
    <>
      {" "}
      {isHovering && (
        <motion.div
          variants={cursorVariants}
          animate="hover"
          transition={{ duration: 0.1, ease: "linear" }}
          className="hidden fixed top-0 tablet:flex justify-center items-center left-0 w-16 h-16 z-50 rounded-full bg-gray-700 mix-blend-difference"
          style={{ pointerEvents: "none" }}
        >
          <p
            className={`${montserrat.className} text-white font-normal text-sm`}
          >
            Play
          </p>
        </motion.div>
      )}
      <Link href="/video">
        <div
          className="w-full h-[200vh] video"
          ref={container}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* The element to be animated on scroll */}
          <div className=" h-[100vh] sticky top-0 w-full overflow-hidden cursor-pointer">
            <video
              style={{ cursor: "pointer" }}
              className="w-full h-full object-cover reel"
              loop
              playsInline
              src="./intro.mp4"
              autoPlay
              muted
            ></video>{" "}
            <div className="absolute inset-0 flex justify-center items-center">
              {/* Text that will be animated */}
              <div
                className={`text-center gap-96 play flex text-[50px] tablet:text-[10rem] text-white ${montserrat.className}`}
              >
                <p className={`font-medium`}>Play</p>
                <p className={` font-medium`}>Reel</p>
              </div>
              {/* Image to be scaled */}
              <div className="absolute top-0 left-0 w-full h-full">
                <Image
                  src={windowImg}
                  alt="window"
                  className="w-full h-full object-cover img"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Laptop;
