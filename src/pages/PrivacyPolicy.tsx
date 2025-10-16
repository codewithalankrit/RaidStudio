import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PrivacyPolicy = () => {
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
              PRIVACY
              <br />
              <span className="font-bold text-brand-teal">POLICY</span>
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-teal mb-4">
                PRIVACY POLICY
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Privacy protection is a very important community principle and
                user information is one of our most important assets. We store
                and process personal information on computers in India,
                protected by physical and technological security devices.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use third parties to verify our privacy principles and advise
                you not to use the website if you object to your information
                being transferred or used in this way.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We assure you that personal information collected will not be
                rented, traded, transferred, or shared for marketing purposes
                without your consent, but we reserve the right to communicate
                information for legally-compliant disclosure requests.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This policy applies to all users of the platform and RAID STUDIO
                takes reasonable precautions to protect personal information.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can access the platform as a guest without providing
                personal information, but RAID STUDIO does not validate
                guest-provided information unless required by law.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Creating an account requires providing certain personal
                information, with promotional offers being optional. RAID STUDIO
                may request optional information for personalization and may
                keep records of calls/emails for service rendering.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Information is mostly deleted from servers upon account
                deletion, but may be retained for legal or business compliance
                purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-teal mb-4">
                CONSULTING
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use third parties for services like payment processing, site
                activity monitoring, surveys, database maintenance, email
                administration, content administration, and providing
                aggregate/comparative website performance information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-teal mb-4">
                USER CUSTOMS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can customize how your personal information is used for
                communication, marketing, advertising, and account sign-in
                preferences.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can unsubscribe from marketing communications via email link
                or by changing communication preferences. You can block
                promotional communication via email and we assure that personal
                information is not sold or rented to third parties without
                explicit consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-teal mb-4">
                SECURITY
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We safeguard confidentiality through physical, electronic, and
                procedural safeguards. We restrict access to information to
                authorized employees only.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We acknowledge that no security system can prevent all potential
                breaches, despite striving for reasonable security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-teal mb-4">
                RAID STUDIO MAY DISCLOSE INFORMATION IN THE FOLLOWING SITUATION
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may disclose information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>As required by law</li>
                <li>To enforce Terms of Use</li>
                <li>To protect rights/safety/investigate fraud</li>
                <li>To address security/technical issues</li>
                <li>To respond to government requests</li>
                <li>With trusted service providers</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                CONSENT TO THIS POLICY means that by submitting data or using
                the site, you consent to data use as set out in the Privacy
                Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-teal mb-4">
                UPDATES TO POLICY
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We advise you to regularly review the policy as it may evolve
                with company progress, and continued use implies approval of
                changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-teal mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please
                contact us at:
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

export default PrivacyPolicy;
