import React from 'react'

const Heading = ({title}:{title:string}) => {
  return (
    <div className=' text-2xl font-semibold dark:text-slate-50 text-slate-950 capitalize'>{title}</div>
  )
}

export default Heading