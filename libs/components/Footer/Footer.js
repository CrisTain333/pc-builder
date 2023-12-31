import Image from "next/image";
import React from "react";
import BrandImage from "../BrandImage/BrandImage";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer class=" dark:bg-gray-900">
        <div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
          <Link
            className="flex items-center text-xl font-semibold dark:text-white"
            href="/"
          >
            <BrandImage
              hight={100}
              width={100}
              className={"h-14  w-14"}
            />
            <span className="text-2xl font-bold">
              asterBuild
            </span>
          </Link>

          <div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <a
              href="#"
              class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Overview
            </a>

            <a
              href="#"
              class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Features
            </a>

            <a
              href="#"
              class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Pricing
            </a>
            <a
              href="#"
              class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Careers
            </a>

            <a
              href="#"
              class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Help
            </a>

            <a
              href="#"
              class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Privacy
            </a>
          </div>

          <p class="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">
            © Copyright 2023 Meraki UI.{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
