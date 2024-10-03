import BreadCrump from "@/components/frontend/BreadCrump";
import CategoryCarousel from "@/components/frontend/CategoryCarousel";
import { getData } from "@/lib/getData";
 
import { BaggageClaim, Minus, Plus, Send, Share2, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProductDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  let category;
  try {
    category = await getData(`categories/66fd3b7f204299e8c68445dc`);
  } catch (error) {
    console.error("Error fetching category data:", error);
    return <div>Failed to load category data.</div>;
  }

  if (!category || !category.products) {
    return <div>No products found for this category.</div>;
  }

  return (
    <div>
   <BreadCrump/> 
      <div className="grid grid-cols-12 gap-8">
        <div className="lg:col-span-3 col-span-12">
          <Image
            src="/pexels-02.jpg"
        
            alt="Vegetable Item"
            width={556}
            height={556}
            className="w-full h-[250px] object-cover rounded-lg"
          />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <div className="flex justify-between mb-6">
            <h2 className="text-xl lg:text-2xl font-bold">Vegetable Item</h2>
            <button>
              <Share2 />
            </button>
          </div>

          <div className="border-b border-gray-500">
            <p className="py-2 mb-3 dark:text-slate-300 text-slate-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              provident eos culpa hic porro at sed. Esse rem non distinctio.
            </p>
            <div className="flex items-center gap-8 mb-4">
              <p>
                <b>SKU</b>: 3432414
              </p>
              <p className="bg-green-300 py-1.5 px-4 rounded-full text-slate-800">
                <b>Stock</b>: 3245
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 pt-4 border-b border-gray-500 pb-4">
            <div className="flex items-center gap-4">
              <h4 className="text-2xl">$49</h4>
              <del className="text-slate-400 text-base">$60</del>
            </div>
            <p className="flex items-center">
              <Tag className="w-5 h-5 text-slate-400 me-2" />
              <span> Save 50% right now</span>
            </p>
          </div>
          <div className="flex gap-3 items-center justify-between py-6">
            <div className="rounded-xl border border-gray-400 flex gap-3 items-center">
              <button className="border-r border-gray-400 py-2 px-4">
                <Minus />
              </button>
              <p className="flex-grow px-6">1</p>
              <button className="border-l border-gray-400 py-2 px-4">
                <Plus />
              </button>
            </div>
            <button className="flex items-center space-x-2 text-white bg-green-600 hover:bg-green-700 duration-300 transition-all px-4 py-2 hover:scale-105 rounded-md">
              <BaggageClaim />
              <span>Add To Cart</span>
            </button>
          </div>
        </div>
        <div className="col-span-3 hidden sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <h2 className="bg-gray-100 dark:bg-slate-700 py-3 px-6 font-semibold border-gray-300 dark:border-gray-600 border-b text-gray-800 dark:text-slate-100">
            DELIVERY & RETURNS
          </h2>
          <div className="p-4">
            <div className="flex items-center justify-between rounded-md py-2 px-4 bg-green-800 text-slate-50">
              <span>EFY Express</span>
              <Send />
            </div>
            <div className="py-3 dark:text-slate-100 text-slate-700 border-b border-gray-500">
              Eligible for free delivery. <Link href="#">View Details</Link>
            </div>
            <h2 className="dark:text-slate-200 text-slate-700 py-2">
              Choose Your Location
            </h2>
            <div className="pb-3">
              <select
                id="location1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <hr />
            <div className="pb-3">
              <select
                id="location2"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-white my-8 dark:bg-slate-700 rounded-xl p-4">
        <h2 className="mb-4 text-xl font-semibold text-slate-400 ml-3">
          Related Products
        </h2>
        <CategoryCarousel products={category.products} />
      </div>
    </div>
  );
}
