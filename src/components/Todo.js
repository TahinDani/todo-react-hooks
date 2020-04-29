import React from 'react';
import useToggleState from '../hooks/useToggleState'
import EditTodoForm from './EditTodoForm'
import '../style/Todo.css'

const Todo = ({id, task, done, removeTodo, toggleTodo, editTodo}) => {
	const [isEditing, toggleIsEditing] = useToggleState(false)

	return (
		<div className="Todo">
			{isEditing ? 
				<EditTodoForm editTodo={editTodo} id={id} task={task} toggleIsEditing={toggleIsEditing} /> :
				<>
					<input type="checkbox" id={id} name={id} checked={done} onChange={() => toggleTodo(id)}></input>
					<label className="Todo-task" htmlFor={id} style={{textDecoration: done ? "line-through" : "none"}}>{task}</label>
					
					<img className="Todo-edit" src="images/edit1.svg" alt="edit" onClick={toggleIsEditing} />
					<img className="Todo-delete" src="images/trash.svg" alt="edit" onClick={() => removeTodo(id)} />
				</>
			}
			
		</div>
	);
};

export default Todo;