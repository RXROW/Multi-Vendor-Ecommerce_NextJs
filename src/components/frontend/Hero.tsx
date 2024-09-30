import Image from "next/image";
import Link from "next/link";
import React from "react";
 
import { FolderSync, HandHeart, HelpCircle } from "lucide-react";
import adsImg from "../../../public/eng-.gif";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <div className=" grid grid-cols-12 gap-6 mb-6 ">
      <div className=" hidden md:block col-span-3 bg-white dark:bg-slate-800 border border-gray-100 rounded-lg overflow-hidden dark:border-slate-500  ">
        <h2 className=" bg-slate-100 dark:bg-slate-900 dark:text-slate-100 text-slate-900 py-4 px-6 font-semibold border-b border-gray-300 dark:border-slate-500 ">
          Shope Categories
        </h2>

        <div className=" px-6 py-4 h-[250px] overflow-y-scroll">
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

      <div className="  col-span-12 md:col-span-7   h-full overflow-hidden rounded-md  ">
        <div className=" flex items-center justify-center">
         <HeroCarousel/>
   
        </div>
      </div>
      <div className=" hidden md:block col-span-2   rounded-md">
        <div className=" flex items-center flex-col bg-slate-100 dark:bg-slate-800 rounded-md justify-center  ">
          <Link
            href="#"
            className="flex items-center space-x-1 gap-2  mb-3 mt-3"
          >
            <HelpCircle className=" shrink-0 w-7 h-7 text-lime-500  " />
            <div className=" flex  flex-col ">
              <h2 className=" uppercase  text-sm ">Help Center </h2>
              <p className=" text-[0.6rem] ">Guide to Customer</p>
            </div>
          </Link>
          <Link href="#" className="flex items-center space-x-1 gap-2  mb-3">
            <FolderSync className=" shrink-0  w-7 h-7 text-lime-500  " />
            <div className=" flex  flex-col">
              <h2 className=" uppercase  text-sm ">Easy Return </h2>
              <p className=" text-[0.6rem] ">Quick Return</p>
            </div>
          </Link>
          <Link href="#" className="flex items-center space-x-1 gap-2  mb-3">
            <HandHeart className=" shrink-0  w-7 h-7 text-lime-500  " />
            <div className=" flex  flex-col">
              <h2 className=" uppercase  text-sm ">Easy Return </h2>
              <p className=" text-[0.6rem] ">Quick Return</p>
            </div>
          </Link>
        </div>
        <div className=" mt-8">
          <Image
            src={adsImg}
            alt="advertise image"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
