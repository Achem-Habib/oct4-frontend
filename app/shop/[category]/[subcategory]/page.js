import Header from "@/components/shop/Header";
import Products from "@/components/shop/Products";
import { getProducts } from "@/lib/data/getData";
import { transformSlug } from "@/lib/transformSlug";

import Pagination from "@/components/common/Pagination";

export default async function ShopBySubcategory({ params, searchParams }) {
  const { subcategory } = params;
  const query = {
    subcategory,
    ...searchParams,
  };
  const products = await getProducts(query);

  const totalResults = products["total_count"];

  const totalPages = totalResults / 5;

  const title = transformSlug(subcategory);

  return (
    <div className="flex flex-col gap-y-10 w-full">
      <Header title={title} resultsCount={totalResults} />
      <Products products={products["results"]} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
