'use client'
import { allPosts, allWorks } from "@/.contentlayer/generated"
import Link from "next/link"
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="prose max-w-full dark:prose-invert">
     <div className="pt-10 md:pt-20 md:pb-20">
     <h4>Hello, I'm Nitin </h4>
      <h1 className=" text-4xl md:text-5xl font-medium"><span className=" italic text-blue-600">From ideas to intuitive experiences!</span>  Freelance product designer with a passion for pushing boundaries in <span className=" text-red-500 font-medium italic">AR/VR</span>. Let's create something groundbreaking!</h1>
     </div>
      {/* <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl mb-48 leading-tight font-bold max-w-full"
      >
        A product designer based in <span className=" text-blue-600">Jaipur</span>
      </motion.h2> */}

<div className="grid grid-cols-1 gap-20">
<h1 className="pt-32">Work</h1>
      {allPosts
        .filter((post) => post.category === "Work")
        .map((post, index) => (
          <article
          >
            <div className="grid grid-cols-2 gap-10">
            <div className=" w-2/3">
            <h2 className="underline-offset-0 no-underline font-medium border-spacing-4 pt-8">
              {post.title}
            </h2>
            {post.description && <p>{post.description}</p>}
            <Link className="no-underline" href={post.slug}>
              <h3 className="bg-black p-4 text-center text-white dark:bg-white dark:text-black rounded-md hover:bg-indigo-700 hover">
                View casestudy
              </h3>
            </Link>
            </div>
            <div>
            <img className=" object-contain w-4/5 items-center" src={post.image} alt={post.title} />
            </div>
            </div>
          </article>
        ))}
    </div>

    <div className="grid grid-cols-1 gap-20">
<h1 className="pt-32">Other Projects </h1>
      {allPosts
        .filter((post) => post.category === "playground")
        .map((post, index) => (
          <article
          >
            <div className="grid grid-cols-2 gap-10">
            <div className=" w-2/3">
            <h2 className="underline-offset-0 no-underline font-medium border-spacing-4 pt-8">
              {post.title}
            </h2>
            {post.description && <p>{post.description}</p>}
            <Link className="no-underline" href={post.slug}>
              <h3 className="bg-black p-4 text-center text-white dark:bg-white dark:text-black rounded-md hover:bg-indigo-700 hover">
                View casestudy
              </h3>
            </Link>
            </div>
            <div>
            <img className=" object-contain w-4/5 items-center" src={post.image} alt={post.title} />
            </div>
            </div>
          </article>
        ))}
    </div>

      {/* {allPosts.map((post, index) => (
        <article
          className=" max-w-2xl"
          key={post._id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link className="no-underline" href={post.slug}>
            <h2 className="underline-offset-0 no-underline  font-medium text-3xl border-t-2 border-spacing-4 pt-8">{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))} */}
    </div>
  )
}