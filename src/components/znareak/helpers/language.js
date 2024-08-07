const get = () => {
	return localStorage.getItem('znareak-lang') || 'en'
}
const set = (lang) => {
	localStorage.setItem('znareak-lang', lang)
}

const toggle = () => {
	get() === 'es' ? set('en') : set('es')
}

export default {
	get,
	set,
	toggle
}
