"use client"
import React from 'react';
import styles from './home.module.css';
import {Desktop, Tablet, Mobile} from './device';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Projects,TechStack } from './components';
import FadeUp from '@/ui/animation/fadeIn';
export default function Page(){


    return (
        <main className="h-screen bg-[url('/bg-light-wool.png')] bg-repeat">
        <Header/>
        <div className='hidden lg:block'><Desktop /></div>
        <div className='hidden md:block lg:hidden'><Tablet /></div>
        <div className=' md:hidden lg:hidden'><Mobile /></div>

        <section className="py-2 lg:max-w-[1300px] px-8 mx-auto relative">
        <FadeUp delay={1.2}><TechStack /></FadeUp><Projects />
        </section>
        
        <div className={`hidden lg:flex w-full absolute bottom-0  box-shadow ${styles.slideDown} bg-white`}></div>
        <Footer/>
        </main>
    );
}

