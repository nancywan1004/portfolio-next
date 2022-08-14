import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { getNextPortfolioItem, getPortfolioItem, getPreviousPortfolioItem } from "../../lib/data";
import markdownToHtml from '../../lib/markdownToHtml';
import ProjectPage from "../../components/ProjectPage";
import Verification from "../../components/Verification";
import ErrorPage from 'next/error'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const portfolioItem = await getPortfolioItem(params.slug);
  const nextPortfolioItem = await getNextPortfolioItem(portfolioItem[0]?.id)
  const prevPortfolioItem = await getPreviousPortfolioItem(portfolioItem[0]?.id)
  console.log("params slug is: ", portfolioItem)
  return {
    props: {
        portfolioItem: portfolioItem[0],
        prevPortfolioItem: prevPortfolioItem.length > 0 ? prevPortfolioItem[0] : null,
        nextPortfolioItem: nextPortfolioItem.length > 0 ? nextPortfolioItem[0] : null
    },
  };
}

export default function Home({ portfolioItem, prevPortfolioItem, nextPortfolioItem }) {
  const [isAccessible, setAccessible] = useState(portfolioItem?.passcode == null)

  useEffect(() => {
    setAccessible(portfolioItem?.passcode == null)
  }, [portfolioItem])

  console.log(portfolioItem?.title + isAccessible)
  const router = useRouter();
  if (!router.isFallback && !portfolioItem?.slug) {
    return <ErrorPage statusCode={404} />
  }
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  console.log("portfolio item: ", portfolioItem)
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="flex px-4 text-black dark:text-white">
          {
            isAccessible === true ? <ProjectPage title={portfolioItem?.title} description={portfolioItem?.description} content={portfolioItem?.content} 
            appUrl={portfolioItem?.appUrl}
            docUrl={portfolioItem?.docUrl} tags={portfolioItem?.tags}
            demoUrl={portfolioItem?.demoUrl} role={portfolioItem?.role}
            prev={prevPortfolioItem?.slug} next={nextPortfolioItem?.slug}
            // setCurrPortfolioItem={setCurrPortfolioItem}
            /> : <Verification passcode={portfolioItem.passcode} allowAccess={() => {setAccessible(true)}} title={portfolioItem?.title} prev={prevPortfolioItem?.slug} next={nextPortfolioItem?.slug}/>
          }
        </div>
      </main>
    </div>
  );
}
