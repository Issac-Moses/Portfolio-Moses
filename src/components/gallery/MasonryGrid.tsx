import React from "react";

// You can replace this Flex with your own layout/component if needed.
import { Flex } from "@/once-ui/components";

interface ImageData {
  src: string;
  alt: string;
  orientation?: string;
  // Optionally include width/height if you want to use them
}

interface MasonryGridProps {
  images: ImageData[];
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ images }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "16px",
        width: "100%",
      }}
    >
      {images.map((image, index) => (
        <div key={index} style={{ width: "100%", overflow: "hidden" }}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: "100%",
              height: "auto",
              // 'contain' ensures the full image is visible even if it doesn’t fill the container entirely.
              objectFit: "contain",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
