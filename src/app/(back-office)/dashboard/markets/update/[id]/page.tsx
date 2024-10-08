import FormHeader from "@/components/back-office/FormHeader";
import NewMarketForm from "@/components/back-office/NewMarketForm";
import { getData } from "@/lib/getData";

interface Category {
  id: number;
  title: string;
}

interface Params {
  id: string;
}

export default async function UpdateMarket({ params: { id } }: { params: Params }) {
  try {
    const market = await getData(`markets/${id}`);
    const categoriesData = await getData("categories");

    if (!market || !categoriesData) {
      return <div>Error loading data</div>;
    }

    const categories: Category[] = Array.isArray(categoriesData)
      ? categoriesData.map((category: Category) => ({
          id: category.id,
          title: category.title,
        }))
      : [];

    return (
      <div>
 
        <NewMarketForm market={market} categories={categories} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }
}
