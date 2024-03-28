import Link from "next/link";

export const footerContent = [
  {
    title: "Information",
    subtitles: [
      {
        text: "About Us",
        href: "/about",
      },
      {
        text: "Contact Us",
        href: "/blank",
      },
      {
        text: "Sale",
        href: "/blank",
      },
    ],
  },
  {
    title: "Company",
    subtitles: [
      {
        text: "Who we are",
        href: "/blank",
      },
      {
        text: "Sustainability",
        href: "/blank",
      },
      {
        text: "Terms & Condition",
        href: "/blank",
      },
      {
        text: "Privacy",
        href: "/blank",
      },
    ],
  },
  {
    title: "Legal",
    subtitles: [
      {
        text: "Terms of Service",
        href: "/blank",
      },
      {
        text: "Return Policy",
        href: "/blank",
      },
      {
        text: "Privacy Policy",
        href: "/blank",
      },
      {
        text: "Shipping Policy",
        href: "/blank",
      },
    ],
  },
];

const FooterColumns = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
      {footerContent.map((item) => (
        <div key={item.title}>
          <h2 className="mb-6 text-sm font-semibold  uppercase  text-white">
            {item.title}
          </h2>
          <ul className=" text-gray-400 font-medium">
            {item.subtitles.map((subItem) => (
              <li key={subItem.text} className="mb-4">
                <Link href={subItem.href} className="hover:underline ">
                  {subItem.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterColumns;
