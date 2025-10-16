import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Award,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useMemo, useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isImageTransitioning, setIsImageTransitioning] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;
  const [isFilterTransitioning, setIsFilterTransitioning] = useState(false);

  // Sample project data - in a real app, this would come from an API or database
  const projects = {
    hotel: {
      id: "hotel",
      title: "YAMUNA RETREAT HOTEL",
      category: "Hospitality",
      location: "Vrindavan, Mathura",
      year: "2024",
      area: "13,000 sq ft",
      client: "Yamuna Retreat Development",
      team: "Shivam Agrawal, Saba Fatima",
      status: "Ongoing",
      image: "/hotel_exterior6.webp",
      gallery: [
        "/hotel_interior.webp",
        "/hotel_interior2.webp",
        "/hotel_interior3.webp",
        "/hotel_interior4.webp",
        "/hotel_interior5.webp",
        "/hotel_interior6.webp",
        "/hotel_room1.webp",
        "/hotel_room2.webp",
        "/hotel_room3.webp",
        "/hotel_room4.webp",
        "/hotel_room5.webp",
        "/hotel_room6.webp",
        "/hotel_exterior.webp",
        "/hotel_exterior2.webp",
        "/hotel_exterior3.webp",
        "/hotel_exterior4.webp",
        "/hotel_exterior5.webp",
        "/hotel_exterior6.webp",
      ],
      description:
        "This hotel project embodies a minimalist design language, focusing on clean lines and a harmonious palette of earthy tones. The architecture and interiors are thoughtfully crafted to create a calm and relaxing atmosphere, allowing guests to unwind and connect with the space effortlessly. Every element is designed with simplicity and elegance in mind, from warm textures and natural finishes to the subtle play of light and shadow. The project features a luxury party hall for intimate gatherings and grand celebrations, and a rooftop café with panoramic views seamlessly integrated with a swimming pool, creating a serene and elevated leisure space. This balance of minimalism and luxury ensures a refined and timeless hospitality experience.",
      features: [
        "Minimalist design language with clean lines",
        "Harmonious palette of earthy tones",
        "Calm and relaxing atmosphere",
        "Warm textures and natural finishes",
        "Subtle play of light and shadow",
        "Luxury party hall for celebrations",
        "Rooftop café with panoramic views",
        "Integrated swimming pool design",
        "Serene and elevated leisure space",
        "Refined and timeless hospitality experience",
      ],
      awards: [
        "Best Heritage Hotel Design 2024 - Indian Architecture Awards",
        "Excellence in Sustainable Tourism - Green Building Council India",
        "Innovation in Cultural Architecture - International Design Awards",
      ],
    },
    "corporate-office": {
      id: "corporate-office",
      title: "SGI_Headquarters",
      category: "Corporate/Mixed Use",
      location: "Kosi Kalan, Mathura",
      year: "2024",
      site_area: "1,30,000 sq ft",
      built_up_area: "35,000 sq ft",
      landscape_area: "1,15,000 sq ft",
      client: "SGI",
      status: "Ongoing",
      image: "/office1.webp",
      gallery: [
        // Office Floor Renders
        "/office1.webp",
        "/office2.webp",
        "/office3.webp",
        "/office4.webp",
        "/office5.webp",
        "/office6.webp",
        "/office7.webp",
        "/office8.webp",
        "/office9.webp",
        "/office10.webp",
        "/office11.webp",
        // Cafeteria Renders
        "/cafe1.webp",
        "/cafe2.webp",
        "/cafe3.webp",
        "/cafe4.webp",
        "/cafe5.webp",
        "/cafe6.webp",
        "/cafe7.webp",
        "/cafe8.webp",
        "/cafe9.webp",
        // Living/Stay Renders
        "/Living1.webp",
        "/Living2.webp",
        "/Living3.webp",
        "/Living4.webp",
        "/Living5.webp",
        "/Living6.webp",
        "/Living7.webp",
      ],
      description:
        "A harmonious blend of architecture, interior, and landscape creating a state-of-the-art experiential space with minimal environmental footprint. This comprehensive project spans 1,30,000 sq ft with an impressive 1,15,000 sq ft dedicated to landscaping featuring over 100 varieties of plants and trees. The landscape is carefully planned with formal and informal zones for meetings, leisure, and quiet reflection, while multiple water bodies help regulate temperature and foster a calm, natural atmosphere. The project operates on 90% solar power and incorporates integrated water and STP systems, ensuring sustainable resource use. The built environment consists of two primary blocks - an Office Block designed around a central courtyard maximizing natural light and ventilation, and a Residential Block with dormitories and cafeteria designed in a resort-inspired aesthetic, encouraging users to engage with and appreciate the surrounding landscape.",
      features: [
        "90% solar power operation with integrated water and STP systems",
        "1,15,000 sq ft of landscaped area with 100+ plant varieties",
        "Office Block designed around central courtyard for natural light",
        "Residential Block with resort-inspired dormitories and cafeteria",
        "Multiple water bodies for temperature regulation",
        "Formal and informal landscape zones for various activities",
        "Minimalist contemporary design language",
        "Seamless indoor-outdoor connectivity",
        "Sustainable resource management systems",
        "Immersive natural environment integration",
      ],
      awards: [
        "Best Corporate Office Design 2024 - Indian Architecture Awards",
        "Excellence in Workplace Design - Commercial Architecture Council",
        "Innovation in Integrated Office Solutions - Design Excellence Awards",
      ],
    },
    "chintu-residence": {
      id: "chintu-residence",
      title: "CHINTU JI RESIDENCE",
      category: "Residential",
      location: "Patna, India",
      year: "2024",
      area: "7,000 sq ft",
      client: "Chintu Ji",
      status: "Ongoing",
      image: "/exterior1.webp",
      gallery: [
        // Exterior Images
        "/exterior1.webp",
        "/exterior2.webp",
        "/exterior3.webp",
        // balcony Images
        "/balcony1.webp",
        "/balcony2.webp",
        "/balcony3.webp",
        // drawingroom Images
        "/drawingroom1.webp",
        "/drawingroom2.webp",
        "/drawingroom3.webp",
        "/drawingroom4.webp",
        "/drawingroom5.webp",
        "/drawingroom6.webp",
        "/drawingroom7.webp",
        // livingroom Images
        "/livingroom1.webp",
        "/livingroom2.webp",
        "/livingroom3.webp",
        "/livingroom4.webp",
        //bathroom Images
        "/bathroom.webp",
      ],
      description:
        "A stunning residential project in Patna that draws inspiration from Rajasthani havelis, blending heritage with contemporary living. This architectural masterpiece features traditional jharokha, intricate jaali patterns, and locally sourced materials like stone and brick, creating a warm and authentic character. The interiors are modern, offering openness and comfort while striking a perfect balance between cultural charm and modern functionality - a true fusion of the past and present.",
      features: [
        "Traditional Rajasthani haveli-inspired design",
        "Intricate jaali patterns and jharokha elements",
        "Locally sourced stone and brick materials",
        "Modern open-plan interior layouts",
        "Heritage-compliant architectural elements",
        "Contemporary comfort with traditional aesthetics",
      ],
      awards: [
        "Best Heritage Residential Design 2024 - Indian Architecture Awards",
        "Excellence in Cultural Architecture - Residential Design Council",
        "Innovation in Traditional-Modern Fusion - Design Excellence Awards",
      ],
    },
  };

  const project = projects[id as keyof typeof projects];

  // Scroll to top when component mounts or project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Keyboard navigation for image modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage || !project) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePreviousImage();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNextImage();
      } else if (event.key === "Escape") {
        event.preventDefault();
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, project]);

  const handlePreviousImage = () => {
    if (!selectedImage || !project || isImageTransitioning) return;
    setIsImageTransitioning(true);
    const currentIndex = project.gallery.indexOf(selectedImage);
    const previousIndex =
      currentIndex > 0 ? currentIndex - 1 : project.gallery.length - 1;

    setTimeout(() => {
      setSelectedImage(project.gallery[previousIndex]);
      setTimeout(() => setIsImageTransitioning(false), 150);
    }, 150);
  };

  const handleNextImage = () => {
    if (!selectedImage || !project || isImageTransitioning) return;
    setIsImageTransitioning(true);
    const currentIndex = project.gallery.indexOf(selectedImage);
    const nextIndex =
      currentIndex < project.gallery.length - 1 ? currentIndex + 1 : 0;

    setTimeout(() => {
      setSelectedImage(project.gallery[nextIndex]);
      setTimeout(() => setIsImageTransitioning(false), 150);
    }, 150);
  };

  const filteredImages = useMemo(() => {
    if (!project) return [];

    if (activeFilter === "all") return project.gallery;

    // Corporate Office filters
    if (activeFilter === "office") {
      return project.gallery.filter((img) => img.includes("office"));
    }

    if (activeFilter === "cafeteria") {
      return project.gallery.filter((img) => img.includes("cafe"));
    }

    if (activeFilter === "living") {
      return project.gallery.filter((img) => img.includes("Living"));
    }

    // Hotel filters
    if (activeFilter === "hotel-exterior") {
      return project.gallery.filter((img) => img.includes("hotel_exterior"));
    }

    if (activeFilter === "hotel-interior") {
      return project.gallery.filter((img) => img.includes("hotel_interior"));
    }

    if (activeFilter === "hotel-rooms") {
      return project.gallery.filter((img) => img.includes("hotel_room"));
    }

    // Chintu Ji Residence filters
    if (activeFilter === "exterior") {
      return project.gallery.filter((img) => img.includes("exterior"));
    }

    if (activeFilter === "interior") {
      return project.gallery.filter(
        (img) =>
          img.includes("balcony") ||
          img.includes("drawingroom") ||
          img.includes("livingroom")
      );
    }

    if (activeFilter === "bathroom") {
      return project.gallery.filter((img) => img.includes("bathroom"));
    }

    if (activeFilter === "balcony") {
      return project.gallery.filter((img) => img.includes("balcony"));
    }

    return project.gallery;
  }, [project, activeFilter]);

  // Reset page when filter changes with transition
  const handleFilterChange = (filter: string) => {
    if (filter === activeFilter || isFilterTransitioning) return;

    setIsFilterTransitioning(true);

    // Fade out current images
    setTimeout(() => {
      setActiveFilter(filter);
      setCurrentPage(1);

      // Fade in new images
      setTimeout(() => {
        setIsFilterTransitioning(false);
      }, 200);
    }, 300);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = filteredImages.slice(startIndex, endIndex);

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Link to="/" className="text-blue-600 hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-24 left-8 z-10 bg-white/90 hover:bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Project Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-white">
              <span className="text-sm uppercase tracking-wide bg-white/20 px-3 py-1 rounded">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-thin font-poppins mt-4 mb-6 text-brand-teal">
                {project.title}
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>
                    {"area" in project
                      ? project.area
                      : `${project.site_area} (${project.built_up_area} built up)`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} />
                  <span>{project.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Gallery */}
              <h3 className="text-2xl font-bold mb-6 text-brand-teal">
                Project Gallery
              </h3>

              {/* Filter Buttons - Show for projects with multiple image categories */}
              {(project.id === "hotel" ||
                project.id === "corporate-office" ||
                project.id === "chintu-residence") && (
                <div className="flex flex-wrap gap-3 mb-6">
                  <button
                    onClick={() => handleFilterChange("all")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFilter === "all"
                        ? "bg-brand-teal text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    All Images ({project.gallery.length})
                  </button>

                  {/* Hotel filters */}
                  {project.id === "hotel" && (
                    <>
                      <button
                        onClick={() => handleFilterChange("hotel-exterior")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFilter === "hotel-exterior"
                            ? "bg-brand-teal text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        Exterior (
                        {
                          project.gallery.filter((img) =>
                            img.includes("hotel_exterior")
                          ).length
                        }
                        )
                      </button>
                      <button
                        onClick={() => handleFilterChange("hotel-interior")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFilter === "hotel-interior"
                            ? "bg-brand-teal text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        Interior (
                        {
                          project.gallery.filter((img) =>
                            img.includes("hotel_interior")
                          ).length
                        }
                        )
                      </button>
                      <button
                        onClick={() => handleFilterChange("hotel-rooms")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFilter === "hotel-rooms"
                            ? "bg-brand-teal text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        Rooms (
                        {
                          project.gallery.filter((img) =>
                            img.includes("hotel_room")
                          ).length
                        }
                        )
                      </button>
                    </>
                  )}

                  {/* Corporate Office filters */}
                  {project.id === "corporate-office" && (
                    <>
                      <button
                        onClick={() => handleFilterChange("office")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFilter === "office"
                            ? "bg-brand-teal text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        Office (
                        {
                          project.gallery.filter((img) =>
                            img.includes("office")
                          ).length
                        }
                        )
                      </button>
                      <button
                        onClick={() => handleFilterChange("cafeteria")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFilter === "cafeteria"
                            ? "bg-brand-teal text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        Cafeteria (
                        {
                          project.gallery.filter((img) => img.includes("cafe"))
                            .length
                        }
                        )
                      </button>
                      <button
                        onClick={() => handleFilterChange("living")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFilter === "living"
                            ? "bg-brand-teal text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        Residential (
                        {
                          project.gallery.filter((img) =>
                            img.includes("Living")
                          ).length
                        }
                        )
                      </button>
                    </>
                  )}

                  {/* Chintu Ji Residence filters */}
                  {project.id === "chintu-residence" && (
                    <>
                      <button
                        onClick={() => handleFilterChange("exterior")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFilter === "exterior"
                            ? "bg-brand-teal text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        Exterior (
                        {
                          project.gallery.filter((img) =>
                            img.includes("exterior")
                          ).length
                        }
                        )
                      </button>
                      <button
                        onClick={() => handleFilterChange("interior")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFilter === "interior"
                            ? "bg-brand-teal text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        Interior (
                        {
                          project.gallery.filter(
                            (img) =>
                              img.includes("balcony") ||
                              img.includes("drawingroom") ||
                              img.includes("livingroom")
                          ).length
                        }
                        )
                      </button>
                      <button
                        onClick={() => handleFilterChange("bathroom")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFilter === "bathroom"
                            ? "bg-brand-teal text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        Bathroom (
                        {
                          project.gallery.filter((img) =>
                            img.includes("bathroom")
                          ).length
                        }
                        )
                      </button>
                      <button
                        onClick={() => handleFilterChange("balcony")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeFilter === "balcony"
                            ? "bg-brand-teal text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        Balcony (
                        {
                          project.gallery.filter((img) =>
                            img.includes("balcony")
                          ).length
                        }
                        )
                      </button>
                    </>
                  )}
                </div>
              )}

              <div className="relative">
                {/* Loading Indicator */}
                {isFilterTransitioning && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm z-20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 border-3 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-xl font-medium">
                        Loading images...
                      </span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentImages.map((image, index) => (
                    <div
                      key={`${activeFilter}-${startIndex + index}`}
                      className={`aspect-video overflow-hidden rounded-lg cursor-pointer transform transition-all duration-700 ease-out ${
                        isFilterTransitioning
                          ? "opacity-0 scale-95 translate-y-4"
                          : "opacity-100 scale-100 translate-y-0"
                      }`}
                      style={{
                        transitionDelay: isFilterTransitioning
                          ? "0ms"
                          : `${index * 100}ms`,
                      }}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${
                          startIndex + index + 1
                        }`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination Controls - Only show if more than one page */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-3 py-2 rounded-lg transition-colors ${
                            currentPage === page
                              ? "bg-brand-teal text-white"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl mb-8 shadow-xl border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-brand-teal">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Client
                    </span>
                    <p className="text-gray-900 font-medium">
                      {project.client}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Location
                    </span>
                    <p className="text-gray-900 font-medium">
                      {project.location}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Year
                    </span>
                    <p className="text-gray-900 font-medium">{project.year}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Site Area
                    </span>
                    <p className="text-gray-900 font-medium">
                      {"area" in project ? project.area : project.site_area}
                    </p>
                  </div>
                  {"site_area" in project && (
                    <>
                      <div>
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                          Built-up Area
                        </span>
                        <p className="text-gray-900 font-medium">
                          {project.built_up_area}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                          Landscape Area
                        </span>
                        <p className="text-gray-900 font-medium">
                          {project.landscape_area}
                        </p>
                      </div>
                    </>
                  )}
                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Status
                    </span>
                    <p className="text-gray-900 font-medium">
                      {project.status}
                    </p>
                  </div>
                  {"team" in project && (
                    <div>
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        Team
                      </span>
                      <p className="text-gray-900 font-medium">
                        {project.team}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] p-4 w-full h-full flex items-center justify-center">
            {/* Previous Arrow */}
            {project && project.gallery.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePreviousImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <ChevronLeft size={32} />
              </button>
            )}

            {/* Next Arrow */}
            {project && project.gallery.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <ChevronRight size={32} />
              </button>
            )}

            {/* Image */}
            <img
              src={selectedImage}
              alt="Enlarged view"
              className={`max-w-full max-h-full object-contain rounded-lg transition-opacity duration-300 ${
                isImageTransitioning ? "opacity-0" : "opacity-100"
              }`}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter */}
            {project && project.gallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/20">
                {project.gallery.indexOf(selectedImage) + 1} /{" "}
                {project.gallery.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
