import parse from 'html-react-parser';
import React from "react"
import VideoDemo from './VideoDemo';

const ProjectPage = ({title, description, tags, content, appUrl, docUrl, demoUrl, role}) => {
    return (
        <div>
            <h1 className="leading-10 text-4xl font-bold">{title}</h1>
            <h2 className="my-4 text-2xl font-bold">What is it about?</h2>
            <p className='text-xl'>{content}</p>
            <h2 className="my-4 text-2xl font-bold">Tech Stack</h2>
            <ul className='pl-6 list-disc'>
                {
                    tags.map((tag, idx) => (
                        <li key={idx} className='text-xl'>{tag}</li>
                    ))
                }
            </ul>
            <h2 className="my-4 text-2xl font-bold">My Role</h2>
            <div>
                {
                    role.map((item, idx) => (
                        <p className="my-2 text-xl" key={idx}>{parse(item.html)}</p>
                    ))
                }
            </div>
            <h2 className="my-4 text-2xl font-bold">Live Demo</h2>
            <div className='flex justify-center'>
                <VideoDemo demoUrl={demoUrl} />
            </div>
            <div className='my-2 flex justify-center'><a href={appUrl} className="text-blue-600">Try the <b className='underline'>DEMO</b> {'\u2728'}</a></div>
            <h2 className="my-4 text-2xl font-bold">Official Documentation</h2>
            <p className='text-xl'>Read the full documentation <a href={docUrl} className="underline">here!</a></p>
        </div>
    )

}

export default ProjectPage