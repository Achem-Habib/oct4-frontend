"use client";

import { useSearchParams } from "next/navigation";

const Success = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);

  return (
    <>
      <section>
        <div className="product Box-root">
          <div className="description Box-root">
            <h3>Checkout successful!</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Success;
