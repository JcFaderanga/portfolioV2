"use client"
import React from 'react';
import styles from './home.module.css';
import { 
    AboutMe, 
    Profile, 
    Contact, 
    Projects, 
    TechStack 
} from './components';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import FadeUp from '@/ui/animation/fadeIn';
export default function Page(){


    return (
        <main className=" bg-[url('/bg-light-wool.png')] bg-repeat relative">
        <Header/>
        
        <div className='pt-[60px]'>
            <Profile/>
            <AboutMe/>
            <TechStack/>
            
            <div className='gradient-color-v4'>
                <Projects/>
                <Contact/>
            </div>
            
            <div className={`hidden lg:flex w-full absolute bottom-0  box-shadow ${styles.slideDown} bg-white`}></div>
        </div>

        <Footer/>
        </main>
    );
}

