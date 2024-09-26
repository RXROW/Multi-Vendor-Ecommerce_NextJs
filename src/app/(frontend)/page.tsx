import Link from 'next/link';
import '../globals.css'



export default function Home() {
  return (
    <div className=" flex items-center min-h-screen flex-col mt-80">
      <h1 className=" text-4xl" > Welcom To Multi-Vendor Ecommerce </h1>
      <Link href='/register-supplier' className=''>Become a Supplier</Link>
    </div>
  );
}
