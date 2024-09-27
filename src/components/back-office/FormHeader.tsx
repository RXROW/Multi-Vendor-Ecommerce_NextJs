"use client"
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function FormHeader({title}:any) {
  const router=useRouter()
  return (
    <div className=" flex items-center dark:bg-slate-600 bg-white border dark:border-transparent border-green-500 justify-between py-6 px-12 rounded-md">
      <h2 className=" text-xl font-semibold">{title}</h2>
      <button onClick={()=>router.back()} className=" ring-1 ring-red-500 rounded-full">
        <X className=" text-red-500 "/>
      </button>
    </div>
  );
}

export default FormHeader;
