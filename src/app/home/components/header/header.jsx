'use client'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import styles from '@/app/home/home.module.css'
import FadeIn from '@/ui/animation/fadeIn';
import FadeUp from '@/ui/animation/fadeUp';
import Image from 'next/image';
import { personalInfo } from '@/app/lib/data';
import { socialMedia } from '@/app/lib/data';
import ToggleButton from '@/ui/toggleButton';
const Header = () => {
    const [isShadow, setShadow] = useState(true);
  
    
    useEffect(()=>{
      setTimeout(()=>{
        setShadow(false);
      },260)
    },[isShadow])

    const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
};

const navItems = [
  { label: "Home", href: "home" },
  { label: "About Me", href: "about" },
  { label: "Tech Stack", href: "tech" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
]

  return (
    <header className={` lg:flex w-full h-[60px] gradient-color-v2 z-9999 px-4 fixed top-0 ${isShadow && 'lg:shadow-lg'} ${styles.slideUp} `}>
        <div className="w-full  mx-auto h-full flex items-center justify-center lg:justify-between">
            
              <a href={socialMedia.github} className=" hover:scale-125 hidden" target="_blank">
                  <Image src={'/assets/github.png'} width={35} height={35} alt="github"></Image>
              </a>
              <FadeIn delay={.4}>    
                <Link href="/" >
                    <h1 className={` text-2xl font-bold`}>{`${personalInfo.first_name} ${personalInfo.last_name}`}</h1>
                </Link>
              </FadeIn>
              <nav className="hidden lg:flex gap-5 font-bold">
                {navItems.map((n, index)=>{
                  return <FadeIn delay={.5 + (index * 0.13)}>
                       <span className='cursor-pointer' onClick={() => scrollTo(n.href)}>{n.label}</span>
                    </FadeIn>
                })}
              </nav>


            {/* <ToggleButton/> */}
        </div>
    </header>
  )
}

export default Header;
