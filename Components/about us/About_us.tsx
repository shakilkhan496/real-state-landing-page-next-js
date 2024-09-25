"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import image1 from "../../public/Images/5.jpg";
import image2 from "../../public/Images/6.jpg";
import image3 from "../../public/Images/7.jpg";
import image4 from "../../public/Images/8.jpg";
type Props = {};

export default function AboutUs({}: Props) {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[2500px]">
        <div className="my-6 mx-5 flex flex-col md:mx-10 lg:mx-16 xl:mx-24">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              type: "spring",
              damping: 50,
              stiffness: 100,
            }}
            className="text-center text-xl font-semibold text-orange-500 xs:text-2xl sm:text-start"
          >
            About us
          </motion.div>
          <div className="flex flex-col gap-y-16 lg:flex-row lg:gap-x-16 xl:gap-x-24">
            {/* left side */}
            <div className="mt-10 flex w-full flex-col items-center justify-start gap-y-10 sm:items-start lg:w-1/2">
              <motion.div
                initial={{ x: "-70%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                }}
                className="text-center text-4xl font-extrabold xs:text-[50px] xs:leading-[60px] sm:text-start sm:text-[60px] sm:leading-[70px] md:text-[70px] md:leading-[90px]"
              >
                We&prime;re here to
                <br /> help you find your dream home.
              </motion.div>

              <motion.div
                initial={{ x: "-70%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                }}
                className="text-center font-medium sm:pr-16 sm:text-start"
              >
                Whether you&prime;re looking for a new place to call home, or
                just want to do a little remodeling on your current abode,
                we&prime;ll make sure you find exactly what you want.
              </motion.div>

              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  damping: 30,
                  stiffness: 100,
                }}
              >
                <div
                  tabIndex={0}
                  className="group relative flex w-full cursor-pointer flex-row items-center justify-center gap-x-5 overflow-hidden rounded-2xl border-[2px] border-slate-700 px-8 py-4 font-medium transition-all duration-300 focus:bg-slate-100 focus:shadow-lg hover:bg-slate-100 active:scale-95 active:shadow-lg sm:w-52"
                >
                  <div className="transition-transform duration-300 group-focus:translate-x-4 group-active:translate-x-4">
                    Learn more
                  </div>
                  <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 ease-out group-focus:translate-x-40 group-focus:ease-in-out xs:group-focus:translate-x-96"></ArrowRightIcon>
                </div>
              </motion.div>
            </div>
            {/* right side */}
            <div className="relative flex h-[650px] w-full flex-row gap-x-6 lg:w-1/2 4xl:h-[900px]">
              {/* col1 */}
              <div className="flex w-1/2 flex-col items-end justify-center gap-y-6 xs:w-7/12">
                <motion.div
                  initial={{ y: "-30%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    damping: 60,
                    stiffness: 100,
                    type: "spring",
                  }}
                  className="relative h-4/6 w-full overflow-hidden rounded-3xl shadow-gray-500/40 transition-shadow duration-500 ease-in hover:shadow-lg xs:w-8/12"
                >
                  <Image
                    src={image2}
                    alt={""}
                    fill
                    className="object-cover transition-all duration-[3000ms] ease-in-out hover:scale-110 hover:ease-out"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: "-30%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    damping: 60,
                    stiffness: 100,
                    type: "spring",
                  }}
                  className="relative h-2/6 w-full overflow-hidden rounded-3xl shadow-gray-500/40 transition-shadow duration-500 ease-in hover:shadow-lg"
                >
                  <Image
                    src={image1}
                    alt={""}
                    fill
                    className="object-cover object-[center_bottom] transition-all duration-[3000ms] ease-in-out hover:scale-110 hover:ease-out"
                  />
                </motion.div>
              </div>
              {/* col2 */}
              <div className="flex w-1/2 items-center xs:w-5/12">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    damping: 60,
                    stiffness: 100,
                    type: "spring",
                    delay: 0.3,
                  }}
                  className="relative mt-20 h-4/6 w-full overflow-hidden rounded-3xl shadow-gray-500/40 transition-shadow duration-500 ease-in hover:shadow-lg xs:mx-2"
                >
                  <Image
                    src={image3}
                    alt={""}
                    fill
                    className="object-cover transition-all duration-[3000ms] ease-in-out hover:scale-110 hover:ease-out "
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  damping: 60,
                  stiffness: 100,
                  type: "spring",
                  delay: 1,
                }}
                className="absolute right-0 bottom-10 flex h-20 w-[280px] select-none flex-row items-center justify-start gap-x-4 rounded-3xl bg-white px-5 shadow-lg shadow-gray-600/20 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-gray-600/20 xs:right-10 xs:h-24 xs:w-[330px]"
              >
                <div className="flex cursor-pointer items-center justify-center rounded-full bg-red-100 p-5 transition-all duration-300 active:scale-95">
                  <PlayIcon className="h-4 w-4 animate-pulse text-orange-500 sm:h-5 sm:w-5"></PlayIcon>
                </div>
                <p className="text-lg font-semibold xs:font-bold sm:text-xl">
                  Watch documentary
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
