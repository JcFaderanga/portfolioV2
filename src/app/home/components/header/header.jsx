import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import styles from '@/app/home/home.module.css'
import FadeIn from '@/ui/animation/fadeIn';
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

  return (
    <header className={` lg:flex w-full  h-[60px] absolute top-0 bg-white ${isShadow && 'lg:shadow-lg'} ${styles.slideUp} `}>
        <FadeIn delay={1} className="w-full  mx-auto px-2 md:px-8 h-full flex items-center justify-between">
            <a href={socialMedia.github} className="px-2 hover:scale-125" target="_blank">
                <Image src={'/assets/github.png'} width={35} height={35} alt="github"></Image>
            </a>
            <Link href="/" >
                <h1 className={` text-2xl font-bold`}>{`${personalInfo.first_name} ${personalInfo.last_name}`}</h1>
            </Link>
            <ToggleButton/>
        </FadeIn>
    </header>
  )
}

export default Header;
