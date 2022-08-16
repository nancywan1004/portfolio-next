import React from "react"
import Link from 'next/link';

const PrevButton = ({ prevSlug }) => {
    if (prevSlug.substring(prevSlug.lastIndexOf("/")+1) === 'undefined') {
        return (
            <button type="button" className="text-transparent rounded-r-md py-2 hover:border-l border-gray-300 px-3" disabled>
                <div className="flex flex-row align-middle">
                    <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                    </svg>
                    <span className="mr-2">Previous</span>
                </div>
            </button>
        )
    }
    return (
        <Link href={prevSlug}>
            <button type="button" className="text-black rounded-l-md hover:border-r border-gray-300 py-2 dark:text-white px-3">
                <div className="flex flex-row align-middle">
                    <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                    </svg>
                    <p className="ml-2">Previous</p>
                </div>
            </button>
        </Link>

    )
}

const NextButton = ({ nextSlug }) => {
    if (nextSlug.substring(nextSlug.lastIndexOf("/")+1) === 'undefined') {
        return (
            <button type="button" className="text-transparent rounded-r-md py-2 hover:border-l border-gray-300 px-3" disabled>
                <div className="flex flex-row align-middle">
                    <span className="mr-2">Next</span>
                    <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </button>
        )
    }
    return (
        <Link href={nextSlug}>
            <button type="button" className="text-black rounded-r-md py-2 hover:border-l border-gray-300 dark:text-white px-3">

                <div className="flex flex-row align-middle">
                    <span className="mr-2">Next</span>
                    <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </button>
        </Link>
    )
}

export default {
    PrevButton,
    NextButton
}