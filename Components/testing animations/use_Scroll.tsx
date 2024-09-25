"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
type Props = {
  children?: React.ReactNode;
};

export default function Use_Scroll({ children }: Props) {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  console.log("Scroll progress val: ", y);
  return <motion.div style={{ y }}>{children}</motion.div>;
}
