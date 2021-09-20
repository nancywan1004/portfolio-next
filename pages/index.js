import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'


export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
    <Head>
      <title>Nancy's Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="max-w-4xl mx-auto mt-16 antialiased">
      <About/>
      <div className="lg:px-4 lg:mt-12">
        <Link href="/projects">
          <a class="text-blue-600 hover:underline">Go to Projects</a>
        </Link>
      </div>
      <div className="mt-10 lg:px-4 lg:mt-12">
        <Link href="/blog">
          <a class="text-blue-600 hover:underline">Go to Blog</a>
        </Link>
      </div>
    </main>
  </div>
  )
}
