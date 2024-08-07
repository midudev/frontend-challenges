const useGeneratorPass = () => {
	const shuffleArray = (charsArr) => {
		for (let i = charsArr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[charsArr[i], charsArr[j]] = [charsArr[j], charsArr[i]]
		}
		return charsArr
	}

	const generatePass = () => {
		const chars = {
			lower: 'abcdefghijklmnopqrstuvwxyz',
			upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
			numeric: '0123456789',
			symbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
		}
		const charsLength = document.querySelector('#rangeBar').value

		const charsSelected = (
			(document.querySelector('#checkLowercase').checked ? chars.lower : '') +
			(document.querySelector('#checkUppercase').checked ? chars.upper : '') +
			(document.querySelector('#checkNumber').checked ? chars.numeric : '') +
			(document.querySelector('#checkSymbols').checked ? chars.symbols : '')
		).split('')

		const password = shuffleArray(charsSelected).join('').substring(0, charsLength)

		document.querySelector('#password').value = password
	}

	const copyClipBoard = () => {
		const copyText = document.querySelector('#password')

		if (copyText.value === '') {
			document.querySelector('#alert-warning').classList.remove('hidden')
			document.querySelector('#alert-warning').classList.add('flex')
			setTimeout(() => {
				document.querySelector('#alert-warning').classList.remove('flex')
				document.querySelector('#alert-warning').classList.add('hidden')
			}, 2000)
			return false
		}

		copyText.select()
		copyText.setSelectionRange(0, 99999)
		navigator.clipboard.writeText(copyText.value)
		document.querySelector('#alert-info').classList.remove('hidden')
		document.querySelector('#alert-info').classList.add('flex')
		setTimeout(() => {
			document.querySelector('#alert-info').classList.remove('flex')
			document.querySelector('#alert-info').classList.add('hidden')
		}, 2500)
	}

	return {
		generatePass,
		copyClipBoard
	}
}

export default useGeneratorPass
