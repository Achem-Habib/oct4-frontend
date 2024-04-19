import { normalizeImageUrl } from "@/lib";
import { getOccasions } from "@/lib/data/getData";
import Image from "next/image";
import Link from "next/link";

export default async function GiftByOccasion() {
  const occasions = await getOccasions();
  return (
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
  );
}
