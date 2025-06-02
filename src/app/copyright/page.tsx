import React from "react";

const Copyright = () => {
  return (
    <section className="flex-grow bg-[#212529] text-white">
      <div className="bg-[#6C757D] py-12">
        <h2 className="text-4xl md:text-[2.4rem] sm:text-2xl font-bold text-center uppercase">
          Copyrights and Intellectual Property Rights
        </h2>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8  text-base leading-relaxed">
        <p>
          You agree and admit the trade marks, copyright, database rights, and
          other intellectual property rights in the site and the information,
          content, material, data, including text, photographs, images,
          illustrations, audio clips, and video clips that we display on the
          site belong to us or our affiliates, sponsors and licensors and
          various third party service providers and distributers (collectively
          the <strong className="text-white">“providers”</strong>) and protected
          by copyrights, trademarks, service marks, and/or other intellectual
          property rights. In addition, the trademarks, logos, service marks,
          copyrights or other third-party intellectual property displayed or
          referred to on this website (collectively{" "}
          <strong className="text-white">“the trademarks”</strong>) are sole
          property of the{" "}
          <strong className="text-white">www.checkmybills.co.uk</strong> and
          relationship does not constitute an employment agreement. You must not
          use such information or copyright material unless you have written
          permission from us to do so.
        </p>

        <p className="my-11">
          You shall maintain ownership rights over any content that you submit
          or make publicly available on or through the site (referred to as{" "}
          <strong className="text-white">&quot;user content&quot;</strong>). By
          submitting user content, you grant us a perpetual, irrevocable,
          transferable, worldwide, royalty-free, and unrestricted license to
          utilize such user content in any manner and for any purpose.
        </p>

        <p className="mb-11">
          You are hereby granted limited permission to temporarily print, copy,
          download, or store excerpts of information, content, material, or data
          displayed on the site solely for your personal, non-commercial use,
          subject to compliance with the terms and conditions of this site.
        </p>

        <p className="mb-12">
          If you have any questions or queries regarding the content uploaded on
          this website or to receive further information regarding the use of
          the site, please contact us via email at info@checkmybills.co.uk .
        </p>
      </div>
    </section>
  );
};

export default Copyright;
