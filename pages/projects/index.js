import React from "react";
import ProjectCard from '../../components/ProjectCard'
import Link from 'next/link'
import { getPortfolioItems } from "../../lib/data";
import Head from 'next/head'
import { useElementOnScreen } from '../../lib/customHooks';

export async function getStaticProps() {
    const portfolioItems = await getPortfolioItems();
    return {
      props: {
        portfolioItems,
      },
    };
}

export default function Projects({ portfolioItems }) {

    const [ containerRef ] = useElementOnScreen({
      root: null,
      rootMargin: "0px",
      threshold: 0.25
    })  

    return (
      <div className="space-y-14 lg:space-y-24">
        <Head>
          <title>Projects</title>
        </Head>
      <main className="max-w-2xl mx-auto mt-16 antialiased">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {
        portfolioItems?.map(item => (
          <div ref={containerRef} key={item.slug} className="animate-fadeIn">
            <Link href={`/projects/${item.slug}`} passHref>
            <ProjectCard
            title={item.title}
            description={item.description}
            content={item.content}
            tags={item.tags}
            coverImage={item.coverImage}
            startDate={item.startDate}
            endDate={item.endDate}
            />
            </Link>
          </div>
        ))
      }
    </div>
      </main>
      </div>
    )
  }