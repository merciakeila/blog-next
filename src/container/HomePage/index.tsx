import React from 'react';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
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
              <h2 key={post.slug}>{post.title}</h2>
            ))}
          </Grid>
        </Container>
      </MainContainer>
    </>
  );
}
