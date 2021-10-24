import { GetStaticProps } from 'next';
import HomePage from '../container/HomePage';
import { getAllPosts } from '../data/get-all-posts';
import { PostData } from '../domain/posts/post';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {

   const posts = await getAllPosts('_sort=id:desc&_start=0&_limit=30');

  return {
    props: { posts },
    //revalidate: 60,
  };
};

//GET

/* GET STATIC GENERATION PROPS: Integração para renderizar conteúdos estáticos e tem um tempo para revalidar e gerar uma nova build.

no caso de GET STATIC GENARATION PROPS por ser página estática, para funcionar em páginas dinâmicas

import { GetStaticProps } from 'next';
import { PostData } from '../domain/posts/post';

const getPosts = async (): Promise<PostData[]> => {
  const posts = fetch('https://immense-fjord-19108.herokuapp.com/posts');
  const jsonPosts = (await posts).json();
  return jsonPosts;
};

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <>
      {posts.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
    revalidate: 60,
  };
};

O revalidate é o tempo que vai revalidade/gerar nova build.

Para trabalhar com rotas dinâmicas, precisa utilizar o GET STATIC PATHS.
*/

/* GET SERVER SIDE: Integração da forma "tradicional" com react, página ou conteúdo que não precisa ser renderizado nos mecanimos de busca;

export default function Home() {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    getPosts().then((response) => setPosts(response));
  }, [posts]);

  return (
    <>
      {posts.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </>
  );
}
*/
