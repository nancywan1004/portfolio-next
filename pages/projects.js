import ProjectCard from '../components/ProjectCard'
import Link from 'next/link'
import { getPortfolioItems } from "../lib/data";
import Head from 'next/head'

export async function getStaticProps() {
    const portfolioItems = await getPortfolioItems();
    return {
      props: {
        portfolioItems,
      },
    };
}

export default function Projects({ portfolioItems }) {
    console.log(portfolioItems)
    return (
      <div className="space-y-14 lg:space-y-24">
        <Head>
          <title>Nancy's Portfolio</title>
        </Head>
      <main className="max-w-2xl mx-auto mt-16 antialiased">
      <div className="grid gap-4 grid-cols-2">
      {
        portfolioItems?.map(item => (
          <div key={item.slug}>
            {/* <a href={item.url}> */}
            <ProjectCard
            title={item.title}
            description={item.description}
            content={item.content}
            tags={item.tags}
            coverImage={item.coverImage}
            url={item.url}
            startDate={item.startDate}
            endDate={item.endDate}
            />
            {/* </a> */}
          </div>
        ))
      }
    </div>
      </main>
      </div>
    )
  }