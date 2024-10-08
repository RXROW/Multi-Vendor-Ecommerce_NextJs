import PageHeader from "@/components/back-office/PageHeader";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./column";

const Staff = async () => {
  const staffs = await getData("staffs");
  return (
    <div>
      <PageHeader
        title="Staff"
        linkTitle="Add Staff"
        href="/dashboard/staffs/new"
      />
      {/* Table */}
 
      <div className="py-8">
        {Array.isArray(staffs) && (
          <DataTable data={staffs} columns={columns} />
        )}
      </div>
    </div>
  );
};

export default Staff;
