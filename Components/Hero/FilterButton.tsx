import React from "react";

type Props = {
  title: string;
};

export default function FilterButton({ title }: Props) {
  const radio = `Icon-radio-${title.replace(/\s/g, "")}`;
  return (
    <div
      className={`group flex flex-none flex-col items-center justify-center gap-2 text-gray-500 transition-all duration-500 hover:text-black/80 md:mx-2`}
    >
      <input
        type="radio"
        id={radio}
        name="hosting"
        value={radio}
        className="peer absolute hidden transition-all duration-300 group-active:scale-95"
        required
      />
      <label
        htmlFor={radio}
        className="flex cursor-pointer flex-col items-center justify-center gap-2 transition-all duration-300 group-active:scale-95 peer-checked:cursor-default peer-checked:text-black"
      >
        <p className="truncate text-sm font-medium md:text-base">{title}</p>
      </label>
      <div className="h-[4px] w-9/12 rounded-full transition-all duration-500 group-hover:bg-[#888888]/40 peer-checked:bg-slate-700 md:h-[6px] " />
    </div>
  );
}
