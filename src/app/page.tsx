import type React from "react";
import Image from "next/image";
import { Zap, Wifi } from "lucide-react";
import LogoCarousel from "@/components/LogoCarousel";
import ComparisonFlow from "@/components/ComparisonFlow";
import InsuranceCategories from "@/components/InsuranceCategories";
import ComparisonFeatures from "@/components/ComparisonFeatures";
import FaqsList from "@/components/FaqsList";
import TrustPilot from "@/components/TrustPilot";

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
          Benefit from exclusive discounts and special offers tailored to maximise savings.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <ServiceCard
            icon={<Zap className="h-8 w-8" />}
            title="Energy"
            description="Get the best electricity and gas prices"
          />
          <ServiceCard
            icon={<Wifi className="h-8 w-8" />}
            title="Broadband"
            description="Broadband packages to suit your needs"
          />
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1">
        <img
          src="\comparison-img.png"
          alt="About us"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

    </div>
  </main>
</div>

        </main>
      </div>

      <div className="bg-white py-8 mx-auto max-w-6xl">
        <ComparisonFlow />
        <div className="mt-16 bg-[#f5f0ff] py-12 px-4 rounded-lg">
          <h2 className="text-center text-2xl font-semibold text-[#2d1a45] mb-10">
            We compare trusted suppliers, so you&apos;re in good hands
          </h2>
          <LogoCarousel />
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

// function BusinessDropdown() {
//   return (
//     <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[350px] bg-white text-gray-800 rounded-lg shadow-xl z-50 hidden md:block">
//       <div className="p-4 border-b">
//         <div className="flex items-center gap-2 font-semibold">
//           <Building2 className="h-5 w-5" />
//           <span>Business</span>
//         </div>
//       </div>

//       <div className="p-4 space-y-4">
//         <Link href="#" className="block hover:text-emerald-600">
//           Business Energy
//         </Link>
//         <Link href="#" className="block hover:text-emerald-600">
//           Guides & Tools
//         </Link>
//         <Button variant="secondary" className="w-full justify-between">
//           Get a quote <ArrowRight className="h-4 w-4 ml-2" />
//         </Button>
//       </div>

//       <div className="p-4 space-y-4 border-t">
//         <Link href="#" className="block hover:text-emerald-600">
//           Business Solar
//         </Link>
//         <Link href="#" className="block hover:text-emerald-600">
//           Sell Your Energy
//         </Link>
//       </div>

//       <div className="p-4 border-t">
//         <div className="flex items-center gap-2 font-semibold">
//           <Home className="h-5 w-5" />
//           <span>Home</span>
//         </div>
//       </div>

//       <div className="p-4 space-y-4">
//         <Link href="#" className="block hover:text-emerald-600">
//           Home Energy
//         </Link>
//         <Link href="#" className="block hover:text-emerald-600">
//           Home Solar
//         </Link>
//       </div>
//     </div>
//   );
// }
