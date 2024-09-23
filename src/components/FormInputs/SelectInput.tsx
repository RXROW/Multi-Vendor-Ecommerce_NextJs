import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Option {
  id: string | number;  
  title: string;
}

interface SelectInputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>; 
  className?: string;
  options?: Option[];
  multiple?: boolean;
  errors:any
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options = [],
  multiple = false,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(name)}
          id={name}
          multiple={multiple}
          name={name}
          className={`block w-full p-5 rounded-md border-0 py-2 dark:text-gray-200 dark:bg-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-green-500 ${
            multiple ? 'sm:max-w-full' : 'sm:max-w-xs'
          } sm:text-sm sm:leading-6`}
          aria-labelledby={name}
        >
          {options.length > 0 ? (
            options.map((option) => (
              <option key={option.id} value={option.id} className="p-1">
                {option.title}
              </option>
            ))
          ) : (
            <option disabled>No options available</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
