export const PasswordEntropyCalculator = (password) => {
	const length = password.length
	const hasLowercase = /[a-z]/.test(password)
	const hasUppercase = /[A-Z]/.test(password)
	const hasNumber = /\d/.test(password)
	const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)
	const hasEmoji = /[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(password)

	const sets = [
		hasLowercase && 26,
		hasUppercase && 26,
		hasNumber && 10,
		hasSpecial && 33,
		hasEmoji && 1
	].filter(Boolean)

	// current max 426.41...
	return Math.log2(sets.reduce((a, b) => a * b, 1)) * length
}
