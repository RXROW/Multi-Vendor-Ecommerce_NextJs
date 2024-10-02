import Image from "next/image";
import Link from "next/link";
import { getData } from "@/lib/getData";

export default async function SidebarCategories() {
  const categories = await getData("categories");
  return (
    <div className="col-span-3 hidden sm:block  bg-white border border-gray-300 rounded-lg   dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <h2 className="bg-gray-100 dark:bg-slate-700 py-3 px-6 font-semibold border-gray-300 dark:border-gray-600 border-b text-gray-800 dark:text-slate-100">
        Shop By Category ({categories.length})
      </h2>
      <div className="py-3 px-6 flex flex-col gap-2 h-[225px] overflow-y-auto">
        {categories.map((category: any) => {
          return (
            <Link
              key={category.id}
              href="#"
              className="flex items-center gap-3 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 duration-500 transition-all"
            >
              <Image
                src={category.imageUrl}
                alt="category_image"
                width={556}
                height={556}
                className="w-10 h-10 rounded-full object-cover border border-lime-400"
              />
              <span className="text-sm">{category.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}