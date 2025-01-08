"use client"
import React, { useEffect } from 'react';
import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.getElementById('hero-section')?.offsetHeight || 0;
      if (window.scrollY > heroSectionHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 backdrop-blur-sm transition-colors duration-300 ${!isScrolled ? 'md:bg-transparent bg-white' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-black hover:text-blue-600' : 'md:text-white hover:text-blue-600'}`}>H&S Franchise</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className={`transition-colors ${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-600'} mix-blend-mode-${isScrolled ? 'normal' : 'difference'}`}>Brands</Link>
            <Link href="#" className={`transition-colors ${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-600'} mix-blend-mode-${isScrolled ? 'normal' : 'difference'}`}>About</Link>
            <Link href="#" className={`transition-colors ${isScrolled ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-600'} mix-blend-mode-${isScrolled ? 'normal' : 'difference'}`}>Contact</Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-black' : ''} hover:text-blue-600 transition-colors`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-black" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`md:hidden transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
        >          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#" className="block px-3 py-2 text-black hover:text-blue-600 transition-colors">Solutions</a>
            <a href="#" className="block px-3 py-2 text-black hover:text-blue-600 transition-colors">Services</a>
            <a href="#" className="block px-3 py-2 text-black hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="block px-3 py-2 text-black hover:text-blue-600 transition-colors">Contact</a>
            <button className="w-full text-center bg-blue-600 text-black px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}