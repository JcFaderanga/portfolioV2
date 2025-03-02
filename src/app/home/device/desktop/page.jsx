"use client"
import React from 'react';
import { Profile,AboutMe,TechStack,HelloWorld,Experience,Social,Education,Projects } from '../../components';
import { motion } from "framer-motion";
import FadeUp from '@/ui/animation/fadeUp';
import FadeIn from '@/ui/animation/fadeIn';
export default function Desktop(){
    return(
        <>
        <section className="mt-[65px] px-8 mx-auto lg:max-w-[1300px] h-[calc(100%-60px)]  flex justify-center item-center">
            <div className="grid gap-3
                lg:grid-cols-[_minmax(0,30%)_minmax(0,60%)_minmax(0,30%)]
            ">  
                {/* 2nd col */}
                <div className="  py-2 
                    lg:col-start-1 lg:row-start-1 lg:row-span-2
                ">
                    <FadeUp delay={0.6}>
                        <AboutMe/>
                    </FadeUp>
                    
                    <FadeIn delay={1.6} className="mt-3">
                        <Social/>
                    </FadeIn>
                </div>

                {/* 3rd col */}
                <div className="
                    lg:col-start-2 py-2 
                ">
                    <FadeUp delay={.4}>
                        <Profile />
                    </FadeUp>

                    <FadeUp delay={.9} className="mt-3">
                        <Education/>
                    </FadeUp>
                </div>

                {/* 4th col */}
                <div className=" py-2 
                    lg:col-start-3 
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
        <section>
            <div className=" bg-white py-2 lg:max-w-[1300px] px-8 mx-auto relative">
                <FadeUp delay={1.2}>
                    <TechStack />
                </FadeUp>
                <Projects />
            </div> 
            
        </section>

        {/* <div className="box-shadow h-64 bg-white">xcv</div> */}
       </> 
    );
}