import {useState} from 'react'

export default (initialVal = false) => {
	const [state, setState] = useState(initialVal)
	const toggleState = () => {
		setState(!state)
	}
	return [state, toggleState]
}