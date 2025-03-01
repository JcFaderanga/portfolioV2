"use client"
import React from "react";
import Image from "next/image";
import {workExperience } from "../../lib/data";
import { BriefcaseBusiness } from 'lucide-react';
const ExperienceBox = ({props}) => {
    return(
        <div className="my-2 border-b border-gray-200 py-2">
            <h1 className="font-bold text-xl py-1">{props.position}</h1>
            <h3 className="">{props.company}</h3>
            <h3>{props.date}</h3>
        </div>
    )
};
const Experience = () => {
    return(
        <div className="box-shadow py-4 px-6 rounded-md bg-white">
            <div className="flex items-center">
                <BriefcaseBusiness />
                <h1 className="text-xl font-bold px-2">Experience</h1>
            </div>
            {workExperience.map((work, index) => {
                return <ExperienceBox props={work} key={index}/>
                }   
            )}
        </div>
    )
}

export default Experience;