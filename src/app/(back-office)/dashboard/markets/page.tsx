import PageHeader from "@/components/back-office/PageHeader";
import TableActions from "@/components/back-office/TableAction";

const Markets = () => {
  return (
    <div>
      <PageHeader
        title="Markets"
        linkTitle="Add Market"
        href="/dashboard/markets/new"
      />
      {/* Table */}
      {/* Table Actions Export Search Delete */}
      <TableActions />
      <h2>Markets</h2>
    </div>
  );
};

export default Markets;
