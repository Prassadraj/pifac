"use client";
import styles from "./zoom.module.scss";
import Picture1 from "../../../public/images/1.webp";
import Picture2 from "../../../public/images/2.webp";
import Picture3 from "../../../public/images/3.webp";
import Picture4 from "../../../public/images/4.webp";
import Picture5 from "../../app/images/window.png";
import Picture6 from "../../../public/images/6.webp";
import Picture7 from "../../../public/images/7.webp";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
});

gsap.registerPlugin(ScrollTrigger);

export default function Zoom() {
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
    <div className="">
      <div
        ref={container}
        className={`${styles.container} h-fit tablet:h-[300vh]`}
      >
        <div className={`${styles.sticky} hidden tablet:block`}>
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
        <div className={`${styles.sticky} tablet:hidden`}>
          {pictures.map(({ src, scale }, index) => (
            <motion.div
              key={index}
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
    </div>
  );
}
