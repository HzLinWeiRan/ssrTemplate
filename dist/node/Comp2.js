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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "\u9875\u97622");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zc3J0ZW1wbGF0ZS8uL3NyYy9jbGllbnQvQ29tcDIuanMiLCJ3ZWJwYWNrOi8vc3NydGVtcGxhdGUvLi9zcmMvY2xpZW50L3dpdGhTdWJzY3JpcHRpb24uanMiXSwibmFtZXMiOlsiQ29tcDIiLCJ3aXRoU3Vic2NyaXB0aW9uIiwiV3JhcHBlZENvbXBvbmVudCIsIkNvbXBvbmVudCIsIm90aGVycyIsInN0b3JlIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esc0JBQ0ksdUZBREo7QUFHSDs7QUFFRCxpRUFBZUMsMERBQWdCLENBQUNELEtBQUQsQ0FBL0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFZSxTQUFTQyxnQkFBVCxDQUEwQkMsZ0JBQTFCLEVBQTRDO0FBQ3ZELFFBQU1DLFNBQVMsR0FBRyxVQUFVLEVBQUUsR0FBR0M7QUFBTCxHQUFWLEVBQXlCO0FBQ3ZDLFVBQU1DLEtBQUssR0FBR0MsaURBQVUsQ0FBQ0MsNkNBQUQsQ0FBeEI7QUFDQUMsb0RBQVMsQ0FBQyxNQUFNO0FBQ1osYUFBTyxNQUFNO0FBQ1RDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQUwsYUFBSyxDQUFDTSxLQUFOO0FBQ0gsT0FIRDtBQUlILEtBTFEsRUFLTixFQUxNLENBQVQ7QUFNQSx3QkFBTywyREFBQyxnQkFBRCxFQUFzQlAsTUFBdEIsQ0FBUDtBQUNILEdBVEQsQ0FEdUQsQ0FXdkQ7OztBQUNBLFNBQU9ELFNBQVA7QUFDSCxDIiwiZmlsZSI6IkNvbXAyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHdpdGhTdWJzY3JpcHRpb24gZnJvbSAnLi93aXRoU3Vic2NyaXB0aW9uJ1xuaW1wb3J0IHVzZUF4aW9zIGZyb20gJ2F4aW9zLWhvb2tzJ1xuLy8gZXhwb3J0IGNvbnN0IGZldGNoaW5nID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ3RoaXMnKVxuLy8gfVxuXG5mdW5jdGlvbiBDb21wMigpIHtcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBmZXRjaGluZygpXG4gICAgLy8gfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGgxPumhtemdojI8L2gxPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN1YnNjcmlwdGlvbihDb21wMikiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udGV4dCBmcm9tICcuL0NvbnRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhTdWJzY3JpcHRpb24oV3JhcHBlZENvbXBvbmVudCkge1xuICAgIGNvbnN0IENvbXBvbmVudCA9IGZ1bmN0aW9uICh7IC4uLm90aGVycyB9KSB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gdXNlQ29udGV4dChDb250ZXh0KVxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xlYXInKVxuICAgICAgICAgICAgICAgIHN0b3JlLmNsZWFyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pXG4gICAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4ub3RoZXJzfSAvPlxuICAgIH1cbiAgICAvLyBDb21wb25lbnQuZmV0Y2hpbmcgPSBXcmFwcGVkQ29tcG9uZW50LmZldGNoaW5nXG4gICAgcmV0dXJuIENvbXBvbmVudFxufSJdLCJzb3VyY2VSb290IjoiIn0=