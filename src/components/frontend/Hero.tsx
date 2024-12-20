import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import { getData } from "@/lib/getData";

interface CouponProps {
  discount: number;
  title: string;
  code: string;
  minAmount: number;
  image: string;
  inactive?: boolean;
}

const CouponCard = ({ discount, title, code, minAmount, image, inactive = false }: CouponProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm mb-4 gap-4 sm:gap-2">
      <div className="flex items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
        
        <div className="flex-grow sm:flex-grow-0">
          <div className="flex items-center flex-wrap gap-2 mb-1">
            <span className="text-red-500 dark:text-red-400 text-lg sm:text-xl font-semibold">
              {typeof discount === 'number' ? `$${discount}` : `${discount}%`} Off
            </span>
            {inactive && (
              <span className="px-2 py-0.5 text-xs bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded">
                Inactive
              </span>
            )}
          </div>
          <h3 className="text-gray-700 dark:text-gray-200 font-medium mb-2 sm:mb-0">{title}</h3>
          
          <div className="flex items-center gap-2 mt-2">
            <div className="flex gap-1">
              {[0, 0, 0, 0].map((_, index) => (
                <div
                  key={index}
                  className="bg-red-500 dark:bg-red-600 text-white rounded px-1.5 sm:px-2 py-0.5 text-xs sm:text-sm"
                >
                  00
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-start sm:items-end w-full sm:w-auto">
        <div className="bg-green-50 dark:bg-green-900 border border-green-100 dark:border-green-800 text-green-600 dark:text-green-400 px-3 sm:px-4 py-1 rounded font-medium text-sm sm:text-base w-full sm:w-auto text-center sm:text-right">
          {code}
        </div>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 hidden sm:block">
          * Min. order ${minAmount}
        </p>
      </div>
    </div>
  );
};

const Hero = async () => {
  const coupons = [
    {
      discount: 10,
      title: "Summer Gift Voucher",
      code: "SUMMER24",
      minAmount: 500,
      image: "https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75",
      inactive: true
    },
    {
      discount: 100,
      title: "Winter Gift Voucher",
      code: "WINTER24",
      minAmount: 1500,
      image: "https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75",
      inactive: true
    },
    
  ];

  const banners = await getData("banners");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-6">
      {/* Left Section: Carousel */}
      <div className="lg:col-span-7 overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-sm">
        <div className="aspect-[16/9] sm:aspect-auto sm:h-full">
          <HeroCarousel banners={banners} />
        </div>
      </div>
      
      {/* Right Section: Discount Coupon */}
      <div className="lg:col-span-5 p-4 sm:p-6 bg-orange-50 dark:bg-slate-800/50 rounded-lg border border-orange-200 dark:border-slate-700 shadow-sm">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Latest Super Discount Active Coupon Code
        </h2>
        <div className="space-y-3 sm:space-y-4 overflow-y-auto">
          {coupons.map((coupon, index) => (
            <CouponCard key={index} {...coupon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;