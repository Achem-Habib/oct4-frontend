// function for fetching data
import { getProductDetail, getReviews } from "@/lib/data/getData";

// components
import AddToCartAndWishlist from "@/components/product/AddToCartAndWishlist";
import ProductImages from "@/components/product/ProductImages";
import ProductInfo from "@/components/product/ProductInfo";
import ReviewForm from "@/components/product/ReviewForm";
import ReviewSummary from "@/components/product/ReviewSummary";
import Reviews from "@/components/product/Reviews";
import { calculateReviews } from "@/lib";
import htmlSanitizer from "@/lib/htmlSanitizer";

export default async function ProductDetail({ params }) {
  const { product_slug } = params;
  const product = await getProductDetail(product_slug);
  const reviews = await getReviews(product_slug);

  const {
    id,
    details,
    price,
    stock_quantity,
    discounted_price,
    primary_image,
    more_images,
  } = product;

  const sanitizedDetails = htmlSanitizer(details);

  const discountPercentage = Math.round(
    (100 * (price - discounted_price)) / price
  );

  const { totalReviews, ratingCounts, averageRating } =
    calculateReviews(reviews);

  return (
    <div className=" pt-16">
      <div className=" flex flex-col gap-y-10 md:flex-row gap-x-16 lg:gap-x-24">
        {/* Image gallery */}
        <div className="w-full relative">
          <ProductImages
            main_image={primary_image}
            other_images={more_images}
          />
          <div className="absolute top-0 left-0 m-2 rounded-full bg-red-700 px-2 text-center text-sm font-medium text-white">
            {discountPercentage}% OFF
          </div>
        </div>

        <div className="w-full">
          {/* Product info */}
          <ProductInfo product={product} averageRating={averageRating} />

          <div>
            <AddToCartAndWishlist product={product} />
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-slate-700 pl-3 border-l-4 border-l-violet-800">
          Product Details
        </h2>

        <div className="mt-8 content prose md:prose-lg  leading-loose antialiased">
          {sanitizedDetails}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-slate-700 pl-3 border-l-4 border-l-violet-800">
          Customer Reviews
        </h2>

        {/* Review submission */}
        <div>
          <ReviewForm productId={id} />
        </div>

        {/* Reviews summary */}
        {totalReviews > 0 && (
          <div>
            <ReviewSummary
              totalReviews={totalReviews}
              ratingCounts={ratingCounts}
              averageRating={averageRating}
            />
          </div>
        )}

        {/* Reviews */}
        {totalReviews > 0 ? (
          <div>
            <Reviews reviews={reviews} />
          </div>
        ) : (
          <div className="mt-8 px-8 font-semibold">
            There are no reviews yet
          </div>
        )}
      </div>
    </div>
  );
}
