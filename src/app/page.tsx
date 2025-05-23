import type React from "react";
import Image from "next/image";
import { Zap, Wifi } from "lucide-react";
import LogoCarousel from "@/components/LogoCarousel";
// import LogoCarousel1 from "@/components/LogoCarousel1";
import ComparisonFlow from "@/components/ComparisonFlow";
import InsuranceCategories from "@/components/InsuranceCategories";
import ComparisonFeatures from "@/components/ComparisonFeatures";
import FaqsList from "@/components/FaqsList";
// import TrustPilot from "@/components/TrustPilot";
import Link from "next/link";
import TrustPilot1 from "@/components/TrustPilot1";

export default function HomePage() {
  return (
    <div className="min-h-screen   text-white">
      <div className="w-full bg-[#0a1128]">
        <main className="container mx-auto max-w-6xl   px-4 py-12">
          <div className="w-full bg-[#0a1128]">
            <main className="container mx-auto max-w-6xl px-4 py-12">
              <div className="flex flex-col md:flex-row gap-7 items-center">
                {/* Left Side - Text Section */}
                <div className="flex-1 space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Check, Compare and Switch!
                  </h1>
                  <p className="text-2xl font-medium text-emerald-400">
                    Benefit from exclusive discounts and special offers tailored
                    to maximise savings.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mt-8">
                    <Link
                      href="https://domestic.checkmybills.tickd.co.uk/"
                      target="_blank"
                      className="hover:text-emerald-400"
                    >
                      <ServiceCard
                        icon={<Zap className="h-8 w-8" />}
                        title="Energy"
                        description="Get the best electricity and gas prices"
                      />
                    </Link>
                    <Link href="/broadband" className="hover:text-emerald-400">
                      <ServiceCard
                        icon={<Wifi className="h-8 w-8" />}
                        title="Broadband"
                        description="Broadband packages to suit your needs"
                      />
                    </Link>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1">
                  <Image
                    src="/comparison-img.png"
                    alt="About us"
                    className="w-full h-auto object-cover rounded-lg"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </main>
          </div>
        </main>
      </div>

      <div className="bg-white py-10  mx-auto max-w-6xl">
        <ComparisonFlow />

        <div className="mt-16 bg-[#f5f0ff] py-12 px-4 rounded-lg">
          <h2 className="text-center text-2xl font-semibold text-[#2d1a45] mb-10">
            We compare trusted suppliers, so you&apos;re in good hands
          </h2>
          <LogoCarousel />
          {/* <LogoCarousel1 /> */}
        </div>

        {/* Duplicate carosul */}
        {/* <div className="mt-16 bg-[#f5f0ff] py-12 px-4 rounded-lg">
          <h2 className="text-center text-2xl font-semibold text-[#2d1a45] mb-10">
            We compare trusted suppliers, so you&apos;re in good hands
          </h2>
          <LogoCarousel1 />
          
        </div> */}
      </div>

      <InsuranceCategories />
      <ComparisonFeatures />
      <FaqsList />
      {/* <TrustPilot /> */}
      <TrustPilot1 />
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
    <div className="bg-[#0f1c3f] p-6 rounded-lg border border-gray-800 hover:border-emerald-300 transition-all duration-300 shadow-md hover:shadow-1xl transform hover:-translate-y-2 hover:scale-100 cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="text-emerald-500">{icon}</div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
