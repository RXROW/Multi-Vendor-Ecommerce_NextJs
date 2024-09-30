"use client";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CategoryCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const markets = [
    { id: 1, title: "Category 1", image: "/1.png" },
    { id: 2, title: "Category 2", image: "/2.png" },
    { id: 3, title: "Category 3", image: "/1.png" },
    { id: 4, title: "Category 4", image: "/4.png" },
    { id: 5, title: "Category 5", image: "/4.png" },
    { id: 6, title: "Category 6", image: "/4.png" },
    { id: 7, title: "Category 7", image: "/4.png" },
    { id: 8, title: "Category 8", image: "/4.png" },
  ];

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="p-4"
    >
      {markets.map((market) => (
        <Link
          key={market.id}
          href="#"
          className="rounded-lg flex items-center flex-col"
        >
          <Image
            src={market.image}
            alt={market.title}
            width={556}
            height={556}
            className="w-[150px] h-[130px] rounded-md"
          />
          <h3 className="text-slate-800 dark:text-slate-200 text-center">
            {market.title}
          </h3>
        </Link>
      ))}
    </Carousel>
  );
};

export default CategoryCarousel;
