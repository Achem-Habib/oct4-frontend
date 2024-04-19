import { normalizeImageUrl } from "@/lib";
import { getCategories } from "@/lib/data/getData";
import Image from "next/image";
import Link from "next/link";

export default async function GiftByCategories() {
  const categories = await getCategories();

  return (
    <div>
      {categories?.length > 0 && (
        <section className=" my-8">
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
  );
}
