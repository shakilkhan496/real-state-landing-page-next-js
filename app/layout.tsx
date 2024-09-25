"use client";
import { Raleway } from "@next/font/google";
import Image from "next/image";
import { AnalyticsWrapper } from "../Components/Analytics/analytics";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header";
import background from "../public/Images/Background/Lines2.png";
import { motion } from "framer-motion";

import "../styles/globals.css";
const raleway = Raleway({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-orange-400">
      <head>
        <meta
          property="og:title"
          content="theState: Your One-Stop Shop for all Real Estate Needs in the Region"
        />
        <meta
          property="og:description"
          content="We offer expert guidance on all aspects of your transaction so that you can feel secure in your decision and confident in our work."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dttrs30gt/image/upload/v1673856350/theState/og_image_jhokdu.png"
        />
        <meta property="og:url" content="https://the-state.vercel.app" />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`bg-[#FAFAFA] ${raleway.className} relative overflow-x-hidden selection:bg-slate-300`} //i had to removed h-screen for Framer-motion to work
      >
        {/* decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ type: "spring", duration: 2, bounce: 0.2 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 left-0 right-0 -z-10 mx-auto flex aspect-video max-w-[2500px]"
        >
          <Image src={background} fill alt={""}></Image>
        </motion.div>
        <header className="absolute top-0 right-0 left-0 z-50">
          <Header />
        </header>
        <section className="mt-28 ">{children}</section>
        <footer id="Footer" className="mt-40 w-full md:mt-60">
          <Footer />
        </footer>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
