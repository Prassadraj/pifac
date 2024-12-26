"use client";

import { gsap, ScrollTrigger } from "gsap/all";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import React, { useEffect } from "react";
import spark from "../images/sparkle.png";
import Footer from "@/component/Footer/Footer";

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

function About() {
  const images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax effect for the sticky image
    gsap.to(".parallax-image", {
      scale: 1.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".banner",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Title animation
    gsap.fromTo(
      ".title",
      { y: 450, opacity: 0, skewX: "-160deg" },
      {
        y: 0,
        opacity: 1,
        skewX: "0deg",
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      }
    );

    // Phone animation
    gsap.fromTo(
      ".phone",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, []);

  return (
    <div className={` ${montserrat.className}`}>
      {/* Banner Section */}
      <div
        className={`banner h-[150vh] relative w-full ${montserrat.className}`}
      >
        <div className="parallax-container h-[100vh] sticky top-0 overflow-hidden">
          <Image
            src={images[5]}
            alt="Dynamic Parallax Background"
            className="parallax-image object-cover w-full h-full"
            fill
            quality={50}
            priority
          />
        </div>

        <div className="absolute px-5 top-1/3 flex flex-col gap-10 items-start overflow-hidden">
          <div className="overflow-hidden">
            <p className="title text-[30px] tablet:text-[80px] capitalize font-bold">
              Shaping Stories, Elevating Digital Presence
            </p>
          </div>
          <div className="overflow-hidden max-w-lg">
            <p
              className={`title text-xl tablet:text-2xl capitalize font-normal ${montserratLight.className}`}
            >
              Crafting immersive visuals and seamless edits to build a
              compelling digital presence.
            </p>
          </div>
          <div className=" mt-2 rounded-full  text-center font-medium">⇩</div>

          <div className="mt-20">
            <p>
              At our VFX and editing studio, we transform ideas into stunning
              visuals and seamless narratives. Blending creativity with
              cutting-edge technology, we craft immersive experiences that
              captivate and inspire.
            </p>
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="h-fit px-3 py-5 flex-col flex gap-14">
        <div className="flex flex-col gap-6">
          <div className="flex gap-1 items-center">
            <Image src={spark} width={20} height={20} alt="Sparkle Effect" />
            <h2 className="text-lg font-bold tracking-wide">How we work</h2>
          </div>

          <p
            className={`text-2xl font-extralight ${montserratLight.className}`}
          >
            We believe that extraordinary achievements stem from unwavering
            passion, fearless creativity, and impeccable artistry.
          </p>
        </div>
        <div className="flex flex-col gap-10 justify-center px-2">
          <div className="flex gap-8 w-full">
            <div>01</div>
            <div className="flex flex-col gap-5">
              <p className="text-2xl max-w-60">
                {" "}
                Crafting Multisensory Marvels
              </p>
              <p className="text-gray-400">
                We design experiences that harmonize the physical and digital
                worlds, ensuring every nuance of your product resonates across
                all senses. With meticulous attention to detail, we deliver an
                unforgettable journey that seamlessly integrates into your
                ecosystem.
              </p>
            </div>
          </div>
          <div className="flex gap-8 w-full">
            <div>02</div>
            <div className="flex flex-col gap-5">
              <p className="text-2xl max-w-60">
                {" "}
                Humanity: The Soul of Our Craft
              </p>
              <p className="text-gray-400">
                We see intuition as our ultimate technology and curiosity as our
                driving force. Rooted in empathy and honesty, our creations go
                beyond visuals—they touch hearts and leave lasting impressions,
                infusing soul and passion into every detail.
              </p>
            </div>
          </div>
          <div className="flex gap-8 w-full">
            <div>03</div>
            <div className="flex flex-col gap-5">
              <p className="text-2xl max-w-60"> The Elegance of Simplicity</p>
              <p className="text-gray-400">
                In a cluttered world, we strive for clarity. Our designs embody
                the perfect union of form and function, focusing on essentials
                to craft timeless elegance and meaningful impact. Simplicity
                isn’t just our style; it’s our philosophy.
              </p>
            </div>
          </div>
          <div className="flex gap-8 w-full">
            <div>04</div>
            <div className="flex flex-col gap-5">
              <p className="text-2xl max-w-60"> Excellence Beyond Boundaries</p>
              <p className="text-gray-400">
                Perfection is in the details, and innovation is our compass. We
                push creative limits to deliver groundbreaking experiences that
                elevate your brand and exceed expectations, blending artistry
                with precision to create something extraordinary.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* what we believe */}
      <div className="px-6 mt-14 h-fit mb-5 flex flex-col gap-10">
        <div className="flex items-center gap-2 ">
          {" "}
          <Image src={spark} width={20} height={20} alt="Sparkle Effect" />
          <p>What we believe</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[30px] font-semibold">Data guides the way</h1>
          <h1 className="text-[30px] font-semibold">
            {" "}
            — emotion sparks the transformation.
          </h1>
        </div>
        <div>
          <p className={`${montserratLight.className}`}>
            We believe the best results come when data-driven insights ignite
            emotional connections, fostering deeper brand loyalty, lasting
            customer engagement, and higher conversion rates.
          </p>
        </div>
      </div>

      {/* design  */}
      <div className="h-fit px-3 py-10 mt-10 flex flex-col gap-5 bg-[#011C27]">
        <p className={`text-[40px] font-bold ${montserraMedium.className}`}>
          Innovation and transformation through design.
        </p>
        <p className={`${montserratLight.className} `}>
          We are a collective of visionary VFX artists and tech innovators,
          pushing the boundaries of the digital world with relentless passion
          and dedication. Inspired by the magic of visual storytelling,
          captivated by cutting-edge technology, and driven by an unwavering
          commitment to creating breathtaking digital experiences that resonate
          with purpose and artistry.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
