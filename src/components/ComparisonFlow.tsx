"use client";

import Image from "next/image";

const brands = [
  { name: "4thUtility", src: "/client-1.png" },
  { name: "BT", src: "/client-2.png" },
  { name: "iTalk", src: "/client-3.png" },
  { name: "NOW Broadband", src: "/client-4.png" },
  { name: "Sky", src: "/client-5.png" },
  { name: "TalkTalk", src: "/client-6.png" },
  { name: "Three", src: "/client-7.png" },
  { name: "Virgin Media", src: "/client-8.png" },
  { name: "Vodafone", src: "/client-9.png" },
];

const BrandsGrid = () => {
  return (
    <section className="py-3 md:py-10 ">
      <div className="max-w-5xl mx-auto sm:px-4 text-center">
        <h2 className="text-2xl text-black sm:text-3xl font-bold mb-8">
          Compare Top Brands and New Alternatives.
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white p-4 rounded-md shadow-sm flex items-center justify-center w-36 h-26"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={80}
                height={20}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsGrid;
