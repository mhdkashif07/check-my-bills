import { Car, Home, PawPrint, Truck, Plane } from "lucide-react";
import Link from "next/link";

const categories = [
  { label: "Car insurance", icon: Car, href: "/car-insurance" },
  { label: "Home insurance", icon: Home, href: "/home-insurance" },
  { label: "Pet insurance", icon: PawPrint, href: "/pet-insurance" },
  { label: "Van insurance", icon: Truck, href: "/van-insurance" },
  { label: "Travel insurance", icon: Plane, href: "/travel-insurance" },
];

export default function InsuranceCategories() {
  return (
    <section className="bg-[#012348] py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8">
          Where Else Can You Save? Let&apos;s Find Out!
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center">
          {categories.map(({ label, icon: Icon, href }) => (
            <Link key={label} href={href}>
              <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all border border-gray-100">
                <Icon className="h-10 w-10 text-[#7bc043] mb-2" />
                <span className="text-[#012348] font-semibold text-base text-center">
                  {label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
