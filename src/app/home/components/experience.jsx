"use client"
import React from "react";
import Image from "next/image";
import {workExperience } from "../../lib/data";

const ExperienceBox = ({props}) => {
    return(
        <div className="my-2 ">
            <h1 className="font-bold text-xl py-1">{props.position}</h1>
            <h3 className="">{props.company}</h3>
            <h3>{props.date}</h3>
        </div>
    )
};
const Experience = () => {
    return(
        <div className="box-shadow py-4 px-6 rounded-xl">
            <h1 className="text-xl font-bold">Experience</h1>
            {workExperience.map((work, index) => {
                return <ExperienceBox props={work} key={index}/>
                }   
            )}
        </div>
    )
}

export default Experience;