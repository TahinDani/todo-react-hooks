import React from 'react';
import Todo from './Todo'
import '../style/TodoList.css'

function TodoList({todos, removeTodo, toggleTodo, editTodo}) {
	return (
		<div className="TodoList">
			{todos.map(todo => 
				<Todo 
					{...todo} 
					key={todo.id} 
					removeTodo={removeTodo} 
					toggleTodo={toggleTodo} 
					editTodo={editTodo} />
			)}
		</div>
	);
}

export default TodoList;