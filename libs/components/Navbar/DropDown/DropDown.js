import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const DropDown = ({
  setDropDown,
  categoriesData,
  dropDown,
}) => {
  return (
    <div
      className={`pb-5 w-64 h-auto max-h-[70h] overflow-y-scroll -ml-6 bg-white absolute z-30 rounded-b-md shadow-md duration-1000 transition-opacity 
      }`}
    >
      {categoriesData &&
        categoriesData.map((i, index) => (
          <Link
            href={`/product/category/${i}`}
            key={index}
            className={`flex items-center `}
          >
            {/* <img
              src={i.image_Url}
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
              alt=""
            /> */}
            <h3 className="p-2 hover:text-[#28afa8] transition-all duration-300  mx-3 cursor-pointer select-none text-black font-medium text-base">
              {i}
            </h3>
          </Link>
        ))}
    </div>
  );
};

export default DropDown;
