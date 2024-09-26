import NewSupplireForm from "@/components/back-office/NewSupplireForm";
import { getData } from "@/lib/getData";
import React from "react";
 
// Make the component async
const Page = async ({ params }: { params: { id: string } }) => {
  // Fetch the user data using the id from the params
  const user = await getData(`users/${params.id}`);
  console.log(user);

  return (
    <div className="flex flex-col gap-6 p-12">
      <div className="max-w-4xl p-4 mx-auto">
        <h2 className="text-2xl">Hello {user?.name}, tell more about yourself</h2>
      </div>
      <NewSupplireForm user={user} />
    </div>
  );
};

export default Page;
