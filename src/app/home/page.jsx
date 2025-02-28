"use client"
import React,{useState, useEffect} from 'react';
import styles from './home.module.css';
import {personalInfo} from '../lib/data'
import Link from 'next/link'
import {Desktop, Tablet, Mobile} from './device';
import FadeIn from '@/ui/animation/fadeIn';
export default function Page(){
const [isShadow, setShadow] = useState(true);

useEffect(()=>{
  setTimeout(()=>{
    setShadow(false);
  },260)
},[isShadow])

    return (
        <main className="h-screen">
        <nav className={` lg:flex w-full h-[60px] absolute top-0 bg-white ${isShadow && 'lg:shadow-lg'} ${styles.slideUp} `}>
             <FadeIn delay={1} className="w-full h-full flex items-center justify-center">
                <Link href="/" >
                    <h1 className={` text-2xl font-bold`}>{`${personalInfo.first_name} ${personalInfo.last_name}`}</h1>
                </Link>
            </FadeIn>
            
            
        </nav>

        <div className='hidden lg:block'><Desktop /></div>
        <div className='hidden md:block lg:hidden'><Tablet /></div>
        <div className=' md:hidden lg:hidden'><Mobile /></div>

        <div className={`hidden lg:flex w-full absolute bottom-0  box-shadow ${styles.slideDown} bg-white`}></div>
        </main>
    );
}

