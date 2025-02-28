"use client"
import React,{useState, useEffect} from 'react';
import styles from './home.module.css';
import {personalInfo} from '../lib/data'
import Link from 'next/link'
import { Profile } from './components';

export default function Page(){
const [isShadow, setShadow] = useState(true);

useEffect(()=>{
  setTimeout(()=>{
    setShadow(false);
  },860)
},[isShadow])

    return (
        <main className="h-screen">
        <nav className={` lg:flex w-full h-[60px] absolute top-0 ${isShadow && 'lg:shadow-lg'} ${styles.slideUp} `}>
            <div className="w-full h-full flex items-center justify-center">
                <Link href="/" className={`${styles.textSlideUp}`}>
                    <h1 className={`${styles.textGrow} text-2xl font-bold`}>{`${personalInfo.first_name} ${personalInfo.last_name}`}</h1>
                </Link>
            </div>
        </nav>

        <section className="mt-[65px] mx-auto md:max-w-[980px] lg:max-w-[1700px] h-[calc(100%-60px)] flex justify-center item-center">
            <div className="grid gap-4
                grid-cols-[minmax(0,500px)] 
                md:grid-cols-[minmax(0,300px)_minmax(0,670px)] 
                md:grid-rows-[minmax(0,220px)_minmax(0,220px)_minmax(0,345px)_minmax(0,150px)_minmax(0,300px)]
                lg:grid-cols-[minmax(0,280px)_minmax(0,410px)_minmax(0,570px)_minmax(0,410px)]
                lg:grid-rows-[minmax(0,195px)_minmax(0,95px)_minmax(0,500px)]
            ">
                <div className="box-shadow bg-white lg:px-4 py-2 
                    md:col-span-2 
                    lg:col-start-3 lg:col-span-1
                "><Profile /></div>

                <div className="box-shadow bg-white 
                    md:row-start-4 
                    lg:col-start-2 lg:row-start-3 lg:row-span-1
                ">2</div>

                <div className="box-shadow bg-white 
                    md:col-start-2 md:row-start-2
                    lg:col-start-2 lg:row-start-1 lg:row-span-2
                ">3</div>

                <div className="box-shadow bg-white 
                    md:row-start-5 md:col-start-2
                    lg:col-start-4 lg:row-start-1 lg:row-span-2
                ">4</div>

                <div className="box-shadow bg-white 
                    md:row-start-5
                    lg:col-start-4 lg:row-start-3 lg:row-span-1
                ">5</div> 

                <div className="box-shadow bg-white 
                    md:row-span-2
                    lg:col-start-3 lg:row-start-2 lg:row-span-2
                ">6</div>

                <div className="box-shadow bg-white 
                    md:col-start-1 md:row-start-2 md:row-span-2
                    lg:col-start-1 lg:row-start-1 lg:row-span-3 
                ">7</div>
            </div>
        </section>

        <div className={`hidden lg:flex w-full absolute bottom-0 border box-shadow ${styles.slideDown} bg-white`}></div>
        </main>
    );
}

