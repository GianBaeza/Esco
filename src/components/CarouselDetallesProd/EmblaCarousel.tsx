import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface EmblaCarouselProps {
  images: string[];
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaThumbsRef] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  return (
    <div className="embla">
      <div className="embla__viewport">
        <div className="embla__container ">
          <Image
            src={images[selectedIndex]}
            alt={`Imagen ${selectedIndex + 1}`}
            className="w-full h-auto object-cover rounded-lg"
            width={900}
            height={900}
          />
        </div>
      </div>

      {/* Miniaturas */}
      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container flex gap-2 mt-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => onThumbClick(index)}
                className={`w-16 h-16 border rounded-md overflow-hidden ${
                  selectedIndex === index
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              >
                <Image
                  src={image}
                  alt={`Miniatura ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={70}
                  height={70}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
