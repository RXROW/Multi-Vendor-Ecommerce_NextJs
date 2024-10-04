import PageHeader from "@/components/back-office/PageHeader";
import DataTable from "@/components/data-table-components/DataTable";
import { columns } from "./columns";
import { getData } from "@/lib/getData";
 
const Coupons = async () => {
  const coupons = await getData("coupons");
  return (
    <div>
      <PageHeader
        title="Coupons"
        linkTitle="Add Coupon"
        href="/dashboard/coupons/new"
      />
      {/* Table */}
 
   <div className="py-8">
        {Array.isArray(coupons) && (
          <DataTable data={coupons} columns={columns} />
        )}
      </div>
    </div>
  );
};

export default Coupons;
