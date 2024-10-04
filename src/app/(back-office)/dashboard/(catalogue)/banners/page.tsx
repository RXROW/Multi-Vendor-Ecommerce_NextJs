import PageHeader from "@/components/back-office/PageHeader";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";

import React from "react";
import { columns } from "./columns";

const Banners = async () => {
  const banners = await getData("banners");
  return (
    <div>
      <PageHeader
        title="Banners"
        linkTitle="Add Banner"
        href="/dashboard/banners/new"
      />
      {/* Table */}

      <div className="py-8">
        {Array.isArray(banners) && (
          <DataTable data={banners} columns={columns} />
        )}
      </div>
    </div>
  );
};

export default Banners;
