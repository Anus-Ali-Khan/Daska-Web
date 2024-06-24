"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaStarSolid } from 'react-icons/lia';

export default function CarouselHell() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="bg-[#E8ECFD] text-[#351A5F] w-full max-w-[80vw] overflow-x-hidden h-[19rem]">
      <Slider {...settings}>
        <div className="p-4 text-center">
          <div className="flex justify-center gap-2 mb-4">
            <LiaStarSolid className="text-[#822EF7]" />
            <LiaStarSolid className="text-[#822EF7]" />
            <LiaStarSolid className="text-[#822EF7]" />
            <LiaStarSolid className="text-[#822EF7]" />
            <LiaStarSolid className="text-[#822EF7]" />
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold">Lorem Ipsum Te Amo</h1>
          <p className="mt-2 text-sm lg:text-base">CEO at BECCA</p>
        </div>
        <div className="p-4 text-center">
          <div className="flex justify-center gap-2 mb-4">
            <LiaStarSolid className="text-[#822EF7]" />
            <LiaStarSolid className="text-[#822EF7]" />
            <LiaStarSolid className="text-[#822EF7]" />
            <LiaStarSolid className="text-[#822EF7]" />
            <LiaStarSolid className="text-[#822EF7]" />
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold">Es Te Vosotros Siuu</h1>
          <p className="mt-2 text-sm lg:text-base">HRO at BECCA</p>
        </div>
        <div className="p-4 text-center">
          <div className="flex justify-center gap-2 mb-4">
            <LiaStarSolid className="text-[#822EF7]" />
            <LiaStarSolid className="text-[#822EF7]" />
            <LiaStarSolid className="text-[#822EF7]" />
            <LiaStarSolid className="text-[#822EF7]" />
            <LiaStarSolid className="text-[#822EF7]" />
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold">Muchas Gracias Efficion</h1>
          <p className="mt-2 text-sm lg:text-base">HEC at BECCA</p>
        </div>
      </Slider>
    </div>
  );
}
