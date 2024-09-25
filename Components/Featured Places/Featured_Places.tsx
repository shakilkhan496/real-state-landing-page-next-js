"use client";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/bundle";

import FeaturedPlaces_Swiper from "./FeaturedPlaces_Swiper";
import { motion } from "framer-motion";

type Props = {};

export default function Featured_Places({}: Props) {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[2500px]">
        <div className="my-6 mx-0 flex flex-col gap-y-6 xs:mx-5 md:mx-10 md:gap-y-24 lg:mx-16 xl:mx-24">
          {/* Row 1 */}
          <div className="mx-5 flex flex-col items-center justify-center gap-y-8 xs:mx-0 md:flex-row md:justify-between md:gap-y-0">
            {/* Col 1.1 */}
            <motion.div
              viewport={{ once: true }}
              initial={{ x: "-70%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                type: "spring",
                damping: 25,
                stiffness: 100,
              }}
              className="flex flex-1 flex-col gap-y-3 text-center text-xl font-semibold text-orange-500 xs:text-2xl sm:text-start"
            >
              <p>Featured Places</p>
              <div className="text-center text-4xl font-extrabold text-slate-800 xs:text-[50px] xs:leading-[60px] sm:text-start sm:text-[60px] sm:leading-[70px] md:text-[70px] md:leading-[90px]">
                You might like these
              </div>
            </motion.div>

            {/* Col 1.2 */}
            <motion.div
              viewport={{ once: true }}
              initial={{ x: "50%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                type: "spring",
                damping: 25,
                stiffness: 100,
              }}
              className=""
            >
              <div
                tabIndex={0}
                className="group flex w-full cursor-pointer flex-row items-center justify-center gap-x-5 overflow-hidden rounded-2xl border-[2px] border-slate-700 px-8 py-4 font-medium transition-all duration-300 focus:bg-slate-100 focus:shadow-lg hover:bg-slate-100 active:scale-95 active:shadow-lg md:w-52 "
              >
                <div className="transition-transform duration-300 group-focus:translate-x-4 group-active:translate-x-4">
                  See more
                </div>
                <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 ease-out group-focus:translate-x-40 group-focus:ease-in-out xs:group-focus:translate-x-96 md:group-focus:translate-x-[500px] lg:group-focus:translate-x-16"></ArrowRightIcon>
              </div>
            </motion.div>
          </div>

          {/* Row 2 */}
          <motion.div
            viewport={{ once: true }}
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              damping: 40,
              stiffness: 100,
            }}
            className="flex items-center justify-center"
          >
            <FeaturedPlaces_Swiper />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
