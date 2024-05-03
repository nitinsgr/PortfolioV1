"use client";
import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose max-w-full dark:prose-invert mb-36">
      <div className="pt-10 grid grid-cols-2 md:pt-20 md:pb-20">
        <div className="pt-24">
          <h4>Hello, I'm Nitin </h4>
          <h1 className=" text-4xl md:text-3xl w-3/4 font-medium">
            <span className=" italic text-black">
              From ideas to intuitive experiences!
            </span>{" "}
            Freelance product designer with a passion for pushing boundaries in{" "}
            <span className=" text-blue-500 font-medium italic">AR/VR</span>.
            Let's create something groundbreaking!
          </h1>
        </div>
        <div>
          <img className="pt-16" src="Animation6.gif" />
        </div>
      </div>

      <div className="">
        <h2 className="pt-32 font-medium">Work</h2>
        {allPosts
          .filter((post) => post.category === "Work")
          .map((post, index) => (
            <article>
              <div className="grid grid-cols-2 gap-10">
                <div className="">
                  <h2 className="underline-offset-0 no-underline font-medium border-spacing-4">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-lg font-serif text-gray-500">
                      {post.description}
                    </p>
                  )}
                  <Link className="no-underline" href={post.slug}>
                    <p className="text-xl font-serif hover:text-[#9B3922] underline-none hover:underline hover:decoration-[#FFC94A]">
                      Read More...
                    </p>
                  </Link>
                </div>
              </div>
            </article>
          ))}
      </div>

      <h2 className="mt-20 font-medium">Other work</h2>
      <div className="grid grid-cols-2 gap-20 ">
        {allPosts
          .filter((post) => post.category === "playground")
          .map((post, index) => (
            <article>
              <div className="grid grid-cols-1 gap-20">
                <div className="">
                  <h2 className="underline-offset-0 no-underline font-medium">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="w-3/4">{post.description}</p>
                  )}
                  <Link className="no-underline" href={post.slug}>
                    <p className="text-xl font-serif hover:text-[#9B3922] underline-none hover:underline hover:decoration-[#FFC94A]">
                      Read More...
                    </p>
                  </Link>
                </div>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}
