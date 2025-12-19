"use client"
import React from "react";
import { socialMedia } from "@/app/lib/data";
import Image from "next/image";
import FadeUp from "@/ui/animation/fadeUp";
import FadeInSection from "@/ui/animation/fadeOnScroll";
const Contact = () => {
    return(
        <section id="contact" className=" pb-20">
           <FadeInSection className="flex justify-between items-center">
                <div className="text-center w-full px-4">
                    <strong className="text-2xl block">Get in Touch</strong>
                    <span>Want to chat? Just {" "}
                        <a  
                            href="mailto:jcfaderanga@gmail.com?subject=Get%20in%20Touch" 
                            className="!text-blue-600">
                                drop me an email
                        </a>, and I’ll reply as soon as I can. </span>
                    <div>
                        <span>You can also reach me out via social.</span>
                        <div className="flex gap-2 md:gap-4 justify-center">
                            <a
                                href={socialMedia.instagram}
                                className="px-2 hover:scale-125 relative w-[28px] h-[28px] md:w-[35px] md:h-[35px]"
                                target="_blank"
                                rel="noopener noreferrer"
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
            

                        </div>
                    </div>
            </div>
           </FadeInSection>
        </section>
    )
}

export default Contact;