"use client"
import React from "react";
import Image from "next/image";
import {education } from "../../lib/data";
import { BookOpen } from 'lucide-react';
const Education = () => {
    return(
        <div className=" pt-6 pb-3 border bg-white border-gray-300 rounded-xl px-4 hover:bg-slate-50">
            <div className="flex items-center py-2">
                <BookOpen />
                <h1 className="text-xl font-bold px-2">Education</h1>
            </div>
            <div className="relative border-l border-[#333333] ml-2">
                {education.map((item, index) => (
                    <div key={index} className="mb-7 pl-4 ">
                        <div className="absolute -left-[4px] w-2 h-2 bg-[#333333] rounded-full mt-2"></div>
                        <h3 className="font-bold">{item.course}</h3>
                        <p>{item.school}</p> 
                        <p>{item.year}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education;