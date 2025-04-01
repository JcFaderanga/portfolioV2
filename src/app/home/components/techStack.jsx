"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { skills } from "../../lib/data";
import FadeIn from "@/ui/animation/fadeIn";
const TechStack = () => {
    const [selectedSkill, setSelectedSkill] = useState(skills || []);
    const [filter, setFilter] = useState("All");

    const techFilter = ["All", "Automation","Front end", "Back end", "Tools"];

    const filterSkills = useCallback(() => {
        if (filter === "Automation") return skills.filter((tech) => tech.category === "automation");
        if (filter === "Front end") return skills.filter((tech) => tech.category === "frontend");
        if (filter === "Back end") return skills.filter((tech) => tech.category === "backend");
        if (filter === "Tools") return skills.filter((tech) => tech.category === "tools");
        return skills;
    }, [filter]);

    useEffect(() => {
        setSelectedSkill(filterSkills());
    }, [filterSkills]);

    return (
        <section className="rounded-xl min-h-screen">
            <h1 className="text-3xl text-center font-bold">Tech Stack</h1>

            {/* Filter Buttons */}
            <div className="flex items-center justify-center overflow-x-auto whitespace-nowrap border-b border-gray-400 mt-4 h-11 max-w-2xl w-full mx-auto">
                {techFilter.map((item, index) => (
                    <button
                        key={index}
                        className={`px-3 py-1 mx-1 rounded-md transition-all cursor-pointer text-nowrap ${
                            filter === item ? "font-bold" : "hover:bg-gray-200"
                        }`}
                        onClick={() => setFilter(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Skill Cards */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-3 mt-6">
                {selectedSkill.map((skill, index) => (
                    <FadeIn key={index} delay={index * .03}>
                        <div  className="py-3 px-2 flex items-center justify-between border border-gray-400 rounded-lg  bg-white">
                            <Image src={skill.image} width={32} height={32} alt={skill.name} />
                            <div className="lg:flex items-center justify-between w-full flex-wrap px-1 text-sm">
                                <h4>{skill.name}</h4>
                                <strong className="text-gray-600">{skill.exp}</strong>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

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