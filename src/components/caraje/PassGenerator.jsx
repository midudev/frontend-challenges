import React, { useState } from 'react'
import { capitalLetters, lowercaseLetters, numbers, simbols } from './utils/characters'
import PassComponent from './PassComponent'
import styles from './styles/generatorStyles.module.css'

const PassGenerator = () => {
	const [pass, setPass] = useState('')
	const [levelPass, setLevelPass] = useState(0)
	const [active, setActive] = useState(false)
	const [witchUppercase, setWitchUppercase] = useState(false)
	const [witchNumbers, setWitchNumbers] = useState(false)
	const [witchspecials, setWitchspecials] = useState(false)

	const [typesCharacters, setTypesCharacters] = useState({
		lowercase: lowercaseLetters,
		capital: [],
		numbers: [],
		simbols: []
	})

	const selections = (event) => {
		const checkValue = event.target.name
		if (checkValue === 'mayus') {
			setWitchUppercase(!witchUppercase)
			!witchUppercase
				? setTypesCharacters({ ...typesCharacters, capital: capitalLetters })
				: setTypesCharacters({ ...typesCharacters, capital: [] })
		}
		if (checkValue === 'numbers') {
			setWitchNumbers(!witchNumbers)
			!witchNumbers
				? setTypesCharacters({ ...typesCharacters, numbers })
				: setTypesCharacters({ ...typesCharacters, numbers: [] })
		}
		if (checkValue === 'specials') {
			setWitchspecials(!witchspecials)
			!witchspecials
				? setTypesCharacters({ ...typesCharacters, simbols })
				: setTypesCharacters({ ...typesCharacters, simbols: [] })
		}
	}

	const createPassword = () => {
		setPass(
			Object.values(typesCharacters)
				.flat()
				.sort(() => Math.random() - 0.5)
				.slice(0, levelPass)
				.join('')
		)
	}

	const copyPassword = () => {
		navigator.clipboard.writeText(pass)
		console.log(pass.length)
		if (pass.length > 1) {
			setActive(true)
			setTimeout(() => {
				setActive(false)
			}, 2000)
		}
	}

	const lengthPass = (event) => {
		setLevelPass(event.target.value)
	}

	return (
		<>
			{active && (
				<div className={styles.caraje_notification}>
					<h3 className={styles.caraje_h3}>¡¡¡Copiado!!!</h3>
				</div>
			)}

			<PassComponent
				pass={pass}
				copyPassword={copyPassword}
				levelPass={levelPass}
				lengthPass={lengthPass}
				selections={selections}
				witchUppercase={witchUppercase}
				witchNumbers={witchNumbers}
				witchspecials={witchspecials}
				createPassword={createPassword}
			/>
		</>
	)
}

export default PassGenerator
