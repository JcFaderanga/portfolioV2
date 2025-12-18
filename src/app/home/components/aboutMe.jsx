"use client"
import React from "react";
import Image from "next/image";
import {aboutMe } from "../../lib/data";
import { Education, Experience } from ".";
import { education } from "../../lib/data";
const AboutMe = () => {
    return(
        <section className=" p-4 lg:h-screen bg-white">
            
            <div className="max-w-[1200px] mx-auto mt-4">
                <h1 className="text-[40px] text-center font-bold">About Me</h1>

                <div className="lg:flex lg:justify-between gap-10">
                    <div className="flex flex-col gap-4 lg:w-1/2">
                        <div className="relative w-full mx-auto rounded-full max-w-[200px] max-h-[200px] overflow-hidden  ">
                            <Image
                                src="/profile1.png"
                                alt="profile"
                                width={400}
                                height={400}
                                className="w-full h-auto object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                        {/* Education */}
                        <div className="">
                            {education.map((item, index) => (
                                <div key={index} className="my-2 px-4 py-3 rounded-xl bg-[#DBEAFE]">
                                    <strong className="text-lg">{item.course}</strong>
                                    <p>{item.school}</p> 
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:max-w-1/2">
                        <Experience/>
                    </div>
                    
                </div>
            </div>  
        </section>
    )
}

export default AboutMe;