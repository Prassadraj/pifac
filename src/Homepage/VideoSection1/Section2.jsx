"use client";

import React, { useEffect, useState } from "react";
import "./section.css";
import { gsap } from "gsap";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900", "100"],
});

function Section2() {
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  useEffect(() => {
    // Check if the animation has already played
    const played = sessionStorage.getItem("hasPlayedOnce");

    if (!played) {
      const tl = gsap.timeline({ delay: 0 });
      const movement = [-130, 100, -130, -90, 100, -130, 180, -130];

      tl.to(".cover-screen", {
        display: "none",
      });

      gsap.set("h1", { y: 100 });
      gsap.set(".counter p", { y: 35 });

      tl.to("h1", {
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1,
      });

      tl.to(
        ".counter p",
        {
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.5"
      );

      tl.to(".counter p", {
        y: -35,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.5,
      });

      tl.to(".counter p", {
        y: -75,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.5,
      });

      tl.to(".counter p", {
        y: -105,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.5,
      });

      tl.from(
        ".tagline",
        {
          y: 40,
          opacity: 0,
        },
        "-=4"
      );

      tl.to("h1", {
        fontSize: "30vh",
        duration: 1,
        ease: "power3.out",
      });

      tl.to(
        ".header-item",
        {
          clipPath: "none",
          duration: 0.1,
        },
        "<"
      );

      tl.to(
        ".block",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.5,
          stagger: {
            amount: 0.5,
            from: "random",
            ease: "power3.out",
          },
        },
        "<"
      );

      movement.forEach((move, i) => {
        tl.to(
          `.hh-${i + 1}`,
          {
            y: move,
            duration: 0.5,
            ease: "power3.out",
          },
          "<"
        );
      });

      // Fade out h1 elements
      tl.to("h1", {
        display: "none",
        // delay: 2,
        // duration: 1,
        ease: "power2.out",
        onComplete: () => {
          setHasPlayedOnce(true);
          sessionStorage.setItem("hasPlayedOnce", "true"); // Persist the state
        },
      });
    } else {
      // Else part for when animation has already played
      const tl = gsap.timeline({ delay: 0.5 });

      const movement = [-130, 100, -130, -90, 100, -130, 180, -130];

      tl.to("h1", {
        fontSize: "30vh",
        duration: 1,
        ease: "power3.out",
      });

      tl.to(
        ".header-item",
        {
          clipPath: "none",
          duration: 0.1,
        },
        "<"
      );

      tl.to(
        ".block",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.5,
          stagger: {
            amount: 0.5,
            from: "random",
            ease: "power3.out",
          },
        },
        "<"
      );

      movement.forEach((move, i) => {
        tl.to(
          `.hh-${i + 1}`,
          {
            y: move,
            duration: 0.5,
            ease: "power3.out",
          },
          "<"
        );
      });

      tl.to("h1", {
        display: "none",
        delay: 2,
        duration: 1,
        ease: "power2.out",
      });

      setHasPlayedOnce(true);
    }
  }, []);

  return (
    <div className="container ">
      {!hasPlayedOnce && <div className="cover-screen"></div>}{" "}
      {/* Cover Screen Element */}
      <div className="hero-video w-full ">
        <video
          className="w-full h-full object-cover"
          loop
          src="./PF_LOGO.mp4"
          autoPlay
          playsInline
          muted
          preload="auto" // Ensures the video loads with priority
        ></video>
      </div>
      <div>
        <div className="blocks">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div>
        {!hasPlayedOnce && (
          <div className={`header ${montserrat.className}`}>
            {["P", "I", "F", "A", "C", "T", "O", "R"].map((letter, index) => (
              <div className="header-item" key={index}>
                <div className={`header-wrapper hh-${index + 1}`}>
                  <h1 className="">{letter}</h1>
                </div>
              </div>
            ))}
          </div>
        )}

        {!hasPlayedOnce && (
          <div className="counter text-white">
            <p>
              3 <br />
              2 <br />1
            </p>
          </div>
        )}

        {!hasPlayedOnce && <div className="tagline"></div>}
      </div>
    </div>
  );
}

export default Section2;
