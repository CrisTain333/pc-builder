import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import {
  addMonitor,
  addMotherboard,
  addPowerSupply,
  addProcessor,
  addRam,
  addStorage,
} from "@/libs/redux/feature/pcBuild/pcBuildSlice";
import { useRouter } from "next/router";

const ComponentsCard = ({ data, category }) => {
  const dispatch = useDispatch();

  const router = useRouter();

  const handleAddToBuild = (productData) => {
    if (category === "Processor") {
      dispatch(addProcessor(productData));
      router.push("/pc-build");
    }

    if (category === "Motherboard") {
      dispatch(addMotherboard(productData));
      router.push("/pc-build");
    }

    if (category === "RAM") {
      dispatch(addRam(productData));
      router.push("/pc-build");
    }

    if (category === "Power Supply") {
      dispatch(addPowerSupply(productData));
      router.push("/pc-build");
    }

    if (category === "Storage Device") {
      dispatch(addStorage(productData));
      router.push("/pc-build");
    }
    if (category === "Monitor") {
      dispatch(addMonitor(productData));
      router.push("/pc-build");
    }
  };

  return (
    <div>
      <div className="py-6">
        <div className="grid grid-cols-12 max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="col-span-5">
            <div className="flex items-center justify-center">
              <Image
                src={data?.Image}
                height={400}
                width={400}
                className=" h-44 w-44"
                alt="product_image"
              />
            </div>
          </div>
          <div className="col-span-7  p-4">
            <div className="flex items-center justify-between">
              <span className="px-4 text-xs p-[2px] rounded text-purple-700 bg-purple-200">
                {category}
              </span>
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
            <h1 className="text-gray-900 font-semibold mt-2 text-lg">
              {data?.name}
            </h1>
            <div className="mt-2 text-sm"></div>
            <div className="flex item-center mt-2">
              <svg
                className="w-5 h-5 fill-current text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <span className="ml-1 text-base font-semibold">
                {data?.ratings}
              </span>
            </div>
            <div className="flex item-center justify-between mt-3">
              <h1 className="text-gray-700 font-bold text-xl">
                ${data?.Price}
              </h1>
              <Button
                className="px-3 py-2 bg-gray-800 hover:bg-gray-600 text-white text-xs font-bold uppercase rounded"
                label={"Add To Builder"}
                action={() => handleAddToBuild(data)}
                type={"button"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsCard;
