"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import "./nav.css";
import logo from "../../app/images/PixcellFactory_logo.png";
import sparkle from "../../app/images/sparkle.png";
import Header from "../../component/header";
import MyContext from "@/context/MyContext";

const montserrat = Montserrat({ subsets: ["latin"] });

function Nav() {
  const pathname = usePathname(); // Get the current pathname
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navItems = [
    { name: "Works", href: "/works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Handle nav visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline({ delay: 5 });

    // Initial setup
    gsap.set(".logo .img", { y: 100 });
    gsap.set(".nav-item", { y: 100, opacity: 0 });
    tl.fromTo(
      ".mobilelogo",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power3.out",
        stagger: 0.1,
        duration: 0.5,
      }
    );
    // Animate the logo and nav items
    tl.to(".logo .img", {
      y: 0,
      ease: "power3.out",
      duration: 0.5,
    }).to(
      ".nav-item",
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        stagger: 0.1,
        duration: 0.5,
      },
      "-=0.3"
    );

    return () => {
      tl.kill(); // Clean up GSAP timeline on unmount
    };
  }, []);

  // for mobile
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If at the top of the page, set isScrolledUp to true
      if (currentScrollY === 0) {
        setIsScrolledUp(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrolledUp(true); // User scrolled up
      } else if (currentScrollY > lastScrollY) {
        setIsScrolledUp(false); // User scrolled down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`hidden fixed top-0 z-50 left-0 w-full tablet:flex tablet:justify-between items-center px-2 py-5 laptop:px-16 laptop:py-10 gap-2 ${montserrat.className} transition-opacity duration-300`}
      >
        {/* Logo Section */}
        <Link
          href="/"
          className={`logo ${
            isNavVisible ? "opacity-100" : "opacity-0"
          }  transition-opacity duration-300
      `}
        >
          <Image className="img  w-32 lg:w-52 " src={logo} alt="Logo" />
        </Link>

        {/* Navigation Items */}
        {isNavVisible ? (
          <div
            className={`tablet:flex hidden gap-4 tablet:gap-5 laptop:gap-10 cursor-pointer 
      transition-all duration-1000 ease-in-out transform opacity-100 visible`}
          >
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  className={`nav-item group flex flex-col items-center ${
                    pathname === item.href ? "text-gray-800" : ""
                  }`}
                >
                  <p className="tablet:text-base text-xs text-white name">
                    {item.name}
                  </p>
                  <p className="h-[1px] laptop:block hidden bg-white w-0 group-hover:w-full transition-all duration-300"></p>
                  {pathname === item.href && (
                    <Image
                      className="transition-all duration-300"
                      src={sparkle}
                      alt="Sparkle"
                      width={15}
                      height={15}
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <Header
            className={`transition-all duration-1000 ease-in-out transform opacity-0 invisible`}
          />
        )}
      </div>
      {/* mobile  */}
      <div className="tablet:hidden">
        <div
          className={` fixed transition-all ease-in-out transform duration-500 top-5 left-0 z-50 p-2 justify-around      
            ${isScrolledUp ? "opacity-100" : "opacity-0"}`}
        >
          {" "}
          <Link
            href="/"
            className={`mobilelogo transition-opacity duration-300`}
          >
            <Image className="w-32 lg:w-52" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Button */}
        <div
          className={` mobilelogo transition-all fixed top-0 right-0 z-50 duration-500 ease-in-out transform ${
            isScrolledUp ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <Header />
        </div>
      </div>
    </>
  );
}

export default Nav;
