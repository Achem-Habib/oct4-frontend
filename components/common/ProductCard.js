/* eslint-disable @next/next/no-img-element */
import { calculateReviews, normalizeImageUrl } from "@/lib";
import { getReviews } from "@/lib/data/getData";
import { StarIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./AddToCart";
import AddToWishlist from "./AddToWishlist";

export default async function ProductCard({ product }) {
  const { id, name, slug, primary_image, price, discounted_price } = product;

  const reviews = await getReviews(slug);

  const { averageRating } = calculateReviews(reviews);

  const discountPercentage = Math.round(
    (100 * (price - discounted_price)) / price
  );

  return (
    <div className="relative flex w-full min-w-[220px]  max-w-[350px] flex-col overflow-hidden  border border-gray-100 bg-white shadow-md">
      {/* Product image */}
      <Link
        href={`/product/${slug}`}
        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 "
      >
        <Image
          src={
            primary_image
              ? `${normalizeImageUrl(primary_image)}`
              : "/no-image.jpg"
          }
          width={0}
          height={0}
          sizes="100vw"
          alt="product image"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </Link>

      <div className="mt-4  pb-5 mx-3">
        {/* product name */}
        <Link href={`/product/${slug}`}>
          <h5 className="font-semibold text-black">{name}</h5>
        </Link>

        {/* Reviews */}
        {averageRating > 0 ? (
          <div className=" flex gap-x-2">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    averageRating > rating
                      ? "text-yellow-500"
                      : "text-gray-200",
                    "h-4 w-4 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span>{averageRating} out of 5</span>
          </div>
        ) : (
          <div className="text-sm font-medium text-slate-700">
            No reviews yet
          </div>
        )}

        <div className="mt-2 mb-5 flex flex-col gap-y-1 ">
          {/* product price */}
          <p>
            <span className=" font-medium text-slate-800">
              ${discounted_price}
            </span>
            <span className="ml-2 text-sm text-slate-700 line-through">
              ${price}
            </span>
          </p>
        </div>

        {/* Add to cart button, Quick view button and Add to wishlist button */}
        <div className="flex gap-x-2 w-full">
          <AddToCart product={product} quantity={1} isWishlist={false} />
          <AddToWishlist product={product} />
        </div>
      </div>
      <div className="absolute top-0 left-0 m-2 rounded-full bg-red-700 px-2 text-center text-sm font-medium text-white">
        {discountPercentage}% OFF
      </div>
    </div>
  );
}
