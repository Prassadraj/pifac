"use client";
import { useEffect, useState } from "react";
import Section from "@/Homepage/VideoSection1/Section";
import Work1 from "@/Homepage/Works/Work1/Work1";
import PlayReel from "@/Homepage/Works/PlayReel/PlayReel";
import Work2 from "@/Homepage/Works/Work2/Work2";
import Work3 from "@/Homepage/Works/Work3/Work3";
import Lenis from "@studio-freight/lenis";
import Work4 from "@/Homepage/Works/Work4/Work4";
import Spread from "@/component/Spread/Spread";
import Footer from "@/component/Footer/Footer";
import Section2 from "@/Homepage/VideoSection1/Section2";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check sessionStorage only on the client side
    const hasShownContent = sessionStorage.getItem("hasShownContent");

    if (hasShownContent === "true") {
      setShow(true);
    } else {
      const timer = setTimeout(() => {
        setShow(true); // Show the content after 5 seconds
        sessionStorage.setItem("hasShownContent", "true"); // Set the flag in sessionStorage
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="hidden tablet:block">
        <Section />
      </div>
      <div className=" tablet:hidden">
        <Section2 />
      </div>
      {/* Conditionally render components after 5 seconds */}
      {show && (
        <>
          <Work1 />
          <PlayReel />
          <Work2 />
          <Work3 />
          <Work4 />
          <Spread />
          <Footer />
        </>
      )}
    </>
  );
}
