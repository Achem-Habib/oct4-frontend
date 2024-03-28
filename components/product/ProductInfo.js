import classNames from "classnames";
import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";
import { HiStar } from "react-icons/hi2";

export default function ProductInfo({ product, averageRating }) {
  const { name, description, price, discounted_price } = product;

  let convertedDescription;
  if (description) {
    const cleanedDescription = DOMPurify.sanitize(description);
    convertedDescription = parse(cleanedDescription);
  }

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {name}
      </h1>

      {/* product price */}
      <p>
        <span className="text-3xl font-bold text-red-600">
          ${discounted_price}
        </span>
        <span className="text-sm text-slate-900 line-through">${price}</span>
      </p>

      {/* Reviews */}
      {averageRating > 0 ? (
        <div className=" flex gap-x-2">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <HiStar
                key={rating}
                className={classNames(
                  averageRating > rating ? "text-yellow-500" : "text-gray-200",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <span>{averageRating} out of 5</span>
        </div>
      ) : (
        "No reviews yet"
      )}

      {convertedDescription && (
        <div className=" content prose md:prose-lg  leading-loose antialiased">
          {convertedDescription}
        </div>
      )}
    </div>
  );
}
