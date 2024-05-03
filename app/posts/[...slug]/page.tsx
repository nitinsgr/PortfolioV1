import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => {
    return (
      post.slugAsParams === slug &&
      (post.category === "Work" || post.category === "playground")
    );
  });

  if (!post) {
    notFound();
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  // Find the index of the current post
  const currentIndex = allPosts.findIndex(
    (p) => p.slugAsParams === post.slugAsParams
  );

  // Get the previous and next posts
  const previousPost = allPosts[currentIndex - 1];
  const nextPost = allPosts[currentIndex + 1];

  return (
    <div className="container md:flex md:justify-center">
      <article
        className="py-4 prose prose-h2:text-xl
        prose-strong:dark:text-white
        prose-h2:font-bold
        prose-lg
        max-w-3xl
      prose-h3:dark:text-white
       prose-a:dark:text-white
        mt-24"
      >
        <div>
          <div className=" max-w-7xl prose-xl">
            <h1 className="text-3xl dark:bg-none bg-gradient-to-br from-lime-300 dark:underline decoration-[#FFBB64]  to-lime-50 p-1 max-w-full dark:text-white md:text-2xl whitespace-normal font-medium">
              {post.title}
            </h1>
          </div>

          {post.description && (
            <p
              className="p-4 text-sm text-gray-800 rounded-lg italic"
              role="alert"
            >
              {post.description}
            </p>
          )}
          <div>
            {" "}
          </div>
          <Mdx code={post.body.code} />
        </div>
      </article>
      <div className="mt-8 md:fixed md:border-l-2 border-lime-500 dark:text-white md:pb-8 md:w-80 md:pl-8 md:space-y-10 md:flex-col md:justify-start right-10 md:pt-10">
        <p className="italic pb-4 dark:text-white text-lime-600 font-bold">
          More Case Studies..
        </p>
        {previousPost && (
          <Link href={`/posts/${previousPost.slugAsParams}`}>
            <p className="mb-4 pt-4 w-9/12 pb-4 pr-4 md:mb-0 md:ml-0 md:max-w-md hover:text-[#9B3922] dark:text-white underline-none underline decoration-[#FFC94A]">
              {previousPost.title}
            </p>
          </Link>
        )}
        {nextPost && (
          <Link href={`/posts/${nextPost.slugAsParams}`}>
            <p className="md:ml-0 pr-10 w-9/12 text-blue-500 hover:underline">
              Next Post: {nextPost.title} &rarr;
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}
