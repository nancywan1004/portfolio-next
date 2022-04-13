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
  console.log("postItem is: ", postItem[0].content)
  // const content = await markdownToHtml(postItem[0].content[0].markdown || '');
  // console.log("content is: ", content)
  return {
    props: {
      postItem: postItem[0],
      postContent: postItem[0].content
    },
  };
}

export default function Home({ postItem, postContent }) {
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
        <title>Nancy's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div class="text-black dark:text-white">
          <h1 className="leading-8 font-bold dark:font-bold">{postItem.title}</h1>
          <h2 className="leading-8 italic dark:italic">{postItem.date}</h2>
          {
            postContent.map((paragraph, idx) => (
              <div className="py-2 leading-6" key={idx}>{parse(paragraph.html)}</div>
            ))
          }
        </div>
      </main>
    </div>
  );
}
