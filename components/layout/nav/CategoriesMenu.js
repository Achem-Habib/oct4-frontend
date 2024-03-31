/* eslint-disable react/no-unescaped-entities */
"use client";

import { normalizeImageUrl } from "@/lib";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import {
  HiBarsArrowDown,
  HiOutlineMinus,
  HiOutlinePlus,
} from "react-icons/hi2";

export default function CategoriesMenu({ categories, occasions, recipients }) {
  return (
    <Popover className="relative">
      <Popover.Button className="flow-root items-center my-auto">
        <HiBarsArrowDown
          className="h-7 w-7 text-gray-600 hover:text-gray-700"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-0 z-50 mt-5 flex w-screen max-w-sm ">
          <div className="w-screen max-w-sm max-h-screen overflow-y-auto flex-auto bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className=" mx-4">
              {/* Categories list */}
              {categories.length > 0 && (
                <div>
                  <h1 className="text-gray-800 text-lg font-bold">
                    Gifts By Category
                  </h1>
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
                  <h1 className="text-gray-800 text-lg font-bold">
                    Gifts By Occasion
                  </h1>
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
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
