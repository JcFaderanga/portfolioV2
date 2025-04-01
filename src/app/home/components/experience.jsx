"use client"
import React from "react";
import Image from "next/image";
import {workExperience } from "../../lib/data";
import { BriefcaseBusiness } from 'lucide-react';
const ExperienceBox = ({props}) => {
    return(
        <div className="my-2">
            <div className="absolute -left-[4px] w-2 h-2 bg-[#333333] rounded-full mt-2"></div>
            <h1 className="font-bold text-lg ">{props.position}</h1>
            <h3 className="">{props.company}</h3>
            <h3>{props.date}</h3>
            <li className="!text-sm py-2">{props.description}</li>
        </div>
    )
};
const Experience = () => {
    return(
        <div className="border border-gray-300 py-4 px-6 rounded-xl bg-white">
            <div className="flex items-center">
                <BriefcaseBusiness />
                <h1 className="text-xl font-bold px-2">Experience</h1>
            </div>
            <div className="border-l px-4 relative">
                {workExperience.map((work, index) => {
                    return <ExperienceBox props={work} key={index}/>
                    }   
                )}
            </div>
        </div>
    )
}

export default Experience;