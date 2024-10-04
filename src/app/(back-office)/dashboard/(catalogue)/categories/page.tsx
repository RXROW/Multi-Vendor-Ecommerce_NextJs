import PageHeader from "@/components/back-office/PageHeader";
 import { getData } from "@/lib/getData";
import React from "react";
 
import { columns } from "./columns";
import DataTable from "@/components/data-table-components/DataTable";
 

const Categories = async () => {
  const categories=await getData("categories")

  return (
    <div>
      <PageHeader
        title="Categories"
        linkTitle="Add Category"
        href="/dashboard/categories/new"
      />
 
      <div className="py-8">
        {Array.isArray(categories) && (
          <DataTable data={categories} columns={columns} />
        )}
      </div>
    </div>
  );
};

export default Categories;
