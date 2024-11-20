import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface StepsProps {
  steps: any;
}

const Steps: React.FC<StepsProps> = ({ steps }) => {
  return (
    <div className="flex">
      <ol
        role="list"
        className="flex items-center flex-wrap gap-y-5 md:gap-y-0 gap-x-1.5 "
      >
        <li>
          <div className="-m-1">
            <Link
              href="/cart"
              title="Cart"
              className="inline-flex items-center p-1 text-sm font-medium text-gray-900 dark:text-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:text-gray-900 hover:text-gray-700"
            >
              Cart
              <span className="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-bold bg-teal-800  rounded-full text-gray-50">3</span>
            </Link>
          </div>
        </li>
        {steps.map((step: any, i: number) => (
          <li key={i}>
            <div className="flex items-center">
              <ChevronRight className="flex-shrink-0 w-4 h-4 text-gray-400" />
              <div className="-m-1">
                <Link
                  href={step.href}
                  title={step.label}
                  className="p-1 ml-1.5 text-sm font-medium   text-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:text-gray-900 hover:text-gray-700"
                >
                  {step.label}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Steps;
