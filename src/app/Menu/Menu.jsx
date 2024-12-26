"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "../images/PixcellFactory_logo.png";
import Link from "next/link";
import "./menu.css";
import { Lato } from "@next/font/google";
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});
function Menu() {
  const container = useRef(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navItems = [
    { name: "Works", href: "/works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  const toggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <>
      <div className="menu-container" ref={container}>
        <div className="menu-bar">
          <div className="menu-logo">
            <Link href="/">Pifactor</Link>
          </div>
          <div className="menu-open" onClick={toggle}>
            <p>Menu</p>
          </div>
        </div>
        <div className="menu-overlay">
          <div className="menu-overlay-bar">
            <div className="menu-logo">
              <Link href="/">Pifactor</Link>
            </div>
            <div className="menu-close" onClick={toggle}>
              <p>Close</p>
            </div>
          </div>
          <div className="menu-close-icon">
            <p>&#x2715;</p>
          </div>
          <div className="menu-copy">
            <div className="menu-links">
              {navItems.map((items, i) => (
                <div key={i} className="menu-links-items">
                  <div className="menu-links-holder" onClick={toggle}>
                    <Link className="menu-link" href={items.href}>
                      {items.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="menu-info">
              <div className="menu-info-col">
                <a href="#">Insta &#8599;</a>
                <a href="#">fb &#8599;</a>
                <a href="#">wp &#8599;</a>
              </div>
              <div className="menu-info-col">
                <p>adress</p>
                <p>phone Number</p>
              </div>
            </div>
          </div>
          <div className="menu-preview">
            <p>show video</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
