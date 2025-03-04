"use client";
import React, { useEffect } from "react";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useHandleRedirectSection } from "@/utils/handleRedirectSection";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleRedirectSection = useHandleRedirectSection();

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight =
        document.getElementById("hero-section")?.offsetHeight || 0;
      if (window.scrollY > heroSectionHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-sm transition-colors duration-300 bg-[#f2f2f2]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href={"/"}>
            <div className="flex items-center">
              {/* <Building2 className="h-8 w-8 text-blue-600" />
              <span
                className={`ml-2 text-xl font-bold hover:text-blue-600 ${
                  isScrolled
                    ? "text-black "
                    : isMenuOpen
                    ? "text-black"
                    : "text-white"
                }`}
              >
                H&S Franchise
              </span> */}
              <Image
                src="/logo.png?v1"
                alt="H&S franchise"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              // href={"/#aboutus"}
              onClick={() => handleRedirectSection("aboutus")}
              className="text-black hover:text-blue-600"
              // className={` ${
              //   isScrolled
              //     ? "text-black hover:text-blue-600"
              //     : "text-white hover:text-blue-600"
              // }`}
            >
              About
            </button>
            <button
              // href={"/#contactus"}
              onClick={()=>handleRedirectSection("contactus")}
              className="text-black hover:text-blue-600"
              // className={`transition-colors ${
              //   isScrolled
              //     ? "text-black hover:text-blue-600"
              //     : "text-white hover:text-blue-600"
              // }`}
            >
              Contact
            </button>
            <button
              onClick={() => {
                handleRedirectSection("contactus");
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex justify-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-blue-600"
              // className={`${
              //   isScrolled ? "text-black" : ""
              // } hover:text-blue-600 transition-colors`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-black" />
              ) : (
                <Menu
                  className="h-6 w-6 text-black"
                  // className={`h-6 w-6 ${
                  //   isScrolled ? "text-black" : "text-white"
                  // }`}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`md:hidden transition-all duration-500 ease-in-out transform ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          } bg-[#f2f2f2]`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href={"/#aboutus"}
              className="block px-3 py-2 text-black hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href={"/#contactus"}
              className="block px-3 py-2 text-black hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
            <button
              onClick={() => {
                handleRedirectSection("contactus");
              }}
              className="w-full text-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
