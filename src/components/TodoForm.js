import React from 'react';
import useInputState from '../hooks/useInputState'
import '../style/TodoForm.css'

const TodoForm = ({addTodo}) => {
	const [value, handleChange, reset] = useInputState("")
	return (
		<div className="TodoForm">
			<form onSubmit = { (e) => {
				e.preventDefault()
				addTodo(value)
				reset()
				}
			}>
				<input type="text" value={value} onChange={handleChange} placeholder="What you want todo?"/>
			</form>
		</div>
	);
};

export default TodoForm;