<template>
	<div class="w-96 h-56 border-white border-2 bg-white">
		<p class="text-3xl text-center mt-3">Password generator</p>
		<div class="row flex justify-center gap-0 mt-5 w-80 mx-auto">
			<input
				type="text"
				name="passwordBox"
				id="passwordBox"
				readonly
				class="p-1 border-2 border-gray-400 w-72"
				v-model="password"
			/>
			<button
				class="border-2 p-1 border-gray-400 bg-white hover:bg-black border-l-0"
				@click="copyPassword()"
			>
				<img alt="Copy" title="Copy" :src="iconCopy" class="w-8 h-8" />
			</button>
		</div>
		<div class="flex justify-center">
			<input type="range" name="" id="" v-model="passLength" class="w-80 mt-3" />
		</div>
		<div class="flex justify-center mt-3 text-white">
			<button @click="generatePassword()" class="bg-gray-500 p-3">Generate Password</button>
		</div>
		<div class="slider"></div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import icon from './assets/images/copyIcon.svg'

export default {
	setup() {
		const password = ref('')
		const passLength = 8
		const iconCopy = icon
		return { password, passLength, iconCopy }
	},
	methods: {
		async copyPassword() {
			if (this.password === '') return
			await navigator.clipboard.writeText(this.password)
			alert(`Copied text: ${this.password}\nLength: ${this.password.length}`)
		},
		generatePassword() {
			let pass = ''
			for (let index = 0; index < this.passLength; index++) {
				pass += this.generateValidCharacter()
			}
			this.password = pass
		},
		generateValidCharacter() {
			const valid = [
				{ name: 'Capital', min: 65, max: 90 },
				{ name: 'Vowels', min: 97, max: 122 },
				{ symbols: '~`!@#$%^&*()_-+={[}]|:;"\'<,>.?/' }
			]
			const random = this.singleRandom(3)

			if (random === 0 || random === 1) {
				const { min, max } = valid[random]
				return String.fromCharCode(this.rangeRandom(min, max))
			}
			if (random === 2) {
				const { symbols } = valid[random]
				return symbols[this.singleRandom(symbols.length - 1)]
			}
			if (random === 3) {
				return this.singleRandom(9)
			}
		},
		singleRandom(maxValue) {
			return Math.floor(Math.random() * (maxValue + 1))
		},
		rangeRandom(minValue, maxValue) {
			return Math.floor(Math.random() * (maxValue - minValue) + minValue)
		}
	}
}
</script>

<style></style>
