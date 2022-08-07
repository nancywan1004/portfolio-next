import parse from 'html-react-parser';
import React from "react"
import VideoDemo from './VideoDemo';
import Link from 'next/link';

export async function getStaticProps({ params }) {
    const portfolioItem = await getPortfolioItem(params.slug);
    console.log("params slug is: ", portfolioItem)
    return {
        props: {
            portfolioItem: portfolioItem[0]
        },
    };
}

const PrevButton = ({ prevSlug }) => {
    if (!prevSlug) {
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
            <button type="button" className="text-black rounded-l-md hover:border-r border-gray-300 py-2 dark:text-white px-3">
                <Link href={`/projects/${prevSlug}`}>
                <div className="flex flex-row align-middle">
                    <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                    </svg>
                    <p className="ml-2">Previous</p>
                </div>
                </Link>
            </button>   

    )
}

const NextButton = ({ nextSlug }) => {
    if (!nextSlug) {
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
        <button type="button" className="text-black rounded-r-md py-2 hover:border-l border-gray-300 dark:text-white px-3">
            <Link href={`/projects/${nextSlug}`}>
            <div className="flex flex-row align-middle">
                <span className="mr-2">Next</span>
                <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
            </div>
            </Link>
        </button>
    )
}


const ProjectPage = (props) => {
    const { title, description, tags, content, appUrl, docUrl, demoUrl, role, prev, next } = props

    return (
        <div className='h-auto m-auto'>
            <h1 className="leading-10 text-4xl font-bold">{title}</h1>
            <h2 className="my-4 text-2xl font-bold">What is it about?</h2>
            <p className='text-xl'>{content}</p>
            <h2 className="my-4 text-2xl font-bold">Tech Stack</h2>
            <ul className='pl-6 list-disc'>
                {
                    tags?.map((tag, idx) => (
                        <li key={idx} className='text-xl'>{tag}</li>
                    ))
                }
            </ul>
            <h2 className="my-4 text-2xl font-bold">My Role</h2>
            <div>
                {
                    role?.map((item, idx) => (
                        <p className="my-2 text-xl" key={idx}>{parse(item.html)}</p>
                    ))
                }
            </div>
            <h2 className="my-4 text-2xl font-bold">Live Demo</h2>
            {
                appUrl ? null : <p className='text-xl'>Stay tuned!</p>
            }
            <div className='flex justify-center'>
                {demoUrl ? <VideoDemo demoUrl={demoUrl} /> : null}
            </div>
            <div className='my-2 flex justify-center'>{appUrl ? <a href={appUrl} className="text-blue-600">Try the <b className='underline'>DEMO</b> {'\u2728'}</a> : null}</div>
            <h2 className="my-4 text-2xl font-bold">Official Documentation</h2>
            <p className='text-xl'>Read the full documentation <a href={docUrl} className="underline">here!</a></p>

            {/* <div class="bg-gray-200 max-w-lg p-36 container flex justify-center mx-auto"> */}
            <div class="mt-10 flex flex-row justify-between mx-auto">
                <PrevButton prevSlug={prev}/>
                <NextButton nextSlug={next}/>
            </div>
            {/* </div> */}
        </div>
    )

}

export default ProjectPage