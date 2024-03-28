import Pagination from "@/components/common/Pagination";
import Header from "@/components/shop/Header";
import Products from "@/components/shop/Products";
import { getProducts } from "@/lib/data/getData";
import { transformSlug } from "@/lib/transformSlug";

export default async function ShopByCategory({ params, searchParams }) {
  const { category } = params;

  const query = {
    category,
    ...searchParams,
  };

  const products = await getProducts(query);

  const totalResults = products["total_count"];

  const totalPages = totalResults / 5;

  const title = transformSlug(category);

  return (
    <div className="flex flex-col gap-y-10 w-full">
      <Header title={title} resultsCount={totalResults} />
      <Products products={products["results"]} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
