"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styled from "styled-components";

 
const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-button-next,
  .swiper-button-prev {
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 50%;
    width: 40px;
    height: 40px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    &:after {
      font-size: 20px;
    }
  }

  .swiper-pagination-bullet {
    background-color: #ffffff;
  }
`;

// Styled component for the Swiper slide content
const StyledSlideLink = styled(Link)`
  display: block;
  width: 100%;
`;

export default function HeroCarousel() {
  return (
    <StyledSwiper
      spaceBetween={30}
      centeredSlides={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <StyledSlideLink href="#">
          <Image
            src="/1.png"
            alt="Slide 1"
            width={812}
            height={484}
            className="w-full h-full"
          />
        </StyledSlideLink>
      </SwiperSlide>

      <SwiperSlide>
        <StyledSlideLink href="#">
          <Image
            src="/2.png"
            alt="Slide 2"
            width={812}
            height={484}
            className="w-full h-full"
          />
        </StyledSlideLink>
      </SwiperSlide>

      <SwiperSlide>
        <StyledSlideLink href="#">
          <Image
            src="/4.png"
            alt="Slide 3"
            width={812}
            height={484}
            className="w-full h-full"
          />
        </StyledSlideLink>
      </SwiperSlide>
    </StyledSwiper>
  );
}
