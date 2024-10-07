 
import FormHeader from "@/components/back-office/FormHeader";
import BannerForm from "@/components/back-office/NewBanner";
 
export default function NewBanner() {
  return (
    <div>
      <FormHeader title="New Banner" />
      <BannerForm />
    </div>
  );
}