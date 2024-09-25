"use client";
import Image from "next/image";
import React from "react";
import LocationMap from "./LocationMap";
import SearchBar_Location from "./SearchBar_Location";
import SwiperComponent from "./SwiperComponent";
import Image9 from "../../public/Images/Explore/9.jpg";
import image10 from "../../public/Images/Explore/10.jpg";
import image11 from "../../public/Images/Explore/11.jpg";
import image12 from "../../public/Images/Explore/12.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ShareIcon, StarIcon } from "@heroicons/react/24/outline";
import { BiBath, BiRuler } from "react-icons/bi";
import { MdBed, MdOutlineDirectionsCarFilled } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { motion } from "framer-motion";
type Props = {
  SearchBarLocation?: React.ReactNode;
};

export default function Explore({ SearchBarLocation }: Props) {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[2500px]">
        <div className="my-6 mx-5 flex flex-col gap-y-12 sm:gap-y-24 md:mx-10 lg:mx-16 xl:mx-24">
          {/* Row 1 */}
          <div className="flex flex-1 flex-col gap-y-3 text-center text-xl font-semibold text-orange-500 xs:text-2xl sm:text-start">
            <motion.div
              viewport={{ once: true }}
              initial={{ y: -120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                type: "spring",
                damping: 50,
                stiffness: 100,
              }}
            >
              Explore
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                type: "spring",
                damping: 25,
                stiffness: 100,
              }}
              className="text-center text-4xl font-extrabold text-slate-800 xs:text-[50px] xs:leading-[60px] sm:text-start sm:text-[60px] sm:leading-[70px] md:text-[70px] md:leading-[90px]"
            >
              Find your area
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="flex h-[1700px] w-full flex-col gap-y-20 gap-x-10 lg:h-[720px] lg:flex-row lg:gap-y-0 xl:gap-x-32 2xl:h-[850px] 2xl:gap-x-36 4xl:h-[1100px] 5xl:gap-x-96">
            <motion.div
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                damping: 60,
                stiffness: 100,
              }}
              className="relative flex h-1/2 w-full flex-col overflow-hidden rounded-[34px] border-[1.7px] border-slate-300 bg-stone-100 lg:h-auto lg:w-1/2"
            >
              {SearchBarLocation}
              <LocationMap />
              <div className="absolute bottom-20 right-0 left-0 z-10 h-44 w-full drop-shadow-xl">
                <SwiperComponent />
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                damping: 35,
                stiffness: 100,
              }}
              className="flex h-1/2 w-full flex-col gap-y-5 rounded-[34px] lg:h-auto lg:w-1/2"
            >
              <div className="flex h-3/5 w-full flex-row">
                <div className="relative h-full w-8/12 overflow-hidden rounded-2xl ">
                  <Image
                    src={Image9}
                    alt={""}
                    className="object-cover transition-all duration-1000 ease-in-out hover:scale-110 hover:ease-out"
                    fill
                    quality={100}
                    priority={true}
                  ></Image>
                </div>
                <div className="flex h-full w-4/12 flex-col gap-y-5 overflow-hidden pl-5">
                  <div className="relative  h-1/3 w-full overflow-hidden rounded-2xl ">
                    <Image
                      src={image10}
                      alt={""}
                      className="object-cover transition-all duration-1000 ease-in-out hover:scale-110 hover:ease-out"
                      fill
                      sizes="(max-width: 1024px)30vw,15vw"
                    ></Image>
                  </div>
                  <div className="relative  h-1/3 w-full overflow-hidden rounded-2xl">
                    <Image
                      src={image11}
                      alt={""}
                      className="object-cover transition-all duration-1000 ease-in-out hover:scale-110 hover:ease-out"
                      fill
                      sizes="(max-width: 1024px)30vw,15vw"
                    ></Image>
                  </div>
                  <div className="relative  h-1/3 w-full overflow-hidden rounded-2xl">
                    <Image
                      src={image12}
                      alt={""}
                      className="object-cover transition-all duration-1000 ease-in-out hover:scale-110 hover:ease-out"
                      fill
                      sizes="(max-width: 1024px)30vw,15vw"
                    ></Image>
                  </div>
                </div>
              </div>
              <div className="flex h-2/5 w-full flex-col">
                <div className="my-5 flex h-3/5 w-full flex-row">
                  <div className="flex w-full flex-col gap-y-6">
                    <div className="flex flex-row justify-between text-2xl font-bold xl:text-3xl">
                      Site 5/187a ZliZlag Road, Alstonville, NSW 2477
                      <div className="ml-3 flex items-start gap-x-5 md:gap-x-20 lg:gap-x-7">
                        <FiShare2 className="h-8 w-8 cursor-pointer" />
                        <label>
                          <input
                            type={"checkbox"}
                            className="peer hidden h-full w-full cursor-pointer"
                            defaultChecked={false}
                          ></input>
                          <StarIcon className="peer h-8 w-8 cursor-pointer transition-all duration-300 peer-checked:scale-105 peer-checked:fill-orange-400 peer-checked:stroke-[0px]" />
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-row divide-x-2 divide-slate-500 text-xl font-bold">
                      <p className="mr-3 flex items-center text-xl sm:mr-4 xl:text-2xl">
                        $430,000
                      </p>
                      <div className="flex flex-row flex-wrap gap-x-4 truncate pl-3 sm:pl-5">
                        <div className="flex flex-row gap-x-2">
                          <BiBath className="h-6 w-6 xl:h-8 xl:w-8"></BiBath>
                          <div className="text-lg font-medium">2</div>
                        </div>
                        <div className="flex flex-row gap-x-2">
                          <MdOutlineDirectionsCarFilled className="h-6 w-6 xl:h-8 xl:w-8"></MdOutlineDirectionsCarFilled>
                          <div className="text-lg font-medium">1</div>
                        </div>
                        <div className="flex flex-row gap-x-2">
                          <MdBed className="h-6 w-6 xl:h-8 xl:w-8"></MdBed>
                          <div className="text-lg font-medium">4</div>
                        </div>
                        <div className="flex flex-row gap-x-2 truncate">
                          <BiRuler className="h-7 w-7 xl:h-8 xl:w-8"></BiRuler>
                          <div className="text-lg font-medium">500 km</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-2/5 w-full items-center">
                  <div
                    tabIndex={0}
                    className="group flex w-full cursor-pointer flex-row items-center justify-center gap-x-5 overflow-hidden rounded-3xl border-[2px] border-slate-700 px-8 py-4 font-medium transition-all duration-300 focus:bg-slate-100 focus:shadow-lg hover:bg-slate-100 active:scale-95 active:shadow-lg lg:w-72 lg:rounded-2xl 3xl:h-20"
                  >
                    <div className="transition-transform duration-300 group-focus:translate-x-4">
                      See more details
                    </div>
                    <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 ease-out group-focus:translate-x-32 group-focus:ease-in-out xs:group-focus:translate-x-96 md:group-focus:translate-x-[500px]  lg:group-focus:translate-x-24"></ArrowRightIcon>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
