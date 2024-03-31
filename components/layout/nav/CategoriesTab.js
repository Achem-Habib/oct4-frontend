import { normalizeImageUrl } from "@/lib";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";

export default function CategoriesTab({ categories, occasions, recipients }) {
  return (
    <div className=" mx-4">
      {/* Categories list */}
      {categories.length > 0 && (
        <div>
          <h1 className="text-gray-800 text-lg font-bold">Gifts By Category</h1>
          {categories.map((category) => (
            <Disclosure key={category.id}>
              {({ open }) => (
                <>
                  <div
                    key={category.name}
                    className="relative flex justify-between p-4"
                  >
                    <Link
                      href={`/shop/${category.slug}`}
                      className="flex gap-x-4 hover:opacity-80"
                    >
                      <div className=" flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
                        <Image
                          src={
                            category.image
                              ? `${normalizeImageUrl(category.image)}`
                              : "/no-image.jpg"
                          }
                          width={50}
                          height={50}
                          alt="category image"
                        />
                      </div>

                      <span className="my-auto font-semibold text-gray-900">
                        {category.name}
                      </span>
                    </Link>

                    <Disclosure.Button>
                      <span className="w-8 h-8">
                        {open ? <HiOutlineMinus /> : <HiOutlinePlus />}
                      </span>
                    </Disclosure.Button>
                  </div>

                  <Disclosure.Panel className="flex flex-col gap-y-3 pl-16 py-2">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        href={`/shop/${category.slug}/${subcategory.slug}`}
                        key={subcategory.id}
                        className="text-sm hover:text-gray-900 "
                      >
                        {subcategory.name}
                      </Link>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      )}

      {/* Occassions list */}
      {occasions.length > 0 && (
        <div className="mt-6">
          <h1 className="text-gray-800 text-lg font-bold">Gifts By Occasion</h1>
          {occasions.map((occasion) => (
            <Link
              key={occasion.id}
              href={`/shop?occasion=${occasion.slug}`}
              className="flex gap-x-4 hover:opacity-80 p-4"
            >
              <div className=" flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
                <Image
                  src={
                    occasion.image
                      ? `${normalizeImageUrl(occasion.image)}`
                      : "/no-image.jpg"
                  }
                  width={50}
                  height={50}
                  alt="category image"
                />
              </div>

              <span className="my-auto font-semibold text-gray-900">
                {occasion.name}
              </span>
            </Link>
          ))}
        </div>
      )}

      {/* Recipients list */}
      {recipients.length > 0 && (
        <div className="mt-6">
          <h1 className="text-gray-800 text-lg font-bold">
            Gifts By Recipient
          </h1>
          {recipients.map((recipient) => (
            <Link
              key={recipient.id}
              href={`/shop?recipient=${recipient.slug}`}
              className="flex gap-x-4 hover:opacity-80 p-4"
            >
              <div className=" flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
                <Image
                  src={
                    recipient.image
                      ? `${normalizeImageUrl(recipient.image)}`
                      : "/no-image.jpg"
                  }
                  width={50}
                  height={50}
                  alt="category image"
                />
              </div>

              <span className="my-auto font-semibold text-gray-900">
                {recipient.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
