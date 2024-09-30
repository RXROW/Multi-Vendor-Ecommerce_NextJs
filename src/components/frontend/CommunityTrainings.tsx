import Link from "next/link";
import TrainingCarousel from "./TrainingCarousel";

export default async function CommunityTrainings() {
  return (
    <div className=" bg-white border border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden my-10 ">
      <div
        className=" bg-slate-100 dark:bg-gray-800 py-3 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100
     flex items-center justify-between "
      >
        <h2> Shop By Category </h2>
        <Link
          href="#"
          className=" bg-lime-500 text-slate-50 rounded-md px-4 py-2  "
        >
          See All
        </Link>
      </div>
      <div className=" py-10">
        <TrainingCarousel />
      </div>
    </div>
  );
}
