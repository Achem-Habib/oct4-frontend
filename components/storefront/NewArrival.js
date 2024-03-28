/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function NewArrival() {
  return (
    <div
      className="flex bg-cover bg-center text-white text-center py-32 px-6"
      style={{ backgroundImage: "url('/public/hero_image_2.jpg)')" }}
    >
      <div className="flex flex-col gap-y-4 mx-auto">
        <h1 className="text-3xl font-extrabold sm:text-5xl text-black">
          New arrivals are here
        </h1>

        <p className="mt-4 text-center text-slate-900  max-w-lg sm:text-xl/relaxed font-medium">
          The new arrivals have, well, newly arrived. Check out the latest
          options from our summer small-batch release while they're still in
          stock.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 mx-auto text-center">
          <Link
            href="/shop"
            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            SHOP NEW ARRIVALS
          </Link>
        </div>
      </div>
    </div>
  );
}
