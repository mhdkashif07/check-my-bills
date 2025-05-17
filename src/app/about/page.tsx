import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#012348]">
            About Us
          </h1>
          <p className="text-lg text-gray-800 mb-6 italic">
            We are dedicated to helping you save time and money. Our mission is
            to simplify your search for the best deals by handling all the
            research for you. Say goodbye to confusing offers—our streamlined
            process lets you focus on what truly matters while maximizing your
            savings.
          </p>
          <h2 className="font-semibold text-[#012348] mb-2">
            Independent and Unbiased Comparison
          </h2>
          <p className="mb-6 text-gray-700">
            As a fully independent platform, we work solely for your benefit.
            Unlike other comparison sites, we are not affiliated with any
            specific providers. Our commitment is to deliver unbiased results,
            ensuring you secure the best possible deals from any supplier. Your
            financial interests are always our top priority.
          </p>
          <h2 className="font-semibold text-[#012348] mb-2">What We Offer</h2>
          <p className="text-gray-700">
            CheckMyBills.co.uk is free, quick, and easy to use. In just a few
            minutes, you can uncover potential savings that could amount to
            hundreds of pounds each year. We empower you to take control of your
            finances and maximise your savings effortlessly.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/about-us.webp"
            alt="Professional business team"
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
