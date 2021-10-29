import { POSTS_URL } from '../../config/app-config';
import { fetchJson } from '../../utils/fetch-json';

/*
Endpoint para definir a quantidade de posts

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

export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${POSTS_URL}/count?${query}`;
  const numberOfPosts = await fetchJson<string>(url);
  return numberOfPosts;
};