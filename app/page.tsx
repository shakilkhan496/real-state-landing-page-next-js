import React from "react";
import Hero from "../Components/Hero/Hero";
import About_us from "../Components/about us/About_us";
import Explore from "../Components/Explore/Explore";
import Featured_Places from "../Components/Featured Places/Featured_Places";
import Testimonials from "../Components/Testimonials/Testimonials";
import GetStarted from "../Components/GetStarted/GetStarted";
import SearchBar_Location from "../Components/Explore/SearchBar_Location";
type Props = {};

export default function HomePage({}: Props) {
  return (
    <div>
      {/* Hero section */}
      <section id="hero" className="">
        {/* <Use_Scroll> */}
        <Hero />
        {/* </Use_Scroll> */}
      </section>
      <section
        id="aboutUs"
        className="mt-[340px] lg:mt-[400px] xl:mt-[600px] 2xl:mt-[800px] 3xl:mt-[900px] 4xl:mt-[1200px]"
      >
        <About_us />
      </section>

      <section id="Explore" className="mt-40">
        {/* @ts-expect-error Server Component */}
        <Explore SearchBarLocation={<SearchBar_Location />} />
      </section>
      <section id="Featured_Places" className="mt-40 md:mt-60">
        <Featured_Places />
      </section>
      <section id="Testimonials" className="mt-40 md:mt-60">
        <Testimonials />
      </section>
      <section id="GetStarted" className="mt-40 md:mt-60">
        <GetStarted />
      </section>
    </div>
  );
}
