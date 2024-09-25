"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";
import "../../styles/globals.css";
import cssMod from "../../styles/Home.module.css";
import "swiper/css/bundle";
import image1 from "../../public/Images/5.jpg";
import image2 from "../../public/Images/6.jpg";
import image3 from "../../public/Images/7.jpg";
import image4 from "../../public/Images/8.jpg";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";
type Props = {};

// export default function SwiperComponent({}: Props) {

// }

export default class SwiperComponent extends React.Component {
  render() {
    const Cards = Array(4).fill(0);
    return (
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className={`${cssMod["swiper"]} z-0 w-[100%]`}
      >
        {Cards.map((value: number, i: number) => {
          return (
            <SwiperSlide key={i} className={`${cssMod["swiper-slide"]} `}>
              <div className="relative mx-auto flex w-full cursor-grab select-none flex-row items-center justify-start gap-x-2 overflow-hidden rounded-3xl px-4 text-slate-800 xs:gap-x-6 sm:gap-x-12">
                <div className="relative flex aspect-square w-20 items-center md:w-40">
                  {/* w-2/5 4xl:w-1/5 */}
                  <Image
                    src={image2}
                    style={{ aspectRatio: 1 / 1 }}
                    alt={""}
                    width={150}
                    height={150}
                    className="aspect-square flex-none rounded-2xl object-cover"
                  />
                </div>

                <div className="flex h-[80%] w-3/5 flex-auto flex-col sm:gap-y-1 4xl:w-4/5">
                  <div className="flex flex-1 flex-row items-center justify-between text-xs font-semibold xs:text-sm md:text-xl">
                    House&nbsp;{i + 1}
                    <StarIcon className="h-5 w-5 transition-all duration-300 active:scale-95 active:fill-orange-400 active:stroke-[0px] md:h-7 md:w-7"></StarIcon>
                  </div>
                  <div className="flex-1 text-sm font-bold xs:text-base md:text-2xl">
                    Lorem ipsum, ZligZlag avenue
                  </div>
                  <div className="w-full flex-1 text-end text-sm font-semibold xs:text-base md:text-2xl">
                    $430,000
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
}
