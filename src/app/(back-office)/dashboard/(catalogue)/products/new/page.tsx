"use client";

import { useEffect, useState } from "react";
import FormHeader from "@/components/back-office/FormHeader";
import NewProductForm from "@/components/back-office/NewProductForm";
import { getData } from "@/lib/getData";

// Type definition for category and supplier
interface Category {
  id: string;
  title: string;
}

interface Supplier {
  id: string;
  title: string;
}

export default function NewProduct() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
 
        const [categoriesData, usersData] = await Promise.all([
          getData("categories"),
          getData("users"),
        ]);
 
        if (!categoriesData || !usersData) {
          throw new Error("Error loading data");
        }

 
        const suppliersData = Array.isArray(usersData)
          ? usersData.filter((user: any) => user.role === "SUPPLIER")
          : [];
 
        const mappedCategories: Category[] = Array.isArray(categoriesData)
          ? categoriesData.map((category: { id: string; title: string }) => ({
              id: category.id,
              title: category.title,
            }))
          : [];
 
        const mappedSuppliers: Supplier[] = suppliersData.map(
          (supplier: { id: string; name: string }) => ({
            id: supplier.id,
            title: supplier.name,
          })
        );
 
        setCategories(mappedCategories);
        setSuppliers(mappedSuppliers);
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
 
  return (
    <div>
      <FormHeader title="New Product" />
      <NewProductForm categories={categories} suppliers={suppliers} />
    </div>
  );
}
