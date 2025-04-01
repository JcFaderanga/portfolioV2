"use client"
import React from "react";
import Image from "next/image";
import {helloWorld } from "../../lib/data";

const HelloWorld = () => {
    return(
        <div className=" rounded-xl p-4 bg-white border border-gray-300">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Hello World</h1>
                <span className="border rounded-md px-4">2019</span>
            </div>
            <p className="py-2">{helloWorld}</p>
        </div>
    )
}

export default HelloWorld;