import { useEffect, useState } from 'react'
import language from '../helpers/language'
import es from '../assets/locales/es.json'
import en from '../assets/locales/en.json'

export default function useTranslation() {
	const [lang, setLang] = useState(language.get())
	const [json, setJson] = useState(lang === 'en' ? en : es)

	const t = (prop) => json[prop]

	const changeLang = (lang = 'en') => {
		setLang(lang)
		language.set(lang)
	}

	const toggleLang = () => changeLang(lang === 'en' ? 'es' : 'en')

	useEffect(() => {
		setJson(lang === 'en' ? en : es)
	}, [lang])

	return {
		toggleLang,
		changeLang,
		lang,
		t
	}
}
