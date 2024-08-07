import React from 'react'
import CopyIcon from './CopyIcon.jsx'
import useGeneratorPassword from './hooks/useGeneratorPassword.jsx'

import styles from './PasswordGenerator.module.css'

// prettier-ignore
export default function PasswordGenerator () {
	const {
		handleCopy,
		handleGenerate,
		handleChangeRange,
		handleChecked,
		password,
		rangeValue,
		checkboxOptions,
		checkedState,
		placeholder
	} = useGeneratorPassword()

	return (
		<section className={styles.PasswordGenerator}>
			<h1 className={styles.title}>Password Generator</h1>
			<div className={styles.password}>
				<p className={password ? styles.active : ''}>{password || placeholder}</p>
				<button type='button' onClick={handleCopy} ><CopyIcon fill={ !password ? '#ffffff80' : '#ffffff' }/></button>
			</div>
			<form className={styles.form} onSubmit={handleGenerate}>
				<label htmlFor='characterLength' className={styles.characterLength}>
					Character length
					<span>{rangeValue}</span>
				</label>
				<input
					type='range'
					className={styles.inputRange}
					id='characterLength'
					value={rangeValue}
					min='8'
					max='30'
					name='characterLength'
					onChange={handleChangeRange}
				/>

				<div className={styles.options}>
					{checkboxOptions.map(({ id, text }) => {
						return (
							<label htmlFor={id} key={id}>
								<input
									type='checkbox'
									id={id}
									name={id}
									value={id}
									className={styles.inputCheckbox}
									checked={checkedState[id]}
									onChange={handleChecked}
								/>
								{text}
							</label>
						)
					})}
				</div>
				<button type='submit' className={styles.btnGenerate}>Generate</button>
			</form>
		</section>
	)
}
