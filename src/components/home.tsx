import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PortfolioSection from "./PortfolioSection";
import ContactSection from "./ContactSection";

const Home = () => {
  // YouTube thumbnail items with specific designs
  const thumbnailItems = [
    {
      id: "thumbnail-1",
      title: "How to Start DAY TRADING",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748350273/Shay-Huang-Project-P1_oiuurm.jpg",
      category: "Day Trading",
    },
    {
      id: "thumbnail-2",
      title: "I Gifted Poor family a NEW HOUSE",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748350813/new-house-F-I_ov6uuf.jpg",
      category: "Lifestyle",
    },
    {
      id: "thumbnail-3",
      title: "Boost YouTube CTR with These Proven Hacks!",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748350706/Boost-CTR-p3_p2sfho.jpg",
      category: "Digital Marketing",
    },
    {
      id: "thumbnail-4",
      title: "HOW TO PASS A FUNDED ACCOUNT FAST",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748350718/SOAM-JENA-p4_h8naga.jpg",
      category: "Trading",
    },
    {
      id: "thumbnail-5",
      title: "30-DAY TRANSFORMATION",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748350756/SOAMENDRA-JENA-p6_xpgspm.jpg",
      category: "Personal Finance",
    },
    {
      id: "thumbnail-6",
      title: "How BRITISH left India?",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748350747/Dhruv-Rathee-p5_uxybf6.jpg",
      category: "Educational Documentary",
    },
    {
      id: "thumbnail-7",
      title: "CRYPTO EXPLAINED",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748350688/Craig-Percoco-Project-P2_x57kkr.jpg",
      category: "Finance",
    },
    {
      id: "thumbnail-8",
      title: "7 AI Tools That WILL Make You RICH",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748350770/Tech-Burner-p7-Secrets_c3wyza.jpg",
      category: "Tech",
    },
    {
      id: "thumbnail-9",
      title: "Next BILLION-DOLLAR Opportunity in India",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748350784/Podcast-with-Bill-Gates-p8_pkj7bt.jpg",
      category: "Podcast",
    },
    {
      id: "thumbnail-10",
      title: "TOP 1% HABITS",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748350826/Stock-Burner-p10_gkmtda.jpg",
      category: "Productivity",
    },
  ];

  // Define bannerItems first
  const bannerItems = [
    {
      id: "banner-1",
      title: "Banner 1",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748707361/banner-1_xhuose.jpg",
      category: "banner",
    },
    {
      id: "banner-2",
      title: "Banner 2",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748596077/Banner-2-2025-portfolio_y5xqph.jpg",
      category: "banner",
    },
    {
      id: "banner-3",
      title: "Banner 3",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748707368/Banner-3-web_oowtiv.jpg",
      category: "banner",
    },
    // Add more banners if needed...
  ];

  // Then use bannerItems below
  console.log(bannerItems);

  // Poster Items
  const posterItems = [
    {
      id: "poster-1",
      title: "Poster 1",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748598348/Poster-design-1_cixkxu.jpg",
      category: "poster",
    },
    {
      id: "poster-2",
      title: "Poster 2",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748598355/Poster-Design-2_jlcjoo.jpg",
      category: "poster",
    },
    {
      id: "poster-3",
      title: "Poster 3",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748599319/Poster-Design-3_gpit4t.jpg",
      category: "poster",
    },
    {
      id: "poster-4",
      title: "Poster 4",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748601921/Poster-design-4_j9zbs4.jpg",
      category: "poster",
    },
    {
      id: "poster-5",
      title: "Poster 5",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748603030/Poster-Design-5_rtaasx.jpg",
      category: "real estate",
    },
    {
      id: "poster-6",
      title: "Poster 6",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748610344/poster-design-6_rcmnjc.jpg",
      category: "Music",
    },
    // Add more manually if needed...
  ];

  // Cover Art Items
  const coverArtItems = [
    {
      id: "coverart-1",
      title: "Cover Art 1",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748611694/Cover-Art-Design-1_cf5zus.jpg",
      category: "coverart",
    },
    {
      id: "coverart-2",
      title: "Cover Art 2",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1748612285/Cover-Art-2_flkyrt.jpg",
      category: "coverart",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="relative py-8 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 md:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500">
              WELCOME
            </h1>
            <nav className="w-full md:w-auto">
              <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
                <li>
                  <a
                    href="#home"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#thumbnails"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Thumbnails
                  </a>
                </li>
                <li>
                  <a
                    href="#banners"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Banners
                  </a>
                </li>
                <li>
                  <a
                    href="#posters"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Poster Design
                  </a>
                </li>
                <li>
                  <a
                    href="#coverart"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Cover Art
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900"
      >
        <div className="container mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Main title with 3D effect */}
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 relative">
              <span className="absolute inset-0 text-white/5 blur-sm transform translate-x-1 translate-y-1">
                2025 PORTFOLIO
              </span>
              <span className="absolute inset-0 text-white/10 blur-[2px] transform translate-x-0.5 translate-y-0.5">
                2025 PORTFOLIO
              </span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-100 to-blue-200 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                2025 PORTFOLIO
              </span>
            </h2>

            {/* Category subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-12"
            >
              <p className="text-lg md:text-xl tracking-[0.2em] text-blue-200/80 font-light">
                <span className="inline-block mx-2 hover:text-white transition-colors duration-300">
                  THUMBNAILS
                </span>
                <span className="text-blue-400/50">|</span>
                <span className="inline-block mx-2 hover:text-white transition-colors duration-300">
                  BANNERS
                </span>
                <span className="text-blue-400/50">|</span>
                <span className="inline-block mx-2 hover:text-white transition-colors duration-300">
                  POSTER DESIGN
                </span>
                <span className="text-blue-400/50">|</span>
                <span className="inline-block mx-2 hover:text-white transition-colors duration-300">
                  COVER ART
                </span>
              </p>
            </motion.div>

            {/* CTA Button with glossy effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a
                href="#thumbnails"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-white font-medium overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-t from-transparent via-blue-400/10 to-blue-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">View Portfolio</span>
                <span className="relative z-10 w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center group-hover:bg-blue-400/50 transition-colors duration-300">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <a
              href="#thumbnails"
              className="flex flex-col items-center text-blue-300 hover:text-white transition-colors"
            >
              <span className="text-sm mb-2 tracking-wider font-light">
                SCROLL DOWN
              </span>
              <ChevronDown className="animate-bounce" />
            </a>
          </motion.div>
        </div>

        {/* Background effects */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {/* Geometric patterns */}
          <div className="absolute inset-0">
            <svg
              className="w-full h-full opacity-5"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="grid-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M0,0 L100,0 L100,100 L0,100 Z"
                fill="url(#grid-gradient)"
              />
              <path
                d="M0,20 L100,20"
                stroke="rgba(59,130,246,0.1)"
                strokeWidth="0.1"
              />
              <path
                d="M0,40 L100,40"
                stroke="rgba(59,130,246,0.1)"
                strokeWidth="0.1"
              />
              <path
                d="M0,60 L100,60"
                stroke="rgba(59,130,246,0.1)"
                strokeWidth="0.1"
              />
              <path
                d="M0,80 L100,80"
                stroke="rgba(59,130,246,0.1)"
                strokeWidth="0.1"
              />
              <path
                d="M20,0 L20,100"
                stroke="rgba(59,130,246,0.1)"
                strokeWidth="0.1"
              />
              <path
                d="M40,0 L40,100"
                stroke="rgba(59,130,246,0.1)"
                strokeWidth="0.1"
              />
              <path
                d="M60,0 L60,100"
                stroke="rgba(59,130,246,0.1)"
                strokeWidth="0.1"
              />
              <path
                d="M80,0 L80,100"
                stroke="rgba(59,130,246,0.1)"
                strokeWidth="0.1"
              />
            </svg>
          </div>

          {/* Wave patterns */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="rgba(59,130,246,0.3)"
                fillOpacity="1"
                d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>

          {/* Glowing orbs */}
          <div
            className="absolute top-1/4 left-1/5 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDuration: "12s" }}
          ></div>
          <div
            className="absolute top-2/3 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDuration: "10s" }}
          ></div>

          {/* Design tool icons */}
          <div className="absolute top-1/3 right-1/4 opacity-5">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6Z"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M9 9C10.1046 9 11 8.10457 11 7C11 5.89543 10.1046 5 9 5C7.89543 5 7 5.89543 7 7C7 8.10457 7.89543 9 9 9Z"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M15 15L20 20" stroke="white" strokeWidth="2" />
              <path d="M15 20L20 15" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-1/3 left-1/4 opacity-5">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M7 9L17 9" stroke="white" strokeWidth="2" />
              <path d="M7 12L17 12" stroke="white" strokeWidth="2" />
              <path d="M7 15L13 15" stroke="white" strokeWidth="2" />
            </svg>
          </div>

          {/* Light streaks */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-32 -left-32 w-64 h-[500px] bg-gradient-to-b from-blue-400/5 to-transparent transform rotate-45"></div>
            <div className="absolute -bottom-32 -right-32 w-64 h-[500px] bg-gradient-to-t from-blue-400/5 to-transparent transform rotate-45"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section id="thumbnails" className="py-20 px-4">
        <PortfolioSection
          title="THUMBNAILS"
          items={thumbnailItems}
          layoutType="grid"
          backgroundColor="bg-gradient-to-br from-blue-900/30 via-gray-900 to-gray-900"
          accentColor="from-blue-500 to-purple-600"
        />
      </section>

      <section id="banners" className="py-20 px-4">
        <PortfolioSection
          title="BANNERS"
          items={bannerItems}
          layoutType="slider"
          backgroundColor="bg-gradient-to-br from-purple-900/30 via-gray-900 to-gray-900"
          accentColor="from-purple-500 to-pink-600"
        />
      </section>

      <section id="posters" className="py-20 px-4">
        <PortfolioSection
          title="POSTER DESIGN"
          items={posterItems}
          layoutType="masonry"
          backgroundColor="bg-gradient-to-br from-indigo-900/30 via-gray-900 to-gray-900"
          accentColor="from-indigo-500 to-blue-600"
        />
      </section>

      <section id="coverart" className="py-20 px-4">
        <PortfolioSection
          title="COVER ART"
          items={coverArtItems}
          layoutType="grid"
          backgroundColor="bg-gradient-to-br from-cyan-900/30 via-gray-900 to-gray-900"
          accentColor="from-cyan-500 to-blue-600"
        />
      </section>

      {/* Outro Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                THANKS FOR WATCHING
              </span>
            </h2>
            <div className="max-w-3xl mx-auto overflow-hidden rounded-xl">
              <img
                src="https://res.cloudinary.com/dxou9qxyq/image/upload/v1748688017/Shot-pic-Web_nikxmv.png"
                style={{ aspectRatio: "1/ 1", width: "100%", height: "100%" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Background effects */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto text-center text-gray-400 text-sm">
          <p>© 2025 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
