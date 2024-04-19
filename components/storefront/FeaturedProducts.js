import { getFeaturedProducts } from "@/lib/data/getData";
import ProductCard from "../common/ProductCard";

export default async function FeaturedProducts() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div>
      {featuredProducts?.length > 0 && (
        <section className="mx-6 md:mx-10 my-10">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 pb-2 border-b border-slate-200 ">
            FEATURED PRODUCTS
          </h2>
          <div className="mt-10 flex gap-x-4 overflow-x-scroll lg:overflow-auto lg:grid lg:grid-cols-3 xl:grid-cols-4 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
