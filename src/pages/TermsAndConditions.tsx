import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              TERMS AND
              <br />
              <span className="font-bold text-brand-teal">CONDITIONS</span>
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-teal mb-4">
                DISCLAIMER
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information contained in this website are for general
                information purposes only. The information is provided by RAID
                STUDIO and while we endeavor to keep the information up to date
                and correct, we make no representations or warranties of any
                kind, express or implied, about the completeness, accuracy,
                reliability, suitability or availability with respect to the
                website or the information, products, services, or related
                graphics contained on the website for any purpose. Any reliance
                you place on such information is therefore strictly at your own
                risk.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event will we be liable for any loss or damage including
                without limitation, indirect or consequential loss or damage, or
                any loss or damage whatsoever arising from loss of data or
                profits arising out of, or in connection with, the use of this
                website.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Through this website you are able to link to other websites
                which are not under the control of RAID STUDIO. We have no
                control over the nature, content, and availability of those
                sites. The inclusion of any links does not necessarily imply a
                recommendation or endorse the views expressed within them.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every effort is made to keep the website up and running
                smoothly. However, RAID STUDIO takes no responsibility for, and
                will not be liable for, the website being temporarily
                unavailable due to technical issues beyond our control.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This privacy policy applies to all Users who access the Platform
                and are therefore required to read and understand the Policy
                before submitting any Personal Information (defined
                hereinafter).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This privacy policy governs your use of www.raidstudio.in
                ('Website') and the other associated applications, products.
                Website and services managed by the Company. By submitting
                Personal Information, you are consenting to the use and
                processing of such information in accordance with this Policy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Third-party Website may place their own cookies or other files
                on the User's computer, collect data or solicit personal
                information from the User, for which RAID STUDIO is not
                responsible or liable. Accordingly, RAID STUDIO does not make
                any representations concerning the privacy practices or policies
                of such third parties or terms of use of such Website, nor does
                RAID STUDIO guarantee the accuracy, integrity, or quality of the
                information, data, text, software, sound, photographs, graphics,
                videos, messages or other materials available on such Website.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The inclusion or exclusion does not imply any endorsement by
                RAID STUDIO of the Website, the Website's provider, or the
                information on the Website. RAID STUDIO encourages the User to
                read the privacy policies of each such Website and the User
                understands that it is solely such a third party who is
                responsible to the User in this regard. RAID STUDIO has taken
                reasonable precautions as per applicable Indian law and
                implemented industry standards to treat Personal Information as
                confidential and to protect it from unauthorized access,
                improper use or disclosure, modification, and unlawful
                destruction or accidental loss of the Personal Information.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will not use or share your information with anyone except as
                described in this Privacy Policy. Each time you use our Service
                you are accepting the practices described in this Privacy Policy
                at that time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-teal mb-4">
                REFUND POLICY
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you buy our products/services, your purchase is not
                entitled to any refund. If you buy any online batch/service, it
                is non-refundable. If you purchase any batch by mistake, you can
                request to change it to another batch of the same amount within
                10 days of the purchase. We recommend you first check the
                complete system and then decide to make a payment. Users are
                advised to read the subscription terms and conditions carefully
                before subscribing to any of the subscription plans, Once you
                subscribe and make the required payment, it shall be final and
                there cannot be any changes or modifications to the same, and
                neither will there be any refund.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you do not agree with the Terms and conditions or the Privacy
                Policy, please do not use the Website or avail of the Services
                or products. Any access to our Services/products through
                registrations/subscriptions is nontransferable.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-teal mb-4">
                  Proprietary Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All information, content, material, trademarks, services
                  marks, trade names, and trade secrets including but not
                  limited to the software, text, images, graphics, video,
                  script, and audio, contained in the Application, Website,
                  Services, and products are the proprietary property of the
                  Company ("Proprietary Information").
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  No Proprietary Information may be copied, downloaded,
                  reproduced, modified, republished, uploaded, posted,
                  transmitted, or distributed in any way without obtaining prior
                  written permission from the Company and nothing on this
                  Application or Website or Services shall be or products deemed
                  to confer a license of or any other right, interest or title
                  to or in any of the intellectual property rights belonging to
                  the Company, to the User.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may own the medium on which the information, content, or
                  materials resides, but the Company shall at all times retain
                  full and complete title to the information, content, or
                  materials and all intellectual property rights inserted by the
                  Company on such medium. Certain contents on the Website may
                  belong to third parties. Such contents have been reproduced
                  after taking prior consent from said party and all rights
                  relating to such content will remain with a such third party.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Further, you recognize and acknowledge that the ownership of
                  all trademarks, copyright, logos, service marks, and other
                  intellectual property owned by any third party shall continue
                  to vest with such party and You are not permitted to use the
                  same without the consent of the respective third party.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-teal mb-4">
                LIMITATION OF LIABILITY
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The user acknowledges that the company is not the creator of the
                content on the Website or YouTube Channel and shall no beheld
                liable for any repercussions arising from the content.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under no circumstances shall the Company, its officers,
                directors, employees, partners, or agents be liable to You or
                any third party for any special, incidental, indirect,
                consequential, or punitive damages whatsoever, including those
                resulting from loss of use, data, or profits, or any other claim
                arising out of or in connection with Your use of, or access to,
                the Website/YouTube Channel.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the event of Your breach of these Terms, you agree that the
                Company will suffer irreparable harm and may not have an
                adequate remedy in monetary damages. Therefore, the Company
                shall be entitled in such event to seek an injunction against
                such breach from any court of competent jurisdiction.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Company's right to obtain such relief shall not limit its
                right to seek other remedies. Any violation by You of the terms
                of this Clause may result in immediate suspension or termination
                of Your Accounts in addition to any legal remedy available to
                the Company. In such instances, the Company may also disclose
                Your Account Information if required by any Governmental or
                legal authority. You understand that the violation of these
                Terms could also result in civil or criminal liability under
                applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-teal mb-4">
                OWNERSHIP OF RIGHTS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All rights, including copyright, in this Website/YouTube Channel
                and Social media platform, are owned by or licensed to us. Any
                use of this Website/YouTube Channel and Social media platform or
                its contents, including copying or storing it or them in whole
                or part, other than for your own personal, non-commercial use is
                prohibited without our permission.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are prohibited from modifying, copying, distributing,
                transmitting, displaying, printing, publishing, selling,
                licensing. downloading, sharing VPN links creating derivative
                works, or using any content available on or through our Website
                YouTube. Channel and Social media platform for commercial or
                public purposes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not modify, distribute or re-post something on this
                Website YouTube Channel Social media platform for any purpose.
                You acknowledge that you do not acquire any ownership rights by
                downloading copyrighted material. Trademarks that are located
                within or on our Website YouTube Channel and Social media
                platform or a Website YouTube Channel and Social media platform
                otherwise owned or operated in conjunction with RAID STUDIO
                shall not be deemed to be in the public domain but rather the
                exclusive property of RAID STUDIO unless such site is under
                license from the trademark owner thereof in which case such
                license is for the exclusive benefit and use of RAID STUDIO
                unless otherwise stated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-teal mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions,
                please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> connect@raidstudio.in
                  <br />
                  <strong>Office:</strong> Delhi, India
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
