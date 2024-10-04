import PageHeader from "@/components/back-office/PageHeader";

import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./columns";

const Products = async () => {
  const products = await getData("products");
  return (
    <div>
      <PageHeader
        title="Products"
        linkTitle="Add Product"
        href="/dashboard/products/new"
      />
      {/* Table */}

      <div className="py-8">
        {Array.isArray(products) && (
          <DataTable data={products} columns={columns} />
        )}
      </div>
    </div>
  );
};

export default Products;
