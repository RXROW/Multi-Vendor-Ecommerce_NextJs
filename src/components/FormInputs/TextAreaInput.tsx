"use client";

interface TextareaInputProps {
  label: string;
  name: string;
  register: any;
  errors: any;
  isRequired?: boolean;
  className?: string;
}

export default function TextareaInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  className = "sm:col-span-2",
}: TextareaInputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...register(name, { required: isRequired ? `${label} is required` : false })}
          name={name}
          id={name}
          rows={3}
          className={`block w-full focus:outline-none rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 dark:focus:ring-green-500 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100 ${
            errors[name] ? "ring-red-600 focus:ring-red-600" : ""
          }`}
          defaultValue={""}
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[name] && (
          <span className="text-sm text-red-600">{errors[name].message}</span>
        )}
      </div>
    </div>
  );
}
