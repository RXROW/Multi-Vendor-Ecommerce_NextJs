import FormHeader from "@/components/back-office/FormHeader";
import CouponForm from "@/components/back-office/NewCopunForm";

 
export default function NewCoupon() {
  return (
    <div>
      <FormHeader title="New Coupon" />
      <CouponForm />
    </div>
  );
}