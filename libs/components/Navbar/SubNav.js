import React, { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import DropDown from "./DropDown/DropDown";
import { componentCategories } from "@/libs/constant/categoryData";

const SimpleNav = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div>
      <header className="p-5  bg-[#28afa8e5] text-white">
        <div className="w-[90%] mx-auto">
          <div className="container flex justify-between h-10 mx-auto  md:space-x-8">
            <ul className="items-stretch hidden space-x-3 md:flex justify-center ">
              <li className="flex">
                <div className="flex border-r-2 pr-2">
                  <div className="flex w-60  items-center px-4 py-2 -mb-1 border-r-1 mr-2 border  justify-between  border-white mt-1 dropdown cursor-pointer">
                    <div
                      onClick={() => setDropDown(!dropDown)}
                    >
                      <div className="relative h-[60px] mt-[10px] w-[270px]">
                        <BiMenuAltLeft
                          size={30}
                          className="absolute top-3 left-2"
                        />

                        <span className="h-[90%] flex justify-between items-center ml-10">
                          All Categories
                          <IoIosArrowDown
                            size={20}
                            className="absolute right-14 top-4 cursor-pointer"
                            onClick={() =>
                              setDropDown(!dropDown)
                            }
                          />
                        </span>
                      </div>
                      <div>
                        {dropDown ? (
                          <DropDown
                            dropDown={dropDown}
                            categoriesData={
                              componentCategories
                            }
                            setDropDown={setDropDown}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  href="/"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  Home
                </Link>
              </li>
              {/* <li className="flex">
                                <Link
                                    rel="noopener noreferrer"
                                    href="/best-deal"
                                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                                >
                                    Best Selling
                                </Link>
                            </li> */}
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  href="/product"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  Product
                </Link>
              </li>
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  href="/faq"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  FAQ
                </Link>
              </li>
              <li className="flex">
                <Link
                  rel="noopener noreferrer"
                  href="/contact-us"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SimpleNav;
