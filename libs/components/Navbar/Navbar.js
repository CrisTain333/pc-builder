import Link from "next/link";
import React, { useState } from "react";
import BrandImage from "../BrandImage/BrandImage";
import Image from "next/image";
import Button from "../Button/Button";
import { IoIosBuild } from "react-icons/io";

const Navbar = () => {
  const [isLoaged, setIsLoag] = useState(true);
  return (
    <div className="fixed top-0 w-full z-50">
      <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-2 dark:bg-gray-800 shadow-md">
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
            <Link href="/build-pc">
              <Button
                label={"Build Pc"}
                icon={<IoIosBuild size={20} />}
                className={
                  "flex justify-center items-center bg-gradient-to-t from-[#28afa8]  px-3 md:px-6 transition-all py-2  md:py-3 text-base rounded-sm text-white to-[#4ce5e2]"
                }
                labelClass={"ml-2"}
              />
            </Link>
            {isLoaged && (
              <Image
                class=" h-14 w-14 rounded-full ring-2 ring-[#28afa8] p-1 dark:ring-gray-800"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
                width={500}
                height={500}
              />
            )}

            {/* <span className="hidden w-px h-7 bg-gray-300 md:block"></span> */}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;