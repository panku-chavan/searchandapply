import React from 'react'
import { Carousel } from "flowbite-react";
import CarouselCard from './CarouselCard';
const CarouselComponent = () => {
  return (
    <div className="mt-24 m-10">
      <Carousel slideInterval={5000}>
        <CarouselCard/>
        <CarouselCard/>
        <CarouselCard/>
      </Carousel>
    </div>
  )
}

export default CarouselComponent