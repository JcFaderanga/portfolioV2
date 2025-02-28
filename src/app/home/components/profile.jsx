"use client"
import React from "react";
import Image from "next/image";

import { personalInfo,position } from "../../lib/data";
const Profile = () => {
    return(
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <Image src="/profile.png" width={160} height={160} sizes="(max-width: 768px) 100vw, 33vw" className="rounded-3xl" alt="profile"></Image>
            <div className="w-full flex flex-col items-center px-4 justify-center md:block ">
                <h1 className="text-[26px] font-bold">{position}</h1>
                <h1 className="text-base">{personalInfo.address}</h1>
                <h1 className="text-base">{personalInfo.email}</h1>
                <h1 className="text-base">{personalInfo.number}</h1>
            </div>
            
        </div>
    )
}

export default Profile;