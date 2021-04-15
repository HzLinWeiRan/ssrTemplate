exports.id = "Comp2";
exports.ids = ["Comp2"];
exports.modules = {

/***/ "./src/client/Comp2.js":
/*!*****************************!*\
  !*** ./src/client/Comp2.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withSubscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withSubscription */ "./src/client/withSubscription.js");
/* harmony import */ var axios_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios-hooks */ "axios-hooks");
/* harmony import */ var axios_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios_hooks__WEBPACK_IMPORTED_MODULE_2__);


 // export const fetching = async function() {
//     console.log('this')
// }

function Comp2() {
  // useEffect(() => {
  //     fetching()
  // }, [])
  console.log('----comp2');
  const [{
    data2,
    loading2,
    error2
  }, refetch2] = axios_hooks__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3000/test2');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "comp2222");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withSubscription__WEBPACK_IMPORTED_MODULE_1__.default)(Comp2));

/***/ }),

/***/ "./src/client/withSubscription.js":
/*!****************************************!*\
  !*** ./src/client/withSubscription.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ withSubscription)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./src/client/Context.js");


function withSubscription(WrappedComponent) {
  const Component = function ({ ...others
  }) {
    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_1__.default);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      return () => {
        console.log('clear');
        store.clear();
      };
    }, []);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WrappedComponent, others);
  }; // Component.fetching = WrappedComponent.fetching


  return Component;
}

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zc3J0ZW1wbGF0ZS8uL3NyYy9jbGllbnQvQ29tcDIuanMiLCJ3ZWJwYWNrOi8vc3NydGVtcGxhdGUvLi9zcmMvY2xpZW50L3dpdGhTdWJzY3JpcHRpb24uanMiXSwibmFtZXMiOlsiQ29tcDIiLCJjb25zb2xlIiwibG9nIiwiZGF0YTIiLCJsb2FkaW5nMiIsImVycm9yMiIsInJlZmV0Y2gyIiwidXNlQXhpb3MiLCJ3aXRoU3Vic2NyaXB0aW9uIiwiV3JhcHBlZENvbXBvbmVudCIsIkNvbXBvbmVudCIsIm90aGVycyIsInN0b3JlIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJ1c2VFZmZlY3QiLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFDYjtBQUNBO0FBQ0E7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBLFFBQU0sQ0FBQztBQUFFQyxTQUFGO0FBQVNDLFlBQVQ7QUFBbUJDO0FBQW5CLEdBQUQsRUFBOEJDLFFBQTlCLElBQTBDQyxrREFBUSxDQUNwRCw2QkFEb0QsQ0FBeEQ7QUFHQSxzQkFDSSxtRkFESjtBQUdIOztBQUVELGlFQUFlQywwREFBZ0IsQ0FBQ1IsS0FBRCxDQUEvQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUVlLFNBQVNRLGdCQUFULENBQTBCQyxnQkFBMUIsRUFBNEM7QUFDdkQsUUFBTUMsU0FBUyxHQUFHLFVBQVUsRUFBRSxHQUFHQztBQUFMLEdBQVYsRUFBeUI7QUFDdkMsVUFBTUMsS0FBSyxHQUFHQyxpREFBVSxDQUFDQyw2Q0FBRCxDQUF4QjtBQUNBQyxvREFBUyxDQUFDLE1BQU07QUFDWixhQUFPLE1BQU07QUFDVGQsZUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBVSxhQUFLLENBQUNJLEtBQU47QUFDSCxPQUhEO0FBSUgsS0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU1BLHdCQUFPLDJEQUFDLGdCQUFELEVBQXNCTCxNQUF0QixDQUFQO0FBQ0gsR0FURCxDQUR1RCxDQVd2RDs7O0FBQ0EsU0FBT0QsU0FBUDtBQUNILEMiLCJmaWxlIjoiQ29tcDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgd2l0aFN1YnNjcmlwdGlvbiBmcm9tICcuL3dpdGhTdWJzY3JpcHRpb24nXG5pbXBvcnQgdXNlQXhpb3MgZnJvbSAnYXhpb3MtaG9va3MnXG4vLyBleHBvcnQgY29uc3QgZmV0Y2hpbmcgPSBhc3luYyBmdW5jdGlvbigpIHtcbi8vICAgICBjb25zb2xlLmxvZygndGhpcycpXG4vLyB9XG5cbmZ1bmN0aW9uIENvbXAyKCkge1xuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGZldGNoaW5nKClcbiAgICAvLyB9LCBbXSlcbiAgICBjb25zb2xlLmxvZygnLS0tLWNvbXAyJylcbiAgICBjb25zdCBbeyBkYXRhMiwgbG9hZGluZzIsIGVycm9yMiB9LCByZWZldGNoMl0gPSB1c2VBeGlvcyhcbiAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90ZXN0MidcbiAgICApXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5jb21wMjIyMjwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN1YnNjcmlwdGlvbihDb21wMikiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuL0NvbnRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhTdWJzY3JpcHRpb24oV3JhcHBlZENvbXBvbmVudCkge1xuICAgIGNvbnN0IENvbXBvbmVudCA9IGZ1bmN0aW9uICh7IC4uLm90aGVycyB9KSB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gdXNlQ29udGV4dChDb250ZXh0KVxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xlYXInKVxuICAgICAgICAgICAgICAgIHN0b3JlLmNsZWFyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pXG4gICAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4ub3RoZXJzfSAvPlxuICAgIH1cbiAgICAvLyBDb21wb25lbnQuZmV0Y2hpbmcgPSBXcmFwcGVkQ29tcG9uZW50LmZldGNoaW5nXG4gICAgcmV0dXJuIENvbXBvbmVudFxufSJdLCJzb3VyY2VSb290IjoiIn0=