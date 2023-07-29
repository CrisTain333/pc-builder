import Link from "next/link";
import React, { useState } from "react";
import BrandImage from "../BrandImage/BrandImage";
import Image from "next/image";
import Button from "../Button/Button";
import { IoIosBuild } from "react-icons/io";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="fixed top-0 w-full z-50">
      <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-2">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center text-xl font-semibold dark:text-white"
              href="/"
            >
              <BrandImage
                hight={100}
                width={100}
                className={" h-14  w-14"}
              />
              <span className="text-2xl font-bold">
                asterBuild
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <form className="flex items-center space-x-2 border rounded-sm p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-none text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="w-full md:w-[40rem] outline-none appearance-none placeholder-gray-600 text-gray-600 p-1"
                type="text"
                placeholder="Search Products . . . . ."
              />
            </form>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <Link href="/pc-build">
              <Button
                label={"Build Pc"}
                icon={<IoIosBuild size={20} />}
                className={
                  "flex justify-center items-center bg-gradient-to-t from-[#28afa8]  px-3 md:px-2 transition-all py-[9px] text-base rounded-sm text-white to-[#4ce5e2]"
                }
                labelClass={"ml-2"}
              />
            </Link>

            {/* <span className="hidden w-px h-7 bg-gray-300 md:block"></span> */}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
