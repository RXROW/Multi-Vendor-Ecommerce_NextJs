import FormHeader from "@/components/back-office/FormHeader";
import BannerForm from "@/components/back-office/NewBanner";
import { getData } from "@/lib/getData";

export default async function UpdateBanner({
  params: { id },
}: {
  params: any;
}) {
  const banner = await getData(`banners/${id}`);
  return (
    <div>
      <FormHeader title="Update Banner" />
      <BannerForm updateData={banner} />
    </div>
  );
}