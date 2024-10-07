 
import FormHeader from "@/components/back-office/FormHeader";
import NewProductForm from "@/components/back-office/NewProductForm";
import { getData } from "@/lib/getData";

export default async function UpdateProduct({
  params: { id },
}: {
  params: any;
}) {
  const product = await getData(`products/${id}`);
  const categoriesData = await getData("categories");
  const usersData = await getData("users");

  if (!categoriesData || !usersData) {
    return <div>Error loading data</div>;
  }

  const suppliersData = Array.isArray(usersData)
    ? usersData.filter((user: any) => user.role === "SUPPLIER")
    : [];

  const categories = Array.isArray(categoriesData)
    ? categoriesData.map((category: { id: any; title: string }) => ({
        id: category.id,
        title: category.title,
      }))
    : [];

  const suppliers = suppliersData.map((supplier: any) => ({
    id: supplier.id,
    title: supplier.name,
  }));
  return (
    <div>
      <FormHeader title="Update Product" />
      <NewProductForm
        categories={categories}
        suppliers={suppliers}
        updateData={product}
      />
    </div>
  );
}