// @ts-nocheck
"use client";

import React from "react";

import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TrainingCarousel = () => {
  const trainings = [
    {
      id: 1,
      title: "Vegetables",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim iste nihil! Rem neque repudiandae quibusdam nemo delectus soluta earum unde inventore reiciendis quod? Eos voluptatibus praesentium odit in facilis!",
      imageUrl: "/4.png",
    },
    {
      id: 2,
      title: "Fruits",
      description:
        "Explore a variety of fresh fruits. Rem neque repudiandae quibusdam nemo delectus soluta earum unde inventore reiciendis.",
      imageUrl: "/1.png",
    },
    {
      id: 1,
      title: "Vegetables",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim iste nihil! Rem neque repudiandae quibusdam nemo delectus soluta earum unde inventore reiciendis quod? Eos voluptatibus praesentium odit in facilis!",
      imageUrl: "/4.png",
    },
    {
      id: 1,
      title: "Vegetables",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim iste nihil! Rem neque repudiandae quibusdam nemo delectus soluta earum unde inventore reiciendis quod? Eos voluptatibus praesentium odit in facilis!",
      imageUrl: "/2.png",
    },
    {
      id: 1,
      title: "Vegetables",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim iste nihil! Rem neque repudiandae quibusdam nemo delectus soluta earum unde inventore reiciendis quod? Eos voluptatibus praesentium odit in facilis!",
      imageUrl: "/4.png",
    },
    // Add more objects as needed
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        // autoPlay={true}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="p-2"
      >
        {trainings.map((training) => {
          return (
            <Card
              key={training.id}
              className="mb-5 overflow-hidden"
              renderImage={() => (
                <Link href="#">
                  <Image
                    width={500}
                    height={500}
                    src={training.imageUrl}
                    alt={training.title}
                    className="w-full h-[250px]"
                  />
                </Link>
              )}
            >
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {training.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {training.description.slice(0, 100)}...
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href="#"
                  className="bg-lime-500 hover:bg-lime-600 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
                >
                  Read More
                </Link>
                <Link href="#">Talk to the consultancy</Link>
              </div>
            </Card>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TrainingCarousel;
