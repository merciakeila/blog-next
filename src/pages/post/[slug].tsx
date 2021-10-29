import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '../../containers/Post';
import { countAllPosts } from '../../data/posts/count-all-posts';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPost } from '../../data/posts/get-post';
import { PostData } from '../../domain/posts/post';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params.slug);
  const post = posts.length > 0 ? posts[0] : {};

  return {
    props: { post: post },
    // revalidate: 600,  // Eu não preciso atualizar este blog (por isso comentei)
  };
};

// PARAMETRO CTX: Significa contexto

/* 
GET STATIC PATHS

É apresentado todos os posts e a QUERY tem como funcionalidade, nese caso, apresentar na tela o limite de postagens a ser exibida, baseado na quantidade total de número de postagens que o 

 Apresentação número de posts:
 const numberOfPosts = await countAllPosts();

 São todos os posts e está recebendo em limit o número de posts:
 const posts = await getAllPosts(`_limit=${numberOfPosts}`);

 Se uma página tem rotas dinâmicas ( documentação ) e a usa, getStaticPropsé necessário definir uma lista de caminhos que devem ser renderizados para HTML no momento da construção.

 Vamos usar paths e fallback.

 No RETURN, precisa retornar os PATHS que é um array e o parametro que será inserido é o slug que são os parametros de URL e estarão em um contexto do Static Props.

 Se o fallback, precisa ficar falso porque se a pessoa tentar acessar uma página que não existe em posts (slug), retorna página 404. 

  **PATHS**
 Dentro de return e paths está retornando o parametro e qual será o parametro da rota da página que nesse caso está usando o SLUG, mas poderia ser um ID.
 */

/*
 GET STATIC PROPS
 */
