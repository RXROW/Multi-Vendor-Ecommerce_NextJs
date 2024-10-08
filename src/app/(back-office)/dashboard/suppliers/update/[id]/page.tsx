import FormHeader from "@/components/back-office/FormHeader";
import NewSupplierForm from "@/components/back-office/NewSupplireForm";
 import { getData } from "@/lib/getData";

interface Supplier {
  id: string;
  code: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  mainProduct: string;
  profileImageUrl?: string;
  terms?: string;
  notes?: string;
  isActive: boolean;
  products?: string[];
}

const UpdateSupplier = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  let supplier: Supplier | null = null;

  try {
    supplier = await getData(`suppliers/${id}`);
  } catch (error) {
    console.error("Error fetching supplier data:", error);
   
  }

  return (
    <div>
      <FormHeader title="Update Supplier" />
      {supplier ? (
        <NewSupplierForm user={supplier} updateSupplier={supplier} /> // Pass user and updateSupplier correctly
      ) : (
        <p>Loading supplier data...</p>
      )}
    </div>
  );
};

export default UpdateSupplier;
