import { X } from "lucide-react";
import React from "react";

function FormHeader({title}:any) {
  return (
    <div className=" flex items-center dark:bg-slate-600 bg-white border dark:border-transparent border-green-500 justify-between py-6 px-12 rounded-md">
      <h2 className=" text-xl font-semibold">{title}</h2>
      <button className="  ">
        <X />
      </button>
    </div>
  );
}

export default FormHeader;
