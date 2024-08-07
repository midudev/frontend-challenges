export const checkPassword = (pass, isAbc, isNum, isSpl, letters, nums, spl) => {
	let letter = false
	let num = false
	let spec = false

	if (isAbc) {
		letter = hasItem(pass, letters)
	}

	if (isNum) {
		num = hasItem(pass, nums)
	}

	if (isSpl) {
		spec = hasItem(pass, spl)
	}

	if (isAbc && isNum && isSpl) {
		return letter && num && spec
	}

	if (isAbc && isNum) {
		return letter && num
	}

	if (isAbc && isSpl) {
		return letter && spec
	}

	if (isSpl && isNum) {
		return num && spec
	}

	if (isAbc) {
		return letter
	}

	if (isNum) {
		return num
	}

	if (isSpl) {
		return spec
	}
}

const hasItem = (str, base) => {
	for (let i = 0; i < str.length; i++) {
		if (base.includes(str.charAt(i))) {
			return true
		}
	}
	return false
}