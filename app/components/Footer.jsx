import {
  Building2,
  Facebook,
  FacebookIcon,
  Instagram,
  LucideFacebook,
  Youtube,
} from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#e5e5e5] dark:bg-white">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#">
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-blue-600" />
                <span
                  className={`ml-2 text-xl font-bold hover:text-blue-600 text-black`}
                >
                  H&S Franchise
                </span>
              </div>{" "}
            </a>

            <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
              We manage franchises of different brands, ensuring quality and
              growth across all locations.
            </p>
          </div>

          <hr className="my-10 border-gray-200 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-2">
            <p className="text-sm text-gray-500 sm:mt-2 order-2 sm:order-1">
              © Copyright {new Date().getFullYear()} All Rights Reserved.
            </p>
            <div className="flex mt-3 sm:mb-2 -mx-2 order-1 sm:order-2">
              <a
                href="#"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Facebook"
              >
                <Facebook className="hover:text-blue-500 transition-transform transform hover:scale-110" />
              </a>

              <a
                href="#"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Twitter"
              >
                <Instagram className="hover:text-pink-500 transition-transform transform hover:scale-110" />
              </a>

              <a
                href="#"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-red-500 dark:hover:text-gray-300"
                aria-label="Instagram"
              >
                <Youtube className="hover:text-red-500 transition-transform transform hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
