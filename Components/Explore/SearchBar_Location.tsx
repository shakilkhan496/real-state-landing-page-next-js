import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

export default async function SearchBar_Location({}: Props) {
  let Location: any = "";
  const res = await fetch(
    "https://api.maptiler.com/geolocation/ip.json?key=" +
      process.env.maptiler_Key
  );
  Location = await res.json();
  let country = Location?.country ?? "Not found";
  let city = Location?.city ?? " ";
  return (
    <div className="absolute top-6 left-2 z-10 mx-auto flex h-[65px] w-10/12 flex-row items-center justify-between overflow-hidden rounded-3xl bg-white px-2 py-2 drop-shadow-xl sm:right-0 sm:left-0 sm:h-[75px] sm:w-9/12">
      <div className="flex flex-row items-center justify-start overflow-clip">
        <div className="flex w-10 items-center justify-center xl:w-16">
          <MapPinIcon className="h-6 w-6 text-slate-800"></MapPinIcon>
        </div>
        <div className="flex items-center truncate text-gray-400">
          <span className="text-sm font-bold text-slate-800 sm:text-base">
            Current location:
          </span>
          &nbsp;{country + ", " + city}
        </div>
      </div>
      <div className="flex h-full w-16 cursor-pointer items-center justify-center rounded-3xl bg-slate-800 transition-all duration-300 active:scale-95">
        <MagnifyingGlassIcon className="h-5 w-5 text-stone-50 sm:h-6 sm:w-6"></MagnifyingGlassIcon>
      </div>
    </div>
  );
}
