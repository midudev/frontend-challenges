import imgFirstLvl from './assets/images/mri-lvl1.jpg'
import imgSecondLvl from './assets/images/mri-lvl2.jpg'
import imgThirdLvl from './assets/images/mri-lvl3.jpg'
import imgfourthLvl from './assets/images/mri-lvl4.jpg'
import imgFiveLvl from './assets/images/mri-lvl5.jpg'
import imggodLvl from './assets/images/mri-lvlgod.jpg'
import firstlevelsound from './assets/sound/firstlevel.mp3'
import secondLevelsound from './assets/sound/secondlevel.mp3'
import thirdlevelsound from './assets/sound/thirdlevel.mp3'
import fourthlevelsound from './assets/sound/fourthlevel.mp3'
import fivelevelsound from './assets/sound/fivelevel.mp3'
import godlevelsound from './assets/sound/godlevel.mp3'
import { passwordCharacters } from './passwordCharacters'

function passwordStrength(passwordText) {
	const { lowerCase, upperCase, numbers, specialCharacters } = passwordCharacters

	const passPropertiesLevel = {
		veryLow: {
			level: 1,
			img: imgFirstLvl.src,
			sound: firstlevelsound
		},
		low: {
			level: 2,
			img: imgSecondLvl.src,
			sound: secondLevelsound
		},
		medium: {
			level: 3,
			img: imgThirdLvl.src,
			sound: thirdlevelsound
		},
		high: {
			level: 4,
			img: imgfourthLvl.src,
			sound: fourthlevelsound
		},
		veryHigh: {
			level: 5,
			img: imgFiveLvl.src,
			sound: fivelevelsound
		},
		god: {
			level: 6,
			img: imggodLvl.src,
			sound: godlevelsound
		}
	}

	if (passwordText.length > 50) {
		return passPropertiesLevel.god
	}

	const pointsLowerCase = 1
	const pointsUpperCase = 1
	const pointsNumber = 2
	const pointsSymbol = 6
	const pointsLength = 4

	let totalPasswordPoints = 0
	for (let i = 0; i < passwordText.length; i++) {
		const character = passwordText[i]

		if (lowerCase.includes(character)) {
			totalPasswordPoints += pointsLowerCase
		}
		if (upperCase.includes(character)) {
			totalPasswordPoints += pointsUpperCase
		}
		if (numbers.includes(character)) {
			totalPasswordPoints += pointsNumber
		}
		if (specialCharacters.includes(character)) {
			totalPasswordPoints += pointsSymbol
		}
	}

	if (totalPasswordPoints === passwordText.length) {
		totalPasswordPoints = 1
	} // Cuando todos los caracteres son minusculas y mayúsculas

	totalPasswordPoints += passwordText.length * pointsLength

	let passwordStrengthResult = {}
	if (totalPasswordPoints >= 1 && totalPasswordPoints <= 19) {
		passwordStrengthResult = passPropertiesLevel.veryLow
	}

	if (totalPasswordPoints >= 20 && totalPasswordPoints <= 39) {
		passwordStrengthResult = passPropertiesLevel.low
	}

	if (totalPasswordPoints >= 40 && totalPasswordPoints <= 59) {
		passwordStrengthResult = passPropertiesLevel.medium
	}

	if (totalPasswordPoints >= 60 && totalPasswordPoints <= 79) {
		passwordStrengthResult = passPropertiesLevel.high
	}

	if (totalPasswordPoints >= 80) {
		passwordStrengthResult = passPropertiesLevel.veryHigh
	}

	return passwordStrengthResult
}

export default passwordStrength
