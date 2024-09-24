import React from "react";
import PageHeader from "@/components/back-office/PageHeader";
import TableActions from "@/components/back-office/TableAction";

const Community = () => {
  return (
    <div className="">
      <PageHeader
        title="Community"
        linkTitle="Add Community"
        href="/dashboard/community/new"
      />
      {/* Table */}
      {/* Table Actions Export Search Delete */}
      <TableActions />
      <h2>Community</h2>
    </div>
  );
};

export default Community;

