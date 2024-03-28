import Pagination from "@/components/common/Pagination";
import Header from "@/components/shop/Header";
import Products from "@/components/shop/Products";

import { getProducts } from "@/lib/data/getData";

export default async function Shop({ searchParams }) {
  const query = searchParams;
  const products = await getProducts(query);

  const totalResults = products["total_count"];

  const totalPages = totalResults / 5;

  console.log(query);

  let title;
  if (query["sort_by"] === "newest") {
    title = "NEW ARRIVAL";
  } else {
    title = "SHOP ALL PRODUCTS";
  }

  return (
    <div className="w-full">
      <Header title={title} resultsCount={totalResults} />
      <Products products={products["results"]} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
