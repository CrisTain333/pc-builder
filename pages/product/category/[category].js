import RootLayout from "@/libs/Layout/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const ProductCategory = ({ products }) => {
  const { query } = useRouter();
  console.log(products?.length);
  return <div>{products?.length}</div>;
};

export default ProductCategory;
ProductCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const componentCategories = [
    "Processor",
    "Motherboard",
    "RAM",
    "Power Supply Unit",
    "Storage Device",
    "Monitor",
    "Others",
  ];
  const paths = componentCategories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: true, // Set to true to enable fallback for paths not generated at build time
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  //   const { category } = params;
  const Products = await fetch(
    `${process.env.NEXT_FRONTEND_BASE_URL}/api/products/category/${params.category}`
  );
  const categoryData = await Products.json();

  return {
    props: {
      category: params,
      products: categoryData,
    },
  };
}
