import Link from "next/link";
import { Building2, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BusinessDropdown() {
  return (
    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[350px] bg-white text-gray-800 rounded-lg shadow-xl z-50 hidden group-hover:block">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2 font-semibold">
          <Building2 className="h-5 w-5" />
          <span>Business</span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Link href="#" className="block hover:text-emerald-600">
          Business Energy
        </Link>
        <Link href="#" className="block hover:text-emerald-600">
          Guides & Tools
        </Link>
        <Button variant="secondary" className="w-full justify-between">
          Get a quote <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      <div className="p-4 space-y-4 border-t">
        <Link href="#" className="block hover:text-emerald-600">
          Business Solar
        </Link>
        <Link href="#" className="block hover:text-emerald-600">
          Sell Your Energy
        </Link>
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center gap-2 font-semibold">
          <Home className="h-5 w-5" />
          <span>Home</span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <Link href="#" className="block hover:text-emerald-600">
          Home Energy
        </Link>
        <Link href="#" className="block hover:text-emerald-600">
          Home Solar
        </Link>
      </div>
    </div>
  );
}
