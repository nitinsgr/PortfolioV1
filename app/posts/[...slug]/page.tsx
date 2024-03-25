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
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => {
    return post.slugAsParams === slug && (post.category === "Work" || post.category === "playground");
  });

  if (!post) {
    notFound();
  }

  return post;
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
    <div className="flex flex-col md:flex-row">
    <article className="py-6 max-w-full md:max-w-4xl text-xl md:text-lg mt-10 prose dark:prose-invert flex-1">
      <h1 className="mb-6 text-4xl md:text-3xl font-semibold truncate">{post.title}</h1>
      {post.description && (
        <p className="text-lg mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <Mdx code={post.body.code} />
  
      <div className="mt-8 flex flex-col md:flex-row md:justify-between">
        {previousPost && (
          <Link href={`/posts/${previousPost.slugAsParams}`}>
            <p className="mb-4 md:mb-0 md:max-w-md">&larr; Previous Post: {previousPost.title}</p>
          </Link>
        )}
        {nextPost && (
          <Link href={`/posts/${nextPost.slugAsParams}`}>
            <p className="md:ml-4 text-blue-500 hover:underline">
              Next Post: {nextPost.title} &rarr;
            </p>
          </Link>
        )}
      </div>
    </article>
  </div>
  )
}
