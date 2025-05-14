import type React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Zap,
  // Building2,
  // Home,
  // ArrowRight,
  Wifi,
} from "lucide-react";

// import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a1128] text-white">
      <header className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <div className="bg-emerald-500 p-2 rounded-full">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">SwitchPal</span> */}
            <Image
              src="/checkbillslogo.svg"
              alt="SwitchPal"
              width={200}
              height={200}
            />
          </div>

          <div className="hidden md:flex items-center gap-6">
            <NavItem title="Home" />
            <NavItem title="Energy" />
            <NavItem title="Broadband" />
            <NavItem title="Mobile Phones" />
            <NavItem title="Insurance" />
            <NavItem title="Deals" />
          </div>

          <MobileNav />
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Check, Compare and Switch!
            </h1>
            <p className="text-2xl md:text-2xl font-medium text-emerald-400">
              Benefit from exclusive discounts and special offers tailored to
              maximise savings.
            </p>
            {/* <p className="text-lg text-gray-300 max-w-lg">
              We compare multiple suppliers across the market, ensuring the best
              value for your business.
            </p> */}

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

          <div className="hidden md:block relative">
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Business owner"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      {/* <BusinessDropdown /> */}
      <Footer />
    </div>
  );
}

function NavItem({ title }: { title: string }) {
  return (
    <div className="relative group">
      <div className="flex items-center gap-1 cursor-pointer hover:text-emerald-400 transition-colors py-2">
        <span>{title}</span>
        {title === "Home" ? null : <ChevronDown className="h-4 w-4" />}
      </div>
      <div className="absolute -right-4 top-full w-48 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
        <div className="pt-2">
          <div className="bg-[#0f1c3f] text-white border border-gray-800 rounded-md shadow-lg overflow-hidden">
            <div className="py-1">
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-[#182952] cursor-pointer"
              >
                For Business
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-[#182952] cursor-pointer"
              >
                For Home
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-[#182952] cursor-pointer"
              >
                Compare Deals
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-[#182952] cursor-pointer"
              >
                Guides & Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
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
    <div className="bg-[#0f1c3f] p-6 rounded-lg border border-gray-800 hover:border-emerald-500 transition-colors">
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
