import { Car, Home, PawPrint, Truck, Plane } from "lucide-react";
import React from "react";

interface InsuranceCategory {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const categories: InsuranceCategory[] = [
  {
    label: "Car insurance",
    icon: Car,
    href: "#",
  },
  {
    label: "Home insurance",
    icon: Home,
    href: "#",
  },
  {
    label: "Pet insurance",
    icon: PawPrint,
    href: "#",
  },
  {
    label: "Van insurance",
    icon: Truck,
    href: "#",
  },
  {
    label: "Travel insurance",
    icon: Plane,
    href: "#",
  },
];

const Card: React.FC<InsuranceCategory> = ({ label, icon: Icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center sm:w-auto px-0.5 md:px-1 xl:px-1"
    >
      <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-3 md:p-4 xl:p-5 hover:shadow-lg transition-all border border-gray-100 w-[145px] md:w-[160px] xl:w-[180px]">
        <Icon className="h-6 w-6 text-[#7bc043] mb-2 md:h-8 md:w-8 xl:h-10 xl:w-10" />
        <span className="text-[#012348] font-semibold text-xs text-center md:text-sm xl:text-base">
          {label}
        </span>
      </div>
    </a>
  );
};

const InsuranceCategories: React.FC = () => {
  return (
    <section className="bg-[#012348] py-8">
      <div className="max-w-7xl mx-auto sm:px-3">
        <h2 className="text-white text-xl font-bold text-center mb-6">
          Where Else Can You Save? Let&apos;s Find Out!
        </h2>

        <div className="flex flex-col items-center">
          {/* Large screens: all 5 in one row */}
          <div className="hidden xl:flex justify-center gap-6 w-full">
            {categories.map((category) => (
              <Card key={category.label} {...category} />
            ))}
          </div>

          {/* Medium-large: 4 top, 1 bottom center */}
          <div className="hidden lg:flex xl:hidden flex-col items-center w-full">
            <div className="flex flex-wrap justify-center gap-6 mb-6 w-full">
              {categories.slice(0, 4).map((category) => (
                <Card key={category.label} {...category} />
              ))}
            </div>
            <div className="flex justify-center w-full">
              <Card {...categories[4]} />
            </div>
          </div>

          {/* Medium: 3 top, 2 bottom center */}
          <div className="hidden md:flex lg:hidden flex-col items-center w-full">
            <div className="flex flex-wrap justify-center gap-6 mb-6 w-full">
              {categories.slice(0, 3).map((category) => (
                <Card key={category.label} {...category} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 w-full">
              <Card {...categories[3]} />
              <Card {...categories[4]} />
            </div>
          </div>

          {/* Small: 2x2 with last centered */}
          <div className="flex md:hidden flex-col items-center w-full">
            <div className="flex flex-wrap justify-center gap-3 mb-3 w-full">
              {categories.slice(0, 2).map((category) => (
                <Card key={category.label} {...category} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-3 w-full">
              {categories.slice(2, 4).map((category) => (
                <Card key={category.label} {...category} />
              ))}
            </div>
            <div className="flex justify-center w-full">
              <Card {...categories[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCategories;
