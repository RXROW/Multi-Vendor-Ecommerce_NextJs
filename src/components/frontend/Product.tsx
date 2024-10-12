"use client";
import { addToCart } from "@/redux/slices/CartSlice";
import { BaggageClaim } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Product = ({ product }: any) => {
  const dispatch=useDispatch();
  const handleAddToCart=()=>{
    dispatch(addToCart(product))
    toast.success("Item Added To Cart Successfully!")
  }
  return (
    <div className="rounded-lg border overflow-hidden hover:-translate-y-1 duration-300 transition-all bg-slate-100 dark:bg-slate-800 shadow-lg">
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
            <p className=" dark:text-white :text-slate-800 text-2xl font-semibold  ">
              ${product.salePrice}
            </p>
            <p className=" dark:text-gray-300  :text-slate-600 text-xl line-through font-thin ">
              ${product.productPrice}
            </p>
          </div>

          <button onClick={()=>handleAddToCart()}
           className="flex items-center space-x-2 text-white bg-green-600 hover:bg-green-700 duration-300 transition-all px-4 py-2 rounded-md">
            <BaggageClaim />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
