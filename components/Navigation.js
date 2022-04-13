import Link from "next/link"
import React from "react"
import ThemeSwitch from "./ThemeSwitch";
import { getAllFileIds } from "../lib/data";

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        Nancy Wan
                    </a>
                </Link>
                <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                    <Link href="/blog">
                            <a
                                className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                            >
                                Blog
                            </a>
                        </Link>
                    <Link href="/projects">
                        <a
                            className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                        >
                            Projects
                        </a>
                    </Link>
                    <a href="/api/getPDF">
                        <a
                            className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                        >
                            Resume
                        </a>
                    </a>
                    <ThemeSwitch />
                </div>
            </div>
        </div>
    )
}

export default Navigation;
