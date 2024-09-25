"use client";
import Image from "next/image";
import React from "react";
import image1 from "../../public/Images/Get Started/1.jpg";
import image2 from "../../public/Images/Get Started/2.jpg";
import image3 from "../../public/Images/Get Started/3.jpg";

import background from "../../public/Images/Background/Lines2.png";
import { motion } from "framer-motion";

type Props = {};

export default function GetStarted({}: Props) {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[2500px]">
        <div className="mx-5 flex h-[500px] flex-col md:mx-10 lg:mx-16 xl:mx-24">
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              type: "spring",
              damping: 50,
              stiffness: 100,
            }}
            className="group/parent relative flex h-full flex-col items-center gap-y-12 overflow-hidden rounded-[50px] bg-slate-900 px-10 py-12 lg:flex-row lg:gap-y-0 lg:gap-x-8 lg:overflow-visible xl:gap-x-20 xl:px-20"
          >
            {/* Left */}
            <div className="absolute -top-12 right-0 left-0 w-full transition-all duration-[3000ms] group-hover/parent:scale-95 lg:relative lg:z-10 lg:w-1/2 lg:drop-shadow-2xl lg:group-hover/parent:drop-shadow-md">
              <div className="relative mx-auto flex h-[650px] w-full max-w-[680px] flex-row gap-x-6 transition-all duration-[3000ms]">
                {/* col1 */}
                <div className="flex w-1/2 flex-col items-end justify-center gap-y-6 xs:w-7/12">
                  <div className="relative flex h-[65%] w-full items-center overflow-hidden rounded-3xl shadow-gray-500/40 transition-all duration-500 ease-in xs:w-8/12">
                    <Image
                      src={image2}
                      alt={""}
                      fill
                      className="object-cover transition-all duration-[3000ms] ease-in-out hover:scale-110 hover:ease-out"
                    />
                  </div>
                  <div className="relative flex h-[35%] w-full items-center overflow-hidden rounded-3xl shadow-gray-500/40 transition-all duration-500 ease-in">
                    <Image
                      src={image1}
                      alt={""}
                      fill
                      className="object-cover transition-all duration-[3000ms] ease-in-out hover:scale-110 hover:ease-out"
                    />
                  </div>
                </div>
                {/* col2 */}
                <div className="flex w-1/2 items-center xs:w-5/12">
                  <div className="relative mt-12 flex h-4/6 w-full items-center overflow-hidden rounded-3xl shadow-gray-500/40 transition-all duration-500 ease-in xs:mx-2">
                    <Image
                      src={image3}
                      alt={""}
                      fill
                      className="object-cover transition-all duration-[3000ms] ease-in-out hover:scale-110 hover:ease-out "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="absolute right-0 left-0 top-0 z-10 flex h-full select-none flex-col items-center justify-center gap-y-12 bg-gradient-radial from-gray-500/70 to-transparent transition-all duration-[3000ms] group-hover/parent:scale-110 lg:relative lg:w-1/2 lg:items-start lg:bg-transparent lg:from-transparent lg:group-hover/parent:scale-100 ">
              <div className="px-4 text-center text-xl font-bold text-stone-50 xs:text-3xl sm:px-0 lg:text-start lg:text-5xl 3xl:text-6xl">
                Make your dream <span className="text-orange-500">living</span>{" "}
                come true.
              </div>
              <div className="mx-12 flex w-32 cursor-pointer select-none items-center justify-center rounded-2xl py-4 text-base text-stone-100 transition-all duration-300 hover:bg-slate-800 active:scale-95 xs:w-40 xs:text-lg ">
                Get Started
              </div>
            </div>
            {/* Background */}
            <div className="absolute top-0 right-0 left-0 h-full w-full overflow-hidden rounded-[50px] transition-all duration-[3000ms] group-hover/parent:scale-110 lg:group-hover/parent:scale-100">
              <div className="absolute top-0 left-0 right-0 z-0 mx-auto flex aspect-video max-w-[2500px] blur-[2px]">
                <Image
                  src={background}
                  fill
                  sizes="(max-width: 1024px)30vw,15vw"
                  alt={""}
                ></Image>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
