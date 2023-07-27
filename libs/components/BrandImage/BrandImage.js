import Image from "next/image";
import React from "react";
import BrandLogo from "../../assets/icons/brand.png";

const BrandImage = ({ hight, width, className }) => {
  return (
    <Image
      height={hight}
      width={width}
      alt={"Brand_logo"}
      src={BrandLogo}
      className={className}
    />
  );
};

export default BrandImage;
