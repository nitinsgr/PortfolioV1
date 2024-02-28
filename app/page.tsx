'use client'
import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="prose max-w-full dark:prose-invert">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-32 mb-48 font-medium text-5xl leading-[52px]"
      >
        Hey there, I'm Nitin, a Jaipur-based freelance <span className=" underline text-orange-400">product designer</span> with over 1 year of experience, turning ideas into interactive experiences that leave a lasting impression.
      </motion.h2>
      {/* <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl mb-48 leading-tight font-bold max-w-full"
      >
        A product designer based in <span className=" text-blue-600">Jaipur</span>
      </motion.h2> */}

      <h2 className=" underline text-4xl pb-4">Work</h2>
      {allPosts.map((post, index) => (
        <article
          className=" max-w-2xl"
          key={post._id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link className="no-underline" href={post.slug}>
            <h2 className="underline-offset-0 no-underline font-medium text-3xl border-t-2 border-spacing-4 pt-8">{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}