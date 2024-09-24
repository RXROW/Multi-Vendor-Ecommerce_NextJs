 
  
 
import PageHeader from "@/components/back-office/PageHeader";
import TableActions from "@/components/back-office/TableAction";

const Staff = () => {
  return (
    <div>
      <PageHeader
        title="Staff"
        linkTitle="Add Staff"
        href="/dashboard/staff/new"
      />
      {/* Table */}
      {/* Table Actions Export Search Delete */}
      <TableActions />
      <h2>Staff</h2>
    </div>
  );
};

export default Staff;
