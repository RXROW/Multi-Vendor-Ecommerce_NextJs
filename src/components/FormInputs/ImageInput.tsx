import { UploadDropzone } from "@/lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";
 

export default function ImageInput({
  label,
  imageUrl = "",
  setImageUrl,
  className = "col-span-full border border-gray-100 border-dashed p-1 rounded-lg",
  endpoint = "imageUploader",
}:any) {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4 ">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="flex space-x-2  bg-slate-900 dark:bg-green-600 rounded-md shadow text-slate-50 py-2 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Item image"
          width={1000}
          height={667}
          className="w-full h-64 object-contain"
        />
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].url);
 
            toast.success("Image Upload Completed");
            console.log("Files: ", res);
            console.log("Upload Completed");
          }}
          onUploadError={(error) => {
         
            toast.error("Image Upload Failed, Try Again");
            console.log(`ERROR! ${error.message}`);
          }}
        />
      )}
    </div>
  );
}