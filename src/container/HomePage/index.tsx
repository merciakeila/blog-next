import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { PostData } from '../../domain/posts/post';
import { Container, Grid } from './style';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          <Grid>
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                cover={post.cover.formats.small.url}
                slug={post.slug}
                title={post.title}
              />
            ))}
          </Grid>
        </Container>
      </MainContainer>
      <Footer/>
    </>
  );
}
