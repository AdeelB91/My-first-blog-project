import * as React from "react";
import Link from "next/link";
import { getPostData, getSortedPostsData } from "../../lib/posts";
import styled, { css } from "styled-components";

export default function Example1({ post }) {
  return (
    <>
      <Container>
        <Headline>{post.title}</Headline>
        <TimeDate dateTime={post.date}>{post.date}</TimeDate>
        <Content
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        ></Content>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </Container>
    </>
  );
}

const Container = styled.section`
  margin: 25px;
  border: solid 5px white;
  border-radius: 10px;
  padding: 15px;
`;

const Headline = styled.h2`
  font-size: 30px;
  display: flex;
  justify-content: center;
  margin: 30px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 30px;
`;

const TimeDate = styled.time`
  margin: 30px;
`;

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
