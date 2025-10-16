import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/cafe7.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <img
          src="/logo.png"
          alt="Raid Studio Logo"
          className="mx-auto mb-6 h-32 md:h-48 lg:h-56 w-auto animate-fade-in transition-transform duration-300 hover:scale-105 hover:brightness-105 cursor-pointer"
        />
        <p
          className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          Creating innovative spaces that inspire and transform the way we live,
          work, and experience architecture.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          <button
            onClick={scrollToAbout}
            className="bg-brand-teal text-white px-8 py-3 font-medium hover:bg-brand-teal/90 hover:scale-105 transition-all duration-300 transform"
          >
            DISCOVER OUR WORK
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-brand-teal text-brand-teal px-8 py-3 font-medium hover:bg-brand-teal hover:text-white hover:scale-105 transition-all duration-300 transform"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:scale-110 transition-transform duration-300"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
