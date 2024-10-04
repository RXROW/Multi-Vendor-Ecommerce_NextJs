import PageHeader from "@/components/back-office/PageHeader";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
  
const Markets = async () => {
  const markets = await getData("markets");
  return (
    <div>
      <PageHeader
        title="Markets"
        linkTitle="Add Market"
        href="/dashboard/markets/new"
      />
      {/* Table */}
      {/* Table Actions Export Search Delete */}
      <div className="py-8">
        {Array.isArray(markets) && (
          <DataTable data={markets} columns={columns} />
        )}
      </div>
    </div>
  );
};

export default Markets;
