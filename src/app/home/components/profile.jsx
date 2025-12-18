"use client"
import React from "react";
import Image from "next/image";
import { Social, Resume } from ".";
import { personalInfo,position, shortDescription } from "../../lib/data";
import { MapPin,Mail,Phone } from 'lucide-react';
const Profile = () => {
    return(
<div className="w-screen lg:h-[calc(100vh-60px)] flex items-center gradient-color">
  
  <div className="m-auto lg:max-w-[1600px] py-10 lg:py-0 flex flex-col-reverse md:flex-col-reverse 
    lg:flex-row justify-between rounded-xl px-4">
    {/* Text Section */}
    <section className="w-full lg:w-1/2 flex flex-col items-center lg:justify-center lg:items-start ">
      <strong className="text-4xl text-center pb-3 w-full md:text-5xl lg:text-7xl">{position}</strong>

      <span className="text-center text-base md:text-lg lg:text-base">
        Hi, I'm <strong className="text-lg lg:text-4xl">{`${personalInfo.first_name} ${personalInfo.last_name}`}</strong>, Dedicated in
        <strong className="text-2xl lg:text-5xl"> Ensuring quality</strong> and <strong className="text-xl lg:text-4xl"> Seamless user experiences</strong> Skilled in 
        <strong className="text-3xl lg:text-5xl"> manual testing</strong> and <strong className="text-2xl lg:text-4xl">bug tracking</strong>
        I love finding and <strong className="text-2xl lg:text-4xl"> fixing issues</strong> to make software better.
        </span>

      

      {/* Pushes Resume to bottom */}
      <div className="w-full pt-3 lg:pt-10 gap-4 lg:flex">
        <div className="lg:w-1/2">
          <Resume />
        </div>
        <div className="md:pb-16">
          <span className="text-sm flex items-center">
            <MapPin size={20} className="mr-1" />
            {personalInfo.address}
          </span>
          <span className="text-sm flex items-center mt-1">
            <Mail size={20} className="mr-1" />
            {personalInfo.email}
          </span>
        </div>
      </div>
    </section>

    {/* Image Section */}
    <section className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mb-8 md:mb-0">
      <div className="relative w-full max-w-[400px] md:max-w-[462px] lg:max-w-[500px] ">
        <Image
          src="/profile.png"
          alt="profile"
          width={360}
          height={360}
          className="w-full h-auto object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute right-0 bottom-0">
          <Social />
        </div>
      </div>
    </section>
  </div>
</div>


    )
}

export default Profile;
