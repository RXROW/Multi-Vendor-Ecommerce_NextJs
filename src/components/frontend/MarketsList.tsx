 
import React from 'react'
import MarketsCarousl from './MarketsCarousl'
import { getData } from '@/lib/getData';

const MarketsList = async () => {
  const markets = await getData("markets");
  return (
    <div className='  py-16 bg-green-50 dark:bg-green-900/25 rounded-md  text-center'>
      <h2  className=' text-2xl mb-5'> Market List</h2>
      <MarketsCarousl markets={markets}   />
    </div>
  )
}

export default MarketsList