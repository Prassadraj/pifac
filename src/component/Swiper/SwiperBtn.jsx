"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import "./swipe.css";
import { Mousewheel } from "swiper/modules";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";
import MyContext from "@/context/MyContext";

const montserrat = Montserrat({
  subsets: ["latin"],
});
export default function App() {
  const swiperRef = useRef(null);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(1);
  const { data, nav, setNav, mousePosition } = useContext(MyContext);
  // const [nav, setNav] = useState("vfx");

  const [isHovering, setIsHovering] = useState(true);
  const categories = data?.allData.map((item) => item.category);

  const router = useRouter();

  const images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
  ];

  const filteredData = data.allData.filter((data) => nav == data.category);

  useEffect(() => {
    animateImage();
  }, [nav]);

  const handleSlideTo = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  const animateImage = () => {
    gsap.fromTo(
      ".image",
      { y: 900, scale: 0.5 },
      { y: 0, x: 0, scale: 1, ease: "power2.out", duration: 1.5 } // Adjusted duration for smoother animation
    );
    gsap.fromTo(
      ".images",
      { y: 50, scale: 0 },
      { y: 0, scale: 1, ease: "power2.out", duration: 2 } // Adjusted duration for smoother animation
    );
    gsap.fromTo(
      ".title",
      {
        y: 150,
        skewX: "-160deg",
      },
      {
        y: 0,
        skewX: "0deg",
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.1,
      }
    );
  };
  const handleNavigation = (href) => {
    gsap.fromTo(
      ".image",
      { y: 0 },
      { y: -900, delay: 0, x: 0, ease: "power3.out", duration: 3.5 }
    );
    gsap.fromTo(
      ".count",
      { y: 0 },
      { ease: "power3.out", duration: 1.5, opacity: 0 }
    );
    gsap.fromTo(
      ".title",
      { y: 0 },
      { ease: "power3.out", duration: 1.5, opacity: 0 }
    );

    gsap.fromTo(
      ".category",
      { y: 0 },
      { ease: "power3.out", duration: 1.5, opacity: 0, zIndex: 0 }
    );
    // Delay navigation to allow animation to finish
    setTimeout(() => {
      router.push(href); // Navigate to the desired page
    }, 1500); // Match the animation duration
  };

  useEffect(() => {
    if (swiperRef.current) {
      animateImage();
      swiperRef.current.on("slideChange", () => {
        const activeSlideIndex = swiperRef.current.realIndex + 1;
        setSelected(activeSlideIndex);
        animateImage();
      });
    }
  }, []);

  const cursorVariants = {
    hover: { x: mousePosition.x, y: mousePosition.y },
    default: {},
  };
  return (
    <>
      <motion.div
        variants={cursorVariants}
        animate="hover"
        transition={{ duration: 0.1, ease: "linear" }}
        className="fixed top-0  hidden tablet:flex
          justify-center items-center left-0 w-16 h-16 z-50 rounded-full bg-gray-700 mix-blend-difference"
        style={{ pointerEvents: "none" }}
      >
        <p className={`${montserrat.className} text-white font-normal text-sm`}>
          View
        </p>
      </motion.div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        spaceBetween={0}
        speed={1200}
        effect="coverflow"
        direction="vertical"
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        {filteredData.map((data, index) =>
          data.items.map((item, itemIndex) => (
            <SwiperSlide key={itemIndex}>
              <div
                key={itemIndex}
                className="relative h-full w-full"
                onMouseEnter={() => setIsHovering(true)}
              >
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default link behavior
                    handleNavigation(`/work/${nav}/${item.id}`); // Trigger animation and navigation
                  }}
                  aria-label={`View details of slide ${itemIndex + 1}`}
                >
                  <Image
                    src={item.mainImg} // Use item.mainImg dynamically
                    alt={`Slide ${itemIndex + 1}`}
                    className="object-cover cursor-pointer transition-opacity duration-1000 images opacity-50"
                    fill
                    quality={50}
                    loading={itemIndex === 0 ? "eager" : "lazy"} // Load first image eagerly
                    priority={itemIndex === 0} // Priority load for the first image
                  />
                  <div className="flex items-center justify-center h-full bg-black bg-opacity-30">
                    <div
                      className="relative laptop:w-[25%] w-[60%] h-[400px]
              tablet:w-[40%] top-[2%] tablet:top-[8%] laptop:top-[10%] tablet:h-[500px] laptop:h-[400px] overflow-hidden"
                      style={{
                        clipPath: "polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%)", // Adds a visible effect
                      }}
                    >
                      <Image
                        src={item.mainImg} // Use item.mainImg dynamically here as well
                        alt={`Slide ${itemIndex + 1} inner`}
                        className="object-cover transition-opacity duration-1000 image"
                        fill
                        quality={75}
                        loading={itemIndex === 0 ? "eager" : "lazy"}
                        priority={itemIndex === 0}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>

      <div className="count custom-navigation right-5 tablet:right-20 gap-2 tablet:gap-4">
        {filteredData.map((data, dataIndex) =>
          data.items.map((_, index) => (
            <button
              key={`${dataIndex}-${index}`} // Unique key combining dataIndex and index
              className={`bg-black text-xs tablet:text-lg hover:bg-black p-1 
          tablet:px-2 tablet:py-1 rounded-[50%] transition-all duration-500
          ${
            selected === index + 1
              ? "bg-white text-black hover:text-white"
              : "bg-gray-800 border border-gray-500 text-white"
          }`}
              onClick={() => handleSlideTo(index)}
            >
              {index + 1}
            </button>
          ))
        )}
      </div>

      <div
        className="fixed tablet:text-xl text-xs flex gap-5 tablet:gap-10 font-black top-24
         tablet:top-1/4 laptop:top-28
       left-[50%] translate-x-[-50%] z-50 "
      >
        {categories.map((category) => (
          <p
            key={category}
            className="cursor-pointer relative category capitalize"
            onClick={() => setNav(category)}
          >
            {category}
            {nav === category && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white"></span>
            )}
          </p>
        ))}
      </div>
      <div
        className="count fixed tablet:bottom-10 bottom-5 tablet:text-lg text-xs
       left-5 tablet:left-14 z-20 text-white "
      >
        {filteredData.map((data, index) => (
          <div key={index}>
            <p>{`${selected} / ${data.items.length}`}</p>
          </div>
        ))}
      </div>

      <div
        className="fixed top-1/4 left-1/2 laptop:top-2/4 laptop:left-56 tablet:top-2/4 tablet:left-32 tablet:gap-3 flex flex-col 
            transform -translate-x-1/2 -translate-y-1/2 tablet:-translate-x-0 tablet:translate-y-0 tablet:text-lg text-xs z-20 text-white"
      >
        {filteredData.map((data, dataIndex) => (
          <div key={`${dataIndex}`} className="overflow-hidden">
            <div
              className="font-bold tablet:text-4xl capitalize text-base "
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <p className="title">{data?.items[selected - 1]?.title}</p>
            </div>

            <div
              className="font-medium tablet:text-xl text-sm capitalize"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <p className="title">{data?.items[selected - 1]?.subTitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="count fixed tablet:bottom-10 bottom-5 tablet:text-lg text-xs
       right-5 tablet:right-14 z-20 text-white "
      >
        <p>click to explore</p>
      </div>
    </>
  );
}
