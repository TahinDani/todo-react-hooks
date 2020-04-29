import {useState, useEffect} from 'react'

export default (key, defaultVal) => {
	//const [value, setValue] = useState(JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultVal)))
	const [value, setValue] = useState(() => {
		let val
		try {
			val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
		} catch (e) {
			val = defaultVal
		}
		console.log(val);
		
		return val
	})

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value))
	}, [key, value] )

	return [value, setValue]
}