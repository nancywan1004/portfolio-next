import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import AboutThree from '../components/ThreeFiber/AboutThree'
import cursorStyles from '../styles/cursor.module.css'

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
    <Head>
      <title>Nancy's Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  
    <main className="max-w-4xl mx-auto mt-16 antialiased">
      <div className="flex max-h-screen">
      <div className="w-1/2">
      <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
          hey there, I&apos;m <br className="block md:hidden" />
          <span className="relative">
              <span className="h-auto overflow-x-hidden whitespace-nowrap">
                  nancy :)
              </span>
              {/* <span
                  className={`${cursorStyles["cursor"]} absolute -bottom-0 left-0 -top-0.5 inline-block bg-white dark:bg-[#121212] w-full animate-type will-change`}
              ></span> */}
          </span>
      </h1>
        <AboutThree />
      </div>
      <div className="w-1/2 flex justify-center items-top">
        <About />
      </div>
      </div>
    </main>
  </div>
  )
}
