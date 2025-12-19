"use client"
import React from "react";
import Image from "next/image";
import { Experience } from ".";
import { education } from "../../lib/data";
import FadeInSection from "@/ui/animation/fadeOnScroll";
const AboutMe = () => {
    return(
        <section id="about" className=" p-4 lg:h-screen bg-white pt-10">
            
            <div className="max-w-[1200px] mx-auto mt-4">
                <FadeInSection>
                    <h1 className="text-[40px] text-center font-bold">About Me</h1>
                </FadeInSection>
                <div className="lg:flex lg:justify-between gap-10">
                    <div className="flex flex-col gap-4 lg:w-1/2">
                        <FadeInSection>
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
                         </FadeInSection>
                        {/* Education */}
                        <div className="">
                            {education.map((item, index) => (
                                <FadeInSection key={index}>
                                    <div className="my-2 px-4 py-3 rounded-xl bg-[#DBEAFE]">
                                        <strong className="text-lg">{item.course}</strong>
                                        <p>{item.school}</p> 
                                    </div>
                                </FadeInSection>
                            ))}
                        </div>
                    </div>

                    <div className="lg:max-w-1/2">
                        <FadeInSection>
                            <Experience/>
                        </FadeInSection>
                    </div>
                    
                </div>
            </div>  
        </section>
    )
}

export default AboutMe;