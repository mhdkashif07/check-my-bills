import { Star } from "lucide-react";

function TestimonialCard({ name, location, quote }) {
  return (
    <div className="bg-white shadow-md  overflow-hidden">
      <div className="bg-[#fe2d00] pl-8 py-2 rounded-l-full ml-4">
        <h3 className="text-2xl  text-white">{name}</h3>
        <p className="text-gray-300 text-sm mt-2">{location}</p>
      </div>
      <div className="p-4">
        <p className="text-gray-900 text-[14px]  min-h-[80px]">"{quote}"</p>
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="fill-[#fe2d00] text-[#fe2d00] w-5 h-5 my-2" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TrustPilot() {
  const testimonials = [
    {
      name: "Alisha",
      location: "LONDON",
      quote:
        "It was quick and simple! I got exactly what I needed, before my day even started. Thank you",
    },
    {
      name: "Debra",
      location: "TELFORD",
      quote: "Amazing deal! Found insurance at good price with the same cover.",
    },
    {
      name: "Paul",
      location: "CHESTER",
      quote:
        "Found a great mobile deal! The site is super easy to use, all in one place.",
    },
  ];

  return (
    <section className="py-20 px-18 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 mt-4">
        Our Customer Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            location={testimonial.location}
            quote={testimonial.quote}
          />
        ))}
      </div>
    </section>
  );
}
