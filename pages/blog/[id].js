import * as React from "react";
import Link from "next/link";
import { getPostData, getSortedPostsData } from "../../lib/posts";

export default function Example1({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <time dateTime={post.date}>{post.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getSortedPostsData();

  return {
    paths: posts.map((post) => ({ params: { id: post.id } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const post = await getPostData(id);

  return {
    props: {
      post: post,
    },
  };
}
