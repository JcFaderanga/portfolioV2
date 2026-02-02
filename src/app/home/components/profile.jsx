"use client"
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Social, Resume } from ".";
import { personalInfo,position } from "../../lib/data";
import { ArrowRight   } from 'lucide-react';
import FadeUp from "@/ui/animation/fadeUp";
import Link from "next/link";

import FadeIn from "@/ui/animation/fadeIn";
const Profile = () => {
  const [src, setSrc] = useState("/confident_profile.png");
    return(
<section id="home" className="w-full lg:h-[calc(100vh-60px)] flex items-center gradient-color ">
  
  <div className="m-auto lg:max-w-[1600px] py-10 lg:py-0 flex flex-col-reverse md:flex-col-reverse 
    lg:flex-row justify-between rounded-xl px-4">
    {/* Text Section */}
    <section className="w-full lg:w-1/2 flex flex-col items-center lg:justify-center lg:items-start ">

    <FadeUp delay={.5} className="text-center w-full">
      <strong className="text-4xl text-center pb-3 w-full md:text-5xl lg:text-7xl">{position}</strong>
    </FadeUp>

      <FadeUp delay={.6} className="text-center">
        <span className="text-center text-base md:text-lg lg:text-base">
          Hi, I'm <strong className="text-lg lg:text-4xl">{`${personalInfo.first_name} ${personalInfo.last_name}`}</strong>, Dedicated in
          <strong className="text-2xl lg:text-5xl"> Ensuring quality</strong> and <strong className="text-xl lg:text-4xl"> Seamless user experiences</strong> Skilled in 
          <strong className="text-3xl lg:text-5xl"> manual testing</strong> and <strong className="text-2xl lg:text-4xl">bug tracking</strong>
          I love finding and <strong className="text-2xl lg:text-4xl"> fixing issues</strong> to make software better.
          </span>
      </FadeUp>
      

      {/* Pushes Resume to bottom */}
      <div className="w-full pt-3 lg:pt-10 gap-4 lg:flex">
        <div className="lg:w-1/2">
          <FadeUp delay={1}>
            <Resume />
          </FadeUp>
        </div>
        
          <div className="lg:w-1/2">
          <Link href='/project'>
            <FadeUp delay={1}>
              <div className="w-full hover:scale-105 my-4 lg:my-0 cursor-pointer flex gap-2 md:gap-2 items-center h-[133px] 
                bg-[linear-gradient(to_right,#E0F7FF_0%,#FFFFFF_0%,#F5F3FF_50%,#DBEAFE_100%)]
                hover:bg-[linear-gradient(to_left,#E0F7FF_0%,#FFFFFF_0%,#F5F3FF_50%,#DBEAFE_100%)]
                rounded-lg px-4 py-2 bg-white">
                <div className="w-full flex justify-between items-center my-4">
                  <div>
                    <h1 className="text-xl font-bold">Sample Work</h1>
                    <h1 className="text-sm lg:text-sm mb-2">Sample test cases using excel and jira.</h1>
                  </div>
                    <ArrowRight className="cursor-pointer"/>
                </div>
              </div>
            </FadeUp>
            </Link>
          </div>
      </div>
    </section>

    {/* Image Section */}
    <section className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mb-8 md:mb-0">
      <div className="relative w-full max-w-[400px] md:max-w-[462px] lg:max-w-[500px] ">
        <FadeUp delay={.5}>
          <Image
            src={src}
            alt="profile"
            width={360}
            height={360}
            className="w-full h-auto object-contain cursor-pointer"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onMouseEnter={() => setSrc("/shy_profile.png")}
            onMouseLeave={() => setSrc("/confident_profile.png")}
          />
        </FadeUp>
        
        <FadeIn delay={.8}>
          <div className="absolute right-0 bottom-0">
            <Social />
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</section>


    )
}

export default Profile;
