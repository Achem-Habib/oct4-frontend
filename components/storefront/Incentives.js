import {
  HiGift,
  HiOutlineCubeTransparent,
  HiOutlineLockClosed,
  HiOutlineTruck,
} from "react-icons/hi2";

export default function Incentives() {
  return (
    <section className="pb-12 pt-20 ">
      <div className="flex flex-col container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Why Choose us?
              </h2>
            </div>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2  gap-x-4 gap-y-8">
          <div className="w-full max-w-sm h-60 px-4 ">
            <div className="flex flex-col gap-y-6 rounded-[20px] bg-white p-6 shadow-2 shadow-lg  md:px-7 ">
              <span className="mx-auto">
                <HiOutlineLockClosed className="w-12 h-12 " />
              </span>
              <div className="flex flex-col gap-y-2">
                <h4 className="text-lg font-semibold">Secured Payments</h4>
                <p className="text-sm text-slate-500">
                  Shop with confidence knowing your transactions are safe and
                  secure.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm h-60 px-4 ">
            <div className="flex flex-col gap-y-6 rounded-[20px] bg-white p-6 shadow-2 shadow-lg  md:px-7 ">
              <span className="mx-auto">
                <HiOutlineTruck className="w-12 h-12" />
              </span>
              <div className="flex flex-col gap-y-2">
                <h4 className="text-lg font-semibold">Fast Delivery</h4>
                <p className="text-sm text-slate-500">
                  Swift and reliable shipping to ensure your gifts arrive right
                  on time.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm h-60 px-4 ">
            <div className="flex flex-col gap-y-6 rounded-[20px] bg-white p-6 shadow-2 shadow-lg  md:px-7 ">
              <span className="mx-auto">
                <HiGift className="w-12 h-12" />
              </span>
              <div className="flex flex-col gap-y-2">
                <h4 className="text-lg font-semibold">Send Gifts Easily</h4>
                <p className="text-sm text-slate-500">
                  Effortless sending with our user-friendly platform and
                  hassle-free process.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm h-60 px-4 ">
            <div className="flex flex-col gap-y-6 rounded-[20px] bg-white p-6 shadow-2 shadow-lg  md:px-7 ">
              <span className="mx-auto">
                <HiOutlineCubeTransparent className="w-12 h-12" />
              </span>
              <div className="flex flex-col gap-y-2">
                <h4 className="text-lg font-semibold">High Quality Products</h4>
                <p className="text-sm text-slate-500">
                  Immerse in premium craftsmanship and excellence in every
                  product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
