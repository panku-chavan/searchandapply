import React from 'react'
import { Carousel } from "flowbite-react";
import CarouselCard from './CarouselCard';
import CarouselCard2 from './CarouselCard2';
import CarouselCard3 from './CarouselCard3';
import CarouselCard4 from './CarouselCard4';
const CarouselComponent = () => {
  return (
    <div className="mt-24 m-2 mb-10 md:m-10">
      <Carousel slideInterval={5000} theme={{
          root: {
            base: "relative h-full w-full",
          },
          leftControl: {
            base: "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none bg-white", // Customize left control button
          },
          rightControl: {
            base: "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none bg-white", // Customize right control button
          },
          control: {
            base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white  group-focus:outline-none group-focus:ring-4 group-focus:ring-[#0A66C2] dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10", // Customize button background color and hover effect
            icon: "h-5 w-5 tex-2xl font-bold text-[#0A66C2] dark:text-[#0A66C2] sm:h-6 sm:w-6", // Customize icon color
          },
        }} >
        <CarouselCard/>
        <CarouselCard2/>
        <CarouselCard3/>
        <CarouselCard4/>
      </Carousel>
      
    </div>
  )
}

export default CarouselComponent