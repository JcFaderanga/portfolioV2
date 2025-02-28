"use client"
import React from 'react';
import { Profile,AboutMe,TechStack,HelloWorld,Experience,Social,Education } from '../../components';
import { motion } from "framer-motion";
import FadeUp from '@/ui/animation/fadeUp';
import FadeIn from '@/ui/animation/fadeIn';
export default function Desktop(){
    return(
        <section className="mt-[65px] px-4 mx-auto lg:max-w-[1700px] h-[calc(100%-60px)] flex justify-center item-center">
            <div className="grid gap-3
                lg:grid-cols-[minmax(0,280px)_minmax(0,410px)_minmax(0,570px)_minmax(0,410px)]
            ">  
                {/* 1st col */}
                <div className=" bg-white py-2 
                    lg:col-start-1 lg:row-start-1 lg:row-span-3 
                ">
                    <FadeUp delay={1.2}>
                        <TechStack />
                    </FadeUp>
                </div>
                {/* 2nd col */}
                <div className=" bg-white py-2 
                    lg:col-start-2 lg:row-start-1 lg:row-span-2
                ">
                    <FadeUp delay={0.6}>
                        <AboutMe/>
                    </FadeUp>
                    
                    <FadeIn delay={1.6} className="mt-3">
                        <Social/>
                    </FadeIn>
                </div>

                {/* 3rd col */}
                <div className=" bg-white 
                    lg:col-start-3 py-2 
                ">
                    <FadeUp delay={.4}>
                        <Profile />
                    </FadeUp>

                    <FadeUp delay={.9} className="mt-3">
                        <Education/>
                    </FadeUp>
                </div>

                {/* 4th col */}
                <div className=" bg-white py-2 
                    lg:col-start-4 
                ">
                    <FadeUp delay={0.8}>
                        <Experience/>
                    </FadeUp>

                    <FadeIn delay={1.4} className="mt-5">
                        <HelloWorld/>
                    </FadeIn>
                    
                </div>
            </div>
        </section>
    );
}