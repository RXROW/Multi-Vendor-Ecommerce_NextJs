import FormHeader from "@/components/back-office/FormHeader";
import NewCategoryForm from "@/components/back-office/NewCategoryForm";


 
export default function NewCategory() {
  return (
    <div>
      <FormHeader title="New Category" />
      <NewCategoryForm updateData={""} />
    </div>
  );
}






























// "use client";
// import FormHeader from "@/components/back-office/FormHeader";
// import ImageInput from "@/components/FormInputs/ImageInput";
// import SelectInput from "@/components/FormInputs/SelectInput";
// import SubmitButton from "@/components/FormInputs/SubmitButton";
// import TextareaInput from "@/components/FormInputs/TextAreaInput";
// import TextInput from "@/components/FormInputs/TextInput";
// import ToggleInput from "@/components/FormInputs/ToggleInput";
// import { makePostRequest } from "@/lib/apiRequest";
// import { generateSlug } from "@/lib/generateSlug";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// export default function NewCategory() {
//   const [imageUrl, setImageUrl] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);

//   const markets = [
//     { id: 1, title: "Market 1" },
//     { id: 2, title: "Market 2" },
//     { id: 3, title: "Market 3" },
//     { id: 4, title: "Market 4" },
//     { id: 5, title: "Market 5" },
//     { id: 6, title: "Market 6" },
//   ];

//   const {
//     register,
//     watch,
//     reset,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       isActive: true,
//     },
//   });

//   const router = useRouter();
//   const isActive = watch("isActive");
//   function redirect() {
//     router.push("/dashboard/categories");
//   }

//   //  Handle form submission
//   async function onSubmit(data: any) {
//     setLoading(true);
//     const slug = generateSlug(data.title);
//     data.slug = slug;
//     data.imageUrl = imageUrl;

    
//     console.log(data);
//     makePostRequest(
//       setLoading,
//       "api/categories",
//       data,
//       "Category",
//       reset,
//       redirect
//     );
//   }

//   return (
//     <div>
//       <FormHeader title="New Category" />
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
//       >
//         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//           <TextInput
//             label="Category Title"
//             name="title"
//             register={register}
//             errors={errors}
//           />
//           <TextareaInput
//             label="Category Description"
//             name="description"
//             register={register}
//             errors={errors}
//           />
//           <SelectInput
//             label="Select Markets"
//             name="marketIds"
//             register={register}
//             className="w-full"
//             options={markets}
//             errors={errors}
//             multiple={true}
//           />
//           <ImageInput
//             imageUrl={imageUrl}
//             setImageUrl={setImageUrl}
//             endpoint="categoryImageUploader"
//             label="Category Image"
//           />
//           <ToggleInput
//             label="Publish your Category"
//             name="isActive"
//             trueTitle="Active"
//             falseTitle="Draft"
//             register={register}
//           />
//         </div>

//         <SubmitButton
//           isLoading={loading}
//           buttonTitle="Create Category"
//           loadingButtonTitle="Creating category, please wait..."
//         />
//       </form>
//     </div>
//   );
// }
