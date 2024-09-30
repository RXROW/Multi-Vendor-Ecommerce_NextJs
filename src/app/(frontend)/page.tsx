import Link from 'next/link';
import '../globals.css'
import Hero from '@/components/frontend/Hero';
import MarketsList from '@/components/frontend/MarketsList';
import CategoryList from '@/components/frontend/CategoryList';
import CommunityTrainings from '@/components/frontend/CommunityTrainings';



export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <MarketsList/>
      <div className="py-5">
      <CategoryList/>
      </div>
      <div className="py-5">
      <CategoryList/>
      </div>
      <CommunityTrainings/>
     
    </div>
  );
}



// <h1 className=" text-4xl" > Welcom To Multi-Vendor Ecommerce </h1>
// <Link href='/register-supplier' className=''>Become a Supplier</Link>