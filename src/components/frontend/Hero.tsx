import Image from "next/image";
import Link from "next/link";
import React from "react";
import SliderImages from "./SliderImages";

const Hero = () => {
  return (
    <div className=" flex gap-8 ">
      <div className=" w-1/3 bg-white dark:bg-slate-800 border border-gray-100 rounded-lg overflow-hidden dark:border-slate-500  ">
        <h2 className=" bg-slate-100 dark:bg-slate-900 dark:text-slate-100 text-slate-900 py-4 px-6 font-semibold border-b border-gray-300 dark:border-slate-500 ">
          Shope Categories
        </h2>

        <div className=" px-6 py-4 h-[300px] overflow-y-scroll">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
            <Link
              key={i}
              href="#"
              className=" flex items-center  gap-5 hover:bg-slate-200 dark:hover:bg-slate-200/25 transition-all rounded-lg p-1"
            >
              <Image
                src="/profile.png"
                alt="category"
                width={200}
                height={200}
                className=" w-14 h-14 object-cover rounded-full border border-green-500"
              />
              <span>Category name </span>
            </Link>
          ))}
        </div>
      </div>

      <div className=" w-2/3  flex items-center justify-center h-full overflow-hidden rounded-md  ">
        <SliderImages />
      </div>
    </div>
  );
};

export default Hero;
