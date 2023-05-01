import React from 'react';
import Link from "next/link";
import Layout from '../../components/Layout';
import { motion } from "framer-motion";
import Typical from  'react-typical';

import GithubIcon from '../../components/icons/Github.js';
import LinkedinIcon from '../../components/icons/Linkedin.js';



const TypingAnimation = React.memo(
  () => {
      return (
          <Typical
          loop={3}
          wrapper="p"
          steps={[
              "Frontend Developer 👑",
              2000,
              "React",
              2000,
              "React Native",
              2000,
          ]} />
      )
  },
  (props, prevProps) => true
);

export default function Home() {
  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
       <motion.img
        src="/images/ball-1.svg"
        alt="ball-1"
        className="hidden md:block h-auto absolute top-48 right-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />

      <motion.img
        src="/images/ball-2.svg"
        alt="ball-2"
        className="hidden md:block h-auto absolute bottom-10 left-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
   
       <main className='w-full h-full'>
        <section className='h-full max-w-5xl mx-auto pt-16 md:pt-8'>
          <div className='flex flex-col items-center justify-center md:items-center'>
            <h4 className='text-lg text-gray-800 dark:text-white'>
              <span className='text-xl font-normal'>Hello,</span>I`m
            </h4>
            <h1 className='mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white'>Humeyra Aydogdu</h1>
            <div className='mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3'>
              <TypingAnimation/>
            </div>
            {/*Social Accounts*/}
            <div className='flex items-center mt-8 space-x-6 md:mt-4'>
              <motion.a href='https://github.com/Humeyr' target={"_blank"} rel="noopener noreferrer"
                className='flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200'
                whileHover={{scale:1.1}}
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
              
              <motion.a href='https://www.linkedin.com/in/humeyra-aydogdu-00a389257/' target={"_blank"} rel="noopener noreferrer"
                className='flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200'
                whileHover={{scale:1.1}}
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
          </div>
          {/* Code Area */}
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> You can drag
                    these balloons I'm really in love with them 🎈🎈
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/p.jpg"
                      alt="Me"
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300"></span> =
                        ["Html", "Css", "Scss", "Js", "Reactjs", "ReactNative"];{" "}
                      </p>
              
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <Link href="/projects" className="transition duration-300">
                      Projects
                    </Link>
                  </div>
                </code>
              </pre>
            </div>
          </article>

        </section>
       
      </main>

    </Layout>

  );
}
