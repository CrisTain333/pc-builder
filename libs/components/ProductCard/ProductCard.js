import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div>
      <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow ">
        <Link href={`/product/details/${data?.id}`}>
          <Image
            height={100}
            width={100}
            className="w-52 rounded-t-lg mx-auto"
            src={data?.Image}
            alt="product_image"
          />
        </Link>
        <div className="px-3 pb-3">
          <Link
            href={`/product/category/${data?.Category}`}
          >
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {data?.name?.slice(0, 22)} . . .
            </h5>
          </Link>
          <div className="flex justify-between items-center mt-2">
            <div className="p-1 px-2 rounded-md text-sm font-semibold bg-blue-100 text-blue-800">
              <Link
                href={`/product/category/${data?.Category}`}
              >
                {data?.Category}
              </Link>
            </div>
            <span
              className={`text-sm font-semibold ${
                data?.Status === "In Stock"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {data?.Status}
            </span>
          </div>

          <Link href={`/product/details/${data?.id}`}>
            <div className="flex items-center mt-2.5 mb-5">
              <svg
                className="w-4 h-4 text-yellow-300 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                {data?.ratings}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ${data?.Price}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
