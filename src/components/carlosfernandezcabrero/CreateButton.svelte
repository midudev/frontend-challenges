<script>
	export let caseSensitive
	export let length
	export let password = ''

	const randomSet = {
		basic: '!@¡#$%&*()_+-{}[]:;.?¿,<>/|=€ªº·~^`´0123456789',
		lowerCase: 'abcdefghijklmnopqrstuvwxyz',
		upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	}

	const getRandomNumber = (dataSet) => Math.floor(Math.random() * dataSet.length)

	function generatePassword() {
		password = ''
		let randomSetElected

		if (caseSensitive === 2) randomSetElected = randomSet.basic + randomSet.upperCase
		if (caseSensitive === 3) randomSetElected = randomSet.basic + randomSet.lowerCase
		randomSetElected = randomSet.basic + randomSet.lowerCase + randomSet.upperCase

		password = ''
		for (let i = 0; i < length; i++) {
			const randomNumber = getRandomNumber(randomSetElected)
			password += randomSetElected[randomNumber]
		}
	}

	generatePassword()
</script>

<button
	class="text-2xl bg-[#007AB5] hover:bg-[#005A85] border-4 border-[#007AB5] active:bg-[#004262] active:border-[#004262] py-3 px-8 rounded-full mt-6"
	on:click={generatePassword}
>
	Crear contraseña
</button>
