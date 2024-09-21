 
import React from 'react'

const SmallCard = ({data}:any) => {
  const {title , sales , iconBg , icon:Icon}=data;
  return (
   <div className=" rounded-lg bg-slate-700 shadow-lg p-4 ">
    <div className=" flex items-center space-x-4   ">
      <div className={`w-12 h-12 ${iconBg} rounded-full items-center flex justify-center`}>
      <Icon/>
      </div>
      <div className="">
        <p className=''>{title} </p>
        <h3 className=' text-2xl font-semibold'>{sales}</h3>
    
      </div>
    </div>
   </div>
  )
}

export default SmallCard