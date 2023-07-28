import RootLayout from "@/libs/Layout/RootLayout";
import React from "react";

const ProductDetailsPage = ({ product }) => {
  console.log(product);

  if (product?.success === false) {
    return (
      <div className="h-[30vh] flex items-center justify-center">
        <p className="text-3xl text-red-600 font-semibold">
          Product Not Found
        </p>
      </div>
    );
  }
  return (
    <div>
      <p>Product Details {product?.data?.name}</p>
    </div>
  );
};

export default ProductDetailsPage;
ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const ids = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7,8",
    "9",
    "10",
    "11",
    "12,13",
    "14",
    "15,16",
    "17",
    "18,19",
    "20",
    "21",
    "22,23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
  ];

  const paths = ids?.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false, // Set to true to enable fallback for paths not generated at build time
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const product = await fetch(
    `${process.env.NEXT_FRONTEND_BASE_URL}/api/products/${params.id}`
  );
  const productData = await product.json();

  console.log(productData);
  return {
    props: {
      product: productData,
    },
  };
}
