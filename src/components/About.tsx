import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const About = () => {
  const { ref: titleRef, isIntersecting: titleVisible } =
    useIntersectionObserver();
  const { ref: contentRef, isIntersecting: contentVisible } =
    useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <div
              ref={titleRef}
              className={`transition-all duration-700 ${
                titleVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
                CRAFTING SPACES
                <br />
                <span className="font-bold text-brand-teal">THAT MATTER</span>
              </h2>
            </div>
            <div
              ref={contentRef}
              className={`transition-all duration-700 delay-200 ${
                contentVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
                Raid Studio is a young architecture practice driven by the
                ambition to design sustainable and experiential spaces that
                inspire and connect. With a forward-thinking approach, the firm
                continuously explores new ideas and design methods, embracing
                experimentation as a tool to create meaningful and impactful
                environments.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
                Collaboration lies at the core of our philosophy — we believe
                that the best solutions emerge when diverse perspectives come
                together. By working closely with clients, consultants, and
                communities, we aim to craft spaces that are thoughtful,
                innovative, and deeply rooted in their context.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
                Our vision is to shape architecture that goes beyond function,
                creating experiences that engage the senses, respect the
                environment, and contribute positively to the way people live
                and interact with the world around them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
