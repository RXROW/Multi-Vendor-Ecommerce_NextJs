"use client";

import NewMarketForm from "@/components/back-office/NewMarketForm";
import { useEffect, useState } from "react";
import { getData } from "@/lib/getData";

 
interface Category {
  id: string;
  title: string;
}
 
export default function NewMarket() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
   
        const [categoriesData] = await Promise.all([getData("categories")]);
 
        if (!categoriesData) {
          throw new Error("Error loading data");
        }
 
        const mappedCategories: Category[] = Array.isArray(categoriesData)
          ? categoriesData.map((category: { id: string; title: string }) => ({
              id: category.id,
              title: category.title,
            }))
          : [];
        setCategories(mappedCategories);
        setLoading(false);
      } catch (error: any) {
        console.error("Error loading data", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

 
  if (loading) {
    return <div>Loading...</div>;
  }

 
  if (error) {
    return <div>{error}</div>;
  }

  return <NewMarketForm  categories={categories} />;
}
