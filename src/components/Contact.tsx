import { Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState } from "react";

const Contact = () => {
  const { ref: titleRef, isIntersecting: titleVisible } =
    useIntersectionObserver();
  const { ref: contentRef, isIntersecting: contentVisible } =
    useIntersectionObserver();
  const { ref: formRef, isIntersecting: formVisible } =
    useIntersectionObserver();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("project", formData.project);
      formDataToSend.append("message", formData.message);
      formDataToSend.append(
        "_subject",
        `New Project Inquiry - ${formData.project}`
      );
      formDataToSend.append("_replyto", formData.email);
      formDataToSend.append("_captcha", "false");

      const response = await fetch(
        "https://formsubmit.co/connect@raidstudio.in",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            project: "",
            message: "",
          });
          setSubmitStatus("");
        }, 3000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div
              ref={titleRef}
              className={`transition-all duration-700 ${
                titleVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
                LET'S CREATE
                <br />
                <span className="font-bold">TOGETHER</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ready to transform your vision into reality? Get in touch with
                our team to discuss your project and discover how RAID STUDIO
                can bring your architectural dreams to life.
              </p>
            </div>

            <div
              ref={contentRef}
              className={`space-y-6 transition-all duration-700 delay-300 ${
                contentVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-400">connect@raidstudio.in</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <div className="font-medium">Reach Us</div>
                  <div className="text-gray-400">Delhi | Mumbai | Kolkata</div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <div className="font-medium mb-4">Follow Us</div>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/raidstudio.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-brand-teal text-white rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/raid-studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-brand-teal text-white rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={formRef}
            className={`bg-white text-black p-8 hover:shadow-2xl transition-all duration-700 ${
              formVisible ? "animate-fade-in" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 group-focus-within:text-black transition-colors"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none focus:scale-[1.02] focus:shadow-lg transition-all duration-300 group-hover:border-gray-400"
                  placeholder="Your name"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 group-focus-within:text-black transition-colors"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none focus:scale-[1.02] focus:shadow-lg transition-all duration-300 group-hover:border-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="project"
                  className="block text-sm font-medium mb-2 group-focus-within:text-black transition-colors"
                >
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none focus:scale-[1.02] focus:shadow-lg transition-all duration-300 group-hover:border-gray-400"
                >
                  <option value="">Select project type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Public">Public</option>
                  <option value="Consultation">Consultation</option>
                </select>
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 group-focus-within:text-black transition-colors"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 focus:border-black focus:outline-none focus:scale-[1.02] focus:shadow-lg transition-all duration-300 group-hover:border-gray-400 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 font-medium transition-all duration-300 transform relative overflow-hidden group ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800 hover:scale-[1.02] hover:shadow-xl"
                }`}
              >
                <span className="relative z-10">
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </span>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                  ✓ Message sent successfully! We'll get back to you at{" "}
                  {formData.email} within 24 hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                  ✗ There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
