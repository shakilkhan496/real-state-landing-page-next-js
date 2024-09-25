import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import FilterButton from "./FilterButton";

type Props = {};

export default function SearchBar({}: Props) {
  return (
    <div className="mx-auto flex max-w-[1100px] flex-col gap-y-3 rounded-3xl bg-stone-100/90 py-4 px-4 backdrop-blur-[7px] md:flex-row md:gap-y-6 md:gap-x-5 md:py-8 md:px-8 ">
      <div className="flex w-full flex-col items-center justify-center md:w-5/6 md:gap-y-3 lg:gap-y-5">
        {/* 1st Row */}
        <div className="my-2 flex flex-row items-center justify-center gap-x-5">
          <FilterButton title="Buy"></FilterButton>
          <FilterButton title="Rent"></FilterButton>
          <FilterButton title="Sold"></FilterButton>
          <FilterButton title="Address"></FilterButton>
          <FilterButton title="Agents"></FilterButton>
        </div>

        {/* 2nd row */}
        <div className="flex w-full flex-row justify-between divide-x-2 rounded-xl bg-white py-3 px-6 text-gray-500 shadow-lg md:rounded-2xl md:py-4">
          <div className="flex w-full flex-row items-center justify-center gap-x-3 text-sm font-medium">
            <MagnifyingGlassIcon className="mx-2 h-5 w-5 flex-none cursor-pointer text-gray-500 active:scale-95 md:mx-4"></MagnifyingGlassIcon>
            <input
              className="bg-whtite w-full border-0 outline-none"
              type={"text"}
              placeholder="Search suburb, postcode or state"
            ></input>
          </div>
          <div className="hidden w-[28%] cursor-pointer flex-row items-center justify-center gap-x-4 px-6 md:flex">
            <ChevronDownIcon className="h-4 w-4 text-gray-600"></ChevronDownIcon>
            <div className="truncate">Advanced filters</div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-end justify-center md:w-1/6">
        <div className="flex h-10 w-full cursor-pointer select-none items-center justify-center rounded-xl bg-slate-900 text-sm text-stone-50 transition-all duration-300 hover:bg-slate-800 active:scale-95 md:h-14 md:rounded-2xl">
          Search
        </div>
      </div>
    </div>
  );
}
