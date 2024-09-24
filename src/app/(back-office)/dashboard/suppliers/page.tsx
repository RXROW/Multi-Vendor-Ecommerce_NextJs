import PageHeader from "@/components/back-office/PageHeader";
import TableActions from "@/components/back-office/TableAction";
 
export default function Suppliers() {
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
      <TableActions />

      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
}