import React from "react";
import { TbBrandTelegram } from "react-icons/tb";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[2500px]">
        <div className="my-10 mx-5 flex flex-col space-y-4 md:mx-10 lg:mx-16 lg:h-[320px] lg:flex-row lg:space-x-10 xl:mx-24 xl:space-x-28">
          <div className="flex h-full flex-col items-center justify-start gap-y-4 md:items-start lg:w-1/3 xl:w-2/5">
            <div className="flex flex-none items-center justify-center text-3xl font-bold text-slate-800">
              thestate
              <div className="text-3xl text-orange-500">.</div>
            </div>

            <div className="text-start text-base font-medium md:text-lg lg:text-base xl:text-lg">
              We offer expert guidance on all aspects of your transaction so
              that you can feel secure in your decision and confident in our
              work.
            </div>
            <div className="py-10">
              <div className="flex h-8 flex-row items-center gap-x-8 text-slate-800 transition-all duration-300">
                <TbBrandTelegram
                  className={
                    "h-6 w-6 cursor-pointer transition-all duration-300 hover:scale-110 hover:text-sky-700 hover:drop-shadow-tel"
                  }
                />
                <CgFacebook
                  className={
                    "h-6 w-6 cursor-pointer transition-all duration-300 hover:scale-110 hover:text-blue-700 hover:drop-shadow-face"
                  }
                />
                <FaTwitter
                  className={
                    "h-6 w-6 cursor-pointer transition-all duration-300 hover:scale-110 hover:text-cyan-500 hover:drop-shadow-twit"
                  }
                />
                <FaInstagram
                  className={
                    "h-6 w-6 cursor-pointer transition-all duration-300 hover:scale-110 hover:text-orange-600 hover:drop-shadow-inst"
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-row flex-wrap items-start justify-between gap-y-6 gap-x-6 xs:justify-start sm:flex-nowrap sm:gap-y-0 lg:w-2/3 lg:items-center lg:justify-center xl:w-3/5">
            {/* Links */}
            <div className="flex h-full flex-col gap-y-6 sm:w-1/3">
              <div className="text-base font-bold sm:text-2xl">
                Usefull links
              </div>
              <div className="flex flex-row items-center gap-x-4 text-sm font-medium md:text-lg lg:text-base xl:text-lg">
                <ChevronRightIcon className="h-5 w-5" />
                About Us
              </div>
              <div className="flex flex-row items-center gap-x-4 text-sm font-medium md:text-lg lg:text-base xl:text-lg">
                <ChevronRightIcon className="h-5 w-5" />
                How we work
              </div>
              <div className="flex flex-row items-center gap-x-4 truncate text-sm font-medium md:text-lg lg:text-base xl:text-lg">
                <ChevronRightIcon className="h-5 w-5" />
                Terms & Conditions
              </div>
              <div className="flex flex-row items-center gap-x-4 text-sm font-medium md:text-lg lg:text-base xl:text-lg">
                <ChevronRightIcon className="h-5 w-5" />
                FAQ
              </div>
            </div>

            {/* Content */}
            <div className="flex h-full flex-col gap-y-6 sm:w-1/3">
              <div className="text-base font-bold sm:text-2xl">Content</div>
              <div className="flex flex-row items-center gap-x-4 text-sm font-medium md:text-lg lg:text-base xl:text-lg">
                <ChevronRightIcon className="h-5 w-5" />
                Home
              </div>
              <div className="flex flex-row items-center gap-x-4 text-sm font-medium md:text-lg lg:text-base xl:text-lg">
                <ChevronRightIcon className="h-5 w-5" />
                Browse Product
              </div>
              <div className="flex flex-row items-center gap-x-4 truncate text-sm font-medium md:text-lg lg:text-base xl:text-lg">
                <ChevronRightIcon className="h-5 w-5" />
                Blog
              </div>
            </div>

            {/* Contact Us */}
            <div className="flex h-full  w-full flex-col gap-y-6 sm:w-1/3">
              <div className="text-base font-bold sm:text-2xl">Contact Us</div>
              <div className="flex flex-row items-center gap-x-4 text-sm font-medium md:text-lg lg:text-base xl:text-lg">
                <ChevronRightIcon className="h-5 w-5" />
                thestate@real.com
              </div>
              <div className="flex flex-row items-center gap-x-4 text-sm font-medium md:text-lg lg:text-base xl:text-lg">
                <ChevronRightIcon className="h-5 w-5" />
                000-000-000
              </div>
              <div className="flex flex-row items-center gap-x-4 truncate text-sm font-medium md:text-lg lg:text-base xl:text-lg">
                <ChevronRightIcon className="h-5 w-5" />
                Social media
              </div>
              <div className="flex flex-row items-center gap-x-4 truncate text-sm font-medium md:text-lg lg:text-base xl:text-lg">
                <ChevronRightIcon className="h-5 w-5" />
                Unsubscribe mail
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
