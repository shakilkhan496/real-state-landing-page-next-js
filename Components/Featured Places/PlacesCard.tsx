"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image9 from "../../public/Images/Explore/9.jpg";
import image10 from "../../public/Images/Explore/10.jpg";
import image11 from "../../public/Images/Explore/11.jpg";
import image12 from "../../public/Images/Explore/12.jpg";

import image1 from "../../public/Images/Places/profile pictures/1.png";
import image2 from "../../public/Images/Places/profile pictures/2.jpg";
import image3 from "../../public/Images/Places/profile pictures/3.png";

import image4 from "../../public/Images/Places/1.jpg";
import image5 from "../../public/Images/Places/2.jpg";
import image6 from "../../public/Images/Places/3.jpg";

import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/outline";
import { BiBath, BiRuler } from "react-icons/bi";
import { MdBed, MdOutlineDirectionsCarFilled } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";

type Props = {
  owner?: string;
  rating?: number;
  reviews?: number;
  title: string;
  type?: string;
  distance: number;
  price: string;
  Images?: StaticImageData[] | string[];
  OwnerPicture?: StaticImageData | string;
};

export default function PlacesCard({
  Images,
  title,
  distance,
  price = "430,000",
  owner = "Sean Maxwell",
  rating = 4.9,
  reviews = 21,
  type = "House",
  OwnerPicture = image1,
}: Props) {
  const images: StaticImageData[] | string[] = Images ?? [
    image5,
    image10,
    image11,
    image9,
  ];
  const [loaded, setloaded] = useState<string>("pulse");
  return (
    <div
      className={`group relative grid grid-rows-[minmax(0px,280px)_1fr] overflow-visible rounded-2xl bg-white p-4 text-left shadow-2xl shadow-gray-200 transition-all duration-300 ease-out xs:max-w-[400px] xs:grid-rows-[2fr_minmax(0px,1.6fr)]`}
    >
      <Carousel
        className="relative mx-auto flex aspect-[13/12] h-full overflow-clip rounded-xl transition-all duration-300"
        swipeable={true}
        showThumbs={false}
        showStatus={false}
        transitionTime={250}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <button
              key="GoLeft"
              className={`${
                hasPrev
                  ? "hover:scale-[113%] hover:opacity-100 hover:shadow-xl"
                  : ""
              } absolute top-[48%] bottom-0 left-0 z-10 ml-4 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-b-[1.5px] border-gray-300 bg-zinc-100 opacity-50 shadow-sm transition-all duration-300 ease-in-out md:hidden md:group-hover:flex`}
              onClick={clickHandler}
              disabled={!hasPrev}
            >
              <ChevronLeftIcon className="mx-auto h-[14px] w-[14px] font-bold" />
            </button>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <button
              key="GoRight"
              className={`${
                hasNext
                  ? "hover:scale-[113%] hover:opacity-100 hover:shadow-xl"
                  : ""
              } absolute top-[48%] bottom-0 right-0 z-10 mr-4 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-b-[1.5px] border-gray-300 bg-zinc-100 opacity-50 shadow-sm transition-all duration-300 ease-in-out md:hidden md:group-hover:flex`}
              onClick={clickHandler}
              disabled={!hasNext}
            >
              <ChevronRightIcon className="mx-auto h-[14px] w-[14px] font-bold " />
            </button>
          );
        }}
      >
        {images?.map((image: StaticImageData | string, index: number) => {
          return (
            <div
              className={`aspect-[13/12] h-full cursor-pointer overflow-clip rounded-xl bg-[#f5f5f5] animate-${loaded}`}
              // @ts-ignore
              key={image.src ?? image}
            >
              <Image
                src={image}
                style={{ objectFit: "cover" }}
                alt="image"
                quality={60}
                width={1000}
                sizes={"(max-width: 768px)100vw,(max-width: 1200px) 50vw, 33vw"}
                height={1000}
                onLoad={() => setloaded("none")}
                // placeholder="blur"
                className="aspect-[13/12] h-full rounded-xl"
              />
            </div>
          );
        })}
      </Carousel>

      {/* info about house */}
      <div className="group/loading flex h-full flex-col justify-between space-y-2 pb-2 pt-5 xs:space-y-0">
        <div className="flex flex-col gap-y-0">
          <div className="mb-1 text-[16px] font-semibold">{type}</div>
          <div className="text-lg font-bold xs:mb-1 xs:text-xl">{title}</div>
          <div className="flex flex-row items-center divide-x-2 divide-slate-500 text-xl font-bold">
            <p className="mr-3 text-lg xs:text-xl">${price}</p>
            <div className="flex flex-row items-center gap-x-2 truncate px-3 xs:gap-x-4">
              <div className="flex flex-row gap-x-1 xs:gap-x-2">
                <BiBath className="h-5 w-5"></BiBath>
                <div className="text-sm font-medium">2</div>
              </div>
              <div className="flex flex-row gap-x-1 xs:gap-x-2">
                <MdOutlineDirectionsCarFilled className="h-5 w-5"></MdOutlineDirectionsCarFilled>
                <div className="text-sm font-medium">1</div>
              </div>
              <div className="flex flex-row gap-x-1 xs:gap-x-2">
                <MdBed className="h-5 w-5"></MdBed>
                <div className="text-sm font-medium">4</div>
              </div>
              <div className="flex flex-row gap-x-1 xs:gap-x-2">
                <BiRuler className="h-6 w-6"></BiRuler>
                <div className="text-sm font-medium">{distance} km</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 xs:gap-y-7">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-3">
              <MapPinIcon className="h-6 w-6 text-slate-800"></MapPinIcon>
              <span className="text-xs font-medium text-gray-500 xs:text-sm ">
                Redkha Market St, California
              </span>
            </div>
            <div className="mx-2 flex items-start gap-x-7">
              <FiShare2 className="h-5 w-5 cursor-pointer xs:h-6 xs:w-6" />
              <label>
                <input
                  type={"checkbox"}
                  className="peer hidden h-full w-full cursor-pointer"
                  defaultChecked={false}
                ></input>
                <StarIcon className="peer h-5 w-5 cursor-pointer transition-all duration-300 peer-checked:scale-105 peer-checked:fill-orange-400 peer-checked:stroke-[0px] xs:h-6 xs:w-6" />
              </label>
            </div>
          </div>

          {/* Small card */}
          <div className="flex items-end">
            <div className="relative flex h-[64px] w-full flex-row items-center justify-start gap-x-2 rounded-3xl bg-white px-3 py-3 shadow-3xl shadow-slate-300/40 xs:h-[70px] xs:gap-x-4">
              <div className="relative aspect-square h-full overflow-hidden rounded-2xl">
                <Image src={OwnerPicture} alt={""} fill className="" />
              </div>
              <div className="flex flex-col">
                <div className="text-sm font-semibold">{owner}</div>
                <div className="flex flex-row gap-x-1 text-xs font-medium">
                  <StarIcon className="h-4 w-4 fill-orange-400 stroke-[0px]" />
                  {rating} ({reviews} reviews)
                </div>
              </div>
              <div className="absolute right-0 top-0 flex h-full cursor-pointer items-center justify-center rounded-3xl bg-slate-800 px-8 text-sm text-stone-50 transition-colors duration-300 hover:bg-slate-700 xs:px-10 xs:text-base">
                Send offer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
