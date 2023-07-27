import { useRouter } from "next/router";
import React from "react";

const DropDown = ({ setDropDown, categoriesData }) => {
  const navigate = useRouter();
  const submitHandle = (i) => {
    navigate.push(`/product?category=${i.title}`);
    setDropDown(false);
  };
  return (
    <div className="pb-5 w-64 h-[70vh] overflow-y-scroll -ml-6 bg-[#fff] absolute z-30 rounded-b-md shadow-md">
      {categoriesData &&
        categoriesData.map((i, index) => (
          <div
            key={index}
            className={`flex items-center `}
            onClick={() => submitHandle(i)}
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
            <h3 className="p-1 mx-3 cursor-pointer select-none text-black">
              {i}
            </h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
