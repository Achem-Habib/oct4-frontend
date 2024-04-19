import { transformSlug } from "@/lib/transformSlug";

import ShopSkeleton from "@/components/skeletons/ShopSkeleton";
import { Suspense } from "react";
import Main from "../../Main";

export default async function ShopBySubcategory({ params, searchParams }) {
  const { subcategory } = params;
  const query = {
    subcategory,
    ...searchParams,
  };

  const title = transformSlug(subcategory);

  return (
    <Suspense fallback={<ShopSkeleton />}>
      <Main query={query} title={title} />
    </Suspense>
  );
}
