"use client";
import React, { useState, useEffect } from "react";
import { HamariArticle } from "@/types/types";
import Image from "next/image";

const Carousel = () => {
  const [slides, setSlides] = useState<HamariArticle[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Fetch your data here and update the slides state
    const fetchData = async () => {
      try {
        // Replace the API_URL with the actual URL to fetch your data
        const res = await fetch("http://localhost:3000/api/hamariweb", {
          next: { revalidate: 7200 },
        }).then((res) => res.json());
        const lesserSlides = res.data.slice(0, 5);
        setSlides(lesserSlides);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Ensure the effect runs only once on component mount

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1,
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
    );
  };

  if (!slides.length) {
    return <div>Loading...</div>; // Add loading state while data is being fetched
  }

  return (
    <div className="flex flex-col gap-5 w-[90vw]">
      <div className="carousel h-[70vh] w-full">
        <div
          id={`slide${currentSlide}`}
          className="carousel-item relative w-full"
        >
          <Image
            src={slides[currentSlide].imgSrc}
            fill
            className="w-full"
            alt={`Slide ${currentSlide + 1}`}
          />
          {/* You can also render other dynamic content here */}

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${
                currentSlide === 0 ? slides.length - 1 : currentSlide - 1
              }`}
              className="btn btn-circle"
              onClick={handlePrevSlide}
            >
              ❮
            </a>
            <a
              href={`#slide${
                currentSlide === slides.length - 1 ? 0 : currentSlide + 1
              }`}
              className="btn btn-circle"
              onClick={handleNextSlide}
            >
              ❯
            </a>
          </div>
        </div>

        {/* Repeat for other slides */}
      </div>
      <div className="z-20 items-center justify-center flex ">
        <h2 className="font-bold">{slides[currentSlide].title}</h2>
        h1 className="font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default Carousel;
