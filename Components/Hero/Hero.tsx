"use client";
import {
  BoltIcon,
  ClockIcon,
  GlobeAltIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";

import { FaRegCompass } from "react-icons/fa";
import Background from "../../public/Images/4.png";
import Background2 from "../../public/Images/2.png";
import SearchBar from "./SearchBar";
import DescriptionCard from "./DescriptionCard";
import { TfiMedall } from "react-icons/tfi";
type Props = {};

export default function Hero({}: Props) {
  let { scrollY } = useScroll();
  let springY = useSpring(scrollY, { damping: 20, stiffness: 100 });
  let scaleSpring = useSpring(scrollY, { damping: 28, stiffness: 100 });
  let springY2 = useSpring(scrollY, { damping: 38, stiffness: 100 });

  let backgroundSpring = useSpring(scrollY, { damping: 18, stiffness: 100 });
  let y2 = useTransform(springY2, [0, 500], ["0%", "100%"]);
  let y2Opacity = useTransform(springY2, [300, 500], ["100%", "0%"]);

  let y = useTransform(springY, [0, 500], ["0%", "40%"]);
  let scaley = useTransform(scaleSpring, [0, 500], ["100%", "70%"]);
  let scale = useTransform(scaleSpring, [0, 450], ["100%", "120%"]);

  let background = useTransform(backgroundSpring, [0, 1100], ["0%", "-14%"]); //go slightly up

  return (
    <div className="w-full">
      <div className="relative mx-auto max-w-[2500px]">
        <div className="relative mx-5 flex h-[1100px] font-medium text-slate-800 md:mx-10 lg:mx-16 xl:mx-24">
          {/*  Z-0 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0 }}
            viewport={{ once: true }}
            className="absolute right-[5%] top-[8%] z-0 hidden w-96 lg:flex xl:text-lg"
          >
            We offer expert guidance on all aspects of your transaction so that
            you can feel secure in your decision and confident in our work.
          </motion.div>

          {/* Z-1 */}
          <motion.div
            style={{ y, scale: scaley, originY: 0 }}
            initial={{ opacity: 0.5, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: 0.2,
            }}
            className="absolute -left-10 right-0 top-[18%] z-[1] mx-auto flex aspect-square h-[500px] w-[500px] origin-center items-center justify-center rounded-full bg-gradient-to-b from-orange-500/70 xs:left-0 lg:left-auto lg:-right-24 lg:h-[800px] lg:w-[800px]"
          ></motion.div>
          <motion.div
            style={{ y: y2, opacity: y2Opacity }}
            initial={{ y: 150, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              type: "spring",
              damping: 30,
              stiffness: 100,
              delay: 0.4,
            }}
            className="absolute right-0 left-0 top-[22%] z-[7] mx-auto flex w-40 flex-col items-start gap-y-12 py-10 text-stone-100 md:left-auto md:right-52 md:w-auto lg:text-slate-600 xl:z-[1] xl:text-slate-800"
          >
            <div className="flex gap-x-5">
              <FaRegCompass className="my-1 h-6 w-6 4xl:h-8 4xl:w-8" />
              <div className="flex flex-col items-stretch">
                <div className="text-2xl font-semibold 4xl:text-4xl">2K+</div>
                <div className="text-sm font-medium 4xl:text-lg">
                  Places worldwide
                </div>
              </div>
            </div>
            <div className="flex gap-x-5">
              <UserIcon className="my-1 h-6 w-6 stroke-[2px] 4xl:h-8 4xl:w-8" />
              <div className="flex flex-col items-stretch">
                <div className="text-2xl font-semibold 4xl:text-4xl">1M</div>
                <div className="text-sm font-medium 4xl:text-lg">
                  Satisfied clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-5">
              <BoltIcon className="my-1 h-6 w-6 stroke-[1.5px] 4xl:h-8 4xl:w-8" />
              <div className="flex flex-col items-stretch">
                <div className="text-2xl font-semibold 4xl:text-4xl">10x</div>
                <div className="text-sm font-medium 4xl:text-lg">
                  More effective
                </div>
              </div>
            </div>
          </motion.div>

          {/* was Z-3->Z-5 */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }} //-900
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              type: "spring",
              damping: 30,
              stiffness: 100,
            }}
            style={{ scale }}
            className="relative top-[0%] z-[7] mx-auto h-fit w-[550px] origin-top text-center text-[28px] font-extrabold xs:text-[32px] sm:text-[46px] md:absolute md:top-[5%] md:text-start lg:origin-top-left 2xl:top-[5%] 2xl:w-[850px] 2xl:text-[72px]"
          >
            Your first and{" "}
            <span className="text-orange-500 underline">last</span> stop for all
            real estate information in the area.
          </motion.div>

          {/* Z-4 */}
          <div className="absolute top-[35%] right-0 left-0 z-[6]">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 30,
                stiffness: 60,
              }}
              style={{ y: background }}
            >
              <Image
                src={Background2}
                alt={""}
                width={2000}
                height={2000}
                quality={100}
                priority={true}
                className={
                  "mx-auto aspect-square min-w-[630px] -scale-x-125 scale-y-125 object-cover md:aspect-auto"
                }
              ></Image>
              <div className="absolute -bottom-56 left-0 right-0 h-36 w-full bg-[#fafafa]"></div>
            </motion.div>
            <div className="absolute -bottom-60 right-0 left-0 z-[10] mx-auto">
              <motion.div
                initial={{ x: 1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 1000, opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 300,
                  stiffness: 500,
                }}
                className="mx-auto flex max-w-[2000px] flex-row items-center justify-start gap-x-12 overflow-x-scroll py-6 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-stone-300 scrollbar-thumb-rounded-full"
              >
                <div className="mx-1 flex-1">
                  <DescriptionCard
                    logo={<TfiMedall className="h-full w-full rounded-lg" />}
                    title={"Professional Company"}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis lorem porttitor sit mattis."
                    }
                  />
                </div>
                <div className="mx-1 flex-1">
                  <DescriptionCard
                    logo={<ClockIcon className="h-full w-full rounded-lg" />}
                    title={"24 Hours support"}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis lorem porttitor sit mattis."
                    }
                  />
                </div>
                <div className="mx-1 flex-1">
                  <DescriptionCard
                    logo={<GlobeAltIcon className="h-full w-full rounded-lg" />}
                    title={"Service in various countries"}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis lorem porttitor sit mattis."
                    }
                  />
                </div>
                <div className="mx-1 flex-1">
                  <DescriptionCard
                    logo={<BoltIcon className="h-full w-full rounded-lg" />}
                    title={"Efficient process"}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis lorem porttitor sit mattis."
                    }
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className="absolute top-[700px] mx-auto w-full lg:h-[300px] xl:h-[400px] 2xl:top-[900px]">
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: 0,
          }}
          className="sticky top-10 z-[7] sm:mx-5 "
        >
          <SearchBar />
        </motion.div>
      </div>
    </div>
  );
}
