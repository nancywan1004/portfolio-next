import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { getPost } from "../../lib/data";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postItem = await getPost(params.slug);
  return {
    props: {
      postItem: postItem[0],
    },
  };
}

export default function Home({ postItem }) {
  const router = useRouter();
  // console.log(postItem)
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
        <div>
          <h1>{postItem.title}</h1>
        </div>
      </main>
    </div>
  );
}
