import parse from 'html-react-parser';
import React from "react"
import VideoDemo from './VideoDemo';
import Link from 'next/link';
import PrevNextButtons from './PrevNextButtons';

export async function getStaticProps({ params }) {
    const portfolioItem = await getPortfolioItem(params.slug);
    console.log("params slug is: ", portfolioItem)
    return {
        props: {
            portfolioItem: portfolioItem[0]
        },
    };
}

const PrevButton = PrevNextButtons.PrevButton
const NextButton = PrevNextButtons.NextButton

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
            {demoUrl ? <><h2 className="my-4 text-2xl font-bold">Video Demo</h2>
                <div className='flex justify-center'>
                    <VideoDemo demoUrl={demoUrl} />
                </div></> : null}

            {
                appUrl ? <div>
                    <h2 className="my-4 text-2xl font-bold">Live Demo</h2>
                    <div className='my-2 text-xl'>Try the {appUrl ? <a href={appUrl} className="text-blue-600"><b className='underline'>live demo</b>{'\u2728'}</a> : null}</div>
                </div> : null
            }

            <h2 className="my-4 text-2xl font-bold">Official Documentation</h2>
            <p className='text-xl'>Read the <a href={docUrl} className="underline text-blue-600 font-bold">full documentation</a>📋</p>

            {/* <div class="bg-gray-200 max-w-lg p-36 container flex justify-center mx-auto"> */}
            <div class="mt-10 flex flex-row justify-between mx-auto">
                <PrevButton prevSlug={prev} />
                <NextButton nextSlug={next} />
            </div>
            {/* </div> */}
        </div>
    )

}

export default ProjectPage