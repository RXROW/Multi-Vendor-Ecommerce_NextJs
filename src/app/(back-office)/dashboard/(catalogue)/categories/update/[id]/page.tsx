 
import FormHeader from "@/components/back-office/FormHeader";
import NewCategoryForm from "@/components/back-office/NewCategoryForm";
import { getData } from "@/lib/getData";

export default async function UpdateCategory({
  params: { id },
}: {
  params: any;
}) {
  const category = await getData(`categories/${id}`);

  return (
    <div>
      <FormHeader title="Update Category" />
      <NewCategoryForm updateData={category} />
    </div>
  );
}