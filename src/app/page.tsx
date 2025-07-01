import type React from "react";
import Image from "next/image";
import { Zap, Wifi, Smartphone, Car } from "lucide-react";
import LogoCarousel from "@/components/LogoCarousel";
// import LogoCarousel1 from "@/components/LogoCarousel1";
import ComparisonFlow from "@/components/ComparisonFlow";
import InsuranceCategories from "@/components/InsuranceCategories";
import ComparisonFeatures from "@/components/ComparisonFeatures";
import FaqsList from "@/components/FaqsList";
import TrustPilot from "@/components/TrustPilot";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a1128] text-white">
      <div className="w-full h-full">
        <main className="min-h-screen ">
          <section className="flex items-center justify-center min-h-screen container mx-auto max-w-6xl px-4 sm:px-6 lg:px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full">
              {/* Left Side - Text Section */}
              <div className="flex-1 w-full space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  Check, Compare and Switch!
                </h1>
                <p className="text-base sm:text-lg font-medium text-emerald-400">
                  Benefit from exclusive discounts and special offers tailored
                  to maximise savings.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="https://domestic.checkmybills.tickd.co.uk/"
                    target="_blank"
                  >
                    <ServiceCard
                      icon={<Zap />}
                      title="Energy"
                      description="Find the best energy prices."
                    />
                  </Link>
                  <Link
                    href="https://www.quotezone.co.uk/SetAffiliate.php?aid=B2S9J9-001&type=car"
                    target="_blank"
                  >
                    <ServiceCard
                      icon={<Car />}
                      title="Car Insurance"
                      description="Compare top car insurance."
                    />
                  </Link>
                  <a href="/broadband">
                    <ServiceCard
                      icon={<Wifi />}
                      title="Broadband"
                      description="Choose fast broadband deals."
                    />
                  </a>
                  <a href="/mobile-phones">
                    <ServiceCard
                      icon={<Smartphone />}
                      title="Mobile Phones"
                      description="Latest mobile offers & plans."
                    />
                  </a>
                </div>
              </div>

              {/* Right Side - Image Section */}
              <div className="flex-1 w-full max-w-sm md:max-w-md lg:max-w-lg pb-5">
                <Image
                  src="/hero-img.svg"
                  alt="About us"
                  className="w-full h-auto object-cover rounded-lg"
                  width={700}
                  height={700}
                  priority
                />
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="bg-white">
        <div className=" py-12  mx-auto max-w-7xl">
          <ComparisonFlow />

          <div className="mt-16 bg-[#f5f0ff] py-12 px-4 rounded-lg">
            <h2 className="text-center text-2xl font-semibold text-[#2d1a45] mb-10">
              Compare Top Brands and New Alternatives.
            </h2>
            <LogoCarousel />
            {/* <LogoCarousel1 /> */}
          </div>
        </div>
      </div>

      <InsuranceCategories />
      <ComparisonFeatures />
      <FaqsList />
      <TrustPilot />
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#0f1c3f] p-3 md:p-3 rounded-lg border border-gray-800 hover:border-emerald-500 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-[0.98] cursor-pointer">
      <div className="flex items-start gap-1 ">
        <div className="text-emerald-500 h-6 w-6 sm:h-10 sm:w-10 flex-shrink-0">
          {icon}
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-base sm:text-lg mb-1 text-white hover:text-emerald-500 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm">
            {description.length > 50
              ? description.slice(0, 50) + "..."
              : description}
          </p>
        </div>
      </div>
    </div>
  );
}
