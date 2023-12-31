import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SimpleNav from "../components/Navbar/SubNav";
import { BiMenuAltLeft } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { componentCategories } from "../constant/categoryData";
import { signOut, useSession } from "next-auth/react";

const RootLayout = ({ children }) => {
  const { data: session } = useSession();
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="">
      <div>
        <Navbar />
        <div className="mt-14">
          <div className="">
            <div className="hidden md:block">
              <SimpleNav />
            </div>
            <div className="md:hidden block mt-20 bg-[#1C2B35] p-2">
              <div className="flex items-center justify-between px-2">
                <div class="hs-dropdown relative inline-flex">
                  <button
                    id="hs-dropdown-default"
                    type="button"
                    class="hs-dropdown-toggle py-2  pl-3 pr-8 flex justify-center items-center gap-2 rounded-sm border font-medium  text-white shadow-sm align-middle transition-all text-base   border-white"
                    onClick={() => setDropDown(!dropDown)}
                  >
                    <BiMenuAltLeft
                      size={30}
                      className="mr-3"
                    />
                    Category
                  </button>

                  {dropDown ? (
                    <div class="absolute top-11 left-0  w-40 mt-2  bg-white shadow-md rounded p-2 ">
                      {componentCategories &&
                        componentCategories.map(
                          (i, index) => (
                            <Link
                              onClick={() =>
                                setDropDown(!dropDown)
                              }
                              href={`/product/category/${i}`}
                              key={index}
                              className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                            >
                              {i}
                            </Link>
                          )
                        )}
                    </div>
                  ) : null}
                </div>
                <div>
                  {session?.user ? (
                    <>
                      <div className="flex items-center justify-center space-x-4">
                        <Image
                          className="block md:hidden h-14 w-14 rounded-full ring-2 ring-[#28afa8] p-1 "
                          src={session?.user?.image}
                          alt="Image Description"
                          width={500}
                          height={500}
                        />

                        <button
                          className="px-3 py-2 text-white rounded bg-[#28afa8]"
                          onClick={() => signOut()}
                        >
                          Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link href={"/auth/login"}>
                        <button
                          className="px-3 py-2 text-white rounded bg-[#28afa8]"
                          // onClick={() => signOut()}
                        >
                          Login
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
