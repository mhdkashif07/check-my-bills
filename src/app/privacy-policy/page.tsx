"use client";

import { useState } from "react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className=" flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#6C757D] py-[3.3rem]">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl text-center font-bold">PRIVACY POLICY</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-[#212529] text-white py-11">
        <div className="  mx-auto px-4 w-full sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-5xl">
          <section className="mb-8">
            <p className="mb-13 text-base">
              Please read our privacy policy carefully as it aims to elaborate
              our policies and practices regarding how we collect, process, use,
              and disclose the personal information that you share with us while
              visiting or using our services on the www.checkmybills.co.uk
              website. References to &quot;we&quot;, &quot;our&quot;,
              &quot;us&quot; or &quot;checkmybills&quot; and under what
              circumstances we share it. By registering, purchasing products, or
              ordering services on this website, you expressly declare and
              consent that you have read, understood, and accepted this privacy
              policy.
            </p>

            <p className="mb-13">
              This website is not intended for children under the age of 18 and
              we do not intentionally gather data relating to children. We use
              your data to facilitate our customers and improve our services.
              This privacy policy is not applicable to the information that you
              deliberately share in a public forum. We hold the rights, at our
              sole discretion, to change, update, or amend our privacy policy at
              any time. The revised privacy policy shall be intimated to you via
              email or through publication on our website www.checkmybills.co.uk
              (the &quot;site&quot;). Your continued use of this website after
              changes are implemented shall be deemed to be acceptance of those
              changes, so you are requested to check the policy regularly for
              updates.
            </p>

            <p className="mb-13">
              This site may also contain links to third-party websites that are
              not supervised or managed by us. This privacy policy does not
              apply to such third-party websites and checkmybills.co.uk is not
              responsible for the content of such third-party websites. We
              advise you to read their privacy policy first before using.
            </p>

            <p className="mb-13">
              We admit that you are conscious of the data you share with us. We
              are committed to safeguard your personal information through our
              compliance with this policy. We respect our valued customers&apos;
              privacy and are aware of our responsibilities and duties to
              retain, manage, and protect your data as per the cyber law&apos;s
              requirements applicable in the United Kingdom.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl  mb-2">SALIENT FEATURES</h2>
            <ul className="space-y-2 text-[16px]">
              <li>• About This Privacy Policy </li>
              <li className="">
                • How We Collect Your Information
                <ul className=" ml-6 space-y-2 pt-2">
                  <li>• Cookies Policy</li>
                  <li>• How We Use Your Information</li>
                  <li>• Disclosure or Sharing of Your Information</li>
                </ul>
              </li>
              <li>• Data Retention</li>
              <li>• Privacy Policy under GDPR</li>
              <li>• Minor (Under 18 Years of Age)</li>
              <li>• Linked Websites</li>
              <li>• Data Security</li>
              <li>• Changes to Our Privacy Policy</li>
              <li>• Opt Out or Deletion</li>
              <li>• Contact Details</li>
            </ul>
          </section>

          {activeSection === "about" || !activeSection ? (
            <section className="mb-11">
              <h2 className="text-xl d mb-2">ABOUT THIS PRIVACY POLICY</h2>
              <p className="mb-4">
                This Privacy Policy set out the rules of collecting, preserving,
                using, processing, maintaining, protecting, and disclosing the
                information that we gather from you or you provide us when you
                interact, visit, or use our website. We collect
              </p>
            </section>
          ) : null}

          <section className="mb-8">
            <h2 className="text-xl mb-2">HOW WE COLLECT INFORMATION</h2>
            <p className="mb-13">
              We gather, receive and retain user's personal data by using
              various methods that are necessary for certifying information
              related to visitor/user's identification and to make it possible
              to make payments, send receipts and create internal reports. We
              may collect your data through:
            </p>

            <p className="mb-2" style={{ lineHeight: "1.8rem" }}>
              • <strong>Direct interactions</strong> the information you provide
              us by using, visiting or creating an account on our site such as
              your full name, age, address, email, country (state), contact
              information, etc.
            </p>

            <p className="mb-2" style={{ lineHeight: "1.8rem" }}>
              • <strong>Through Automated technologies</strong> the information
              we may collect automatically through automated technologies such
              as device IP addresses, location, operating system information,
              cookies, browser information, Internet service provider (ISP), web
              beacons, tags and the files viewed on our site (e.g., HTML pages,
              graphics, etc.)
            </p>

            <p className="mb-2" style={{ lineHeight: "1.8rem" }}>
              • <strong>Through Third-Party</strong> information received from
              third-party service providers such as Google analytics or
              advertising agencies, etc.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl mb-2">INFORMATION WE COLLECT DIRECTLY</h2>
            <p className="mb-10">
              The type of personal data we may collect directly when you
              register on our website by creating an account that includes:
            </p>

            <p className="mb-2">
              • Personal Information: Full Name (including first name, maiden
              name, last name) and Date of birth
            </p>
            <p className="mb-2">
              • Contact Information: Email address, country, postal address,
              phone number
            </p>
            <p className="mb-2">
              • Financial Information: Payment details, such as credit/debit
              card and bank account information
            </p>
            <p className="mb-7">
              • Feedback, Comments, surveys, and other responses
            </p>

            <p className="mb-10">
              Please Note that we do not collect any Special Categories of Data
              about you such as information about your race or ethnicity, sexual
              orientation, political opinions, trade union membership, religious
              or philosophical beliefs, sex life, marital status, information
              about your health, and genetic and biometric data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl mb-1">
              INFORMATION WE COLLECT INDIRECTLY
              <br />
              THROUGH AUTOMATED DATA COLLECTION TECHNOLOGIES
            </h2>
            <p className="mb-15">
              We utilize automated technologies alongside advanced tools like
              location identifiers, cookies, and device identifiers that may
              gather technical data automatically when you engage with our
              website. This includes:
            </p>

            <p className="mb-1">a) Patterns of browsing behavior</p>
            <p className="mb-1">b) Internet service provider (ISP)</p>
            <p className="mb-1">c) IMEI Number and MAC address</p>
            <p className="mb-1">
              d) Files accessed on our site (e.g., HTML pages, graphics)
            </p>
            <p className="mb-1">e) Browser details</p>
            <p className="mb-1">
              f) Traffic data, server logs, and other communication information
            </p>
            <p className="mb-1">g) Time and location details</p>
            <p className="mb-1">h) Device specifications</p>
            <p className="mb-1">i) Software and hardware information</p>
            <p className="mb-1">j) Internet protocol (IP) address</p>
            <p className="mb-1">k) Login details</p>
            <p className="mb-1">l) Equipment used</p>
            <p className="mb-1">m) Operating system specifics</p>

            <p className="mt-4 mb-13">
              For further details on our policies or if you have any questions,
              please reach out to us at info@checkmybills.co.uk.
            </p>
          </section>

          <section className="mb-7">
            <h2 className="text-xl mb-2">CUSTOMER SERVICE</h2>
            <p className="mb-10">
              If you contact us directly, such as to request information or for
              customer support, we may receive additional information about you,
              such as your contact information and the contents of your
              communication. We may also receive information from you when you
              complete a form on our Services.
            </p>
            <p>
              The information we collect through automated technologies and
              other advanced technologies do not include your personal
              information. We collect this information to give the user the best
              possible services and experience by improving our services.
            </p>
            <h2 className="text-xl mb-2 mt-10">HOW WE USE YOUR INFORMATION</h2>
            <p className="mb-13">
              We utilize the information we collect or gather from you or that
              you provide to us based on the context of your interactions with
              our service. This information may be used for various purposes,
              including:
            </p>

            <p className="mb-2">a) Account activation and management</p>
            <p className="mb-2">
              b) Improving buying and delivery processes and enhancing website
              usability
            </p>
            <p className="mb-2">c) Meeting legal and regulatory requirements</p>
            <p className="mb-2">
              d) Processing and completing transactions related to your
              purchases
            </p>
            <p className="mb-2">
              e) Notifying you of updates to our privacy policy terms
            </p>
            <p className="mb-2">
              f) Conducting marketing, advertising, and promotional activities
            </p>
            <p className="mb-2">
              g) Confirming your identity during financial transactions
            </p>
            <p className="mb-2">h) Providing customer support and assistance</p>
            <p className="mb-2">
              i) Maintaining, securing, and updating our service
            </p>
            <p className="mb-2">
              j) Addressing your comments, questions, feedback, and concerns
            </p>
            <p className="mb-2">
              k) Offering recommendations and updates regarding our products and
              services
            </p>
            <p className="mb-2">
              l) Assisting in surveys and promotional events
            </p>
            <p className="mb-2">
              m) Supporting business growth, service improvement, and
              development
            </p>
            <p className="mb-2">
              n) Extracting insights, identifying trends, and analyzing data
            </p>
            <p className="mb-2">
              o) Protecting the site and its users from illegal activities and
              fraud
            </p>
            <p className="mb-2">
              p) Identifying and resolving site-related issues to prevent
              technical glitches
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl mb-2">
              DISCLOSURE OR SHARING OF YOUR INFORMATION
            </h2>
            <p className="mb-13 ">
              We may, in good faith, share, transfer, or disclose your data with
              third parties under the following circumstances:
            </p>

            <p className="mb-2 " style={{ lineHeight: "1.9rem" }}>
              a) Your information may be shared with legal, financial, or other
              consultants to comply with legal obligations, laws, regulations,
              court directives, or legitimate requests from law enforcement or
              public agencies.
            </p>
            <p className="mb-2" style={{ lineHeight: "1.9rem" }}>
              b) We may use Google Analytics to monitor website activity,
              understand user patterns or behaviors, and improve services by
              sharing data with them.
            </p>
            <p className="mb-2" style={{ lineHeight: "1.9rem" }}>
              c) Data might be disclosed for identifying, preventing, or
              resolving security breaches, fraud, or technical issues.
            </p>
            <p className="mb-2" style={{ lineHeight: "1.9rem" }}>
              d) We may share data with affiliate entities, subsidiaries, and
              third-party service providers to enhance the services we offer,
              including support functions, website services, marketing services,
              customer support, ensuring Personal Data Protection according to
              our policy.
            </p>
            <p className="mb-2" style={{ lineHeight: "1.9rem" }}>
              e) For marketing and promotional purposes, data may be shared with
              marketing agencies or platforms like Google, Facebook, Twitter,
              and other social media.
            </p>
            <p className="mb-2" style={{ lineHeight: "1.9rem" }}>
              f) Payment information might be shared with payment service
              providers to facilitate transactions for sellers.
            </p>
            <p className="mb-2" style={{ lineHeight: "1.9rem" }}>
              g) Data may be disclosed to prevent potential malpractices related
              to our Service.
            </p>
            <p className="mb-6" style={{ lineHeight: "1.9rem" }}>
              h) In the event of a business sale, merger, or partnership, your
              personal information may be transferred or shared.
            </p>

            <p className="mb-11">
              We do not share your bank account information such as credit card
              and debit card details with unauthorized sources or entities. When
              disclosing data to third parties, we ensure they keep it safe and
              secure from unauthorized access, collection, usage, and
              disclosure, retaining data only for the necessary duration
              outlined in this privacy policy.
            </p>

            <p className="mt-4 mb-13">
              If you have any questions about the security of your personal
              information or if you would like us to have your personal
              information removed from our database, please contact us at
              info@checkmybills.co.uk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl mb-2">DATA RETENTION</h2>
            <p className="mb-13">
              You agree that we have the right to hold onto your data for
              extended durations to enhance our service security or its
              functionality. We will maintain and utilize your information as
              long as required:
            </p>

            <p className="mb-1">
              a) to meet our legal responsibilities, such as adherence to laws,
              regulations, tax, accounting, or other relevant statutes.
            </p>
            <p className="mb-1">b) to address potential conflicts</p>
            <p className="mb-1">
              c) to effectively oversee and execute our operations
            </p>
            <p className="mb-1">
              d) to uphold our legal contracts and guidelines
            </p>
            <p className="mb-1">e) in-depth internal evaluation</p>

            <p className="mt-8">
              We may, at any time, completely remove or delete your personal
              data if we think that such retention no longer serves the purposes
              for which it was collected.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl mb-2 mt-13">
              MINOR (UNDER 18 YEARS OF AGE)
            </h2>
            <p className="mb-4">
              We do not provide services to the minor. You must be at least 18
              years of age or older to access our site and usage by those under
              18 is strictly forbidden. We do not intentionally collect, store,
              or share information from individuals under 18. If we discover
              data from a minor, we reserve the right to delete it.
            </p>
          </section>

          <section className="">
            <h2 className="text-xl mb-2">PRIVACY POLICY UNDER GDPR</h2>
            <p className="mb-12 leading-[33px]">
              As a resident of the United Kingdom, you acquire certain rights
              and privileges under the GDPR, including:
              <br />
              <br />
              a) You may ask for your personal information we store as provided
              under Article 15 GDPR.
              <br />
              b) You may request a list of to whom we share your personal data.
              <br />
              c) You may prevent us from selling or sharing your personal
              information with any other party.
              <br />
              d) You reserve the right to modify or delete any material or
              content if find that the material is violating your rights as
              described under Article 17 GDPR.
              <br />
              e) You have the right to revoke your consent granted to
              Checkmybills.co.uk to use your personal data as described under
              Article 7 GDPR.
              <br />
              <br />
              We are under obligation to process your request within 7 working
              days.
            </p>
          </section>

          <section className="mt-0">
            <h2 className="text-xl mb-2">LINKED WEBSITES</h2>
            <p className="mb-10">
              This website might include links to third-party websites
              ("Third-Party Websites"). We don't operate or control these sites
              and are not responsible for any loss, risk, or damage stemming
              from their content or actions. We don't endorse, sponsor,
              guarantee, or vouch for any Third-Party Websites. As such, we
              can't be held accountable for how these sites handle your personal
              data. We highly recommend checking the Privacy Policy of any site
              you visit.
            </p>
          </section>

          <section className="mb-13">
            <h2 className="text-xl mb-2">DATA SECURITY</h2>
            <p className="mb-2">
              It's important to recognize that transmitting data over the
              Internet or storing it electronically can never be entirely
              foolproof. While we control physical access, security, we are
              committed to enhancing online protection by reviewing our security
              measures regularly. We implement appropriate security measures to
              prevent unauthorized access, disclosure, alteration, distribution,
              accidental loss, destruction, or harm to your data. Our servers
              are shielded by firewalls, and on occasion, we may request
              identity verification before providing access to your personal
              information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl mb-2">CHANGES TO OUR PRIVACY POLICY</h2>
            <p className="mb-4">
              We retain the authority to make changes, modifications, or updates
              to this privacy policy periodically, without prior notification,
              to comply with prevailing standards. If there are significant
              alterations, we'll inform you through our email service or by
              displaying the updated privacy policy on our website. When
              updating the "Last Modified Date" at the beginning of this policy.
              Continuing to use our services after the publication of the
              updated privacy policy signifies your acceptance of the changes.
              We recommend checking our website or the formal about page for the
              most recent version of our privacy policy, which will be published
              on our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl mb-2">OPT-OUT, DELETION</h2>
            <p className="mb-12">
              You can stop the collection of your information by uninstalling
              the Services and refraining from visiting our website. You may
              utilize the standard uninstall procedures available in your web
              browser. For added privacy control, we offer the option to opt-out
              of certain data collection through your account settings pages.
              However, opting out may limit or block certain features and
              functionalities that would benefit the user with our normal site
              patterns.
            </p>

            <p className="mb-13">
              To opt-out of newsletters or marketing emails, follow the
              unsubscribe instructions in the email communications or access
              email preferences in your account settings, or contact us
              directly.
            </p>

            <p className="mb-12">
              Please note that we may decline deletion requests that are overly
              burdensome or repetitive, or if legal obligations, ongoing
              disputes, or the need to enforce agreements or protect rights,
              property, safety, or security require retention of the
              information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl mb-2">CONTACT US</h2>
            <p className="mb-4">
              If you have any questions, comments, complaints or queries
              regarding the privacy policy or the ways and purposes for which we
              collect and use your information as described then please do not
              hesitate to contact us via email at info@checkmybills.co.uk.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
