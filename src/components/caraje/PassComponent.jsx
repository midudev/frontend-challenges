import React from 'react'
import IconCopy from './icons/IconCopy'
import styles from './styles/generatorStyles.module.css'

const PassComponent = ({
	pass,
	copyPassword,
	levelPass,
	lengthPass,
	selections,
	witchUppercase,
	witchNumbers,
	witchspecials,
	createPassword
}) => {
	return (
		<div className={styles.caraje_screen}>
			<div className={styles.caraje_cardpass}>
				<header className={styles.caraje_header}>
					<h1 className={styles.caraje_h1}>Password Generator</h1>
				</header>
				<main className={styles.caraje_generator}>
					<div className={styles.caraje_groupkey}>
						<input
							className={styles.caraje_key}
							type='text'
							id='name'
							name='name'
							disabled
							value={pass}
						/>
						<button onClick={copyPassword} className={styles.caraje_copy}>
							<IconCopy fill='#0068fa' />
						</button>
					</div>
					<div className={styles.caraje_groupkey}>
						<input
							className={styles.caraje_slide}
							type='range'
							min='0'
							max='30'
							step='1'
							value={levelPass}
							onChange={lengthPass}
						/>
						<h2 className={styles.caraje_h2}>{levelPass}</h2>
					</div>
					<form className={styles.caraje_selections} onSubmit={selections}>
						<label className={styles.caraje_option}>
							<input type='checkbox' name='mayus' value={witchUppercase} onChange={selections} />{' '}
							Incluir Mayusculas
						</label>
						<label className={styles.caraje_option}>
							<input type='checkbox' name='numbers' value={witchNumbers} onChange={selections} />{' '}
							Incluir numeros
						</label>
						<label className={styles.caraje_option}>
							<input type='checkbox' name='specials' value={witchspecials} onChange={selections} />{' '}
							Incluir caracteres especiales
						</label>
					</form>
					<button onClick={createPassword} className={styles.caraje_btn}>
						Generar Password
					</button>
				</main>
			</div>
		</div>
	)
}

export default PassComponent
