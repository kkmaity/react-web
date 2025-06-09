import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  const slides = [
    {
      image: "https://picsum.photos/200/300",
      caption: "Welcome to Slide 1",
    },
    {
      image: "https://picsum.photos/200/300",
      caption: "Explore Slide 2",
    },
    {
      image: "https://picsum.photos/id/237/200/300",
      caption: "Discover Slide 3",
    },
    {
      image: "https://picsum.photos/200/300",
      caption: "Experience Slide 4",
    },
    {
      image: "https://picsum.photos/id/237/200/300",
      caption: "Enjoy Slide 5",
    },
  ];

  return (
    <Carousel fade interval={1000} controls indicators>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={slide.image} alt={`Slide ${index + 1}`} />
          <Carousel.Caption>
            <h3>{slide.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
