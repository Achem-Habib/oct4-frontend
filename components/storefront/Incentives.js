import {
  HiGift,
  HiOutlineCubeTransparent,
  HiOutlineLockClosed,
  HiOutlineTruck,
} from "react-icons/hi2";

const incentives = [
  {
    title: "Secured Payments",
    icon: <HiOutlineLockClosed className="w-10 h-10 " />,
    details:
      "Shop with confidence knowing your transactions are safe and secure.",
  },
  {
    title: "Fast Delivery",
    icon: <HiOutlineTruck className="w-10 h-10" />,
    details:
      "Swift and reliable shipping to ensure your gifts arrive right on time.",
  },
  {
    title: "Send Gifts Easily",
    icon: <HiGift className="w-10 h-10" />,
    details:
      "Effortless sending with our user-friendly platform and hassle-free process.",
  },
  {
    title: "High Quality Products",
    icon: <HiOutlineCubeTransparent className="w-10 h-10" />,
    details:
      "Immerse in premium craftsmanship and excellence in every product.",
  },
];

export default function Incentives() {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Why Choose us?
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap gap-y-8">
          {incentives.map((incentive) => (
            <div
              key={incentive.title}
              className=" w-full px-4 md:w-1/2 lg:w-1/4"
            >
              <div className=" rounded-[20px] bg-white p-6 shadow-2 shadow-lg  md:px-7 ">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary mx-auto">
                  {incentive.icon}
                </div>
                <h4 className="mb-[14px] text-lg font-semibold ">
                  {incentive.title}
                </h4>
                <p className="flex-1 text-sm text-slate-500">
                  {incentive.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
