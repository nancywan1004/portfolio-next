import React from "react"
import Image from "next/image"
import Link from "next/link";
import Date from "./date";

const ProjectCard = React.forwardRef(({href, onClick, title, description, tags, coverImage, startDate, endDate, content}, ref) => {
    return (
        <div class="shadow-lg rounded-lg h-fit w-80 md:w-80 cursor-pointer m-auto p-4 bg-amber-600 transition duration-500 ease-in-out transform hover:shadow-2xl dark:bg-gray-900">
            <a class="w-full block max-h-full">
                <img alt="cover image" src={coverImage?.url} class="h-40 w-full object-cover"/>
                <div class="w-full">
                    <p class="text-gray-800 h-6 dark:text-white text-xl font-medium mb-2">
                        {title}
                    </p>
                    <p class="text-gray-600 dark:text-white font-light text-md">
                        {description}
                    </p>
                    <div tabindex="0" class="collapse collapse-arrow"> 
                    <div class="mt-2 collapse-title text-gray-600 dark:text-white text-md font-medium">
                        <span>
                        <Date dateString={startDate}/>-
                        <Date dateString={endDate}/>
                        </span>
                        <a ref={ref} href={href} onClick={onClick}><h2 class="float-right">Read More</h2></a>
                    </div> 
                    {/* <div class="collapse-content text-gray-600 dark:text-white"> 
                        <p>{content}
                        </p>
                    </div> */}
                    </div>
                    <div class="flex flex-wrap justify-starts items-center mt-4 border-t-2 pt-5">
                        {
                            tags.map((item, idx) => (
                            <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 dark:text-white bg-yellow-100 dark:bg-blue-800 rounded-2xl" key={idx}>
                                {item}
                            </div>
                            ))
                        }
                    </div>
                </div>
            </a>
        </div>
    )
})

export default ProjectCard;