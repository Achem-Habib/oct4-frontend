"use client";

import { useFilterContext } from "@/context/FilterContext";
import { FunnelIcon } from "@heroicons/react/20/solid";
import SortOptions from "./SortOptions";

export default function Header({ title, resultsCount }) {
  const { setMobileFiltersOpen } = useFilterContext();

  return (
    <div className="border-b border-gray-200 pb-3 w-full mt-6">
      <div className="flex items-baseline justify-between ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        <div className="flex items-center">
          {/* sort options goes here */}
          <SortOptions />

          <button
            type="button"
            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <span className="sr-only">Filters</span>
            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <p className="mt-2 text-sm text-slate-500">{resultsCount} Results</p>
    </div>
  );
}
