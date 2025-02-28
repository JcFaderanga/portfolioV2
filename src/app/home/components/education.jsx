"use client"
import React from "react";
import Image from "next/image";
import {education } from "../../lib/data";

const Education = () => {
    return(
        <div className=" pt-6 pb-3 rounded-xl px-2">
            <h1 className="text-xl font-bold">Education</h1>

            <div className="relative border-l border-[#333333] ml-2">
                {education.map((item, index) => (
                    <div key={index} className="mb-8 ml-6 ">
                        <div className="absolute -left-[7px] w-3 h-3 bg-[#333333] rounded-full mt-2"></div>
                        <h3 className="text-lg font-bold">{item.course}</h3>
                        <p>{item.school}</p> 
                        <p>{item.year}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education;