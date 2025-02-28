"use client"
import React from 'react';
import { Profile,AboutMe,TechStack,HelloWorld,Experience,Social,Education } from '../../components';
import { motion } from "framer-motion";
import FadeUp from '@/ui/animation/fadeUp';
export default function Tablet(){
    return(
        <section className="mt-[65px] px-4 mx-auto md:max-w-[980px] h-[calc(100%-60px)] flex justify-center item-center">
            <div className="grid gap-3
                md:grid-cols-[minmax(0,300px)_minmax(0,670px)] 
            ">  
                {/* 1st row 1st col */}
                <div className="bg-white mt-4
                    md:col-span-2 
                ">
                    <FadeUp delay={.4}>
                        <Profile />
                    </FadeUp>
                </div>
                {/* 2nd row 1st col*/}
                <div className=" bg-white py-2 
                    md:row-start-2 md:col-start-1
                ">
                    <FadeUp delay={.6}>
                        <TechStack />
                        <Social/>
                        <HelloWorld/>
                    </FadeUp>
                    
                </div>
                {/* 2nd row 2nd col */}
                <div className=" bg-white py-2 
                    md:col-start-2 md:row-start-2
                ">
                    <FadeUp delay={.7}><AboutMe/></FadeUp>
                    <FadeUp delay={.8} className={"my-4"}><Education/></FadeUp>
                    <FadeUp delay={.9}><Experience/></FadeUp>   
                </div>
            </div>
        </section>
    );
}