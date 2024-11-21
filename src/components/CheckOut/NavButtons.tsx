import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface NavButtonsProps {
  onPrevious?: () => void;
  disablePrevious?: boolean;
}

export default function NavButtons({ onPrevious, disablePrevious }: NavButtonsProps) {
  return (
    <div className="flex justify-between items-center">
      {!disablePrevious && (
        <button
          type="button"
          onClick={onPrevious}
          className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-700"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span>Previous</span>
        </button>
      )}
      <button
        type="submit" // This ensures it triggers form submission
        className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-700"
      >
        <span>Next</span>
        <ChevronRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
}
