import React from "react";

type Props = {
  logo: JSX.Element;
  title: string;
  description: string;
};

export default function DescriptionCard({ logo, title, description }: Props) {
  return (
    <div className="relative mx-auto flex aspect-square w-[310px] cursor-pointer  select-none flex-col gap-y-6 overflow-hidden rounded-2xl bg-white px-6 py-7 text-slate-800 shadow-md 4xl:w-[380px]">
      {/* Logo & Decoration */}
      <div className="relative flex h-1/3 w-full items-center justify-start">
        {/* Logo */}
        <div className="absolute left-0 top-0 z-[1] flex aspect-square w-56 -translate-x-[32%] -translate-y-[32%] items-center justify-center rounded-full bg-gray-50">
          <div className="absolute m-12 flex aspect-square w-auto items-center justify-center rounded-full bg-gray-100">
            <div className="m-8 flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 p-5">
              {logo}
            </div>
          </div>
        </div>

        {/* Decoration Dots */}
        <div className="absolute top-0 right-0 grid grid-cols-2 gap-2">
          <div className="h-5 w-5 rounded-full bg-gray-100 md:h-6 md:w-6"></div>
          <div className="h-5 w-5 rounded-full bg-gray-100 md:h-6 md:w-6"></div>
          <div className="h-5 w-5 rounded-full bg-gray-100 md:h-6 md:w-6"></div>
          <div className="h-5 w-5 rounded-full bg-gray-100 md:h-6 md:w-6"></div>
          <div className="h-5 w-5 rounded-full bg-gray-100 md:h-6 md:w-6"></div>
          <div className="h-5 w-5 rounded-full bg-gray-100 md:h-6 md:w-6"></div>
        </div>
      </div>

      {/* title & desccription */}
      <div className="z-[2] flex flex-col gap-y-4">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-sm font-medium text-gray-500 2xl:text-base">
          {description}
        </div>
      </div>
    </div>
  );
}
