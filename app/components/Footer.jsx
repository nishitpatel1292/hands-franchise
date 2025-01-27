import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Building2,
  Facebook,
  FacebookIcon,
  Instagram,
  LucideFacebook,
  MailPlusIcon,
  Phone,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#f2f2f2]">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#">
              <div className="flex items-center">
                {/* <Building2 className="h-8 w-8 text-blue-600" />
                <span
                  className={`ml-2 text-xl font-bold hover:text-blue-600 text-black`}
                >
                  H&S Franchise
                </span> */}
                <Image src="/logo.png?v1" alt="H&S franchise" width={120} height={120} className="object-contain"/>
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
                href="mailto:nishitp59@gmail.com"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Email"
              >
                <MailPlusIcon className="hover:text-blue-500 transition-transform transform hover:scale-110" />
              </a>
              <a
                href="tel:+919825038257"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Phone"
              >
                <Phone className="hover:text-blue-500 transition-transform transform hover:scale-110" />
              </a>
              <a
                href="https://wa.me/9825038257"
                className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Whatsapp"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-[24px] hover:text-blue-500 transition-transform transform hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
