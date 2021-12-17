import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpg"

const PostCard = React.forwardRef(({href, onClick, date, title, description, tags}, ref) => {
    return (
        <div class="max-w-4xl px-10 my-4 py-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <div class="flex justify-between items-center">
            <span class="font-light text-gray-600">{date}</span>
            <div class="flex flex-row-reverse space-x-1 space-x-reverse">
            {
                tags.map((tag, idx) => (
                    <a key={idx} class="px-2 py-1 bg-gray-500 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">{tag}</a>
                ))
            }
            </div>
        </div>
        <div class="mt-2">
            <a class="text-2xl text-gray-700 dark:text-white font-bold hover:text-gray-600" ref={ref} href={href} onClick={onClick}>{title}</a>
            <p class="mt-2 text-gray-600 dark:text-white">{description}</p>
        </div>
        <div class="flex justify-between items-center mt-4">
            <a class="text-blue-600 hover:underline" ref={ref} href={href} onClick={onClick}>Read more</a>
            <div>
                <a class="flex items-center" href="#">
                    <div className="mx-4">
                        <Image src={profile} alt="avatar" width={40} height={40} className="rounded-full"/>
                    </div>
                    <h1 class="text-gray-700 dark:text-white font-bold">Nancy Wan</h1>
                </a>
            </div>
        </div>
    </div>
    )
})

export default PostCard;