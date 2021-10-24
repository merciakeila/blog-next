import { GetStaticPaths } from 'next';
import { getAllPosts } from '../../data/count-all-posts';

function DynamicPost() {
  return (
    <p>Feito com carinho Mércia</p>
  );
}

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts('limit=100');
}
