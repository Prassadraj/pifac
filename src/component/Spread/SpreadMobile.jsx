"use client";
import { Montserrat } from "next/font/google";
import { gsap, ScrollTrigger } from "gsap";

import Image from "next/image";
import React, { useEffect } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const montserratLight = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "10.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "line.webp",
];

gsap.registerPlugin(ScrollTrigger);

function SpreadMobile() {
  useEffect(() => {
    gsap.to(".spread", {
      y: -40,
      scale: 1.1,
      duration: 2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".spread",
        start: "top 100%",
        end: "bottom 70%",
        scrub: 0.5,
      },
    });

    gsap.to(".sentence", {
      y: 0,
      scale: 1.1,
      duration: 0.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".spread",
        start: "top 90%",
        end: "bottom 50%",
        scrub: 0.5,
      },
    });

    gsap.fromTo(
      ".spreadText p",
      {
        y: 150,
        opacity: 0,
        skewY: "-60deg",
      },
      {
        y: 0,
        opacity: 1,
        skewY: "0deg",
        scrollTrigger: {
          trigger: ".spreadText",
        },
        duration: 0.5,
        delay: 0.5,
        ease: "power3.out",
        stagger: {
          amount: 0.5,
          from: "end",
          ease: "power3.out",
        },
      }
    );

    gsap.fromTo(
      ".spreadText2 p",
      {
        y: 150,
        skewY: "60deg",
      },
      {
        y: 0,
        scrollTrigger: ".spreadText2",
        skewY: "0deg",
        duration: 0.5,
        ease: "power3.out",
        delay: 0.5,
        stagger: 0.1,
      }
    );

    gsap.fromTo(
      ".image1",
      { x: 0 },
      {
        x: 150,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".imageContainer",
          start: "top 90%",
          end: "bottom 50%",
          scrub: 0.5,
        },
      }
    );

    // Animation for tablet screens

    gsap.fromTo(
      ".image1",
      { x: 0 },
      {
        x: 20,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".imageContainer",
          start: "top 90%",
          end: "bottom 50%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      ".image2",
      { x: 0 },
      {
        x: -20,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".imageContainer",
          start: "top 90%",
          end: "bottom 50%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      ".image2",
      { x: 0 },
      {
        x: -150,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".imageContainer",
          start: "top 90%",
          end: "bottom 50%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="h-fit w-full overflow-hidden relative px-5 ">
        {" "}
        {/* Add relative here */}
        <div className="h-fit relative flex items-center justify-center">
          <div className="relative imageContainer">
            <Image
              width={400}
              height={600}
              className="object-cover"
              src={`/3dImages/${images[12]}`}
              alt="3D image"
              priority
            />
            <div className="absolute top-0 -right-14">
              <Image
                width={100}
                height={0}
                className="object-cover w-[200px] h-[300px] "
                src={`/3dImages/${images[0]}`}
                alt="3D image"
                priority
              />
            </div>
            <div className="absolute bottom-48 -left-16 ">
              <Image
                width={100}
                height={440}
                className="object-cover w-[200px] h-[250px]"
                src={`/3dImages/${images[5]}`}
                alt="3D image"
                priority
              />
            </div>
          </div>
        </div>
        {/* wording */}
        <div
          className={`flex py-5  h-fit tablet:h-screen flex-col mt-5 ${montserrat.className}`}
        >
          <div className="spread text-center text-[100px] flex flex-col leading-tight tablet:mb-4">
            <div
              className="flex justify-center spreadText"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              {" Spread".split("").map((text, i) => (
                <p
                  key={i}
                  className={`${montserrat.className} text-[50px]  laptop:text-[80px]`}
                >
                  {text}
                </p>
              ))}
            </div>
            <div
              className="flex justify-center spreadText2"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              {"the News".split("").map((text, i) => (
                <p
                  key={i}
                  className={`${montserrat.className} text-[50px] laptop:text-[80px]`}
                >
                  {text == " " ? "\u00A0" : text}
                </p>
              ))}
            </div>
          </div>
          <div className="max-w-lg mx-auto sentence">
            <p className={`${montserratLight.className} text-2xl text-center `}>
              Find out more about our work on these leading design and
              technology platforms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpreadMobile;
