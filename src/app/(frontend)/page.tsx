import '../globals.css';
import Hero from '@/components/frontend/Hero';
import MarketsList from '@/components/frontend/MarketsList';
import CategoryList from '@/components/frontend/CategoryList';
import CommunityTrainings from '@/components/frontend/CommunityTrainings';
import { getData } from '@/lib/getData';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export default async function Home() {
  let categories = [];

  try {
    categories = await getData("categories");
  } catch (error) {
    console.error("Error fetching categories: ", error);
  }


  const session = await getServerSession(authOptions)

  return (
    <div className="min-h-screen">
      <Hero />
      <MarketsList />
      {Array.isArray(categories) && categories.length > 0 ? (
        categories.map((category: any, i: number) => (
          <div className="py-5" key={i}>
            <CategoryList category={category} />
          </div>
        ))
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">No categories available.</p>
        </div>
      )}
      <CommunityTrainings />
    </div>
  );
}
