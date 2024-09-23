import PageHeader from "@/components/back-office/PageHeader";
import TableActions from "@/components/back-office/TableAction";

const Coupons = () => {
  return (
    <div>
      <PageHeader
        title="Coupons"
        linkTitle="Add Coupon"
        href="/dashboard/coupons/new"
      />
      {/* Table */}
      {/* Table Actions Export Search Delete */}
      <TableActions />
      <h2>Coupons</h2>
    </div>
  );
};

export default Coupons;
