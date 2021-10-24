"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var _container_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/HomePage */ "./src/container/HomePage/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mercia.pereira\\Desktop\\Projetos\\blog-next\\src\\pages\\index.tsx";


var __N_SSG = true;
function Home(_ref) {
  var posts = _ref.posts;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_container_HomePage__WEBPACK_IMPORTED_MODULE_0__.default, {
    posts: posts
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, this);
} //GET

/* GET STATIC GENERATION: Integração para renderizar conteúdos estáticos e tem um tempo para revalidar e gerar uma nova build.

no caso de GET STATIC GENARATION por ser página estática, para funcionar em páginas dinâmicas

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

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjBjYWVjYmMzMGQ0YmQ2YjMwNzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQVFlLFNBQVNDLElBQVQsT0FBb0M7QUFBQSxNQUFwQkMsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQ2pELHNCQUFPLDhEQUFDLHdEQUFEO0FBQVUsU0FBSyxFQUFFQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCxFQVlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQXhFd0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuLi9jb250YWluZXIvSG9tZVBhZ2UnO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tICcuLi9kYXRhL2dldC1hbGwtcG9zdHMnO1xuaW1wb3J0IHsgUG9zdERhdGEgfSBmcm9tICcuLi9kb21haW4vcG9zdHMvcG9zdCc7XG5cbmV4cG9ydCB0eXBlIEhvbWVQcm9wcyA9IHtcbiAgcG9zdHM6IFBvc3REYXRhW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcG9zdHMgfTogSG9tZVByb3BzKSB7XG4gIHJldHVybiA8SG9tZVBhZ2UgcG9zdHM9e3Bvc3RzfSAvPjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcblxuICAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cygnX3NvcnQ9aWQ6ZGVzYyZfc3RhcnQ9MCZfbGltaXQ9MzAnKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHBvc3RzIH0sXG4gICAgLy9yZXZhbGlkYXRlOiA2MCxcbiAgfTtcbn07XG5cbi8vR0VUXG5cbi8qIEdFVCBTVEFUSUMgR0VORVJBVElPTjogSW50ZWdyYcOnw6NvIHBhcmEgcmVuZGVyaXphciBjb250ZcO6ZG9zIGVzdMOhdGljb3MgZSB0ZW0gdW0gdGVtcG8gcGFyYSByZXZhbGlkYXIgZSBnZXJhciB1bWEgbm92YSBidWlsZC5cblxubm8gY2FzbyBkZSBHRVQgU1RBVElDIEdFTkFSQVRJT04gcG9yIHNlciBww6FnaW5hIGVzdMOhdGljYSwgcGFyYSBmdW5jaW9uYXIgZW0gcMOhZ2luYXMgZGluw6JtaWNhc1xuXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgUG9zdERhdGEgfSBmcm9tICcuLi9kb21haW4vcG9zdHMvcG9zdCc7XG5cbmNvbnN0IGdldFBvc3RzID0gYXN5bmMgKCk6IFByb21pc2U8UG9zdERhdGFbXT4gPT4ge1xuICBjb25zdCBwb3N0cyA9IGZldGNoKCdodHRwczovL2ltbWVuc2UtZmpvcmQtMTkxMDguaGVyb2t1YXBwLmNvbS9wb3N0cycpO1xuICBjb25zdCBqc29uUG9zdHMgPSAoYXdhaXQgcG9zdHMpLmpzb24oKTtcbiAgcmV0dXJuIGpzb25Qb3N0cztcbn07XG5cbmV4cG9ydCB0eXBlIEhvbWVQcm9wcyA9IHtcbiAgcG9zdHM6IFBvc3REYXRhW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcG9zdHMgfTogSG9tZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgPGgyIGtleT17cG9zdC5pZH0+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldFBvc3RzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwb3N0cyB9LFxuICAgIHJldmFsaWRhdGU6IDYwLFxuICB9O1xufTtcblxuTyByZXZhbGlkYXRlIMOpIG8gdGVtcG8gcXVlIHZhaSByZXZhbGlkYWRlL2dlcmFyIG5vdmEgYnVpbGQuXG4qL1xuXG4vKiBHRVQgU0VSVkVSIFNJREU6IEludGVncmHDp8OjbyBkYSBmb3JtYSBcInRyYWRpY2lvbmFsXCIgY29tIHJlYWN0LCBww6FnaW5hIG91IGNvbnRlw7pkbyBxdWUgbsOjbyBwcmVjaXNhIHNlciByZW5kZXJpemFkbyBub3MgbWVjYW5pbW9zIGRlIGJ1c2NhO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPFBvc3REYXRhW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFBvc3RzKCkudGhlbigocmVzcG9uc2UpID0+IHNldFBvc3RzKHJlc3BvbnNlKSk7XG4gIH0sIFtwb3N0c10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgPGgyIGtleT17cG9zdC5pZH0+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuKi9cbiJdLCJuYW1lcyI6WyJIb21lUGFnZSIsIkhvbWUiLCJwb3N0cyJdLCJzb3VyY2VSb290IjoiIn0=