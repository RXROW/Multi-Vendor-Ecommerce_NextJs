import PageHeader from "@/components/back-office/PageHeader";
import TableActions from "@/components/back-office/TableAction";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
 
export default async function Suppliers() {
  const suppliers = await getData("suppliers");
  return (
    <div>
      {/* Header */}
        <PageHeader
        title="Suppliers"
        linkTitle="Add Supplier"
        href="/dashboard/suppliers/new"
      />
      {/* Table Actions */}
      {/* Export || Search || Bulk Delete */}
      {/* Table Actions */}
      <div className="py-8">
        {Array.isArray(suppliers) && (
          <DataTable data={suppliers} columns={columns} filterKeys={["name"]} />
        )}
      </div>
    </div>
  );
}