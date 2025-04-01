"use client";

import React from "react";
import { 
    Profile, 
    AboutMe, 
    TechStack, 
    HelloWorld, 
    Experience, 
    Social, 
    Education, 
    Projects,
    TicTacToe,
    Resume,
} from "../../components";
import { motion } from "framer-motion";
import FadeUp from "@/ui/animation/fadeUp";
import FadeIn from "@/ui/animation/fadeIn";

export default function Desktop() {
    return (
        <>
            {/* Main Section */}
            <section className="mt-[65px] px-8 mx-auto lg:max-w-[1300px] flex justify-center">
                <div className="grid gap-3 lg:grid-cols-[_minmax(0,60%)_minmax(0,40%)]">
                    
                    {/* First Column */}
                    <div className="py-2 lg:col-start-1 lg:row-start-1 lg:row-span-2">
                        <FadeUp delay={0.6}><AboutMe /></FadeUp>
                        <div className="flex">
                            <FadeUp delay={.8} className="my-3 max-w-[410px]"><HelloWorld /></FadeUp>
                            <FadeUp delay={1} className="mt-3"><Social /></FadeUp>
                        </div>
                        <FadeUp delay={0.8}><Experience /></FadeUp>
                        
                    </div>

                    {/* Second Column */}
                    <div className="py-2 lg:col-start-2">
                        <FadeUp delay={0.4}><Profile /></FadeUp>
                        <FadeUp delay={0.9} className="mt-3"><Education /></FadeUp>
                    </div>
                    
                
                </div>
            </section>
            
            {/* Secondary Section */}
            <section>
                <div className="py-2 lg:max-w-[1300px] px-8 mx-auto relative">
                    <FadeUp delay={1.2}><TechStack /></FadeUp><Projects />
                </div>
                
            </section>
        </>
    );
}
