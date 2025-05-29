import type React from "react";
import Image from "next/image";
import { Zap, Wifi, Smartphone, PhoneCall } from "lucide-react";
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
        <main className="container mx-auto max-w-7xl   px-4 pt-23 pb-10">
          <div className="w-full bg-[#0a1128]">
            <main className="container mx-auto max-w-6xl px-8 py-6">
              <div className="flex flex-col md:flex-row gap-7 items-center">
                {/* Left Side - Text Section */}
                <div className="flex-1 space-y-3">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Check, Compare and Switch!
                  </h1>
                  <p className="text-[18px] font-medium text-emerald-400">
                    Benefit from exclusive discounts and special offers tailored
                    to maximise savings.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Link
                      href="https://domestic.checkmybills.tickd.co.uk/"
                      target="_blank"
                      
                    >
                      <ServiceCard
                        icon={<Zap />}
                        title="Energy"
                        description="Get the best electricity and gas prices"
                      />
                    </Link>
                    <Link href="/broadband" >
                      <ServiceCard
                        icon={<PhoneCall  />}
                        title="Sim Only Deals"
                        description="Affordable SIM-only plans to keep you connected."
                      />
                    </Link>
                    <Link href="/broadband">
                      <ServiceCard
                        icon={<Wifi />}
                        title="Broadband"
                        description="Broadband packages to suit your needs"
                      />
                    </Link>
                    <Link href="/broadband">
                      <ServiceCard
                        icon={<Smartphone  />}
                        title="Mobile Phones"
                        description="Explore our latest mobile  deals and plans."
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
                    width={700}
                    height={700}
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
      {/* <TrustPiloT /> */}
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
    <div className="bg-[#0f1c3f] p-2 rounded-lg border border-gray-800 hover:border-emerald-300 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-98 cursor-pointer">
      <div className="flex items-start gap-2">
        <div className="text-emerald-500 h-7 w-7">{icon}</div>
        <div className="">
          <h3 className=" font-semibold hover:text-emerald-400">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
