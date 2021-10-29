"use strict";
(() => {
var exports = {};
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./src/config/app-config.ts":
/*!**********************************!*\
  !*** ./src/config/app-config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "POSTS_URL": () => (/* binding */ POSTS_URL),
/* harmony export */   "SITE_NAME": () => (/* binding */ SITE_NAME),
/* harmony export */   "SITE_URL": () => (/* binding */ SITE_URL)
/* harmony export */ });
//ADICIONAR NO .env.local
const API_URL = 'https://immense-fjord-19108.herokuapp.com';
const POSTS_URL = `${API_URL}/posts`;
const SITE_NAME = 'Mércia Keila';
const SITE_URL = 'https://blogcurso.otaviomiranda.com.br';

/***/ }),

/***/ "./src/containers/Post/index.tsx":
/*!***************************************!*\
  !*** ./src/containers/Post/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Post": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Estudos\\blog-next\\src\\containers\\Post\\index.tsx";


const Post = ({
  post
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ "./src/data/posts/count-all-posts.ts":
/*!*******************************************!*\
  !*** ./src/data/posts/count-all-posts.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countAllPosts": () => (/* binding */ countAllPosts)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/app-config */ "./src/config/app-config.ts");
/* harmony import */ var _utils_fetch_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/fetch-json */ "./src/utils/fetch-json.ts");


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

const countAllPosts = async (query = '') => {
  const url = `${_config_app_config__WEBPACK_IMPORTED_MODULE_0__.POSTS_URL}/count?${query}`;
  const numberOfPosts = await (0,_utils_fetch_json__WEBPACK_IMPORTED_MODULE_1__.fetchJson)(url);
  return numberOfPosts;
};

/***/ }),

/***/ "./src/data/posts/get-all-posts.ts":
/*!*****************************************!*\
  !*** ./src/data/posts/get-all-posts.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllPosts": () => (/* binding */ getAllPosts)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/app-config */ "./src/config/app-config.ts");
/* harmony import */ var _utils_fetch_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/fetch-json */ "./src/utils/fetch-json.ts");

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

const getAllPosts = async (query = '') => {
  const url = `${_config_app_config__WEBPACK_IMPORTED_MODULE_0__.POSTS_URL}?&${query}`;
  const posts = (0,_utils_fetch_json__WEBPACK_IMPORTED_MODULE_1__.fetchJson)(url);
  return posts;
};

/***/ }),

/***/ "./src/data/posts/get-post.ts":
/*!************************************!*\
  !*** ./src/data/posts/get-post.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPost": () => (/* binding */ getPost)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/app-config */ "./src/config/app-config.ts");
/* harmony import */ var _utils_fetch_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/fetch-json */ "./src/utils/fetch-json.ts");


const getPost = async slug => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${_config_app_config__WEBPACK_IMPORTED_MODULE_0__.POSTS_URL}?slug=${slugString}`;
  const jsonPosts = await (0,_utils_fetch_json__WEBPACK_IMPORTED_MODULE_1__.fetchJson)(url);
  return jsonPosts;
};

/***/ }),

/***/ "./src/pages/post/[slug].tsx":
/*!***********************************!*\
  !*** ./src/pages/post/[slug].tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _containers_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../containers/Post */ "./src/containers/Post/index.tsx");
/* harmony import */ var _data_posts_count_all_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/posts/count-all-posts */ "./src/data/posts/count-all-posts.ts");
/* harmony import */ var _data_posts_get_all_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/posts/get-all-posts */ "./src/data/posts/get-all-posts.ts");
/* harmony import */ var _data_posts_get_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/posts/get-post */ "./src/data/posts/get-post.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\Estudos\\blog-next\\src\\pages\\post\\[slug].tsx";






const DynamicPost = ({
  post
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_containers_Post__WEBPACK_IMPORTED_MODULE_0__.Post, {
    post: post
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicPost);
const getStaticPaths = async () => {
  const numberOfPosts = await (0,_data_posts_count_all_posts__WEBPACK_IMPORTED_MODULE_1__.countAllPosts)();
  const posts = await (0,_data_posts_get_all_posts__WEBPACK_IMPORTED_MODULE_2__.getAllPosts)(`_limit=${numberOfPosts}`);
  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: true
  };
};
const getStaticProps = async ctx => {
  const posts = await (0,_data_posts_get_post__WEBPACK_IMPORTED_MODULE_3__.getPost)(ctx.params.slug);
  const post = posts.length > 0 ? posts[0] : {};
  return {
    props: {
      post: post
    } // revalidate: 600,  // Eu não preciso atualizar este blog (por isso comentei)

  };
}; // PARAMETRO CTX: Significa contexto

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

/***/ }),

/***/ "./src/utils/fetch-json.ts":
/*!*********************************!*\
  !*** ./src/utils/fetch-json.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchJson": () => (/* binding */ fetchJson)
/* harmony export */ });
const fetchJson = async url => {
  const rawData = fetch(url);
  const jsonData = (await rawData).json();
  return jsonData;
};

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/post/[slug].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1DLGNBQThCLEdBQUcsTUFBT0MsR0FBUCxJQUFlO0FBQzNELFFBQU1kLEtBQUssR0FBRyxNQUFNQyw2REFBTyxDQUFDYSxHQUFHLENBQUNILE1BQUosQ0FBV1QsSUFBWixDQUEzQjtBQUNBLFFBQU1WLElBQUksR0FBR1EsS0FBSyxDQUFDZSxNQUFOLEdBQWUsQ0FBZixHQUFtQmYsS0FBSyxDQUFDLENBQUQsQ0FBeEIsR0FBOEIsRUFBM0M7QUFFQSxTQUFPO0FBQ0xnQixJQUFBQSxLQUFLLEVBQUU7QUFBRXhCLE1BQUFBLElBQUksRUFBRUE7QUFBUixLQURGLENBRUw7O0FBRkssR0FBUDtBQUlELENBUk0sRUFVUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdEVPLE1BQU1FLFNBQVMsR0FBRyxNQUFVRyxHQUFWLElBQXNDO0FBQzdELFFBQU1vQixPQUFPLEdBQUdDLEtBQUssQ0FBQ3JCLEdBQUQsQ0FBckI7QUFDQSxRQUFNc0IsUUFBUSxHQUFHLENBQUMsTUFBTUYsT0FBUCxFQUFnQkcsSUFBaEIsRUFBakI7QUFDQSxTQUFPRCxRQUFQO0FBQ0QsQ0FKTTs7Ozs7Ozs7OztBQ0FQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1uZXh0Ly4vc3JjL2NvbmZpZy9hcHAtY29uZmlnLnRzIiwid2VicGFjazovL2Jsb2ctbmV4dC8uL3NyYy9jb250YWluZXJzL1Bvc3QvaW5kZXgudHN4Iiwid2VicGFjazovL2Jsb2ctbmV4dC8uL3NyYy9kYXRhL3Bvc3RzL2NvdW50LWFsbC1wb3N0cy50cyIsIndlYnBhY2s6Ly9ibG9nLW5leHQvLi9zcmMvZGF0YS9wb3N0cy9nZXQtYWxsLXBvc3RzLnRzIiwid2VicGFjazovL2Jsb2ctbmV4dC8uL3NyYy9kYXRhL3Bvc3RzL2dldC1wb3N0LnRzIiwid2VicGFjazovL2Jsb2ctbmV4dC8uL3NyYy9wYWdlcy9wb3N0L1tzbHVnXS50c3giLCJ3ZWJwYWNrOi8vYmxvZy1uZXh0Ly4vc3JjL3V0aWxzL2ZldGNoLWpzb24udHMiLCJ3ZWJwYWNrOi8vYmxvZy1uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiLy9BRElDSU9OQVIgTk8gLmVudi5sb2NhbFxuXG5leHBvcnQgY29uc3QgQVBJX1VSTCA9ICdodHRwczovL2ltbWVuc2UtZmpvcmQtMTkxMDguaGVyb2t1YXBwLmNvbSc7XG5leHBvcnQgY29uc3QgUE9TVFNfVVJMID0gYCR7QVBJX1VSTH0vcG9zdHNgO1xuXG5leHBvcnQgY29uc3QgU0lURV9OQU1FID0gJ03DqXJjaWEgS2VpbGEnO1xuZXhwb3J0IGNvbnN0IFNJVEVfVVJMID0gJ2h0dHBzOi8vYmxvZ2N1cnNvLm90YXZpb21pcmFuZGEuY29tLmJyJztcbiIsImltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgeyBQb3N0RGF0YSB9IGZyb20gJy4uLy4uL2RvbWFpbi9wb3N0cy9wb3N0JztcbmltcG9ydCB7IFNJVEVfTkFNRSB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcHAtY29uZmlnJztcblxuXG5leHBvcnQgdHlwZSBQb3N0UHJvcHMgPSB7XG4gIHBvc3Q6IFBvc3REYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IFBvc3QgPSAoeyBwb3N0IH06IFBvc3RQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBQT1NUU19VUkwgfSBmcm9tICcuLi8uLi9jb25maWcvYXBwLWNvbmZpZyc7XG5pbXBvcnQgeyBmZXRjaEpzb24gfSBmcm9tICcuLi8uLi91dGlscy9mZXRjaC1qc29uJztcblxuLypcbkVuZHBvaW50IHBhcmEgZGVmaW5pciBhIHF1YW50aWRhZGUgZGUgcG9zdHNcblxuVG9kYSBxdWVyeSwgY29tZcOnYSBjb20gdW1hOiAgP1xuZXg6IGh0dHBzOi8vaW1tZW5zZS1mam9yZC0xOTEwOC5oZXJva3VhcHAuY29tL3Bvc3RzP2NhdGVnb3J5Lm5hbWU9VHlwZXNjcmlwdFxuXG5UaXBvcyBkZSBxdWVyeTpcbmNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoJ19zb3J0PWlkOmRlc2MmX3N0YXJ0PTAmX2xpbWl0PTMwJyk7XG5cbi0+IF9zb3J0PWlkOmRlc2NcblxuU2lnbmlmaWNhIGRlZmluaXIgb3MgY2FyZHMgZW0gb3JkZW0gZGRlY3Jlc2NlbnRlLlxuXG4tPiBfc3RhcnQ9MFxuXG5Db21lw6dhciBkYSBwb3Npw6fDo28gMCBkbyBhcnJheS5cblxuLT4gX2xpbWl0PTMwXG5cbkFxdWkgZXN0w6Egc2VuZG8gZGV0ZXJtaW5hZG8gYSBxdWFudGlkYWRlIGRlIHBvc3RzIGEgc2VyIGV4aWJpZG9zIG5hIHRlbGFcbiovXG5cbmV4cG9ydCBjb25zdCBjb3VudEFsbFBvc3RzID0gYXN5bmMgKHF1ZXJ5ID0gJycpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICBjb25zdCB1cmwgPSBgJHtQT1NUU19VUkx9L2NvdW50PyR7cXVlcnl9YDtcbiAgY29uc3QgbnVtYmVyT2ZQb3N0cyA9IGF3YWl0IGZldGNoSnNvbjxzdHJpbmc+KHVybCk7XG4gIHJldHVybiBudW1iZXJPZlBvc3RzO1xufTsiLCJpbXBvcnQgeyBQT1NUU19VUkwgfSBmcm9tICcuLi8uLi9jb25maWcvYXBwLWNvbmZpZyc7XG5pbXBvcnQgeyBQb3N0RGF0YSB9IGZyb20gJy4uLy4uL2RvbWFpbi9wb3N0cy9wb3N0JztcbmltcG9ydCB7IGZldGNoSnNvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoLWpzb24nO1xuXG4vLzEgLSBEZWZpbmlkbyBlbmRwb2ludCBwYXJhIHBvZGVyIHBlZ2FyIHRvZG9zIG9zIHBvc3RzXG4vKjIgLSBEZW50cm8gZG8gZW5kcG9pbnQgdW1hIHF1ZXJ5IGZvaSBhZGljaW9uYWRhIHBhcmEgcG9kZXIgZGVmaW5pciBvIGNvbXBvcnRhbWVudG8gZG9zIHRpcG9zIGRlIGV4aWJpw6fDo28gZGUgcG9zdHMuXG5jb25zdCB1cmwgPSBgJHtQT1NUU19VUkx9PyYke3F1ZXJ5fWA7XG5OZXNzZSBjYXNvIGEgIHF1ZXJ5IHZhaSBpbmljaWFyIHZhemlvIGUgbyBwYXJhbWV0cm8gYSByZWNlYmVyIHNlcsOhIGRlZmluaWRvIG5vIGNvbXBvbmVudGUgZmluYWwuXG5cblRvZGEgcXVlcnksIGNvbWXDp2EgY29tIHVtYTogID9cbmV4OiBodHRwczovL2ltbWVuc2UtZmpvcmQtMTkxMDguaGVyb2t1YXBwLmNvbS9wb3N0cz9jYXRlZ29yeS5uYW1lPVR5cGVzY3JpcHRcblxuVGlwb3MgZGUgcXVlcnk6XG5jb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCdfc29ydD1pZDpkZXNjJl9zdGFydD0wJl9saW1pdD0zMCcpO1xuXG4tPiBfc29ydD1pZDpkZXNjXG5cblNpZ25pZmljYSBkZWZpbmlyIG9zIGNhcmRzIGVtIG9yZGVtIGRkZWNyZXNjZW50ZS5cblxuLT4gX3N0YXJ0PTBcblxuQ29tZcOnYXIgZGEgcG9zacOnw6NvIDAgZG8gYXJyYXkuXG5cbi0+IF9saW1pdD0zMFxuXG5BcXVpIGVzdMOhIHNlbmRvIGRldGVybWluYWRvIGEgcXVhbnRpZGFkZSBkZSBwb3N0cyBhIHNlciBleGliaWRvcyBuYSB0ZWxhXG5cbiovXG5leHBvcnQgY29uc3QgZ2V0QWxsUG9zdHMgPSBhc3luYyAocXVlcnkgPSAnJyk6IFByb21pc2U8UG9zdERhdGFbXT4gPT4ge1xuICBjb25zdCB1cmwgPSBgJHtQT1NUU19VUkx9PyYke3F1ZXJ5fWA7XG4gIGNvbnN0IHBvc3RzID0gZmV0Y2hKc29uPFBvc3REYXRhW10+KHVybCk7XG4gIHJldHVybiBwb3N0cztcbn07XG4iLCJpbXBvcnQgeyBQT1NUU19VUkwgfSBmcm9tICcuLi8uLi9jb25maWcvYXBwLWNvbmZpZyc7XHJcbmltcG9ydCB7IFBvc3REYXRhIH0gZnJvbSAnLi4vLi4vZG9tYWluL3Bvc3RzL3Bvc3QnO1xyXG5pbXBvcnQgeyBmZXRjaEpzb24gfSBmcm9tICcuLi8uLi91dGlscy9mZXRjaC1qc29uJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0ID0gYXN5bmMgKHNsdWc6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxQb3N0RGF0YVtdPiA9PiB7XHJcbiAgICBjb25zdCBzbHVnU3RyaW5nID0gQXJyYXkuaXNBcnJheShzbHVnKSA/IHNsdWdbMF0gOiBzbHVnO1xyXG4gICAgY29uc3QgdXJsID0gYCR7UE9TVFNfVVJMfT9zbHVnPSR7c2x1Z1N0cmluZ31gO1xyXG4gICAgY29uc3QganNvblBvc3RzID0gYXdhaXQgZmV0Y2hKc29uPFBvc3REYXRhW10+KHVybCk7XHJcbiAgICByZXR1cm4ganNvblBvc3RzO1xyXG59IiwiaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vLi4vY29udGFpbmVycy9Qb3N0JztcbmltcG9ydCB7IGNvdW50QWxsUG9zdHMgfSBmcm9tICcuLi8uLi9kYXRhL3Bvc3RzL2NvdW50LWFsbC1wb3N0cyc7XG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gJy4uLy4uL2RhdGEvcG9zdHMvZ2V0LWFsbC1wb3N0cyc7XG5pbXBvcnQgeyBnZXRQb3N0IH0gZnJvbSAnLi4vLi4vZGF0YS9wb3N0cy9nZXQtcG9zdCc7XG5pbXBvcnQgeyBQb3N0RGF0YSB9IGZyb20gJy4uLy4uL2RvbWFpbi9wb3N0cy9wb3N0JztcblxuZXhwb3J0IHR5cGUgRHluYW1pY1Bvc3RQcm9wcyA9IHtcbiAgcG9zdDogUG9zdERhdGE7XG59O1xuXG5jb25zdCBEeW5hbWljUG9zdCA9ICh7IHBvc3QgfTogRHluYW1pY1Bvc3RQcm9wcykgPT4ge1xuICByZXR1cm4gPFBvc3QgcG9zdD17cG9zdH0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljUG9zdDtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbnVtYmVyT2ZQb3N0cyA9IGF3YWl0IGNvdW50QWxsUG9zdHMoKTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cyhgX2xpbWl0PSR7bnVtYmVyT2ZQb3N0c31gKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwb3N0cy5tYXAoKHBvc3QpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHNsdWc6IHBvc3Quc2x1ZyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSksXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldFBvc3QoY3R4LnBhcmFtcy5zbHVnKTtcbiAgY29uc3QgcG9zdCA9IHBvc3RzLmxlbmd0aCA+IDAgPyBwb3N0c1swXSA6IHt9O1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcG9zdDogcG9zdCB9LFxuICAgIC8vIHJldmFsaWRhdGU6IDYwMCwgIC8vIEV1IG7Do28gcHJlY2lzbyBhdHVhbGl6YXIgZXN0ZSBibG9nIChwb3IgaXNzbyBjb21lbnRlaSlcbiAgfTtcbn07XG5cbi8vIFBBUkFNRVRSTyBDVFg6IFNpZ25pZmljYSBjb250ZXh0b1xuXG4vKiBcbkdFVCBTVEFUSUMgUEFUSFNcblxuw4kgYXByZXNlbnRhZG8gdG9kb3Mgb3MgcG9zdHMgZSBhIFFVRVJZIHRlbSBjb21vIGZ1bmNpb25hbGlkYWRlLCBuZXNlIGNhc28sIGFwcmVzZW50YXIgbmEgdGVsYSBvIGxpbWl0ZSBkZSBwb3N0YWdlbnMgYSBzZXIgZXhpYmlkYSwgYmFzZWFkbyBuYSBxdWFudGlkYWRlIHRvdGFsIGRlIG7Dum1lcm8gZGUgcG9zdGFnZW5zIHF1ZSBvIFxuXG4gQXByZXNlbnRhw6fDo28gbsO6bWVybyBkZSBwb3N0czpcbiBjb25zdCBudW1iZXJPZlBvc3RzID0gYXdhaXQgY291bnRBbGxQb3N0cygpO1xuXG4gU8OjbyB0b2RvcyBvcyBwb3N0cyBlIGVzdMOhIHJlY2ViZW5kbyBlbSBsaW1pdCBvIG7Dum1lcm8gZGUgcG9zdHM6XG4gY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cyhgX2xpbWl0PSR7bnVtYmVyT2ZQb3N0c31gKTtcblxuIFNlIHVtYSBww6FnaW5hIHRlbSByb3RhcyBkaW7Dom1pY2FzICggZG9jdW1lbnRhw6fDo28gKSBlIGEgdXNhLCBnZXRTdGF0aWNQcm9wc8OpIG5lY2Vzc8OhcmlvIGRlZmluaXIgdW1hIGxpc3RhIGRlIGNhbWluaG9zIHF1ZSBkZXZlbSBzZXIgcmVuZGVyaXphZG9zIHBhcmEgSFRNTCBubyBtb21lbnRvIGRhIGNvbnN0cnXDp8Ojby5cblxuIFZhbW9zIHVzYXIgcGF0aHMgZSBmYWxsYmFjay5cblxuIE5vIFJFVFVSTiwgcHJlY2lzYSByZXRvcm5hciBvcyBQQVRIUyBxdWUgw6kgdW0gYXJyYXkgZSBvIHBhcmFtZXRybyBxdWUgc2Vyw6EgaW5zZXJpZG8gw6kgbyBzbHVnIHF1ZSBzw6NvIG9zIHBhcmFtZXRyb3MgZGUgVVJMIGUgZXN0YXLDo28gZW0gdW0gY29udGV4dG8gZG8gU3RhdGljIFByb3BzLlxuXG4gU2UgbyBmYWxsYmFjaywgcHJlY2lzYSBmaWNhciBmYWxzbyBwb3JxdWUgc2UgYSBwZXNzb2EgdGVudGFyIGFjZXNzYXIgdW1hIHDDoWdpbmEgcXVlIG7Do28gZXhpc3RlIGVtIHBvc3RzIChzbHVnKSwgcmV0b3JuYSBww6FnaW5hIDQwNC4gXG5cbiAgKipQQVRIUyoqXG4gRGVudHJvIGRlIHJldHVybiBlIHBhdGhzIGVzdMOhIHJldG9ybmFuZG8gbyBwYXJhbWV0cm8gZSBxdWFsIHNlcsOhIG8gcGFyYW1ldHJvIGRhIHJvdGEgZGEgcMOhZ2luYSBxdWUgbmVzc2UgY2FzbyBlc3TDoSB1c2FuZG8gbyBTTFVHLCBtYXMgcG9kZXJpYSBzZXIgdW0gSUQuXG4gKi9cblxuLypcbiBHRVQgU1RBVElDIFBST1BTXG4gKi9cbiIsImV4cG9ydCBjb25zdCBmZXRjaEpzb24gPSBhc3luYyA8VD4odXJsOiBzdHJpbmcpOiBQcm9taXNlPFQ+ID0+IHtcbiAgY29uc3QgcmF3RGF0YSA9IGZldGNoKHVybCk7XG4gIGNvbnN0IGpzb25EYXRhID0gKGF3YWl0IHJhd0RhdGEpLmpzb24oKTtcbiAgcmV0dXJuIGpzb25EYXRhO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiQVBJX1VSTCIsIlBPU1RTX1VSTCIsIlNJVEVfTkFNRSIsIlNJVEVfVVJMIiwiUG9zdCIsInBvc3QiLCJ0aXRsZSIsImZldGNoSnNvbiIsImNvdW50QWxsUG9zdHMiLCJxdWVyeSIsInVybCIsIm51bWJlck9mUG9zdHMiLCJnZXRBbGxQb3N0cyIsInBvc3RzIiwiZ2V0UG9zdCIsInNsdWciLCJzbHVnU3RyaW5nIiwiQXJyYXkiLCJpc0FycmF5IiwianNvblBvc3RzIiwiRHluYW1pY1Bvc3QiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwibWFwIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImN0eCIsImxlbmd0aCIsInByb3BzIiwicmF3RGF0YSIsImZldGNoIiwianNvbkRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==