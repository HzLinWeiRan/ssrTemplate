exports.id = "Comp";
exports.ids = ["Comp"];
exports.modules = {

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchTest": () => (/* binding */ fetchTest),
/* harmony export */   "fetchTest2": () => (/* binding */ fetchTest2)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'http://localhost:3000'
});
instance.interceptors.response.use(function (response) {
  if (response.data.code === 200) {
    return response.data.data;
  }

  return Promise.reject(response);
}, function (err) {
  return Promise.reject(err);
});

const get = (url, params) => {
  return instance.get(url, {
    params
  });
};

const post = (url, data) => {
  return instance.post(url, data);
};

const fetchTest = () => get('/test');
const fetchTest2 = () => get('/test2');

/***/ }),

/***/ "./src/api/useApi.js":
/*!***************************!*\
  !*** ./src/api/useApi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAll": () => (/* binding */ fetchAll),
/* harmony export */   "clearAll": () => (/* binding */ clearAll),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


if (global && !global.ssrPromises) {
  console.log('init');
  global.ssrPromises = [];
} // export const __ssrPromises = []


function useApi(api, params) {
  if (typeof window === 'undefined') {
    global.ssrPromises.push(async () => {
      return api(params);
    });
  }

  const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((state, action) => {
    let resultState = state;

    if (action.type === 'loading') {
      resultState = { ...state,
        loading: true
      };
    }

    if (action.type === 'loaded') {
      resultState = { ...state,
        loading: false
      };
    }

    if (action.type === 'set') {
      resultState = { ...state,
        data: action.data
      };
    }

    if (action.type === 'error') {
      resultState = { ...state,
        error: action.error
      };
    }

    return resultState;
  }, {
    loading: false
  });

  async function fetching(params = {}) {
    try {
      dispatch({
        type: 'loading'
      });
      const res = await api(params);
      dispatch({
        type: 'set',
        data: res
      });
    } catch (e) {
      dispatch({
        type: 'error',
        error: e
      });
    } finally {
      dispatch({
        type: 'loaded'
      });
    }
  }

  return [state, fetching];
}

const fetchAll = () => {
  const promiseCaches = global.ssrPromises.map(act => act());
  return Promise.all(promiseCaches);
};
const clearAll = () => {
  global.ssrPromises.length = 0;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useApi);

/***/ }),

/***/ "./src/client/Comp.js":
/*!****************************!*\
  !*** ./src/client/Comp.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./src/client/Context.js");
/* harmony import */ var _withSubscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withSubscription */ "./src/client/withSubscription.js");
/* harmony import */ var _api_useApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/useApi */ "./src/api/useApi.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/index */ "./src/api/index.js");
/* harmony import */ var _comp_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp.less */ "./src/client/comp.less");







function Comp() {
  const [{
    data,
    loading,
    error
  }, fetching] = (0,_api_useApi__WEBPACK_IMPORTED_MODULE_3__.default)(_api_index__WEBPACK_IMPORTED_MODULE_4__.fetchTest);
  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_1__.default);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!store.data || store.data.length === 0) fetching();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "comp",
    onClick: () => {
      alert(1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "\u9875\u97621"), loading ? 'loading' : 'loaded', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), data && data.a || store.data && store.data[0] && store.data[0].a);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withSubscription__WEBPACK_IMPORTED_MODULE_2__.default)(Comp));

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

/***/ }),

/***/ "./src/client/comp.less":
/*!******************************!*\
  !*** ./src/client/comp.less ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zc3J0ZW1wbGF0ZS8uL3NyYy9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3NydGVtcGxhdGUvLi9zcmMvYXBpL3VzZUFwaS5qcyIsIndlYnBhY2s6Ly9zc3J0ZW1wbGF0ZS8uL3NyYy9jbGllbnQvQ29tcC5qcyIsIndlYnBhY2s6Ly9zc3J0ZW1wbGF0ZS8uL3NyYy9jbGllbnQvd2l0aFN1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9zc3J0ZW1wbGF0ZS8uL3NyYy9jbGllbnQvY29tcC5sZXNzP2NkZmQiXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJheGlvcyIsImJhc2VVUkwiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImRhdGEiLCJjb2RlIiwiUHJvbWlzZSIsInJlamVjdCIsImVyciIsImdldCIsInVybCIsInBhcmFtcyIsInBvc3QiLCJmZXRjaFRlc3QiLCJmZXRjaFRlc3QyIiwiZ2xvYmFsIiwic3NyUHJvbWlzZXMiLCJjb25zb2xlIiwibG9nIiwidXNlQXBpIiwiYXBpIiwid2luZG93IiwicHVzaCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwiYWN0aW9uIiwicmVzdWx0U3RhdGUiLCJ0eXBlIiwibG9hZGluZyIsImVycm9yIiwiZmV0Y2hpbmciLCJyZXMiLCJlIiwiZmV0Y2hBbGwiLCJwcm9taXNlQ2FjaGVzIiwibWFwIiwiYWN0IiwiYWxsIiwiY2xlYXJBbGwiLCJsZW5ndGgiLCJDb21wIiwic3RvcmUiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsInVzZUVmZmVjdCIsImFsZXJ0IiwiYSIsIndpdGhTdWJzY3JpcHRpb24iLCJXcmFwcGVkQ29tcG9uZW50IiwiQ29tcG9uZW50Iiwib3RoZXJzIiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsUUFBUSxHQUFHQyxtREFBQSxDQUFhO0FBQzFCQyxTQUFPLEVBQUU7QUFEaUIsQ0FBYixDQUFqQjtBQUlB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USxFQUVOLEVBRk0sQ0FBVDtBQUdBLHNCQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBc0IsV0FBTyxFQUFFLE1BQU07QUFBQ2UsV0FBSyxDQUFDLENBQUQsQ0FBTDtBQUFTO0FBQS9DLGtCQUNJLHVGQURKLEVBRUtqQixPQUFPLEdBQUcsU0FBSCxHQUFlLFFBRjNCLGVBRW9DLHNFQUZwQyxFQUdNekIsSUFBSSxJQUFJQSxJQUFJLENBQUMyQyxDQUFkLElBQXFCTCxLQUFLLENBQUN0QyxJQUFOLElBQWNzQyxLQUFLLENBQUN0QyxJQUFOLENBQVcsQ0FBWCxDQUFkLElBQStCc0MsS0FBSyxDQUFDdEMsSUFBTixDQUFXLENBQVgsRUFBYzJDLENBSHZFLENBREo7QUFPSDs7QUFFRCxpRUFBZUMsMERBQWdCLENBQUNQLElBQUQsQ0FBL0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFFZSxTQUFTTyxnQkFBVCxDQUEwQkMsZ0JBQTFCLEVBQTRDO0FBQ3ZELFFBQU1DLFNBQVMsR0FBRyxVQUFVLEVBQUUsR0FBR0M7QUFBTCxHQUFWLEVBQXlCO0FBQ3ZDLFVBQU1ULEtBQUssR0FBR0MsaURBQVUsQ0FBQ0MsNkNBQUQsQ0FBeEI7QUFDQUMsb0RBQVMsQ0FBQyxNQUFNO0FBQ1osYUFBTyxNQUFNO0FBQ1Q1QixlQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0F3QixhQUFLLENBQUNVLEtBQU47QUFDSCxPQUhEO0FBSUgsS0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU1BLHdCQUFPLDJEQUFDLGdCQUFELEVBQXNCRCxNQUF0QixDQUFQO0FBQ0gsR0FURCxDQUR1RCxDQVd2RDs7O0FBQ0EsU0FBT0QsU0FBUDtBQUNILEM7Ozs7Ozs7Ozs7OztBQ2hCRCIsImZpbGUiOiJDb21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG59KVxuXG5pbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSlcbn0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKVxufSlcblxuY29uc3QgZ2V0ID0gKHVybCwgcGFyYW1zKSA9PiB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmdldCh1cmwsIHtcbiAgICAgICAgcGFyYW1zXG4gICAgfSlcbn1cblxuY29uc3QgcG9zdCA9ICh1cmwsIGRhdGEpID0+IHtcbiAgICByZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRlc3QgPSAoKSA9PiBnZXQoJy90ZXN0JylcblxuZXhwb3J0IGNvbnN0IGZldGNoVGVzdDIgPSAoKSA9PiBnZXQoJy90ZXN0MicpXG4iLCJpbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5cbmlmIChnbG9iYWwgJiYgIWdsb2JhbC5zc3JQcm9taXNlcykge1xuICAgIGNvbnNvbGUubG9nKCdpbml0JylcbiAgICBnbG9iYWwuc3NyUHJvbWlzZXMgPSBbXVxufVxuLy8gZXhwb3J0IGNvbnN0IF9fc3NyUHJvbWlzZXMgPSBbXVxuXG5mdW5jdGlvbiB1c2VBcGkoYXBpLCBwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZ2xvYmFsLnNzclByb21pc2VzLnB1c2goYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFwaShwYXJhbXMpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcigoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0U3RhdGUgPSBzdGF0ZVxuICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICAgICAgcmVzdWx0U3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdsb2FkZWQnKSB7XG4gICAgICAgICAgICByZXN1bHRTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdzZXQnKSB7XG4gICAgICAgICAgICByZXN1bHRTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHJlc3VsdFN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3JcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFN0YXRlXG4gICAgfSwge1xuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH0pXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hpbmcocGFyYW1zID0ge30pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2xvYWRpbmcnIH0pXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkocGFyYW1zKVxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnc2V0JywgZGF0YTogcmVzIH0pXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2Vycm9yJywgZXJyb3I6IGUgfSlcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2xvYWRlZCcgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW3N0YXRlLCBmZXRjaGluZ11cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoQWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb21pc2VDYWNoZXMgPSBnbG9iYWwuc3NyUHJvbWlzZXMubWFwKGFjdCA9PiBhY3QoKSlcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZUNhY2hlcylcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFyQWxsID0gKCkgPT4ge1xuICAgIGdsb2JhbC5zc3JQcm9taXNlcy5sZW5ndGggPSAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFwaSIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDb250ZXh0IGZyb20gJy4vQ29udGV4dCdcbmltcG9ydCB3aXRoU3Vic2NyaXB0aW9uIGZyb20gJy4vd2l0aFN1YnNjcmlwdGlvbidcbmltcG9ydCB1c2VBcGkgZnJvbSAnLi4vYXBpL3VzZUFwaSdcbmltcG9ydCB7IGZldGNoVGVzdCB9IGZyb20gJy4uL2FwaS9pbmRleCdcbmltcG9ydCAnLi9jb21wLmxlc3MnXG5cbmZ1bmN0aW9uIENvbXAoKSB7XG4gICAgY29uc3QgW3sgZGF0YSwgbG9hZGluZywgZXJyb3IgfSwgZmV0Y2hpbmddID0gdXNlQXBpKGZldGNoVGVzdClcbiAgICBjb25zdCBzdG9yZSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXN0b3JlLmRhdGEgfHwgc3RvcmUuZGF0YS5sZW5ndGggPT09IDApIGZldGNoaW5nKClcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBcIiBvbkNsaWNrPXsoKSA9PiB7YWxlcnQoMSl9fT5cbiAgICAgICAgICAgIDxoMT7pobXpnaIxPC9oMT5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gJ2xvYWRpbmcnIDogJ2xvYWRlZCd9PGJyIC8+XG4gICAgICAgICAgICB7KGRhdGEgJiYgZGF0YS5hKSB8fCAoc3RvcmUuZGF0YSAmJiBzdG9yZS5kYXRhWzBdICYmIHN0b3JlLmRhdGFbMF0uYSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN1YnNjcmlwdGlvbihDb21wKSIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDb250ZXh0IGZyb20gJy4vQ29udGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFN1YnNjcmlwdGlvbihXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgY29uc3QgQ29tcG9uZW50ID0gZnVuY3Rpb24gKHsgLi4ub3RoZXJzIH0pIHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB1c2VDb250ZXh0KENvbnRleHQpXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGVhcicpXG4gICAgICAgICAgICAgICAgc3RvcmUuY2xlYXIoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSlcbiAgICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5vdGhlcnN9IC8+XG4gICAgfVxuICAgIC8vIENvbXBvbmVudC5mZXRjaGluZyA9IFdyYXBwZWRDb21wb25lbnQuZmV0Y2hpbmdcbiAgICByZXR1cm4gQ29tcG9uZW50XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==