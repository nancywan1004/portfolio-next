import React from "react"
import Image from "next/image"
import Link from "next/link";

const ProjectCard = (props) => {
    return (
        <div class="overflow-hidden shadow-lg rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto p-4 bg-indigo-200 transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl dark:bg-gray-900">
            <a class="w-full block h-full">
                <img alt="cover image" src={props.coverImage?.url} class="max-h-60 w-full object-cover"/>
                <div class="w-full">
                    <p class="text-gray-800 dark:text-white text-xl font-medium mb-2 dark:text-white">
                        {props.title}
                    </p>
                    <p class="text-gray-600 dark:text-gray-300 font-light text-md dark:text-white">
                        {props.description}
                    </p>
                    <div class="flex flex-wrap justify-starts items-center mt-4 border-t-2 pt-5">
                        {
                            props.tags.map((item, idx) => (
                            <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-yellow-100 rounded-2xl dark:text-white" key={idx}>
                                {item}
                            </div>
                            ))
                        }
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProjectCard;