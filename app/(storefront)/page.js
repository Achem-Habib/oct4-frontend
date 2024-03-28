import ProductCard from "@/components/common/ProductCard";
import Hero from "@/components/storefront/Hero";
import Incentives from "@/components/storefront/Incentives";
import { normalizeImageUrl } from "@/lib";
import Image from "next/image";
import Link from "next/link";

import {
  getCategories,
  getFeaturedProducts,
  getOccasions,
  getRecipients,
} from "@/lib/data/getData";

export default async function Home() {
  const categories = await getCategories();
  const occasions = await getOccasions();
  const recipients = await getRecipients();
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="">
      <div>
        <Hero />
      </div>

      {/* Gifts by categories section */}
      <div>
        {categories?.length > 0 && (
          <section className="mx-6 md:mx-10 my-8">
            <div className="">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 pb-2 border-b border-slate-200 ">
                GIFT BY CATEGORIES
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10">
                {categories.map((category) => (
                  <div key={category.name} className="flex flex-col gap-y-4">
                    {/* category image */}

                    <Link
                      href={`/shop/${category.slug}`}
                      className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 "
                    >
                      <Image
                        src={
                          category.image
                            ? `${normalizeImageUrl(category.image)}`
                            : "/no-image.jpg"
                        }
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt={category.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </Link>

                    {/* category name */}
                    <Link
                      href={`/shop/${category.slug}`}
                      className="flex flex-col gap-y-2 mx-auto font-medium text-slate-900 text-center"
                    >
                      {category.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <div>
        {featuredProducts?.length > 0 && (
          <section className="mx-6 md:mx-10 my-10">
            <h2 className="text-3xl font-bold text-slate-800 pb-2 border-b border-slate-200 ">
              Featured Products
            </h2>
            <div className="mt-10 flex gap-x-4 overflow-x-scroll md:overflow-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Gifts by occasion section */}
      <div>
        {occasions?.length > 0 && (
          <section className="mx-6 md:mx-10 my-8">
            <div className="">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 pb-2 border-b border-slate-200 ">
                GIFTS BY OCCASION
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10">
                {occasions.map((occasion) => (
                  <div key={occasion.name} className="flex flex-col gap-y-4">
                    {/* occasion image */}

                    <Link
                      href={`/shop?occasion=${occasion.slug}`}
                      className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 "
                    >
                      <Image
                        src={
                          occasion.image
                            ? `${normalizeImageUrl(occasion.image)}`
                            : "/no-image.jpg"
                        }
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt={occasion.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </Link>

                    {/* occasion name */}
                    <Link
                      href={`/shop?occasion=${occasion.slug}`}
                      className="flex flex-col gap-y-2 mx-auto font-medium text-slate-900 text-center"
                    >
                      {occasion.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <div>
        <Incentives />
      </div>
    </div>
  );
}
