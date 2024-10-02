"use client"
import Link from 'next/link';
import React from 'react';
import CategoryCarousel from './CategoryCarousel';

interface CategoryProps {
  category: {
    title: string;
    products: any[]; // You can change this type to match the structure of your products.
  };
}

const CategoryList: React.FC<CategoryProps> = ({ category }) => {
  console.log(category.title); // Now, category.title should log properly
  return (
    <div className='bg-white border border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden my-10'>
      <div className='bg-slate-100 dark:bg-gray-800 py-3 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100 flex items-center justify-between'>
        <h2>{category.title}</h2>
        <Link href="#" className='bg-lime-500 text-slate-50 rounded-md px-4 py-2'>
          See All
        </Link>
      </div>
 
 
        <CategoryCarousel products={category.products} />
 
    </div>
  );
};

export default CategoryList;
