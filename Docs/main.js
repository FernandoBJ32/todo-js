/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://03-webpack-inicial/./src/styles.css?");

/***/ }),

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* reexport safe */ _todo_class__WEBPACK_IMPORTED_MODULE_0__.Todo),\n/* harmony export */   \"TodoList\": () => (/* reexport safe */ _todo_list_class__WEBPACK_IMPORTED_MODULE_1__.TodoList)\n/* harmony export */ });\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n/* harmony import */ var _todo_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.class */ \"./src/classes/todo-list.class.js\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://03-webpack-inicial/./src/classes/index.js?");

/***/ }),

/***/ "./src/classes/todo-list.class.js":
/*!****************************************!*\
  !*** ./src/classes/todo-list.class.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n\r\n\r\nclass TodoList {\r\n\r\n    constructor (){\r\n\r\n        // this.todos = [];\r\n        this.cargarLocalStorage();\r\n    }\r\n\r\nnuevoTodo(todo){\r\n    this.todos.push(todo); \r\n    this.guardarLocalStorage();\r\n\r\n}\r\neliminarTodo (id) {\r\nthis.todos = this.todos.filter(todo => todo.id != id)\r\nthis.guardarLocalStorage();\r\n\r\n}\r\n\r\nMarcarCompletado(id){\r\nfor (const todo of this.todos){\r\n    // console.log (id, todo.id);\r\n    if(todo.id == id){\r\n        todo.completado =!todo.completado;\r\n        this.guardarLocalStorage();\r\n        break;\r\n    }\r\n}\r\n\r\n\r\n}\r\n\r\neliminarCompletados (){\r\n\r\n    this.todos = this.todos.filter(todo => !todo.completado);\r\n    this.guardarLocalStorage();\r\n\r\n}\r\n\r\nguardarLocalStorage (){\r\n\r\n    localStorage.setItem(\"todo\", JSON.stringify( this.todos));\r\n\r\n}\r\ncargarLocalStorage(){\r\n   \r\n//    if (localStorage.getItem(\"todo\")){\r\n        \r\n//         this.todos = JSON.parse(localStorage.getItem(\"todo\"));\r\n// console.log(\"cargar Local\", this.todos);\r\n// console.log(typeof this.todos);\r\n//    } \r\n//    else {\r\n//     this.todos = []; \r\n//    }\r\nthis.todos = (localStorage.getItem(\"todo\")) \r\n                ? JSON.parse(localStorage.getItem(\"todo\")) \r\n                : [] ;\r\n// this.todos = this.todos.map(obj => Todo.fromJson(obj));\r\nthis.todos = this.todos.map(_todo_class__WEBPACK_IMPORTED_MODULE_0__.Todo.fromJson);\r\n\r\n\r\n}\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://03-webpack-inicial/./src/classes/todo-list.class.js?");

/***/ }),

/***/ "./src/classes/todo.class.js":
/*!***********************************!*\
  !*** ./src/classes/todo.class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n// import { todoList } from \"..\";\r\n\r\nclass Todo{\r\nstatic fromJson({id, tarea, completado, creado}){\r\n    const tempTodo = new Todo(tarea);\r\n    tempTodo.id= id;\r\n    tempTodo.completado= completado;\r\n    tempTodo.creado= creado;\r\n\r\n    return tempTodo;\r\n}\r\n    constructor(tarea){\r\n\r\n        this.tarea=tarea;\r\n        this.id=new Date().getTime();\r\n        this.completado  = false;\r\n        this.creado = new Date();\r\n    }\r\n    imprimirClase(){\r\n        console.log(`${this.tarea} - ${this.id}`);\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://03-webpack-inicial/./src/classes/todo.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/componentes */ \"./src/js/componentes.js\");\n\n\n\n\n// import { todo } from './classes/todo.class.js';\n// import { TodoList } from './classes/todo-list.class';\n// import { saludar } from './js/componentes';\n\nconst todoList = new _classes__WEBPACK_IMPORTED_MODULE_1__.TodoList();\n// console.log (todoList.todos);\n// todoList.todos.forEach(todo => crearTodoHtml (todo));\ntodoList.todos.forEach( _js_componentes__WEBPACK_IMPORTED_MODULE_2__.crearTodoHtml ); //es exactamente igual que el de arriba \nconst newTodo = new _classes__WEBPACK_IMPORTED_MODULE_1__.Todo(\"Aprender JavaScript\");\n// \n// newTodo.imprimirClase();\n// todoList.todos[0].imprimirClase();\n\nconsole.log (\"todos\", todoList.todos);\n// const tarea = new Todo('Aprender javascript');\n// const tarea2 = new Todo('trabajar con javascript');\n\n// todoList.nuevoTodo(tarea);\n\n\n// todoList.nuevoTodo(tarea2);\n// console.log (todoList);\n\n// crearTodoHtml(tarea);\n\n// localStorage.setItem(\"mi-key\", \"abcd\");\n// sessionStorage.setItem(\"mi-key\", \"abcd\");\n// // setTimeout(() => {\n//     localStorage.removeItem(\"mi-key\");\n// }, 1500);\n\n\n\n//# sourceURL=webpack://03-webpack-inicial/./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearTodoHtml\": () => (/* binding */ crearTodoHtml)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./src/classes/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n// referencias en el html\n// import { CleanPlugin } from \"webpack\";\n\n\n\nconst divTodolist = document.querySelector(\".todo-list\"); \nconst txtInput = document.querySelector(\".new-todo\");\nconst btnBorrar = document.querySelector(\".clear-completed\");\nconst ulFiltros = document.querySelector(\".filters\");\nconst anchorFiltros = document.querySelectorAll(\".filtro\");\n\nconst crearTodoHtml = (todo) => {\n\nconst htmlTodo = `\n<li class=\"${(todo.completado) ? \"completed\" : ''  }  \" data-id=\"${todo.id}\">\n<div class=\"view\">\n    <input class=\"toggle\" type=\"checkbox\"${(todo.completado) ? \"checked\" : \"\"  }>\n    <label>${todo.tarea}</label>\n    <button class=\"destroy\"></button>\n</div>\n<input class=\"edit\" value=\"Create a TodoMVC template\">\n</li>`;\n\nconst div = document.createElement (\"div\");\ndiv.innerHTML =htmlTodo;\n\ndivTodolist.append(div.firstElementChild); \n\nreturn div.firstElementChild;\n// divTodolist\n}\n\n// eventos \n\ntxtInput.addEventListener(\"keyup\", (event) =>{\n\n\nif (event.keyCode === 13 && txtInput.value.length > 0) {\n\n    console.log (txtInput.value);\n    const nuevoTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__.Todo(txtInput.value); \n    _index__WEBPACK_IMPORTED_MODULE_1__.todoList.nuevoTodo(nuevoTodo);\n    \n    crearTodoHtml(nuevoTodo);\n\n   txtInput.value=\"\";\n\n}\n\n});\n\ndivTodolist.addEventListener(\"click\", (event) => {\n\nconst nombreElemento = event.target.localName; // input, label, button\nconst todoElemento = event.target.parentElement.parentElement;\nconst todoId = todoElemento.getAttribute(\"data-id\");\n// console.log (nombreElemento);\nif (nombreElemento.includes(\"input\")){ //click en el check\n    _index__WEBPACK_IMPORTED_MODULE_1__.todoList.MarcarCompletado(todoId);\n    todoElemento.classList.toggle(\"completed\");\n\n} else if ( nombreElemento.includes(\"button\")) { //hay que borrar todo \n\n_index__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarTodo(todoId);\ndivTodolist.removeChild(todoElemento);\n\n}\n// console.log(todoList);\n});\nbtnBorrar.addEventListener(\"click\", () => {\n    _index__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarCompletados();\n\n    for (let i = divTodolist.children.length-1; i>=0; i --){\n            const elemento = divTodolist.children[i];\n            // console.log(elemento); \n       if (elemento.classList.contains(\"completed\")){\n        divTodolist.removeChild(elemento);\n       }\n       \n       \n        }\n\n});\n\nulFiltros.addEventListener(\"click\", (event) =>{\n\n    // console.log(event.target.text);\n    const filtro = event.target.text;\n    if (!filtro) {return;};\n\nanchorFiltros.forEach(elem => elem.classList.remove(\"selected\"));\n// console.log(event.target);\nevent.target.classList.add(\"selected\");\n    for (const elemento of divTodolist.children){\n// console.log (elemento);\n        elemento.classList.remove(\"hidden\");\n        const completado = elemento.classList.contains(\"completed\"); \n\n        switch(filtro){\n            case \"Pendientes\":\n                if (completado) {\n                    elemento.classList.add(\"hidden\");\n                }        \n                    break;\n\n             case \"Completados\":\n                 if (!completado) {\n                    elemento.classList.add(\"hidden\");\n                            }        \n                    break;\n        }\n\n\n    }\n    \n})\n\n\n\n\n//# sourceURL=webpack://03-webpack-inicial/./src/js/componentes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;