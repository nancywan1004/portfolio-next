import React from "react";

const Skills = () => {
    return (
        <div>
        <h2 class="pt-2 sm:pt-4 text-black dark:text-white font-mono">ReactJS</h2>
        <div class="h-2 relative w-60 rounded-full overflow-hidden">
            <div className=" w-full h-full bg-gray-200 absolute "></div>
            <div className=" animate-slideInFromLeft w-full h-full bg-yellow-500 sm:bg-yellow-500 dark:bg-blue-500 absolute"></div>
        </div>

        <h2 class="pt-2 sm:pt-4 text-black dark:text-white font-mono">Unity, C#</h2>
        <div class="h-2 relative w-60 rounded-full overflow-hidden">
            <div class=" w-full h-full bg-gray-200 absolute "></div>
            <div className=" animate-slideInFromLeft w-11/12 h-full bg-yellow-400 sm:bg-yellow-400 dark:bg-blue-400 absolute"></div>
        </div>
        <h2 class="pt-2 sm:pt-4 text-black dark:text-white font-mono">Java, Python</h2>
        <div class="h-2 relative w-60 rounded-full overflow-hidden">
            <div class=" w-full h-full bg-gray-200 absolute "></div>
            <div className=" animate-slideInFromLeft w-4/5 h-full bg-yellow-300 sm:bg-yellow-300 dark:bg-blue-300 absolute"></div>
        </div>
        <h2 class="pt-2 sm:pt-4 text-black dark:text-white font-mono">C, C++</h2>
        <div class="h-2 relative w-60 rounded-full overflow-hidden">
            <div class=" w-full h-full bg-gray-200 absolute "></div>
            <div className=" animate-slideInFromLeft w-3/5 h-full bg-yellow-200 sm:bg-yellow-200 dark:bg-blue-200 absolute"></div>
        </div>
        {/* <h2 class="pt-2 sm:pt-4 text-black dark:text-white font-mono">JavaScript</h2>
        <div class="h-2 relative w-60 rounded-full overflow-hidden">
            <div class=" w-full h-full bg-gray-200 absolute "></div>
            <div class=" h-full bg-indigo-500 sm:bg-yellow-400 absolute" style={{width: "10%"}}></div>
        </div> */}
        </div>
    )
}

export default Skills;