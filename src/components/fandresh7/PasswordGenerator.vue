<script setup lang="ts">
import { computed, ref } from 'vue'

import Password from './Password.vue'
import SecurityLevel from './SecurityLevel.vue'
import Alert from './Alert.vue'

import { levels } from './data'

const password = ref<string>('')

const amount = ref<number>(8)
const hasUppercase = ref<boolean>(true)
const hasSymbols = ref<boolean>(true)
const hasNumbers = ref<boolean>(true)

const showAlert = ref<boolean>(false)

const level = computed(() => {
	return levels.find((item) => amount.value <= item.max)
})

const rangeAmountStyle = computed(() => {
	const width = 93
	const step = width / 14
	const left = step * (amount.value - 6)
	return `left: ${left}%`
})

const copyPassword = () => {
	navigator.clipboard.writeText(password.value)

	showAlert.value = true
	setTimeout(() => {
		showAlert.value = false
	}, 1500)
}

const generatePassword = () => {
	const letters = 'qwertyuiopasdfghjklzxcvbnm'
	const uppercaseLetters = letters.toUpperCase()
	const symbols = '!@$%&'
	const numbers = '1234567890'

	let characters = `${letters}`
	if (hasUppercase.value) characters += `${uppercaseLetters}`
	if (hasSymbols.value) characters += `${symbols}`
	if (hasNumbers.value) characters += `${numbers}`

	password.value = ''
	for (let i = 0; i < amount.value; i++) {
		const key = Math.floor(Math.random() * characters.length)
		password.value += characters[key]
	}
}
</script>

<template>
	<Alert class="absolute -top-20 left-0 right-0 mx-auto" :show="showAlert" />

	<div class="w-full h-full">
		<h1 class="relative font-bold text-4xl mb-6">Password Generator</h1>

		<Password :password="password" @copy-password="copyPassword()" />

		<SecurityLevel :amount="amount" :level="level" />

		<form @submit.prevent="generatePassword()" class="flex mt-14 justify-between flex-wrap">
			<div class="relative w-full">
				<input
					class="w-full mb-2 f-slider"
					id="amount"
					type="range"
					min="6"
					max="20"
					step="1"
					v-model="amount"
				/>
				<output
					class="f-amount absolute -top-8 px-2 rounded text-center"
					:style="[rangeAmountStyle]"
					>{{ amount }}</output
				>
			</div>

			<input
				class="f-checkbox hidden"
				id="uppercase"
				type="checkbox"
				name="uppercase"
				v-model="hasUppercase"
			/>
			<label class="cursor-pointer" for="uppercase">
				<span></span>
				Capital letters
			</label>

			<input
				class="f-checkbox hidden"
				id="symbol"
				type="checkbox"
				name="symbol"
				v-model="hasSymbols"
			/>
			<label class="cursor-pointer" for="symbol">
				<span></span>
				Symbols
			</label>

			<input
				class="f-checkbox hidden"
				id="number"
				type="checkbox"
				name="number"
				v-model="hasNumbers"
			/>
			<label class="cursor-pointer" for="number">
				<span></span>
				Numbers
			</label>

			<button class="f-submit uppercase relative text-white py-2 px-6 rounded-lg mt-6 mx-auto">
				Generate Password
			</button>
		</form>
	</div>
</template>

<style scoped>
.f-slider {
	-webkit-appearance: none;
	width: 100%;
	height: 10px;
	background: #fff;
	outline: none;
	border-radius: 7px;
}

.f-slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	cursor: pointer;
	width: 20px;
	height: 20px;
	border-radius: 100%;
	background: #64e2ff;
	-webkit-transition: 0.2s;
	transition: background-color ease-in-out 0.2s;
}

.f-amount {
	background-color: rgb(255, 215, 77);
	color: rgb(23, 15, 30);
}

.f-submit {
	color: rgb(23, 15, 30);
	background-color: rgb(255, 215, 77);
	transition: all 0.5s ease;
}

.f-submit:hover {
	background-color: rgb(226, 192, 69);
}

.f-checkbox[type='checkbox'] + label {
	position: relative;
	display: flex;
	margin: 0.6em 0;
	align-items: center;
	color: #fff;
	transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);
}

.f-checkbox[type='checkbox'] + label > span {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 1em;
	width: 1em;
	height: 1em;
	background: transparent;
	border: 2px solid #9e9e9e;
	border-radius: 2px;
	cursor: pointer;
	transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
}

.f-checkbox[type='checkbox'] + label:hover > span,
input[type='checkbox']:focus + label > span {
	background: rgba(255, 255, 255, 0.1);
}

.f-checkbox[type='checkbox']:checked + label > span {
	border: 0.5em solid rgb(64, 221, 255);
	animation: shrink-bounce 200ms cubic-bezier(0.4, 0, 0.23, 1);
}

@keyframes shrink-bounce {
	0% {
		transform: scale(1);
	}
	33% {
		transform: scale(0.85);
	}
	100% {
		transform: scale(1);
	}
}
</style>
