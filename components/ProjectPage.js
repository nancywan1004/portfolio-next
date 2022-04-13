import parse from 'html-react-parser';
import React from "react"
import VideoDemo from './VideoDemo';

const ProjectPage = ({title, description, tags, content, appUrl, docUrl, demoUrl, role}) => {
    return (
        <div>
            <h1 className="leading-10 text-2xl font-bold">{title}</h1>
            <h2 className="my-4 text-xl font-bold">What is it about?</h2>
            <p>{content}</p>
            <h2 className="my-4 text-xl font-bold">Tech Stack</h2>
            <ul className='pl-6 list-disc'>
                {
                    tags.map((tag, idx) => (
                        <li key={idx}>{tag}</li>
                    ))
                }
            </ul>
            <h2 className="my-4 text-xl font-bold">My Role</h2>
            <div>
                {
                    role.map((item, idx) => (
                        <p className="my-2" key={idx}>{parse(item.html)}</p>
                    ))
                }
            </div>
            <h2 className="my-4 text-xl font-bold">Live Demo</h2>
            <div className='flex justify-center'>
                <VideoDemo demoUrl={demoUrl} />
            </div>
            <h2 className="my-4 text-xl font-bold">Official Documentation</h2>
            <p>Read the full documentation <a href={docUrl} className="underline">here!</a></p>
        </div>
    )

}

export default ProjectPage