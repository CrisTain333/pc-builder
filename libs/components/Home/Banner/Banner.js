import Image from "next/image";
import React from "react";
import Banner1 from "../../../assets/Images/banner0.jpg";
import Banner2 from "../../../assets/Images/banner1.jpg";
import Banner3 from "../../../assets/Images/banner2.jpg";
import Banner4 from "../../../assets/Images/banner3.png";
import Banner5 from "../../../assets/Images/banner4.jpg";
import Banner6 from "../../../assets/Images/banner6.jpg";
// import Banner4 from "../../../assets/Images/";
// import Banner2 from '../../../public/images/Banner-2.png';
// import MackBook_Banner from "../../../public/images/MacBook_Air_banner (2).png";
// import iPad_Banner from "../../../public/images/ipad.png";
// import watch_Banner from "../../../public/images/watch.png";
// import earphone_Banner from "../../../public/images/earphone.png";
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  return (
    <div className="w-[95%] mx-auto my-5">
      <div className="grid grid-cols-12 gap-5 ">
        {/* left side */}
        <div className="col-span-12 md:col-span-12 lg:col-span-6">
          <div>
            <div
            // showThumbs={false}
            // infiniteLoop={true}
            // autoPlay={true}
            // interval={10000}
            // showArrows={false}
            // showStatus={false}
            // swipeable={true}
            // showIndicators={false}
            >
              <div>
                <div className="relative ">
                  <Image
                    src={
                      "https://storage-asset.msi.com/event/2019/mystic-light-rgb-pc/images/partner01.jpg"
                    }
                    alt="banner_1"
                    className="w-full rounded-lg object-cover h-96"
                    height={1000}
                    width={1000}
                  />
                  {/* top-8 left-8 */}
                  {/* <div className="text-start absolute top-2 left-2 md:top-16  md:left-10   lg:top-8 lg:left-7     ">
                    <p className="text-red-500 text-sm md:text-base lg:text-sm font-medium ">
                      SUPERCHARGED FOR PROS
                    </p>

                    <h2 className="text-3xl md:text-6xl lg:text-5xl font-bold mt-5">
                      iPad S13+ Pro.{" "}
                    </h2>

                    <p className="text-sm md:text-2xl lg:text-lg font-semibold mt-3 md:mt-8">
                      From $999.00 or $41.62
                    </p>
                    <p className="text-sm md:text-2xl lg:text-lg  font-semibold mt-3 font-[Roboto]">
                      For 24 mo. Footnote $
                    </p>

                    <div className="mt-4  md:mt-14 lg:mt-10">
                      <button className="py-2 px-3 md:py-4 md:px-5 rounded-md text-lg md:text-xl lg:py-2 lg:px-3 lg:text-lg bg-[#1C2B35] text-white">
                        Buy Now
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE  */}
        <div className="col-span-12 md:col-span-12 lg:col-span-6">
          {/* MAIN DIV  */}
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-6">
              <div className="relative">
                <Image
                  src={Banner5}
                  alt="banner_1"
                  className="w-full rounded-lg h-52 object-cover"
                  height={300}
                  width={300}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="relative">
                <Image
                  src={Banner3}
                  alt="banner_1"
                  className="w-full rounded-lg h-52 object-cover"
                  height={300}
                  width={300}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="relative">
                <Image
                  src={Banner4}
                  alt="banner_1"
                  className="w-full rounded-lg h-40 object-cover"
                  height={300}
                  width={300}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="relative">
                <Image
                  src={Banner2}
                  alt="banner_1"
                  className="w-full rounded-lg h-[10rem] object-cover"
                  height={300}
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
