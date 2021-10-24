import { POSTS_URL } from '../config/app-config';
import { PostData } from '../domain/posts/post';
import { fetchJson } from '../utils/fetch-json';

//1 - Definido endpoint para poder pegar todos os posts
/*2 - Dentro do endpoint uma query foi adicionada para poder definir o comportamento dos tipos de exibição de posts.
const url = `${POSTS_URL}?&${query}`;
Nesse caso a  query vai iniciar vazio e o parametro a receber será definido no componente final.

Toda query, começa com uma:  ?
ex: https://immense-fjord-19108.herokuapp.com/posts?category.name=Typescript

Tipos de query:
const posts = await getAllPosts('_sort=id:desc&_start=0&_limit=30');

-> _sort=id:desc

Significa definir os cards em ordem ddecrescente.

-> _start=0

Começar da posição 0 do array.

-> _limit=30

Aqui está sendo determinado a quantidade de posts a ser exibidos na tela

*/
export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}?&${query}`;
  const posts = fetchJson<PostData[]>(url);
  return posts;
};
