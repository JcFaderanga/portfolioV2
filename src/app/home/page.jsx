"use client"
import React from 'react';
import styles from './home.module.css';
import {Desktop, Tablet, Mobile} from './device';
import Header from './components/header/header';
import Footer from './components/footer/footer';
export default function Page(){


    return (
        <main className="h-screen bg-[url('/bg-light-wool.png')] bg-repeat">
        <Header/>
        <div className='hidden lg:block'><Desktop /></div>
        <div className='hidden md:block lg:hidden'><Tablet /></div>
        <div className=' md:hidden lg:hidden'><Mobile /></div>

        <div className={`hidden lg:flex w-full absolute bottom-0  box-shadow ${styles.slideDown} bg-white`}></div>
        <Footer/>
        </main>
    );
}

