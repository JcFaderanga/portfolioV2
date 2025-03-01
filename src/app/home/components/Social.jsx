"use client"
import React from "react";
import Image from "next/image";
import {aboutMe } from "../../lib/data";
import { Share2 } from 'lucide-react';
const Social = () => {
    return(
        <div className=" p-4 rounded-xl lg:max-w-2xs">
            <div className="flex items-center py-2">
                <Share2 />
                <h1 className="text-xl font-bold px-2">Social</h1>
            </div>
            <div className="flex py-2 ">
                <a href="https://www.instagram.com/" className="px-2">
                    <Image src={'/assets/instagram-colored.png'} width={32} height={32} alt="instagram"></Image>
                </a>
                <a href="https://www.instagram.com/" className="px-2">
                    <Image src={'/assets/linkedin.png'} width={32} height={32} alt="instagram"></Image>
                </a>
                <a href="https://www.instagram.com/" className="px-2">
                    <Image src={'/assets/facebook-colored.png'} width={32} height={32} alt="instagram"></Image>
                </a>
                <a href="https://www.instagram.com/" className="px-2">
                    <Image src={'/assets/github.png'} width={32} height={32} alt="instagram"></Image>
                </a>
            </div>
        </div>
    )
}

export default Social;