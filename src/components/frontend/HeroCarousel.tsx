"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./HeroCarousel.css"; // Import the regular CSS file

export default function HeroCarousel() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper" // Now referencing the class from regular CSS
    >
      <SwiperSlide>
        <Link href="#" className="swiperSlideLink">
          <Image
            src="/1.png"
            alt="Slide 1"
            width={812}
            height={684}
            className="w-full h-full"
          />
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href="#" className="swiperSlideLink">
          <Image
            src="/2.png"
            alt="Slide 2"
            width={812}
            height={684}
            className="w-full h-full"
          />
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href="#" className="swiperSlideLink">
          <Image
            src="/4.png"
            alt="Slide 3"
            width={812}
            height={684}
            className="w-full h-full"
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
