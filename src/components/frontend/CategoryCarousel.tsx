 "use client";
import { BaggageClaim } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Key } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CategoryCarousel({ products }: { products: any }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="p-2"
      >
        {products.map((product: any) => {
          return (
            <div
              key={product.id}
              className="rounded-lg border overflow-hidden hover:-translate-y-1 duration-300 transition-all bg-slate-100 dark:bg-slate-800 shadow-lg"
            >
              <Link href={`/products/${product.slug}`}>
                <Image
                  src={product.imageUrl}
                  alt="market image"
                  width={556}
                  height={556}
                  className="w-full h-[200px] object-cover rounded-t-md "
                />
              </Link>

              <div className="p-3">
                <Link href={`/products/${product.slug}`}>
                  <h2 className=" text-slate-900 text-base dark:text-slate-200 lg:font-semibold text-center">
                    {product.title}
                  </h2>
                </Link>
                <div className="flex items-center justify-between mt-3">
                  <div className=" flex items-center gap-2">
                  <p className=" dark:text-white :text-slate-800 text-2xl font-semibold  ">${product.salePrice}</p>
                  <p className=" dark:text-gray-300  :text-slate-600 text-xl line-through font-thin ">${product.productPrice}</p>
                  </div>

                  <button className="flex items-center space-x-2 text-white bg-green-600 hover:bg-green-700 duration-300 transition-all px-4 py-2 rounded-md">
                    <BaggageClaim />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}