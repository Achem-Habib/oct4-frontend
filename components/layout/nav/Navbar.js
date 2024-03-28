import Logo from "@/components/common/Logo";
import CategoriesMenu from "./CategoriesMenu";

import {
  getCategoriesAndSubcategories,
  getOccasions,
  getRecipients,
} from "@/lib/data/getData";

import Link from "next/link";
import AccountIcon from "./AccountIcon";
import CartIcon from "./CartIcon";
import Search from "./Search";

export default async function Navbar() {
  const categories = await getCategoriesAndSubcategories();
  const occasions = await getOccasions();
  const recipients = await getRecipients();

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="relative bg-white">
        <nav aria-label="Top">
          <div className="border-b border-gray-200">
            <div className="flex justify-between items-center h-16">
              {/* Categories menu */}
              <div className="flex my-auto">
                <CategoriesMenu
                  categories={categories}
                  occasions={occasions}
                  recipients={recipients}
                />
              </div>

              {/* Logo */}
              <div className="ml-4 flex">
                <Link href="/" className="flex items-center">
                  <Logo />
                </Link>
              </div>

              {/* Search */}
              <div className="hidden md:block w-full max-w-sm ml-auto">
                <Search />
              </div>

              <div className="ml-auto flex items-center">
                {/* Cart */}
                <CartIcon />

                {/* User Account */}
                <AccountIcon />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
