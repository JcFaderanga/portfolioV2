"use client"
import React from 'react';
import { Profile,AboutMe,TechStack,HelloWorld,Experience,Social,Education } from '../../components';
import FadeUp from '@/ui/animation/fadeUp';
export default function Tablet(){
    return(
        <section className="mt-[65px] px-4 mx-auto h-[calc(100%-60px)] flex justify-center item-center">
            <div className="grid gap-3
                grid-cols-[minmax(0,500px)] 
                
            ">  
            {/* 1 */}
                <div ><FadeUp delay={.3} className="py-2" ><Profile /></FadeUp></div>
            {/* 2 */}
                <div className=" bg-white py-2 "><FadeUp delay={.4} className="py-2" ><Social/></FadeUp></div>
            {/* 3 */}
                <div className=" bg-white py-2 "><FadeUp delay={.6} className="py-2" ><AboutMe/></FadeUp></div>
            {/* 4 */}
                <div className=" bg-white py-2 "><Experience/></div>
            {/* 5 */}
                <div className=" bg-white py-2 "><HelloWorld/></div> 
            {/* 6 */}
                <div className=" bg-white py-2 "><Education/></div>
            {/* 7 */}
                <div className=" bg-white py-2  "><TechStack /></div>
            </div>
        </section>
    );
}