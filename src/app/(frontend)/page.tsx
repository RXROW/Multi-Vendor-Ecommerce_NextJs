import Link from 'next/link';
import '../globals.css'
import Hero from '@/components/frontend/Hero';



export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
    </div>
  );
}



// <h1 className=" text-4xl" > Welcom To Multi-Vendor Ecommerce </h1>
// <Link href='/register-supplier' className=''>Become a Supplier</Link>