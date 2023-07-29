import RootLayout from "@/libs/Layout/RootLayout";
import Button from "@/libs/components/Button/Button";
import { componentCategories } from "@/libs/constant/categoryData";
import { clearState } from "@/libs/redux/feature/pcBuild/pcBuildSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const PcBuildPage = () => {
  const dispatch = useDispatch();
  const {
    price,
    Processor,
    Motherboard,
    RAM,
    powerSupply,
    storage,
    Monitor,
  } = useSelector((state) => state.builder);

  const areAllComponentsSelected = () => {
    return (
      Processor !== null &&
      Motherboard !== null &&
      RAM !== null &&
      powerSupply !== null &&
      storage !== null &&
      Monitor !== null
    );
  };

  const isBuildPCDisabled = !areAllComponentsSelected();

  const handleClick = () => {
    toast.success("Pc Build was successfully");
    dispatch(clearState());
  };

  return (
    <div>
      <div className="w-[80%] mx-auto rounded-md shadow-md">
        {/* heading  */}
        <div className="flex items-center justify-between border-b-2 px-10 p-3">
          <h2 className="font-semibold">
            PC Builder - Build Your Own Computer
          </h2>
          <div className="p-3 px-10 bg-orange-200 text-base rounded-md text-orange-700 font-semibold">
            ${price}
          </div>
        </div>

        {/* Category Section  */}
        <div class="mt-2 w-[90%] mx-auto bg-white text-black p-2">
          {/* Parent Container For Processor */}
          <div className="border-b-2">
            <div className="flex items-center justify-between gap-x-3.5  py-2 text-lg  text-gray-800">
              <span>Processor</span>
              {!Processor && (
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
              )}
            </div>
            {Processor && (
              <div>
                <div className="flex items-center justify-start gap-x-3.5 font-bold  py-2 text-sm  text-gray-800">
                  <Image
                    alt="_image"
                    height={50}
                    width={50}
                    src={Processor.Image}
                  />
                  <span>{Processor?.name}</span>
                </div>
              </div>
            )}
          </div>
          {/* Parent Container For Motherboard */}
          <div className="border-b-2">
            <div className="flex items-center justify-between gap-x-3.5  py-2 text-lg  text-gray-800">
              <span>Motherboard</span>
              {!Motherboard && (
                <Link
                  href={`/pc-builder?category=${"Motherboard"}`}
                >
                  <Button
                    label={"Choice"}
                    type={"button"}
                    className={
                      "bg-gradient-to-t from-[#28afa8] to-[#4ce5e2] text-base px-5 py-2 rounded-md text-white"
                    }
                  />
                </Link>
              )}
            </div>
            {Motherboard && (
              <div>
                <div className="flex items-center justify-start gap-x-3.5 font-bold  py-2 text-sm  text-gray-800">
                  <Image
                    alt="_image"
                    height={50}
                    width={50}
                    src={Motherboard.Image}
                  />
                  <span>{Motherboard?.name}</span>
                </div>
              </div>
            )}
          </div>
          {/* Parent Container For RAM */}
          <div className="border-b-2">
            <div className="flex items-center justify-between gap-x-3.5  py-2 text-lg  text-gray-800">
              <span>RAM</span>
              {!RAM && (
                <Link
                  href={`/pc-builder?category=${"RAM"}`}
                >
                  <Button
                    label={"Choice"}
                    type={"button"}
                    className={
                      "bg-gradient-to-t from-[#28afa8] to-[#4ce5e2] text-base px-5 py-2 rounded-md text-white"
                    }
                  />
                </Link>
              )}
            </div>
            {RAM && (
              <div>
                <div className="flex items-center justify-start gap-x-3.5 font-bold  py-2 text-sm  text-gray-800">
                  <Image
                    alt="_image"
                    height={50}
                    width={50}
                    src={RAM.Image}
                  />
                  <span>{RAM?.name}</span>
                </div>
              </div>
            )}
          </div>
          {/* Parent Container For Power Supply */}
          <div className="border-b-2">
            <div className="flex items-center justify-between gap-x-3.5  py-2 text-lg  text-gray-800">
              <span>Power Supply</span>
              {!powerSupply && (
                <Link
                  href={`/pc-builder?category=${"Power Supply"}`}
                >
                  <Button
                    label={"Choice"}
                    type={"button"}
                    className={
                      "bg-gradient-to-t from-[#28afa8] to-[#4ce5e2] text-base px-5 py-2 rounded-md text-white"
                    }
                  />
                </Link>
              )}
            </div>
            {powerSupply && (
              <div>
                <div className="flex items-center justify-start gap-x-3.5 font-bold  py-2 text-sm  text-gray-800">
                  <Image
                    alt="_image"
                    height={50}
                    width={50}
                    src={powerSupply.Image}
                  />
                  <span>{powerSupply?.name}</span>
                </div>
              </div>
            )}
          </div>
          {/* Parent Container For Storage */}
          <div className="border-b-2">
            <div className="flex items-center justify-between gap-x-3.5  py-2 text-lg  text-gray-800">
              <span>Storage Device</span>
              {!storage && (
                <Link
                  href={`/pc-builder?category=${"Storage Device"}`}
                >
                  <Button
                    label={"Choice"}
                    type={"button"}
                    className={
                      "bg-gradient-to-t from-[#28afa8] to-[#4ce5e2] text-base px-5 py-2 rounded-md text-white"
                    }
                  />
                </Link>
              )}
            </div>
            {storage && (
              <div>
                <div className="flex items-center justify-start gap-x-3.5 font-bold  py-2 text-sm  text-gray-800">
                  <Image
                    alt="_image"
                    height={50}
                    width={50}
                    src={storage.Image}
                  />
                  <span>{storage?.name}</span>
                </div>
              </div>
            )}
          </div>
          {/* Parent Container For Monitor */}
          <div className="border-b-2">
            <div className="flex items-center justify-between gap-x-3.5  py-2 text-lg  text-gray-800">
              <span>Monitor</span>
              {!Monitor && (
                <Link
                  href={`/pc-builder?category=${"Monitor"}`}
                >
                  <Button
                    label={"Choice"}
                    type={"button"}
                    className={
                      "bg-gradient-to-t from-[#28afa8] to-[#4ce5e2] text-base px-5 py-2 rounded-md text-white"
                    }
                  />
                </Link>
              )}
            </div>
            {Monitor && (
              <div>
                <div className="flex items-center justify-start gap-x-3.5 font-bold  py-2 text-sm  text-gray-800">
                  <Image
                    alt="_image"
                    height={50}
                    width={50}
                    src={Monitor.Image}
                  />
                  <span>{Monitor?.name}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer  */}
        <div className="flex items-start justify-center py-5  w-[90%] mx-auto">
          <Button
            className={`text-base px-5 py-2 rounded
              
             ${
               isBuildPCDisabled
                 ? "cursor-not-allowed bg-red-200 text-red-500"
                 : "cursor-pointer bg-green-500 text-white"
             }
             `}
            label={"Build"}
            action={handleClick}
            isDisabled={isBuildPCDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default PcBuildPage;

PcBuildPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
