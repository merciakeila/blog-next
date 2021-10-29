import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { PostData } from '../../domain/posts/post';
import { SITE_NAME } from '../../config/app-config';


export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <h2>{post.title}</h2>
    </>
  );
};
