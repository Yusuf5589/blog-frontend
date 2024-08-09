"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [loginStatus, setLoginStatus] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <div>

      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                {/* className={`h-6 w-6 ${mobileMenuOpen ? "hidden" : "block"}`} */}
                <Image className={`${mobileMenuOpen ? "hidden" : "block"}`} src={"hamburgermenu.svg"} height={24} width={24} alt="Hamburger Menu"></Image>
                <Image className={`${mobileMenuOpen ? "block" : "hidden"}`} src={"cancel.svg"} height={24} width={24} alt="Hamburger Menu"></Image>


              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link href={process.env.NEXT_PUBLIC_URL}>
                  <Image
                    width={500}
                    height={500}
                    className="h-8 w-auto transparent"
                    src={"/Image/kle-logo.png"}
                    alt="Kle-Logo"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    href={process.env.NEXT_PUBLIC_URL}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Home
                  </Link>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_URL}contract/kvkk`}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Kvkk
                  </Link>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_URL}contract/privacy-policy`}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div></div>

                {userMenuOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href={process.env.NEXT_PUBLIC_URL}
                className="block rounded-md px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                href={`${process.env.NEXT_PUBLIC_URL}contract/kvkk`}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Kvkk
              </Link>
              <Link
                href={`${process.env.NEXT_PUBLIC_URL}contract/privacy-policy`}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
