import PageHeader from "@/components/back-office/PageHeader";
import TableActions from "@/components/back-office/TableAction";
 


const Products = () => {
  return (
    <div>
      <PageHeader
        title="Products"
        linkTitle="Add Product"
        href="/dashboard/products/new"
      />
      {/* Table */}
      {/* Table Actions Export Search Delete */}
      <TableActions />
      <h2>Coupons</h2>
    </div>
  );
};

export default Products;
