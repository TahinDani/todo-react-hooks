import React from 'react';
import useInputState from '../hooks/useInputState'
import '../style/EditTodoForm.css'

const EditTodoForm = ({id, task, editTodo, toggleIsEditing}) => {
	const [value, handleChange, reset] = useInputState(task)

	return (
		<div className="EditTodoForm">
			<form onSubmit = {(e) => {
				e.preventDefault()
				editTodo(id, value)
				reset()
				toggleIsEditing()
				}
			}>
				<input type="text" value={value} onChange={handleChange} autoFocus/>
			</form>
		</div>
	);
};

export default EditTodoForm;