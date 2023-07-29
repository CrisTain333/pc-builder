import RootLayout from "@/libs/Layout/RootLayout";
import Button from "@/libs/components/Button/Button";
import { componentCategories } from "@/libs/constant/categoryData";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const PcBuildPage = () => {
  const {price} = useSelector((state) => state.builder);
  return (
    <div>
      <div className="w-[80%] mx-auto rounded-md shadow-md">
        {/* heading  */}
        <div className="flex items-center justify-between border-b-2 px-10 p-3">
          <h2 className="font-semibold">
            PC Builder - Build Your Own Computer
          </h2>
          <div className="p-5 bg-orange-200 text-base rounded-md text-orange-700 font-semibold">
            ${price}
          </div>
        </div>

        {/* Category Section  */}
        <div class="  mt-2 w-[90%] mx-auto bg-white text-black p-2">
          <div>
            <div className="flex items-center justify-between gap-x-3.5 my-10  py-2 text-xl border-b-2 text-gray-800">
              <span>Processor</span>
              <Link
                href={`/pc-builder?category=${"Processor"}`}
              >
                <Button
                  label={"Choice"}
                  type={"button"}
                  className={
                    "bg-gradient-to-t from-[#28afa8] to-[#4ce5e2] text-base px-5 py-2 rounded-md text-white"
                  }
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer  */}
        <div className="flex items-start justify-center py-5  w-[90%] mx-auto">
          <button className="text-base px-5 py-2 rounded-md bg-green-300 text-green-600">
            Build
          </button>
        </div>
      </div>
    </div>
  );
};

export default PcBuildPage;

PcBuildPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
