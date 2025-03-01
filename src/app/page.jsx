"use client"
import React from "react";
import { useState,useEffect } from "react";
import { personalInfo,socialMedia,position } from "./lib/data";
import style from "./main.module.css";
import Link from "next/link"
import Image from "next/image"
import { Facebook , Linkedin, Github} from 'lucide-react';

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
      setVisible(true);
    }, 300);
  },[visible])
  

  return (
    <main className={`w-full h-screen flex items-center justify-center bg-[url('/bg-light-wool.png')] bg-repeat `} >
        <div className={`hidden lg:flex w-full h-[20%] absolute top-0  shadow-lg ${style.slide} bg-white`}></div>
          <div className={`${visible && style.popIn}`}>
            <h1 
              className={`${visible ? `block text-3xl font-bold text-center text-shadow` : `hidden`}`}
            >
              {`${personalInfo.first_name} ${personalInfo.last_name}`}
            </h1>
            <p 
              className={`${visible ? `text-lg text-center text-shadow `: `hidden`}`}
            >
            I am a <span className="font-bold">{position}</span> From Philippines
            </p>
            <div 
              className={`${visible ? `block text-lg cursor-pointer font-bold text-center py-5` : `hidden`} `}
            >
            <div className="mb-6">
                <ul 
                  className="flex item-center justify-center px-2 
                  after:bg-[#333333] after:mt-3 after:w-16 after:border after:h-0.5 after:ml-5
                  before:bg-[#333333] before:mt-3 before:w-16 before:border before:h-0.5 before:mr-5
                  ">
                    <li className="px-1">
                      <a href={socialMedia.facebook}> 
                        <Facebook size={25} color="#333333" />
                      </a>
                    </li>
                    <li className="px-1">
                    <a href={socialMedia.linkedin}>
                        <Linkedin size={25} color="#333333" />
                      </a>
                    </li>
                    <li className="px-1">
                    <a href={socialMedia.github}>
                        <Github size={25} color="#333333" />
                      </a>
                    </li>
                </ul>
            </div>
            <Link href="/home">
              <span className=" hover:bg-gray-100 border-gray-300 rounded-md py-1 px-4 mt-4">KNOW MORE</span>
            </Link>
            </div>
          </div>
      
        <div className={`hidden lg:flex absolute w-full h-[20%]  bottom-0  box-shadow ${style.slide} bg-white`}></div>
    </main>
  );
}
