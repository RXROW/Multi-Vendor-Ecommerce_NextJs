import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FolderSync, HandHeart, HelpCircle } from "lucide-react";
import adsImg from "../../../public/eng-.gif";
import HeroCarousel from "./HeroCarousel";
import SidebarCategories from "./SidebarCategories";
import { getData } from "@/lib/getData";

const Hero = async () => {
  const banners = await getData("banners");
  return (
    <div className=" grid grid-cols-12 gap-6 mb-6 ">
      <SidebarCategories />

      <div className="  col-span-12 md:col-span-7   h-full overflow-hidden rounded-md  ">
        <div className=" flex items-center justify-center">
          <HeroCarousel banners={banners}/>
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
