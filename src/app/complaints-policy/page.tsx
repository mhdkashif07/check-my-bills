"use client";

import { useState } from "react";

export default function ComplaintsPolicy() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#6C757D] py-[3.3rem]">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl text-center font-bold">
            COMPLAINTS POLICY
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-[#212529] text-white py-11">
        <div className="mx-auto px-4 w-full sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl">
          <section className="mb-8">
            <p className="mb-4">
              At checkmybills.co.uk, we value our customers and aim to resolve
              any concerns as quickly and effectively as possible. If you wish
              to raise a complaint, please follow the steps below:
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl mb-4">Step 1</h2>
            <p className="mb-4">
              Contact your account manager through your usual communication
              method to explain the issue. Our team will work to resolve your
              concern promptly by investigating the root cause with our
              first-line support team.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl mb-4">Step 2</h2>
            <p className="mb-4">
              If your account manager is unable to resolve the issue via email
              within 2 working days, please email info@checkmybills.co.uk with
              your company name and meter number in the subject line. Your
              complaint will be escalated to another member of our customer
              support team, ensuring a fresh perspective and approach. We will
              log your complaint, provide you with a complaint reference number,
              and confirm the date of receipt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl mb-4">Step 3</h2>
            <p className="mb-4">
              If your Step 2 complaint remains unresolved within 2 working days
              or if we're unable to provide a satisfactory way forward within an
              agreed timeframe, we will escalate the matter to one of our
              directors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl mb-4">Step 4</h2>
            <p className="mb-4">
              If we identify that another party may be partially or solely
              responsible for the issue, we will log your complaint in our
              Complaint Log and refer you to the appropriate firm within 5
              business days, providing you with their contact details to ensure
              the issue is directed to the right place.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl mb-4">Step 5</h2>
            <p className="mb-4">
              After 10 working days of raising your Step 3 complaint, if we
              still haven't been able to agree on a resolution, we will reassess
              the case with fresh eyes and work to propose alternative
              solutions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl mb-4">Step 6</h2>
            <p className="mb-4">
              If, after 8 weeks from when your complaint was first raised, we're
              unable to reach a resolution that satisfies both parties, we will
              declare the case to be in deadlock. At this stage, you can access
              a free and impartial dispute resolution service provided by the
              Energy Ombudsman.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl mb-4">Contacting the Energy Ombudsman</h2>
            <p className="mb-4">
              You can contact the Energy Ombudsman via the following channels:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Website: www.energyombudsman.org</li>
              <li>Email: enquiry@energyombudsman.org</li>
              <li>Post: Energy Ombudsman, P.O. Box 966, Warrington, WA4 9DF</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl mb-4">Complaint Reference Format</h2>
            <p className="mb-4">
              When contacting us about a complaint, please use the following
              format for the subject line:
            </p>
            <p className="mb-4 font-semibold">
              Subject: Complaint Reference Number: [XXXXX]
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our complaints procedure, please
              contact us at info@checkmybills.co.uk
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
