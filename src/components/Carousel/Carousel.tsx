"use client";

import React from "react";
import Carousel from "better-react-carousel";
import Image from "next/image";
import "../../app/globals.css";

interface Props {
  images: string[];
}
export const Gallery = ({ images }: Props) => {
  return (
    <Carousel
      cols={1}
      rows={1}
      gap={0}
      loop={true}
      hideArrow={images.length <= 1}
      autoplay
    >
      {images.map((url: string, i: number) => (
        <Carousel.Item key={i}>
          <div className="w-full m-auto flex items-center justify-center">
            <Image
              src={url}
              alt={`imagen ${i + 1}`}
              width={250}
              height={200}
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
