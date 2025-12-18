import React from "react";
import Image from "next/image";

const Resume = () => {
  return (
    <div className="w-full flex gap-2 md:gap-2 items-center h-[133px] bg-[linear-gradient(to_right,#E0F7FF_0%,#FFFFFF_0%,#F5F3FF_50%,#DBEAFE_100%)] rounded-lg px-4 py-2 bg-white">

      <Image
        width={100}
        height={100}
        src="/png_cv.png"
        alt="profile"
        className="rounded-xl border border-gray-200"
      />

      <div className="w-full">
        <h1 className="text-xl font-bold">My Resume</h1>
        <h1 className="text-sm lg:text-sm mb-2">Professional Background</h1>

        <div className="flex items-center justify-evenly gap-2 pb-4 text-sm md:text-base">

          {/* PREVIEW */}
          <a
            href="/CV_Faderanga_Janrey_Cyril.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#333333] w-full text-center !text-white px-3 py-2 md:py-1 rounded-xl"
            aria-label="View Resume"
          >
            Preview
          </a>

          {/* DOWNLOAD */}
          <a
            href="/CV_Faderanga_Janrey_Cyril.pdf"
            download
            className="border w-full text-center bg-white border-[#ebebeb] px-3 py-2 md:py-1 rounded-xl"
            aria-label="Download Resume"
          >
            Download
          </a>

        </div>
      </div>
    </div>
  );
};

export default Resume;
