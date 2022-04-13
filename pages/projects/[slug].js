import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { getPortfolioItem } from "../../lib/data";
import markdownToHtml from '../../lib/markdownToHtml';
import ProjectPage from "../../components/ProjectPage";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const portfolioItem = await getPortfolioItem(params.slug);
  console.log("params slug is: ", portfolioItem)
  return {
    props: {
        portfolioItem: portfolioItem[0]
    },
  };
}

export default function Home({ portfolioItem }) {
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
        <title>Nancy's Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div class="text-black dark:text-white">
            <ProjectPage title={portfolioItem.title} description={portfolioItem.description} content={portfolioItem.content} 
            appUrl={portfolioItem.appUrl}
            docUrl={portfolioItem.docUrl} tags={portfolioItem.tags}
            demoUrl={portfolioItem.demoUrl} role={portfolioItem.role}/>
        </div>
      </main>
    </div>
  );
}
