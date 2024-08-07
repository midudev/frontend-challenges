import { useEffect, useState } from 'react'
import './styles/PasswordStrength.css'

const PasswordStrength = ({ strength, hasAnOption }) => {
	const [passwordStrengthLevel, setPasswordStrengthLevel] = useState('---')
	const [barsLevel, setBarsLevel] = useState(0)

	useEffect(() => {
		calculateStrengthLevel()
	}, [strength])

	const calculateStrengthLevel = () => {
		if (hasAnOption()) {
			switch (strength) {
			case 1:
				setPasswordStrengthLevel('Weak')
				setBarsLevel(0)
				break
			case 2:
				setPasswordStrengthLevel('Medium')
				setBarsLevel(1)
				break
			case 3:
				setPasswordStrengthLevel('Strong')
				setBarsLevel(2)
				break
			case 4:
				setPasswordStrengthLevel('💪')
				setBarsLevel(3)
				break
			case 5:
				setPasswordStrengthLevel('😱')
				setBarsLevel(4)
				break
			case 6:
				setPasswordStrengthLevel('😱')
				setBarsLevel(4)
				break
			default:
				setPasswordStrengthLevel('---')
				setBarsLevel(0)
				break
			}
		} else {
			setPasswordStrengthLevel('---')
			setBarsLevel(0)
		}
	}

	return (
		<div>
			<div className='password-strength__main-container'>
				<p>Strength</p>
				<div className='password-strength__level-bars-container'>
					<p>{passwordStrengthLevel}</p>
					{[...Array(5)].map((level, index) => {
						return (
							<span
								className={
									passwordStrengthLevel === '---'
										? 'password-strength__level-bar'
										: index <= barsLevel
											? 'password-strength__level-bar active'
											: 'password-strength__level-bar'
								}
								key={index}
							></span>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default PasswordStrength
