import React from "react";
import { useRouter } from 'next/router'
import { getMarkdownBySlug } from "../lib/api";
import markdownToHtml from '../lib/markdownToHtml';
import Head from "next/head";
import ErrorPage from 'next/error';
import PostBody from "../components/ResourceBody";

export async function getStaticProps() {
    const markdown = getMarkdownBySlug("resume", [
        'name',
        'date',
        'slug',
        'email',
        'phoneNumber',
        'content',
        'coverImage',
    ])
    const content = await markdownToHtml(markdown.content || '')

    return {
        props: {
            markdown: {
                ...markdown,
                content,
            },
        },
    }
}
  
  export default function Resume({ markdown }) {
    const router = useRouter()
    if (!router.isFallback && !markdown?.slug) {
      return <ErrorPage statusCode={404} />
    }

    if (router.isFallback) {
        return <div>Loading...</div>;
      }
      return (
        <div className="space-y-14 lg:space-y-24">
          <Head>
            <title>Resume</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className="max-w-4xl mx-auto mt-16 antialiased">
            <div className="px-4 text-black dark:text-white">
                <div className="grid grid-cols-2 items-end mb-4">
                    <h1 className="leading-8 font-bold dark:font-bold text-3xl">{markdown.name}</h1>
                    <span><a className="text-blue-600 visited:text-purple-600" href={`https://${markdown.email}`}>{markdown.email}</a> | {markdown.phoneNumber}</span>
                </div>
              
              <PostBody content={markdown.content} />
            </div>
          </main>
        </div>
      );
}
