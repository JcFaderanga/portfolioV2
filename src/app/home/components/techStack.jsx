"use client"
import React from "react";
import Image from "next/image";
import {aboutMe } from "../../lib/data";
import { Icon } from "@/ui/icons";


const TechStack = () => {

    console.log(Icon)

    const frontEnd = Icon.filter((tech)=>tech.category === "frontend");
    const backEnd = Icon.filter((tech)=>tech.category === "backend");
    const tools = Icon.filter((tech)=>tech.category === "tools");
   
    return(
        <div className=" rounded-xl flex py-8 px-4 ">
            {/* <div className="w-2xs hidden lg:flex h-2xs border border-gray-200 mx-4 rounded-xl"></div> */}
            <div className="">
                <h1 className="text-3xl font-bold">Tech Stack</h1>
                <div className="flex flex-wrap  ">
                    {/* FrontEnd Tech List*/}
                    <div className="m-2">
                        <h2 className="text-lg font-bold">FrontEnd</h2>
                        <div className="flex flex-wrap lg:mr-4">
                            {frontEnd.map((tech,index)=>(
                                <div key={index} className="py-2 px-2 flex flex-col items-center">
                                    <Image src={tech.image} width={32} height={32} alt={tech.name}></Image>
                                    <h1>{tech.name}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* BackEnd Tech List*/}
                    <div className="m-2">
                        <h2 className="text-lg font-bold">BackEnd</h2>
                        <div className="flex flex-wrap">
                            {backEnd.map((tech,index)=>(
                                <div key={index} className="py-2 px-2 flex flex-col items-center">
                                    <Image src={tech.image} width={32} height={32} alt={tech.name}></Image>
                                    <h1>{tech.name}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Tools List*/}
                    <div className="m-2">
                        <h2 className="text-lg font-bold">Tools</h2>
                        <div className="flex flex-wrap">
                            {tools.map((tech,index)=>(
                                <div key={index} className="py-2 px-2 flex flex-col items-center">
                                    <Image src={tech.image} width={32} height={32} alt={tech.name}></Image>
                                    <h1>{tech.name}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStack;