<template>
	<div
		v-if="isThinking"
		class="h-1/6 bg-stone-700 border-stone-500 border-t-2 w-full text-3xl py-5 flex flex-row justify-center items-center animate-pulse"
	>
		<img
			src="https://raw.githubusercontent.com/midudev/password-generator/main/src/components/DyLaNHurtado/icons/brain.gif"
			placeholder="src\components\DyLaNHurtado\icons\brain.gif"
			class="h-24 w-34"
			alt="Thinking gif icon"
		/>
		{{ message }}
	</div>
	<div id="color-div" class="h-1/6 border-t-2 hidden w-full text-3xl py-5">
		<span>
			{{ message }}<br />
			{{ stars }}
		</span>
		<br />
	</div>
</template>
<script>
export default {
	name: 'SecureIndicator',
	data() {
		return {
			message: '',
			stars: '',
			isThinking: false
		}
	},
	props: {
		password: String
	},
	methods: {
		evaluatePassword() {
			if (this.password != 'Password Generator') {
				const colorDiv = document.getElementById('color-div')
				this.resetVars(colorDiv)
				setTimeout(() => {
					if (this.password.length > 12 && this.password.match(/(?=.*[0-9])(?=.*[!?$%&@#])/)) {
						this.stars = '⭐⭐⭐'
						this.message = '👹 Your password is hell for hackers! 👹 '
						colorDiv.classList =
							'h-1/6 bg-gradient-to-r from-fuchsia-800 via-pink-400 to-fuchsia-800 border-fuchsia-400 border-t-2 w-full text-3xl py-5 flex justify-center items-center'
					} else if (this.password.length >= 7 && this.password.match(/(?=.*[0-9!?$%&@#])/)) {
						this.stars = '⭐⭐⚫'
						this.message = '🔥 🤘 Your password rocks ! 🤘 🔥 '
						colorDiv.classList =
							'h-1/6 bg-gradient-to-r from-green-800 via-emerald-400 to-green-800 border-emerald-500 border-t-2 w-full text-3xl py-5 flex justify-center items-center'
					} else if (
						this.password.length >= 7 ||
						this.password.match(/.*[0-9!?$%&@#]/) ||
						this.password.match(/(?=.*[0-9])(?=.*[!?$%&@#])/) ||
						this.password.match(/(?=.*[a-z])(?=.*[A-Z])/)
					) {
						this.stars = '⭐⚫⚫'
						this.message = '🙄 Your password could be better ! 🤓 '
						colorDiv.classList =
							'h-1/6 bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-800 border-yellow-500 border-t-2 w-full text-3xl py-5 flex justify-center items-center'
					} else {
						this.stars = '⚫⚫⚫'
						this.message = '😲 Your password is a house without door ! 💩 '
						colorDiv.classList =
							'h-1/6 bg-gradient-to-r from-red-800 via-red-500 to-red-800 border-red-500 border-t-2 w-full text-3xl py-5 flex justify-center items-center'
					}
					this.isThinking = false
				}, 1000)
			}
		},
		resetVars(colorDiv) {
			colorDiv.classList = 'h-1/6 border-t-2 hidden w-full text-3xl py-5'
			this.isThinking = true
			this.stars = ''
			this.message = 'Brainy is thinking ...'
		}
	},
	watch: {
		password(newValue) {
			this.evaluatePassword()
		}
	}
}
</script>
