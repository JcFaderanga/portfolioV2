"use client"
import React from "react";
import Image from "next/image";
import {aboutMe } from "../../lib/data";
import { Share2 } from 'lucide-react';
import { socialMedia } from "../../lib/data";
const Social = () => {
    return(
        <div className=" rounded-xl lg:max-w-2xs">
            <div className="flex items-center py-2">
                <Share2 />
                <h1 className="md:text-xl font-bold px-2">Social</h1>
            </div>
            <div className="flex gap-2 md:gap-4 ">
                <a
                    href={socialMedia.instagram}
                    className="px-2 hover:scale-125 relative w-[28px] h-[28px] md:w-[35px] md:h-[35px]"
                    target="_blank"
                >
                    <Image
                    src={"/assets/instagram-colored.png"}
                    alt="instagram"
                    fill
                    className="object-contain"
                    />
                </a>

                <a
                    href={socialMedia.linkedin}
                    className="px-2 hover:scale-125 relative w-[28px] h-[28px] md:w-[35px] md:h-[35px]"
                    target="_blank"
                >
                    <Image
                    src={"/assets/linkedin.png"}
                    alt="linkedin"
                    fill
                    className="object-contain"
                    />
                </a>

                <a
                    href={socialMedia.facebook}
                    className="px-2 hover:scale-125 relative w-[28px] h-[28px] md:w-[35px] md:h-[35px]"
                    target="_blank"
                >
                    <Image
                    src={"/assets/facebook-colored.png"}
                    alt="facebook"
                    fill
                    className="object-contain"
                    />
                </a>

                <a
                    href={socialMedia.github}
                    className="px-2 hover:scale-125 relative w-[28px] h-[28px] md:w-[35px] md:h-[35px]"
                    target="_blank"
                >
                    <Image
                    src={"/assets/github.png"}
                    alt="facebook"
                    fill
                    className="object-contain"
                    />
                </a>
            </div>
        </div>
    )
} 

export default Social;
/* <a href={socialMedia.github} className="px-2 hover:scale-125" target="_blank">
                    <Image src={'/assets/github.png'} width={35} height={35} alt="github"></Image>
                </a> */