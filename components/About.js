import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpg"
import Skills from "./Skills";
import Link from 'next/link';

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey there, I'm Nancy :)
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4 font-mono">
                        A UBC Computer Science and Statistics graduate and a current Master of Digital Media student at Centre for Digital Media. A hardcore <b>Web Developer</b> sneaking into <b>XR</b> and <b>Blockchain</b> hoping to create tools to build a more immersive Web 3.0.
                        </p>
                    </div>
                    <div className="mt-20">
                        <Link href="/projects">
                            <a class="text-blue-600 dark:text-white hover:underline">Go to Projects</a>
                        </Link>
                    </div>
                    <div className="mt-10">
                        <Link href="/blog">
                            <a class="text-blue-600 dark:text-white hover:underline">Go to Blog</a>
                        </Link>
                    </div>

                </div>
                <div className="flex shrink-0 flex-col items-center lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                    <Skills 
                    
                    />
                </div>
            </div>
        </div>
    )
}

export default About;