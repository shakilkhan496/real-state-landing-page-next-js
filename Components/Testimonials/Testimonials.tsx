"use client";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { profile } from "console";
import Image from "next/image";
import React from "react";

import profile1 from "../../public/Images/Places/profile pictures/1.png";
import profile2 from "../../public/Images/Places/profile pictures/2.png";
import profile3 from "../../public/Images/Places/profile pictures/3.png";

import profile4 from "../../public/Images/Places/profile pictures/5.png";
import profile5 from "../../public/Images/Places/profile pictures/6.png";

import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";

type Props = {};

export default function Testimonials({}: Props) {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[2500px]">
        <div className="my-6 mx-5 flex h-[1200px] flex-col md:mx-10 lg:mx-16 lg:h-[900px] xl:mx-24">
          {/* Row 1 */}
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
            className="flex justify-center text-center text-xl font-semibold text-orange-500 xs:text-2xl sm:justify-start sm:text-start"
          >
            <p>Testimonials</p>
          </motion.div>

          {/* Row 2 */}
          <div className="flex h-full w-full flex-col items-center justify-center gap-y-12 gap-x-8 lg:flex-row lg:gap-y-0">
            {/* Col 2.1 */}
            <motion.div
              viewport={{ once: true }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                type: "spring",
                damping: 30,
                stiffness: 100,
              }}
              className="flex w-full flex-col gap-y-6 sm:gap-y-12 lg:h-full lg:w-2/6"
            >
              <div className="mt-10 text-center text-4xl font-extrabold text-slate-800 xs:text-5xl sm:text-start sm:text-6xl lg:text-5xl xl:text-[70px] xl:leading-[90px]">
                What People Are Saying About Us
              </div>

              <div className="relative flex h-24 items-center justify-center sm:items-start sm:justify-start">
                <div className="relative h-4/6 w-64 overflow-visible sm:h-full sm:w-80 lg:h-4/6 lg:w-64 xl:h-full xl:w-80">
                  <div className="absolute top-0 bottom-0 left-0 h-16 w-16 overflow-clip rounded-full ring-4 ring-white sm:h-20 sm:w-20 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
                    <Image
                      src={profile1}
                      alt={""}
                      width={150}
                      height={150}
                      className="h-full w-full object-cover"
                    ></Image>
                  </div>
                  <div className="absolute top-0 bottom-0 left-16 h-16 w-16 overflow-clip rounded-full ring-4 ring-white sm:h-20 sm:w-20 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
                    <Image
                      src={profile2}
                      alt={""}
                      width={150}
                      height={150}
                      className="h-full w-full object-cover"
                    ></Image>
                  </div>
                  <div className="absolute top-0 bottom-0 left-[128px] h-16 w-16 overflow-clip rounded-full ring-4 ring-white sm:h-20 sm:w-20 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
                    <Image
                      src={profile3}
                      alt={""}
                      width={150}
                      height={150}
                      className="h-full w-full object-cover"
                    ></Image>
                  </div>
                  <div className="absolute top-0 bottom-0 left-[188px] flex h-16 w-16 items-center justify-center overflow-clip rounded-full bg-slate-800 text-2xl font-semibold text-[#fafafa] ring-4 ring-[#fafafa] sm:h-20 sm:w-20 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
                    99+
                  </div>
                </div>
              </div>
              <div className="text-center text-base font-medium sm:pr-16 sm:text-start md:text-lg">
                Whether you&apos;re looking for a new place to call home. or
                just want to do a little remodeling on your current abode, weill
                make sure you find exactly what you want.
              </div>
              <div className="hidden h-24 w-full items-center justify-start lg:flex">
                <div
                  tabIndex={0}
                  className="group flex h-16 w-full cursor-pointer flex-row items-center justify-center gap-x-5 overflow-hidden rounded-3xl border-[2px] border-slate-700 px-8 py-4 font-medium transition-all duration-300 focus:bg-slate-100 focus:shadow-lg hover:bg-slate-100 active:scale-95 active:shadow-lg lg:w-72"
                >
                  <div className="transition-transform duration-300 group-focus:translate-x-4">
                    Read all reviews
                  </div>
                  <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 ease-out group-focus:translate-x-32 group-focus:ease-in-out xs:group-focus:translate-x-96 md:group-focus:translate-x-[500px] lg:group-focus:translate-x-24"></ArrowRightIcon>
                </div>
              </div>
            </motion.div>

            {/* Col 2.2 */}
            <div className="relative h-full w-full overflow-hidden lg:w-4/6">
              <div className="grid h-full w-full grid-cols-1 gap-8 sm:grid-cols-2">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ y: 500, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    damping: 37,
                    stiffness: 100,
                  }}
                  className="flex flex-col gap-y-8"
                >
                  <TestimonialCard
                    name="Bowen Ala"
                    username="bowen_ala"
                    profilepic={profile4}
                    rating={4.5}
                  />
                  <TestimonialCard
                    name={"Jimi Nurul"}
                    username={"jimi_nurul"}
                    profilepic={profile5}
                    rating={4.9}
                  />
                  <TestimonialCard
                    name={"Karter Gerrard"}
                    username={"karter_gerrard"}
                    profilepic={profile1}
                    rating={4.9}
                  />
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  initial={{ y: 500, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    damping: 50,
                    stiffness: 100,
                    delay: 0.3,
                  }}
                  className="flex flex-col gap-y-8"
                >
                  <TestimonialCard
                    name={"Emile Ste"}
                    username={"emile_ste"}
                    profilepic={profile5}
                    rating={4.1}
                    Comment={
                      "Here are no words to express my huge gratitude to you for the advice you provided and for being so accommodating and responsive to all the requests regarding the properties I viewed and particularly the property I bought, here are no words to express my huge gratitude to you for the advice you provided and for being so accommodating and responsive to all the requests regarding the properties I viewed and particularly the property I bought!"
                    }
                  />
                  <TestimonialCard
                    name="Norm Van"
                    username="norm_van"
                    profilepic={profile2}
                    rating={4.8}
                    Comment={
                      "Here are no words to express my huge gratitude to you for the advice you provided and for being so accommodating and responsive to all the requests regarding the properties I viewed and particularly the property I bought!"
                    }
                  />
                  <TestimonialCard
                    name="Mirza Hatim"
                    username="mirza_hatim"
                    profilepic={profile3}
                    rating={4.8}
                  />
                </motion.div>
                {/* <div className="flex h-96 w-full flex-col rounded-3xl border-[3px] border-gray-300 bg-[#fafafa]"></div> */}
              </div>

              {/* fog */}
              <div className="absolute bottom-0 mx-auto flex h-60 w-full items-end bg-gradient-to-t from-[#fafafa]"></div>
            </div>

            {/* Col 2.3 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                type: "spring",
                damping: 30,
                stiffness: 100,
                delay: 0.5,
              }}
              className="flex h-20 w-full items-center lg:hidden"
            >
              <div
                tabIndex={0}
                className="group flex h-16 w-full cursor-pointer flex-row items-center justify-center gap-x-5 overflow-hidden rounded-3xl border-[2px] border-slate-700 px-8 py-4 font-medium transition-all duration-300 focus:bg-slate-100 focus:shadow-lg hover:bg-slate-100 active:scale-95 active:shadow-lg lg:w-72"
              >
                <div className="transition-transform duration-300 group-focus:translate-x-4">
                  Read all reviews
                </div>
                <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 ease-out group-focus:translate-x-32 group-focus:ease-in-out xs:group-focus:translate-x-96 md:group-focus:translate-x-[500px] lg:group-focus:translate-x-24"></ArrowRightIcon>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    // What People Are Saying About Us
  );
}
