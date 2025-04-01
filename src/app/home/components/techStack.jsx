"use client"
import React from "react";
import Image from "next/image";
import {aboutMe,skills } from "../../lib/data";
import { Icon } from "@/ui/icons";


const TechStack = () => {

    console.log(skills)

    const frontEnd = skills.filter((tech)=>tech.category === "frontend");
    const backEnd = skills.filter((tech)=>tech.category === "backend");
    const tools = skills.filter((tech)=>tech.category === "tools");
   
    const techFilter = ['All', 'Automation', 'Front end', 'Back end', 'Tools']
    return(
        <section className=" rounded-xl h-screen">
            {/* <div className="w-2xs hidden lg:flex h-2xs border border-gray-200 mx-4 rounded-xl"></div> */}
            <h1 className="text-3xl text-center font-bold">Tech Stack</h1>
                <div className="flex items-center lg:justify-center overflow-x-scroll lg:border-b border-[#333333] mt-4 h-11 max-w-2xl w-full mx-auto">
                    {techFilter.map((item, index)=>
                        <span key={index} className="px-2 cursor-pointer text-nowrap  hover:font-bold">
                            {item}
                        </span>
                    )}
                </div>

                    {skills.map((skill,index)=>{
                             <div key={index} className="py-2 px-2 flex flex-col items-center">
                                 <Image src={skill.image} width={32} height={32} alt={skill.name}></Image>
                                 <h1>{skill.name}</h1>
                             </div>
                        })
                    }
           
        </section>
    )
}
export default TechStack;








// <div className="flex flex-wrap  ">
// {/* FrontEnd Tech List*/}
// <div className="m-2">
//     <h2 className="text-lg font-bold">FrontEnd</h2>
//     <div className="flex flex-wrap lg:mr-4">
//         {frontEnd.map((tech,index)=>(
//             <div key={index} className="py-2 px-2 flex flex-col items-center">
//                 <Image src={tech.image} width={32} height={32} alt={tech.name}></Image>
//                 <h1>{tech.name}</h1>
//             </div>
//         ))}
//     </div>
// </div>
// {/* BackEnd Tech List*/}
// <div className="m-2">
//     <h2 className="text-lg font-bold">BackEnd</h2>
//     <div className="flex flex-wrap">
//         {backEnd.map((tech,index)=>(
//             <div key={index} className="py-2 px-2 flex flex-col items-center">
//                 <Image src={tech.image} width={32} height={32} alt={tech.name}></Image>
//                 <h1>{tech.name}</h1>
//             </div>
//         ))}
//     </div>
// </div>
// {/* Tools List*/}
// <div className="m-2">
//     <h2 className="text-lg font-bold">Tools</h2>
//     <div className="flex flex-wrap">
//         {tools.map((tech,index)=>(
//             <div key={index} className="py-2 px-2 flex flex-col items-center">
//                 <Image src={tech.image} width={32} height={32} alt={tech.name}></Image>
//                 <h1>{tech.name}</h1>
//             </div>
//         ))}
//     </div>
// </div>
// </div>