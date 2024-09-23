import PageHeader from "@/components/back-office/PageHeader";
import TableActions from "@/components/back-office/TableAction";
import React from "react";

const Categories = () => {
  return (
    <div>
      <PageHeader
        title="Categories"
        linkTitle="Add Category"
        href="/dashboard/categories/new"
      />
      {/* Table */}
      {/* Table Actions Export Search Delete */}
      <TableActions />
      <h2>Categories</h2>
    </div>
  );
};

export default Categories;
