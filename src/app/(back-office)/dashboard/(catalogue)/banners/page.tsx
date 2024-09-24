 

import PageHeader from "@/components/back-office/PageHeader";
import TableActions from "@/components/back-office/TableAction";
import React from "react";

const Categories = () => {
  return (
    <div>
      <PageHeader
        title="Banners"
        linkTitle="Add Banner"
        href="/dashboard/banners/new"
      />
      {/* Table */}
      {/* Table Actions Export Search Delete */}
      <TableActions />
      <h2>Banners</h2>
    </div>
  );
};

export default Categories;
