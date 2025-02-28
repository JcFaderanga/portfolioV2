"use client"
import React from "react";
import Image from "next/image";

import { personalInfo,position } from "../../lib/data";
const Profile = () => {
    return(
        <div className="box-shadow py-7 flex flex-col items-center justify-center rounded-xl
            md:p-4 md:flex-row md:justify-start
            lg:p-6 lg:flex-wrap
        ">
            <Image src="/profile.png" width={160} height={160} sizes="(max-width: 768px) 100vw, 33vw" className="rounded-3xl lg:mx-auto" alt="profile"></Image>
            <div className=" flex flex-col items-center justify-center mx-4 md:block lg:mx-auto ">
                <h1 className="text-[26px] font-bold">{position}</h1>
                <h1 className="text-base">{personalInfo.address}</h1>
                <h1 className="text-base">{personalInfo.email}</h1>
                <h1 className="text-base">{personalInfo.number}</h1>
            </div>
        </div>
    )
}

export default Profile;