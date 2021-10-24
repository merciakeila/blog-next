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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjg2N2NkMjQxMDM4MDlhOGVjMDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQVFlLFNBQVNDLElBQVQsT0FBb0M7QUFBQSxNQUFwQkMsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQ2pELHNCQUFPLDhEQUFDLHdEQUFEO0FBQVUsU0FBSyxFQUFFQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCxFQVlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0ExRXdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi4vY29udGFpbmVyL0hvbWVQYWdlJztcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnLi4vZGF0YS9nZXQtYWxsLXBvc3RzJztcbmltcG9ydCB7IFBvc3REYXRhIH0gZnJvbSAnLi4vZG9tYWluL3Bvc3RzL3Bvc3QnO1xuXG5leHBvcnQgdHlwZSBIb21lUHJvcHMgPSB7XG4gIHBvc3RzOiBQb3N0RGF0YVtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHBvc3RzIH06IEhvbWVQcm9wcykge1xuICByZXR1cm4gPEhvbWVQYWdlIHBvc3RzPXtwb3N0c30gLz47XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG5cbiAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoJ19zb3J0PWlkOmRlc2MmX3N0YXJ0PTAmX2xpbWl0PTMwJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwb3N0cyB9LFxuICAgIC8vcmV2YWxpZGF0ZTogNjAsXG4gIH07XG59O1xuXG4vL0dFVFxuXG4vKiBHRVQgU1RBVElDIEdFTkVSQVRJT04gUFJPUFM6IEludGVncmHDp8OjbyBwYXJhIHJlbmRlcml6YXIgY29udGXDumRvcyBlc3TDoXRpY29zIGUgdGVtIHVtIHRlbXBvIHBhcmEgcmV2YWxpZGFyIGUgZ2VyYXIgdW1hIG5vdmEgYnVpbGQuXG5cbm5vIGNhc28gZGUgR0VUIFNUQVRJQyBHRU5BUkFUSU9OIFBST1BTIHBvciBzZXIgcMOhZ2luYSBlc3TDoXRpY2EsIHBhcmEgZnVuY2lvbmFyIGVtIHDDoWdpbmFzIGRpbsOibWljYXNcblxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IFBvc3REYXRhIH0gZnJvbSAnLi4vZG9tYWluL3Bvc3RzL3Bvc3QnO1xuXG5jb25zdCBnZXRQb3N0cyA9IGFzeW5jICgpOiBQcm9taXNlPFBvc3REYXRhW10+ID0+IHtcbiAgY29uc3QgcG9zdHMgPSBmZXRjaCgnaHR0cHM6Ly9pbW1lbnNlLWZqb3JkLTE5MTA4Lmhlcm9rdWFwcC5jb20vcG9zdHMnKTtcbiAgY29uc3QganNvblBvc3RzID0gKGF3YWl0IHBvc3RzKS5qc29uKCk7XG4gIHJldHVybiBqc29uUG9zdHM7XG59O1xuXG5leHBvcnQgdHlwZSBIb21lUHJvcHMgPSB7XG4gIHBvc3RzOiBQb3N0RGF0YVtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHBvc3RzIH06IEhvbWVQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgIDxoMiBrZXk9e3Bvc3QuaWR9Pntwb3N0LnRpdGxlfTwvaDI+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRQb3N0cygpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcG9zdHMgfSxcbiAgICByZXZhbGlkYXRlOiA2MCxcbiAgfTtcbn07XG5cbk8gcmV2YWxpZGF0ZSDDqSBvIHRlbXBvIHF1ZSB2YWkgcmV2YWxpZGFkZS9nZXJhciBub3ZhIGJ1aWxkLlxuXG5QYXJhIHRyYWJhbGhhciBjb20gcm90YXMgZGluw6JtaWNhcywgcHJlY2lzYSB1dGlsaXphciBvIEdFVCBTVEFUSUMgUEFUSFMuXG4qL1xuXG4vKiBHRVQgU0VSVkVSIFNJREU6IEludGVncmHDp8OjbyBkYSBmb3JtYSBcInRyYWRpY2lvbmFsXCIgY29tIHJlYWN0LCBww6FnaW5hIG91IGNvbnRlw7pkbyBxdWUgbsOjbyBwcmVjaXNhIHNlciByZW5kZXJpemFkbyBub3MgbWVjYW5pbW9zIGRlIGJ1c2NhO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPFBvc3REYXRhW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFBvc3RzKCkudGhlbigocmVzcG9uc2UpID0+IHNldFBvc3RzKHJlc3BvbnNlKSk7XG4gIH0sIFtwb3N0c10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgPGgyIGtleT17cG9zdC5pZH0+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuKi9cbiJdLCJuYW1lcyI6WyJIb21lUGFnZSIsIkhvbWUiLCJwb3N0cyJdLCJzb3VyY2VSb290IjoiIn0=