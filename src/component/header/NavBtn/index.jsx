"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./Curve";
import logo from "../../../app/images/PixcellFactory_logo.png";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
});
const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/works",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function NavBtn() {
  // Renamed from "index" to "NavBtn"
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className="absolute tablet:top-10 tablet:left-5 top-9 left-5 largeLaptop:left-7">
        <Image
          width={200}
          height={100}
          className="w-32 lg:w-52"
          src={logo}
          alt="Logo"
        />
      </div>
      <div className={`${styles.body} ${montserrat.style}}`}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={`${styles.header} text-red-400`}>
            <p className="text-lg text-gray-400">Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
``;
