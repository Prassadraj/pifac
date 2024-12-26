"use client";
import styles from "./styles.module.scss";
import Picture1 from "../../../../public/images/1.webp";
import Picture2 from "../../../../public/images/2.webp";
import Picture3 from "../../../../public/images/3.webp";
import Picture4 from "../../../../public/images/4.webp";
import Picture5 from "../../../app/images/window.png";
import Picture6 from "../../../../public/images/6.webp";
import Picture7 from "../../../../public/images/7.webp";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

gsap.registerPlugin(ScrollTrigger);

export default function Laptop4() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false); // Local hover state
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: Picture1, scale: scale4 },
    { src: Picture2, scale: scale5 },
    { src: Picture3, scale: scale6 },
    { src: Picture4, scale: scale5 },
    { src: Picture5, scale: scale6 },
    { src: Picture6, scale: scale8 },
    { src: Picture7, scale: scale9 },
  ];

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    gsap.fromTo(
      ".wedding p",
      { y: 150 },
      {
        y: 0,
        scrollTrigger: ".wedding",
        duration: 0.5,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.1,
      }
    );

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
      {isHovering && (
        <motion.div
          variants={cursorVariants}
          animate="hover"
          transition={{ duration: 0.1, ease: "linear" }}
          className="fixed top-0 flex justify-center items-center left-0 w-16 h-16 z-50 rounded-full bg-gray-700 mix-blend-difference"
          style={{ pointerEvents: "none" }}
        >
          <p
            className={`${montserrat.className} text-white font-normal text-sm`}
          >
            Scroll
          </p>
        </motion.div>
      )}

      <div
        className="wedding tablet:px-10 laptop:px-20 flex overflow-hidden"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        {"Wedding".split("").map((text, i) => (
          <p
            key={i}
            className={`${montserrat.className} font-normal text-[20vw] tablet:text-[70px] laptop:text-[100px]`}
          >
            {text}
          </p>
        ))}
      </div>

      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale }, index) => (
            <motion.div
              key={index}
              style={{ scale }}
              className={styles.el}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className={styles.imageContainer}>
                <Image src={src} fill alt="image" placeholder="blur" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
