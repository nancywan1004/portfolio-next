import PostCard from '../../components/PostCard'
import Link from 'next/link'
import { getPosts } from "../../lib/data";
import Head from 'next/head'

export async function getStaticProps() {
    const postItems = await getPosts();
    console.log(postItems);
    return {
      props: {
        postItems,
      },
    };
}

export default function Posts({ postItems }) {
    // console.log(postItems)
    return (
      <div className="space-y-14 lg:space-y-24">
        <Head>
          <title>Posts</title>
        </Head>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
      <div>
      {
        postItems?.map(item => (
          <div key={item.slug}>
            <Link href={`/blog/${item.slug}`} passHref>
                <PostCard
                title={item.title}
                description={item.description}
                tags={item.tags}
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