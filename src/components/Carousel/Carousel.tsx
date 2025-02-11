"use client";

import React from "react";
import Carousel from "better-react-carousel";
import Image from "next/image";

export const Gallery = ({ images }) => {
  return (
    <Carousel
      cols={1}
      rows={1}
      gap={0}
      loop={true}
      hideArrow={true}
      autoplay={2000}
    >
      {images.map((url, i) => (
        <Carousel.Item key={i}>
          <div className="w-full m-auto flex items-center justify-center">
            <Image
              src={url}
              alt={`imagen ${i + 1}`}
              width={250}
              height={250}
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
