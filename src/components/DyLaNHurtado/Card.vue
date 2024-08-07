<template>
	<div
		class="card h-full w-full xl:w-2/4 lg:w-3/4 bg-stone-900 text-center pt-10 rounded-t-2xl flex flex-col select-none"
	>
		<PassLabel :password="passwordValue" />
		<div class="w-full h-4/6 flex flex-col p-10">
			<Length @rangeUpdated="updatePassLength" />
			<Options @checksUpdated="updateCheckboxs" />
		</div>
		<SecureIndicator :password="passwordValue" />
	</div>
	<button
		@click="generatePasswd()"
		class="w-full xl:w-2/4 lg:w-3/4 bg-cyan-500 py-4 px-8 rounded-b-2xl font-bold hover:bg-cyan-400 active:bg-cyan-900 transition-colors duration-300"
	>
		Generate a new password
	</button>
</template>
<script>
import SecureIndicator from './SecureIndicator.vue'
import Length from './Length.vue'
import Options from './Options.vue'
import PassLabel from './PassLabel.vue'
export default {
	name: 'Card',
	mounted() {
		this.passwordValue = 'Password Generator'
	},
	data() {
		return {
			passLength: 4,
			passwordValue: 'Password Generator',
			arrayCheckbox: [],
			characters: {
				lowercase: 'qwertyuiopasdfghjklzxcvbnm',
				uppercase: 'QWERTYUIOPASDFGHJKLZXCVBNM',
				numbers: '1234567890',
				symbols: '!?$%&@#'
			}
		}
	},
	props: {},
	components: {
		SecureIndicator,
		Length,
		Options,
		PassLabel
	},
	methods: {
		generatePasswd() {
			if (!this.arrayCheckbox.length == 0) {
				this.passwordValue = ''
				for (let i = 0; i < this.passLength; i++) {
					let charType = this.arrayCheckbox[Math.floor(Math.random() * this.arrayCheckbox.length)]
					this.passwordValue += charType[Math.floor(Math.random() * charType.length)]
				}
			} else {
				window.alert('Select at least one option!')
			}
		},
		updatePassLength(newValue) {
			this.passLength = newValue
			this.generatePasswd()
		},
		updateCheckboxs(newValue) {
			this.arrayCheckbox = newValue
			this.generatePasswd()
		}
	}
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500&display=swap');
.card {
	font-family: 'Baloo 2', cursive;
}
</style>
