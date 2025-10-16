import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { ref: titleRef, isIntersecting: titleVisible } =
    useIntersectionObserver();
  const { ref: gridRef, isIntersecting: gridVisible } =
    useIntersectionObserver();

  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: "hotel",
      title: "Yamuna Retreat Hotel",
      category: "Hospitality",
      image: "/hotel_exterior6.webp",
      description:
        "A minimalist hotel project featuring clean lines and earthy tones, with a luxury party hall and rooftop café integrated with a swimming pool for a refined hospitality experience.",
    },
    {
      id: "corporate-office",
      title: "SGI Headquarters",
      category: "Corporate/Mixed Use",
      image: "/office1.webp",
      description:
        "A comprehensive office complex featuring modern workspaces, employee dining facilities, and extended-stay accommodations for business travelers.",
    },
    {
      id: "chintu-residence",
      title: "Chintu Ji Residence",
      category: "Residential",
      image: "/exterior1.webp",
      description:
        "A stunning residential project in Patna that draws inspiration from Rajasthani havelis, blending heritage with contemporary living through traditional jharokha and intricate jaali patterns.",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            FEATURED
            <br />
            <span className="font-bold text-brand-teal">PROJECTS</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our portfolio of groundbreaking architectural projects that
            showcase our commitment to innovation and excellence.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${
            gridVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
          }`}
        >
          {displayedProjects.map((project, index) => (
            <Link
              key={index}
              to={`/project/${project.id}`}
              className="group cursor-pointer block"
              style={{
                animationDelay: gridVisible ? `${0.1 * index}s` : "0s",
                animationFillMode: "both",
              }}
            >
              <div className="relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Animated overlay with project category */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    <span className="bg-white/90 text-black px-3 py-1 text-sm font-medium tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  {/* View project button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button className="bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-100 transition-colors">
                      View Project
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-white group-hover:bg-gray-50 transition-colors duration-300 flex-1 flex flex-col">
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-2 opacity-75 group-hover:opacity-100 transition-opacity">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gray-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-600 transition-colors flex-1">
                    {project.description}
                  </p>

                  {/* Animated progress bar */}
                  <div className="mt-4 h-0.5 bg-gray-200 overflow-hidden">
                    <div className="h-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
              className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-2"
            >
              View More Projects
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
