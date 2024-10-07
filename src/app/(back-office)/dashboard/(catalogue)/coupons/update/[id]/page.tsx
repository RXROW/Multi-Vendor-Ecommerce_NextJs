 
import FormHeader from "@/components/back-office/FormHeader";
import CouponForm from "@/components/back-office/NewCopunForm";
import { getData } from "@/lib/getData";

export default async function UpdateCoupon({
  params: { id },
}: {
  params: any;
}) {
  const coupon = await getData(`coupons/${id}`);
  return (
    <div>
      <FormHeader title="Update Coupon" />
      <CouponForm updatedData={coupon} />
    </div>
  );
}