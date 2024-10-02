"use client";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Product {
  imageUrl: string;
  title: string;
}

interface CategoryCarouselProps {
  products: Product[];
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ products }) => {
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

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true}  
      infinite={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="p-4"
    >
      {products.map((product, i) => (
        <Link
          key={i}
          href="#"
          className="rounded-lg flex items-center flex-col"
        >
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={556}
            height={556}
            className="w-[150px] h-[130px] rounded-md"
          />
          <h3 className="text-slate-800 dark:text-slate-200 text-center">
            {product.title}
          </h3>
        </Link>
      ))}
    </Carousel>
  );
};

export default CategoryCarousel;
