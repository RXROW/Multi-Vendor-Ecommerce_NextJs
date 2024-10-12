import React from 'react'
import { getData } from "@/lib/getData";
import NewStaffFrom from '@/components/back-office/NewStaffForm';

const UpdateStaff = async ({
  params: { id },
}: {
  params: any;
}) => {

  const Staff = await getData(`staffs/${id}`);
  return (
    <div>
 
   <NewStaffFrom staff={Staff}/>


    </div>
  )
}

export default UpdateStaff






 