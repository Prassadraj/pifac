"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import Nav from "./NavBtn";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Disable scrolling by applying inline styles
    if (isActive) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }

    return () => {
      // Cleanup on component unmount
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [isActive]);

  useEffect(() => {
    // Close the menu when navigating to a new route
    if (isActive) {
      setIsActive(false);
    }
  }, [pathname]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div onClick={() => setIsActive(!isActive)} className={styles.button}>
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
