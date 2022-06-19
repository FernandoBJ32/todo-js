import './styles.css';

import { Todo, TodoList  } from './classes';
import { crearTodoHtml } from './js/componentes';
// import { todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';
// import { saludar } from './js/componentes';

export const todoList = new TodoList();
// console.log (todoList.todos);
// todoList.todos.forEach(todo => crearTodoHtml (todo));
todoList.todos.forEach( crearTodoHtml ); //es exactamente igual que el de arriba 
const newTodo = new Todo("Aprender JavaScript");
// 
// newTodo.imprimirClase();
// todoList.todos[0].imprimirClase();

console.log ("todos", todoList.todos);
// const tarea = new Todo('Aprender javascript');
// const tarea2 = new Todo('trabajar con javascript');

// todoList.nuevoTodo(tarea);


// todoList.nuevoTodo(tarea2);
// console.log (todoList);

// crearTodoHtml(tarea);

// localStorage.setItem("mi-key", "abcd");
// sessionStorage.setItem("mi-key", "abcd");
// // setTimeout(() => {
//     localStorage.removeItem("mi-key");
// }, 1500);

