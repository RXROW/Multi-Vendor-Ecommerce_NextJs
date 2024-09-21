import React from 'react'

const Heading = ({title}:{title:string}) => {
  return (
    <div className=' text-2xl font-semibold text-slate-50 capitalize'>{title}</div>
  )
}

export default Heading