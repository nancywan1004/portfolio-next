import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { getPost } from "../../lib/data";
import markdownToHtml from '../../lib/markdownToHtml';
import parse from 'html-react-parser';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postItem = await getPost(params.slug);
  const content = await markdownToHtml(postItem[0].content || '');
  return {
    props: {
      postItem: postItem[0],
      postContent: content
    },
  };
}

export default function Home({ postItem, postContent }) {
  const router = useRouter();
  // console.log(postItem)
  if (!router.isFallback && !postItem?.slug) {
    return <ErrorPage statusCode={404} />
  }
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Nancy's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div class="text-black dark:text-white">
          <h1>{postItem.title}</h1>
          <h2>{postItem.date}</h2>
          <div>{parse(postContent)}</div>
        </div>
      </main>
    </div>
  );
}
