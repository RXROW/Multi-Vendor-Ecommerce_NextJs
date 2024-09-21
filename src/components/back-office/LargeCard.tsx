import { Layers } from 'lucide-react'
import React from 'react'

const LargeCard = ({className , data}:any) => {
  return (
    <div className={`rounded-md shadow-md p-6 flex items-center flex-col ${className} text-slate-50`}>
      <Layers/>
      <h4>{data.period}</h4>
      <h2 className=' text-3xl'>{data.sales}K</h2>
    </div>
  )
}

export default LargeCard