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
    <header className={` lg:flex w-full h-[60px] z-9999 bg-white px-4 fixed top-0 ${isShadow && 'lg:shadow-lg'} ${styles.slideUp} `}>
        <FadeIn delay={1} className="w-full  mx-auto h-full flex items-center justify-center lg:justify-between">
            <a href={socialMedia.github} className=" hover:scale-125 hidden" target="_blank">
                <Image src={'/assets/github.png'} width={35} height={35} alt="github"></Image>
            </a>
            <Link href="/" >
                <h1 className={` text-2xl font-bold`}>{`${personalInfo.first_name} ${personalInfo.last_name}`}</h1>
            </Link>
        
              <ul className='hidden lg:flex gap-5 font-bold'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About Me</li>
                <li className='cursor-pointer'>Tech Stack</li>
                <li className='cursor-pointer'>Project</li>
                <li className='cursor-pointer'>Contact</li>
              </ul>
            {/* <ToggleButton/> */}
         
            
        </FadeIn>
    </header>
  )
}

export default Header;
