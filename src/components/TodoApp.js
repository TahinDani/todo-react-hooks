import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import useLocalStorageState from '../hooks/useLocalStorageState'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import '../style/TodoApp.css'

function TodoApp() {
	// const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
	const initialTodos = [
		{id: 1, task: "Learn React Hooks", done: true},
		{id: 2, task: "Learn Context API", done: false},
		{id: 3, task: "Lean back and relax", done: false},
	]
	
	const [todos, setTodos] = useLocalStorageState("todos", initialTodos)
	
	const addTodo = (newTodoText) => {
		setTodos([...todos, {id: uuidv4(), task: newTodoText, done: false}])
	}

	const removeTodo = (todoId) => {
		const newTodos = todos.filter(todo => todo.id !== todoId)
		setTodos(newTodos)
	}

	const toggleTodo = (todoId) => {
		const newTodos = todos.map(todo => todo.id === todoId ? {...todo, done: !todo.done} : todo)
		setTodos(newTodos)
	}

	const editTodo = (todoId, newTask) => {
		const newTodos = todos.map(todo => todo.id === todoId ? {...todo, task:newTask} : todo)
		setTodos(newTodos)
	}

	return (
		<>
			<div className="header"><img className="logo" src="images/hook.svg" alt="logo"/></div>
			<div className="todo-container">
				<TodoForm addTodo={addTodo}/>
				<TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
			</div>
		</>
	)
}

export default TodoApp