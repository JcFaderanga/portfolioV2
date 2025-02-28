"use client"
import React from "react";
import Image from "next/image";
import {aboutMe } from "../../lib/data";

const AboutMe = () => {
    return(
        <div className="box-shadow rounded-xl p-4">
            <h1 className="text-xl font-bold">About Me</h1>
            <p>{aboutMe}</p>
        </div>
    )
}

export default AboutMe;