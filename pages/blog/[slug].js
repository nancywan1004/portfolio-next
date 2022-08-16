import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import markdownToHtml from '../../lib/markdownToHtml';
import parse from 'html-react-parser';
import ErrorPage from 'next/error'
import PrevNextButtons from '../../components/PrevNextButtons';
import { getNextPostItem, getPost, getPreviousPostItem } from "../../lib/data";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postItem = await getPost(params.slug);
  console.log("postItem is: ", postItem[0].content)
  const nextPostItem = await getNextPostItem(postItem[0]?.id)
  const prevPostItem = await getPreviousPostItem(postItem[0]?.id)
  // const content = await markdownToHtml(postItem[0].content[0].markdown || '');
  // console.log("content is: ", content)
  return {
    props: {
      postItem: postItem[0],
      postContent: postItem[0].content,
      prevPostItem: prevPostItem.length > 0 ? prevPostItem[0] : null,
      nextPostItem: nextPostItem.length > 0 ? nextPostItem[0] : null
    },
  };
}

const PrevButton = PrevNextButtons.PrevButton
const NextButton = PrevNextButtons.NextButton

export default function Home({ postItem, postContent, prevPostItem, nextPostItem }) {
  const router = useRouter();
  if (!router.isFallback && !postItem?.slug) {
    return <ErrorPage statusCode={404} />
  }
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="px-4 text-black dark:text-white">
          <h1 className="leading-8 font-bold dark:font-bold text-2xl">{postItem.title}</h1>
          <h2 className="leading-8 italic dark:italic text-xl">{postItem.date}</h2>
          {
            postContent.map((paragraph, idx) => (
              <div className="py-2 leading-6 text-xl" key={idx}>{parse(paragraph.html)}</div>
            ))
          }
          <div class="mt-10 flex flex-row justify-between mx-auto">
                <PrevButton prevSlug={`/blog/${prevPostItem?.slug}`} />
                <NextButton nextSlug={`/blog/${nextPostItem?.slug}`} />
            </div>
        </div>
      </main>
    </div>
  );
}
