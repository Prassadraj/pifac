"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Picture1 from "../../../../public/images/1.webp";
import Picture5 from "../../../app/images/window.png";
import Picture6 from "../../../../public/images/6.webp";
import Picture7 from "../../../../public/images/7.webp";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

gsap.registerPlugin(ScrollTrigger);

function Laptop2() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Guard to ensure the document is only accessed on the client side
    if (typeof window !== "undefined") {
      // Setup GSAP animations with ScrollTrigger
      gsap.fromTo(
        ".text p",
        {
          y: 150,
        },
        {
          y: 0,
          scrollTrigger: ".text",
          duration: 0.5,
          ease: "power3.out",
          delay: 0.2,
          stagger: 0.1,
        }
      );

      gsap.to(".animations1", {
        height: "50vh",
        width: "100%",
        ease: "power3.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".animations1",
          start: "top 80%",
          end: "bottom 80%",

          scrub: 2,
        },
      });

      gsap.to(".animations2", {
        height: "50vh",
        width: "100%",
        ease: "power3.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".animations2",
          start: "top 60%",

          end: "bottom 40%",
          scrub: 2,
        },
      });

      gsap.to(".animations3", {
        height: "50vh",
        width: "100%",
        ease: "power3.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".animations3",
          start: "top 40%",

          end: "bottom 30%",
          scrub: 2,
        },
      });

      gsap.to(".animations4", {
        height: "50vh",
        width: "100%",
        ease: "power3.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".animations4",
          start: "top 10%",

          end: "bottom 30%",
          scrub: 2,
        },
      });

      // Cleanup on component unmount
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  const pictures = [
    { src: Picture1, width: 800, height: 600 },
    { src: Picture5, width: 800, height: 600 },
    { src: Picture6, width: 800, height: 600 },
    { src: Picture7, width: 800, height: 600 },
  ];

  return (
    <div
      ref={containerRef}
      className="laptop:px-20 px-2 laptop:py-10 tablet:px-10 tablet:py-10 w-full h-[240vh]"
    >
      <div
        className="text flex overflow-hidden"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        {" 2D Animations".split("").map((text, i) => (
          <p
            key={i}
            className={`${montserrat.className} mb-4 font-normal text-[7vw] tablet:text-[10vw] laptop:text-[70px]`}
          >
            {text}
          </p>
        ))}
      </div>
      <div className="hidden h-full w-full tablet:gap-5 laptop:gap-10 tablet:flex flex-col mt-4">
        {pictures.map((picture, i) => (
          <div
            key={i}
            className={`animations${
              i + 1
            } tablet:flex items-center tablet:h-[25vh] tablet:w-[50%] gap-5 ${
              i === 2 || i === 3 ? "rounded-md" : ""
            }`}
          >
            <div className="animate-2d">
              <p
                className={`${montserrat.className} laptop:text-2xl font-medium`}
              >
                Title
              </p>
              <p className={`${montserrat.className} laptop:text-lg`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, aut eum a, vero, quia.
              </p>
            </div>
            <div className="img-2d h-full w-full rounded-md">
              <Image
                src={picture.src}
                width={picture.width}
                height={picture.height}
                className="object-cover w-full h-full"
                alt="Window animation preview"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 tablet:hidden gap-3 w-full h-full">
        {pictures.map((picture, i) => (
          <div key={i} className="space-y-2">
            <div>
              <p className={`${montserrat.className} text-lg font-medium`}>
                Title
              </p>
              <p className={`${montserrat.className} text-sm laptop:text-lg`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, aut eum a, vero, quia.
              </p>
            </div>
            <div className="h-60 w-full rounded-md overflow-hidden">
              <Image
                src={picture.src}
                width={picture.width}
                height={500}
                className="object-cover w-full h-full"
                alt="Window animation preview"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Laptop2;
