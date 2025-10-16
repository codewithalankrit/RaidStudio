import { Building, Home, Trees, Lightbulb } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Services = () => {
  const { ref: titleRef, isIntersecting: titleVisible } =
    useIntersectionObserver();
  const { ref: gridRef, isIntersecting: gridVisible } =
    useIntersectionObserver();

  const services = [
    {
      icon: Building,
      title: "Architecture",
      description:
        "Innovative and sustainable designs that bring ideas to life. We craft spaces that inspire and endure.",
    },
    {
      icon: Home,
      title: "Interior",
      description:
        "Stylish, functional interiors that reflect your personality. Designed for comfort, built for elegance.",
    },
    {
      icon: Trees,
      title: "Landscaping",
      description:
        "Beautiful outdoor spaces that blend nature and design. We create landscapes that truly breathe life.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            OUR
            <br />
            <span className="font-bold text-brand-teal">SERVICES</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive architectural
            services tailored to your unique needs and vision.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-700 delay-300 ${
            gridVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-all duration-500 cursor-pointer p-6 rounded-lg hover:bg-gray-50 hover:shadow-lg"
              style={{
                animationDelay: gridVisible ? `${0.15 * index}s` : "0s",
                animationFillMode: "both",
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-teal text-white mb-6 group-hover:bg-brand-teal/80 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform relative overflow-hidden">
                <service.icon
                  size={32}
                  className="transform group-hover:scale-110 transition-transform duration-300 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-brand-teal transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                {service.description}
              </p>

              {/* Animated underline */}
              <div className="w-0 h-0.5 bg-brand-teal mx-auto mt-4 group-hover:w-12 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
