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

export default function HeroCarousel({ banners }: any) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper" // Now referencing the class from regular CSS
    >
      {banners.map((banner: any) => {
        return (
          <SwiperSlide  key={banner.id}>
            <Link  href={banner.link} className="min-w-[100%] ">
              <Image
                src={banner.imageUrl}
                alt={banner.title}
                width={812}
                height={384}
                className=" w-full h-full object-cover"
              />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
