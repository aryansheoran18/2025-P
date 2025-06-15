import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface PortfolioItemProps {
  image: string;
  title: string;
  type: "thumbnail" | "banner" | "poster" | "cover";
  category?: string;
  onClick?: () => void;
}

const PortfolioItem = ({
  image = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
  title = "Portfolio Item",
  type = "thumbnail",
  category,
  onClick = () => console.log("Portfolio item clicked"),
}: PortfolioItemProps) => {
  // Define different styles based on item type
  const getItemStyles = () => {
    switch (type) {
      case "thumbnail":
        return "aspect-[16/9]";
      case "banner":
        return "aspect-[1280/169]";
      case "poster":
        return "aspect-[889/500]";
      case "cover":
        return "aspect-[1/1]";
      default:
        return "aspect-square";
    }
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg bg-background"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={`relative overflow-hidden cursor-pointer ${getItemStyles()}`}
        onClick={onClick}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

        <motion.div
          className="absolute inset-0 bg-blue-500/20 opacity-0 z-10"
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.2 }}
        />

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        />

        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <motion.h3
            className="text-white font-bold text-lg tracking-wider"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          {category && (
            <motion.span
              className="text-blue-300 text-sm block mt-1"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {category}
            </motion.span>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default PortfolioItem;
