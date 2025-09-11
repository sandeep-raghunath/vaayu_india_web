"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import navbarMenuData from "./navbarMenuData";

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all ${
        scrolled ? "bg-white/80 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:py-3 lg:px-8">
        {/* Logo - shown on desktop only */}
        <div className="hidden items-center lg:flex">
          <Link href="/">
            <Image src="/images/logo/logo.png" alt="logo" width={140} height={54} priority />
          </Link>
        </div>

        {/* Desktop Menu - visible on large screens */}
        <nav
          ref={menuRef}
          className="hidden space-x-6 rounded-full border border-gray-200 px-5 py-2 shadow-sm md:space-x-4 md:px-4 lg:flex"
        >
          {navbarMenuData.map((item) =>
            item.submenu ? (
              <div key={item.id || item.title} className="group relative flex items-center">
                <button
                  type="button"
                  className={`flex items-center font-medium text-gray-700 hover:text-black focus:outline-none ${
                    openMenu === item.id ? "underline underline-offset-4" : ""
                  }`}
                  onClick={() => setOpenMenu(openMenu === item.id ? null : item.id)}
                  onMouseEnter={() => setOpenMenu(item.id)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {item.title}
                  <svg
                    className="ml-1"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {/* Submenu shown on hover or openMenu */}
                <div
                  onMouseEnter={() => setOpenMenu(item.id)}
                  onMouseLeave={() => setOpenMenu(null)}
                  className={`absolute top-full left-0 z-10 mt-2 w-40 rounded-md border bg-white shadow-lg ${
                    openMenu === item.id ? "block" : "hidden"
                  }`}
                >
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.id || subitem.title}
                      href={subitem.path}
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-200"
                      onClick={() => setOpenMenu(null)}
                    >
                      {subitem.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.id || item.title}
                href={item.path ? item.path : ""}
                className={`relative flex items-center font-medium text-black hover:text-black ${
                  pathname === item.path ? "underline underline-offset-4" : ""
                }`}
              >
                {item.title}
                {item.hasCaret && (
                  <svg
                    className="ml-1"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Button - visible on large screens */}
        <div className="hidden lg:block">
          <button className="bg-primary cursor-pointer rounded-full px-6 py-2 font-bold text-white drop-shadow-md transition-transform hover:scale-105">
            Download Brochure
          </button>
        </div>
      </div>

      {/* Mobile and Tablet Header */}
      <div className="relative flex items-center justify-center px-4 py-3 sm:px-6 md:flex lg:hidden">
        {/* Hamburger on the left */}
        <div className="absolute left-4">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none">
            <svg
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Centered Logo */}
        <div className="lg:hidden">
          <Link href="/">
            <Image src="/images/logo/logo.png" alt="logo" width={140} height={54} priority />
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu - visible on mobile and tablet */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="border-t border-gray-200 bg-white shadow-lg md:block lg:hidden"
        >
          <div className="flex flex-col space-y-2 px-4 py-4">
            {navbarMenuData.map((item) =>
              item.submenu ? (
                <div key={item.id || item.title} className="flex flex-col">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between font-medium text-gray-700"
                    onClick={() => setOpenMenu(openMenu === item.id ? null : item.id)}
                  >
                    {item.title}
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={openMenu === item.id ? "M6 18L18 6M6 6l12 12" : "M19 9l-7 7-7-7"}
                      ></path>
                    </svg>
                  </button>
                  {openMenu === item.id &&
                    item.submenu.map((subitem) => (
                      <Link
                        key={subitem.id || subitem.title}
                        href={subitem.path}
                        className="rounded py-2 pl-4 text-gray-700 hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.title}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={item.id || item.title}
                  href={item.path ? item.path : ""}
                  className="rounded py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )
            )}
            <button className="bg-primary mt-2 rounded-full px-6 py-2 font-bold text-white drop-shadow-md transition-transform hover:scale-105">
              Download Brochure
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
