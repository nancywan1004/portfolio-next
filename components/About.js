import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpg"
import Skills from "./Skills";
import Link from 'next/link';
import cursorStyles from '../styles/cursor.module.css'

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    {/* <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        hey there, I&apos;m <br className="block md:hidden" />
                        <span className="relative">
                            <span className="h-auto overflow-x-hidden whitespace-nowrap">
                                nancy :)
                            </span>
                            <span
                                className={`${cursorStyles["cursor"]} absolute -bottom-0 left-0 -top-0.5 inline-block bg-white dark:bg-[#121212] w-full animate-type will-change`}
                            ></span>
                        </span>
                    </h1> */}
                    {/* <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4 font-mono">
                            Tools, System & XR Content Developer at <a href="https://www.yumebau.com/" className="font-bold hover:text-yellow-500 dark:hover:text-blue-500">Yumebau Inc</a>. <br /> UBC Computer Science & Statistics and Master of Digital Media. <br /> A passionate <b>Software Engineer</b> engaged in <b>XR</b> hoping to create tools and system to empower the immersive digital community.
                        </p>
                    </div> */}
                    {/* <div className="mt-20">
                        <Link href="/projects">
                            <a class="text-blue-600 dark:text-white hover:underline">Go to Projects</a>
                        </Link>
                    </div>
                    <div className="mt-10">
                        <Link href="/blog">
                            <a class="text-blue-600 dark:text-white hover:underline">Go to Blog</a>
                        </Link>
                    </div> */}

                </div>
                <div className="flex shrink-1 flex-col items-center lg:mt-12 lg:px-4 mb-10">
                {/* <div className="text-gray-800 dark:text-white">
                    <p className="mb-4 font-mono">
                        Tools, System & XR Content Developer at <a href="https://www.yumebau.com/" className="font-bold hover:text-yellow-500 dark:hover:text-blue-500">Yumebau Inc</a>. <br /> UBC Computer Science & Statistics and Master of Digital Media. <br /> A passionate <b>Software Engineer</b> engaged in <b>XR</b> hoping to create tools and system to empower the immersive digital community.
                    </p>
                </div> */}
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