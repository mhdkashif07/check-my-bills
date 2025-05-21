import { ListChecks, Info, Star, Bell } from "lucide-react";
import Image from "next/image";


const features = [
  {
    icon: ListChecks,
    title: "Comprehensive Comparison",
    desc: "Independent and impartial comparison service. Explore a wide array of options from top providers on one centralised platform.",
    color: "text-[#fe2d00]",
  },
  {
    icon: Info,
    title: "Detailed Insights",
    desc: "Access detailed specifications, speeds, coverage areas, pricing, and customer reviews for informed decision-making.",
    color: "text-[#fe2d00]",
  },
  {
    icon: Star,
    title: "Focus on Excellence",
    desc: "Select providers renowned for their commitment to outstanding customer support and reliability.",
    color: "text-[#fe2d00]",
  },
  {
    icon: Bell,
    title: "Stay Informed",
    desc: "Stay updated on the latest deals, promotions, and industry trends to secure the best offers available.",
    color: "text-[#fe2d00]",
  },
];

export default function ComparisonFeatures() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <Image
            src="/compare-info.jpg"
            alt="Customer Service"
            width={600}
            height={600}
            className="rounded-xl shadow-lg object-cover"
          />  
        </div>
        <div className="w-full md:w-1/2 grid gap-6">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="flex items-start gap-4">
              <Icon className={`w-[81px] h-[81px] ${color} `} />
              <div className="mt-4">
                <h3 className="font-semibold text-lg text-[#012348] mb-1 ">
                  {title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
