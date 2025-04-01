"use client"
import React from "react";
import Image from "next/image";
import {aboutMe } from "../../lib/data";
import { Share2 } from 'lucide-react';
import { socialMedia } from "../../lib/data";
const Social = () => {
    return(
        <div className=" p-4 rounded-xl lg:max-w-2xs">
            <div className="flex items-center py-2">
                <Share2 />
                <h1 className="text-xl font-bold px-2">Social</h1>
            </div>
            <div className="flex py-2 ">
                <a href={socialMedia.instagram} className="px-2 hover:scale-125" target="_blank">
                    <Image src={'/assets/instagram-colored.png'} width={35} height={35} alt="instagram"></Image>
                </a>
                <a href={socialMedia.linkedin} className="px-2 hover:scale-125"  target="_blank">
                    <Image src={'/assets/linkedin.png'} width={35} height={35} alt="linkedin"></Image>
                </a>
                <a href={socialMedia.facebook} className="px-2 hover:scale-125" target="_blank">
                    <Image src={'/assets/facebook-colored.png'} width={35} height={35} alt="facebook"></Image>
                </a>
                {/* <a href={socialMedia.github} className="px-2 hover:scale-125" target="_blank">
                    <Image src={'/assets/github.png'} width={35} height={35} alt="github"></Image>
                </a> */}
            </div>
        </div>
    )
} 

export default Social;