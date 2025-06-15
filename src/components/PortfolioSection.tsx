import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PortfolioItem from "./PortfolioItem";

type LayoutType = "grid" | "slider" | "masonry";

interface PortfolioItem {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
  category?: string;
}

interface PortfolioSectionProps {
  title: string;
  layoutType: LayoutType;
  items: PortfolioItem[];
  backgroundColor?: string;
  accentColor?: string;
}

const PortfolioSection = ({
  title = "PORTFOLIO SECTION",
  layoutType = "grid",
  items = [
    {
      id: "1",
      title: "Item 1",
      imageUrl:
        "https://res.cloudinary.com/dxou9qxyq/image/upload/v1749985585/Screenshot_2025-05-28_at_10.15.50_AM_bz7uqp.png",
    },
    {
      id: "2",
      title: "Item 2",
      imageUrl:
        "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=800&q=80",
    },
    {
      id: "3",
      title: "Item 3",
      imageUrl:
        "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&q=80",
    },
    {
      id: "4",
      title: "Item 4",
      imageUrl:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
    },
    {
      id: "5",
      title: "Item 5",
      imageUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    },
    {
      id: "6",
      title: "Item 6",
      imageUrl:
        "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&q=80",
    },
  ],
  backgroundColor = "bg-gray-900",
  accentColor = "from-blue-500 to-purple-600",
}: PortfolioSectionProps) => {
  // Animation variants for section title
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Animation variants for items container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Render different layouts based on layoutType
  const renderLayout = () => {
    switch (layoutType) {
      case "grid":
        return (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {items.map((item) => (
              <PortfolioItem
                key={item.id}
                image={item.imageUrl}
                title={item.title}
                type={
                  item.category?.toLowerCase().includes("banner")
                    ? "banner"
                    : item.category?.toLowerCase().includes("poster")
                      ? "poster"
                      : item.category?.toLowerCase().includes("cover")
                        ? "cover"
                        : "thumbnail"
                }
                category={item.category}
              />
            ))}
          </motion.div>
        );

      case "slider":
        return (
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {items.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <PortfolioItem
                    image={item.imageUrl}
                    title={item.title}
                    type={
                      item.category?.toLowerCase().includes("banner")
                        ? "banner"
                        : item.category?.toLowerCase().includes("poster")
                          ? "poster"
                          : item.category?.toLowerCase().includes("cover")
                            ? "cover"
                            : "thumbnail"
                    }
                    category={item.category}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-transparent border-none hover:bg-gray-800/50 text-white" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-transparent border-none hover:bg-gray-800/50 text-white" />
            </div>
          </Carousel>
        );

      case "masonry":
        // Simple masonry implementation with CSS columns
        return (
          <motion.div
            className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {items.map((item) => (
              <div key={item.id} className="break-inside-avoid">
                <PortfolioItem
                  image={item.imageUrl}
                  title={item.title}
                  type={
                    item.category?.toLowerCase().includes("banner")
                      ? "banner"
                      : item.category?.toLowerCase().includes("poster")
                        ? "poster"
                        : item.category?.toLowerCase().includes("cover")
                          ? "cover"
                          : "thumbnail"
                  }
                  category={item.category}
                />
              </div>
            ))}
          </motion.div>
        );

      default:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <PortfolioItem
                key={item.id}
                image={item.imageUrl}
                title={item.title}
                type={
                  item.category?.toLowerCase().includes("banner")
                    ? "banner"
                    : item.category?.toLowerCase().includes("poster")
                      ? "poster"
                      : item.category?.toLowerCase().includes("cover")
                        ? "cover"
                        : "thumbnail"
                }
                category={item.category}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <>
      <div className={`py-16 px-4 ${backgroundColor} relative overflow-hidden`}>
        {/* Background accent elements */}
        <div
          className={`absolute top-0 left-0 w-64 h-64 bg-gradient-to-br ${accentColor} rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl ${accentColor} rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2`}
        ></div>

        <div className="container mx-auto relative z-10">
          {/* Section title */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>

          {/* Portfolio items */}
          {renderLayout()}
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
