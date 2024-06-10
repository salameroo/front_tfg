"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_components_posts_newPost_tsx",{

/***/ "(app-pages-browser)/./components/maps/search.tsx":
/*!************************************!*\
  !*** ./components/maps/search.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst SearchBox = (param)=>{\n    let { onLocationSelected } = param;\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        // Realiza la búsqueda de ubicaciones usando una API adecuada (ej. Mapbox, OpenStreetMap)\n        const response = await fetch(\"https://nominatim.openstreetmap.org/search?format=json&q=\".concat(query));\n        const data = await response.json();\n        setResults(data);\n    };\n    const handleSelectLocation = (lat, lon, displayName)=>{\n        onLocationSelected({\n            lat,\n            lng: lon\n        }, displayName);\n        setQuery(displayName);\n        setResults([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSearch,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: query,\n                        onChange: (e)=>setQuery(e.target.value),\n                        placeholder: \"Buscar ubicaci\\xf3n...\",\n                        className: \"p-2 border rounded sm:w-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\laravel\\\\front_tfg\\\\components\\\\maps\\\\search.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"ml-2 p-2 bg-blue-500 text-white rounded\",\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\laravel\\\\front_tfg\\\\components\\\\maps\\\\search.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\laravel\\\\front_tfg\\\\components\\\\maps\\\\search.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            results.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"mt-2 border rounded p-2\",\n                children: results.map((result)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>handleSelectLocation(result.lat, result.lon, result.display_name),\n                        className: \"cursor-pointer p-2 hover:bg-gray-200\",\n                        children: result.display_name\n                    }, result.place_id, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\laravel\\\\front_tfg\\\\components\\\\maps\\\\search.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\laravel\\\\front_tfg\\\\components\\\\maps\\\\search.tsx\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\laravel\\\\front_tfg\\\\components\\\\maps\\\\search.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SearchBox, \"kZM7FOZerLi1RvZykWYa8gktm94=\");\n_c = SearchBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBox);\nvar _c;\n$RefreshReg$(_c, \"SearchBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWFwcy9zZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3QztBQU94QyxNQUFNRSxZQUFzQztRQUFDLEVBQUVDLGtCQUFrQixFQUFFOztJQUMvRCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFRLEVBQUU7SUFFaEQsTUFBTU8sZUFBZSxPQUFPQztRQUN4QkEsRUFBRUMsY0FBYztRQUNoQix5RkFBeUY7UUFDekYsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDREQUFrRSxPQUFOUjtRQUN6RixNQUFNUyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7UUFDaENQLFdBQVdNO0lBQ2Y7SUFFQSxNQUFNRSx1QkFBdUIsQ0FBQ0MsS0FBYUMsS0FBYUM7UUFDcERmLG1CQUFtQjtZQUFFYTtZQUFLRyxLQUFLRjtRQUFJLEdBQUdDO1FBQ3RDYixTQUFTYTtRQUNUWCxXQUFXLEVBQUU7SUFDakI7SUFFQSxxQkFDSSw4REFBQ2E7OzBCQUNHLDhEQUFDQztnQkFBS0MsVUFBVWQ7O2tDQUNaLDhEQUFDZTt3QkFDR0MsTUFBSzt3QkFDTEMsT0FBT3JCO3dCQUNQc0IsVUFBVSxDQUFDakIsSUFBTUosU0FBU0ksRUFBRWtCLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDeENHLGFBQVk7d0JBQ1pDLFdBQVU7Ozs7OztrQ0FFZCw4REFBQ0M7d0JBQU9OLE1BQUs7d0JBQVNLLFdBQVU7a0NBQTBDOzs7Ozs7Ozs7Ozs7WUFFN0V2QixRQUFReUIsTUFBTSxHQUFHLG1CQUNkLDhEQUFDQztnQkFBR0gsV0FBVTswQkFDVHZCLFFBQVEyQixHQUFHLENBQUMsQ0FBQ0MsdUJBQ1YsOERBQUNDO3dCQUF5QkMsU0FBUyxJQUFNckIscUJBQXFCbUIsT0FBT2xCLEdBQUcsRUFBRWtCLE9BQU9qQixHQUFHLEVBQUVpQixPQUFPRyxZQUFZO3dCQUFHUixXQUFVO2tDQUNqSEssT0FBT0csWUFBWTt1QkFEZkgsT0FBT0ksUUFBUTs7Ozs7Ozs7Ozs7Ozs7OztBQVFoRDtHQXpDTXBDO0tBQUFBO0FBMkNOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWFwcy9zZWFyY2gudHN4P2QyYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXRMbmdMaXRlcmFsIH0gZnJvbSAnbGVhZmxldCc7XHJcblxyXG5pbnRlcmZhY2UgU2VhcmNoQm94UHJvcHMge1xyXG4gICAgb25Mb2NhdGlvblNlbGVjdGVkOiAobGF0bG5nOiBMYXRMbmdMaXRlcmFsLCBkaXNwbGF5TmFtZTogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBTZWFyY2hCb3g6IFJlYWN0LkZDPFNlYXJjaEJveFByb3BzPiA9ICh7IG9uTG9jYXRpb25TZWxlY3RlZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBSZWFsaXphIGxhIGLDunNxdWVkYSBkZSB1YmljYWNpb25lcyB1c2FuZG8gdW5hIEFQSSBhZGVjdWFkYSAoZWouIE1hcGJveCwgT3BlblN0cmVldE1hcClcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL25vbWluYXRpbS5vcGVuc3RyZWV0bWFwLm9yZy9zZWFyY2g/Zm9ybWF0PWpzb24mcT0ke3F1ZXJ5fWApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0UmVzdWx0cyhkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0TG9jYXRpb24gPSAobGF0OiBudW1iZXIsIGxvbjogbnVtYmVyLCBkaXNwbGF5TmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgb25Mb2NhdGlvblNlbGVjdGVkKHsgbGF0LCBsbmc6IGxvbiB9LCBkaXNwbGF5TmFtZSk7XHJcbiAgICAgICAgc2V0UXVlcnkoZGlzcGxheU5hbWUpO1xyXG4gICAgICAgIHNldFJlc3VsdHMoW10pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhciB1YmljYWNpw7NuLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIHJvdW5kZWQgc206dy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJtbC0yIHAtMiBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWRcIj5CdXNjYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICB7cmVzdWx0cy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC0yIGJvcmRlciByb3VuZGVkIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXN1bHRzLm1hcCgocmVzdWx0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Jlc3VsdC5wbGFjZV9pZH0gb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0TG9jYXRpb24ocmVzdWx0LmxhdCwgcmVzdWx0LmxvbiwgcmVzdWx0LmRpc3BsYXlfbmFtZSl9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHAtMiBob3ZlcjpiZy1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3VsdC5kaXNwbGF5X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJveDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTZWFyY2hCb3giLCJvbkxvY2F0aW9uU2VsZWN0ZWQiLCJxdWVyeSIsInNldFF1ZXJ5IiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJoYW5kbGVTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJoYW5kbGVTZWxlY3RMb2NhdGlvbiIsImxhdCIsImxvbiIsImRpc3BsYXlOYW1lIiwibG5nIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwibGVuZ3RoIiwidWwiLCJtYXAiLCJyZXN1bHQiLCJsaSIsIm9uQ2xpY2siLCJkaXNwbGF5X25hbWUiLCJwbGFjZV9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/maps/search.tsx\n"));

/***/ })

});