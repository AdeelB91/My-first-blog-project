import { PostList } from "../components/PostList/PostList";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import styled, { css } from "styled-components";

export default function Home({ posts }) {
  return (
    <Main>
      <Head>
        <title>Home</title>
      </Head>
      <Headline>My Blog</Headline>
      <Intro>Welcome to my first Blog-Webpage</Intro>
      <PostHeadline>Posts</PostHeadline>
      <Container>
        <PostList posts={posts} />
      </Container>
    </Main>
  );
}

const Main = styled.main`
  margin: 25px;
  border: solid 5px white;
  border-radius: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Headline = styled.h1`
  font-size: 30px;
  display: flex;
  justify-content: center;
  margin: 30px;
`;

const Intro = styled.p`
  display: flex;
  justify-content: center;
`;

const PostHeadline = styled.h2`
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts: posts,
    },
  };
}
