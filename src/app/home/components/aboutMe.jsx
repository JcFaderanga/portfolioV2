"use client"
import React from "react";
import Image from "next/image";
import {aboutMe } from "../../lib/data";

const AboutMe = () => {
    return(
        <div className="border-gray-300 border rounded-xl p-4 bg-white hover:bg-slate-50">
            <h1 className="text-xl font-bold">About Me</h1>
            <p>{aboutMe}</p>
        </div>
    )
}

export default AboutMe;