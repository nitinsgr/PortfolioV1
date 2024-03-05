import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import Link from "next/link"
import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

    // Find the index of the current post
    const currentIndex = allPosts.findIndex(
      (p) => p.slugAsParams === post.slugAsParams
    );
  
    // Get the previous and next posts
    const previousPost = allPosts[currentIndex - 1];
    const nextPost = allPosts[currentIndex + 1];

  return (
    <div className="flex">
    <article className="py-6  max-w-full mt-10 prose dark:prose-invert flex-1">
      <h1 className="mb-10 font-IBM_PLEX">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
      <hr/>
      <div className="mt-8 flex flex-row justify-between">
        {previousPost && (
          <Link href={`/posts/${previousPost.slugAsParams}`}>
            <p className=" max-w-md">&larr; Previous Post: {previousPost.title}</p>
          </Link>
        )}
        {nextPost && (
          <Link href={`/posts/${nextPost.slugAsParams}`}>
            <p className="ml-4 text-blue-500 hover:underline">
              Next Post: {nextPost.title} &rarr;
            </p>
          </Link>
        )}
      </div>
    </article>
  </div>
  )
}
