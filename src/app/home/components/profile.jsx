"use client"
import React from "react";
import Image from "next/image";
import { personalInfo,position } from "../../lib/data";

import { MapPin,Mail,Phone } from 'lucide-react';
const Profile = () => {
    return(
        <div className="border border-gray-300 py-7 flex flex-col items-center justify-center rounded-xl bg-white
            md:p-4 md:flex-row md:justify-start
            lg:p-6 lg:flex-wrap 
          hover:bg-slate-50
        ">
            <Image src="/profile.png" width={120} height={120} sizes="(max-width: 768px) 100vw, 33vw" className="rounded-3xl lg:mx-auto" alt="profile"></Image>
            <div className=" flex flex-col items-center justify-center mx-4 md:block lg:mx-auto ">
                <h1 className="text-[26px] font-bold">{position}</h1>
                <h1 className="text-base flex"><MapPin size={20} className="mr-1"/>{personalInfo.address}</h1>
                <h1 className="text-base flex"><Mail size={20} className="mr-1"/>{personalInfo.email}</h1>
                <h1 className="text-base flex"><Phone size={20} className="mr-1"/>{personalInfo.number}</h1>
            </div>
        </div>
    )
}

export default Profile;