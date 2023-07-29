import RootLayout from "@/libs/Layout/RootLayout";
import React from "react";
import Head from "next/head";
import ComponentsCard from "@/libs/components/ComponentsCard/ComponentsCard";

const PcBuilderPage = ({ category, components }) => {
  //   console.log(category, components);
  return (
    <div>
      <Head>
        <title>{category}</title>
      </Head>

      <div className="mt-10">
        <h1 className="text-center text-5xl font-semibold">
          {category}
        </h1>

        <div className="mt-10 w-[90%] mx-auto ">
          <div className="grid gap-y-5 gap-x-6 grid-cols-12 mt-10 w-[90%] mx-auto">
            {components.map((component) => {
              return (
                <div
                  key={component?.id}
                  className="col-span-12 md:col-span-6 "
                >
                  <ComponentsCard
                    data={component}
                    category={category}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuilderPage;

export async function getServerSideProps(context) {
  const { query } = context;

  const category = query?.category;

  console.log(category);
  const products = await fetch(
    `https://digital-cow-hut-eta.vercel.app/api/v1/products/category/${category}`
  );

  const productsData = await products.json();
  console.log(productsData);

  // Fetch components for the selected category from your data source
  // For example, you can use an API call or import data from a JSON file

  // Dummy components data for demonstration
  const components = [
    // Component data for the selected category
  ];

  return {
    props: {
      components: productsData?.data,
      category,
    },
  };
}

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
