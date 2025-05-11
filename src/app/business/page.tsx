import Link from "next/link";
import { Zap, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-[#0a1128] text-white">
      <header className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 p-2 rounded-full">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <Link href="/" className="text-xl font-bold">
              SwitchPal
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <BusinessNavItem title="Energy" />
            <BusinessNavItem title="Solar" />
            <BusinessNavItem title="Broadband" />
            <BusinessNavItem title="Water" />
            <BusinessNavItem title="Waste" />
            <BusinessNavItem title="Card Payments" />
            <BusinessNavItem title="Insurance" />
          </div>

          <MobileNav />
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="h-8 w-8 text-emerald-500" />
            <h1 className="text-3xl font-bold">Business Services</h1>
          </div>

          <div className="bg-[#0f1c3f] rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Get a Business Quote
            </h2>
            <p className="text-gray-300 mb-6">
              Compare the best business energy, broadband, and other utility
              deals to save your business money.
            </p>
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              Start Comparing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <BusinessServiceCard
              title="Energy"
              description="Compare business electricity and gas prices"
            />
            <BusinessServiceCard
              title="Broadband"
              description="Find the best business broadband deals"
            />
            <BusinessServiceCard
              title="Water"
              description="Compare business water suppliers"
            />
            <BusinessServiceCard
              title="Waste"
              description="Find waste management solutions"
            />
            <BusinessServiceCard
              title="Card Payments"
              description="Compare card payment providers"
            />
            <BusinessServiceCard
              title="Insurance"
              description="Get business insurance quotes"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function BusinessNavItem({ title }: { title: string }) {
  return (
    <div className="relative group">
      <Link
        href={`/business/${title.toLowerCase()}`}
        className="flex items-center gap-1 cursor-pointer hover:text-emerald-400 transition-colors py-2"
      >
        <span>{title}</span>
      </Link>
    </div>
  );
}

function BusinessServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#182952] p-6 rounded-lg border border-gray-800 hover:border-emerald-500 transition-colors">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <Link
        href={`/business/${title.toLowerCase()}`}
        className="text-emerald-400 hover:text-emerald-300 flex items-center text-sm font-medium"
      >
        Learn more <ArrowRight className="ml-1 h-3 w-3" />
      </Link>
    </div>
  );
}
