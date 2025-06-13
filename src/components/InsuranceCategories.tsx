import { Car, Home, PawPrint, Truck, Plane } from "lucide-react";

const categories = [
  {
    label: "Car insurance",
    icon: Car,
    href: "https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-001&type=car",
  },
  {
    label: "Home insurance",
    icon: Home,
    href: "https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-004&type=home",
  },
  {
    label: "Pet insurance",
    icon: PawPrint,
    href: "https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-009&type=pet",
  },
  {
    label: "Van insurance",
    icon: Truck,
    href: "https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-002&type=van",
  },
  {
    label: "Travel insurance",
    icon: Plane,
    href: "https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-006&type=travel",
  },
];

export default function InsuranceCategories() {
  return (
    <section className="bg-[#012348] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8">
          Where Else Can You Save? Let&apos;s Find Out!
        </h2>

        <div className="flex flex-col items-center">
          {/* Cards container */}
          <div className="flex flex-wrap justify-center gap-3 w-full">
            {categories.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center w-full sm:w-auto px-2" // Added px-2 for small gaps on mobile
              >
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all border border-gray-100 w-full max-w-[180px] sm:w-[180px]">
                  <Icon className="h-10 w-10 text-[#7bc043] mb-2" />
                  <span className="text-[#012348] font-semibold text-base text-center">
                    {label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
