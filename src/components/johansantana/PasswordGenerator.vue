<script setup>
import { ref, computed } from 'vue'
import { animate, newPassword } from './utils'
import TooltipMessage from './TooltipMessage.vue'
import WarningMessage from './WarningMessage.vue'
import Appear from './Appear.vue'
import GithubIcon from './icons/GithubIcon.vue'
import CopyIcon from './icons/CopyIcon.vue'
import CheckIcon from './icons/CheckIcon.vue'

const MIN_LENGTH = 6
const MAX_LENGTH = 24

/*
	MAX_LENGTH / 2 + MIN_LENGTH / 2
	sets the initial value to the middle of the input range
*/
const passwordLength = ref(MAX_LENGTH / 2 + MIN_LENGTH / 2)
const password = ref(null)
const animatedPassword = ref('')

const passwordLengthNumber = computed(() => {
	return Number(passwordLength.value)
})

const handleGenerateNewPassword = (number) => {
	password.value = newPassword(number)
	animate(password.value, animatedPassword)
}

const showTooltipMessage = ref(false)
const warningMessage = ref(null)

const handleCopy = (text) => {
	if (!text) {
		warningMessage.value = 'Generate a password before copying.'
		const warningTimeout = window.setTimeout(() => {
			warningMessage.value = null
			window.clearTimeout(warningTimeout)
		}, 3000)
		return
	}
	navigator.clipboard.writeText(text).then(() => {
		showTooltipMessage.value = true
		const tooltipTimeout = window.setTimeout(() => {
			showTooltipMessage.value = false
			window.clearTimeout(tooltipTimeout)
		}, 1500)
	})
}
</script>

<template>
	<div class="flex flex-col gap-10 relative">
		<Transition name="slidedown">
			<WarningMessage v-if="warningMessage" :message="warningMessage" />
		</Transition>

		<!-- Generator -->
		<div class="py-10 flex flex-col">
			<Appear :delay="100">
				<h1
					id="johansantana-h1"
					class="text-4xl sm:text-5xl font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-pink-500 mb-4"
				>
					Password Generator
				</h1>
			</Appear>

			<Appear :delay="200">
				<p
					class="text-sm sm:text-base text-gray-200/50 mb-2 w-fit mx-auto sm:before:content-['-'] sm:after:content-['-'] sm:after:ml-2"
				>
					Select your <span class="text-gray-200/80">password length</span>
				</p>
				<div class="mb-6 flex gap-6 items-center">
					<input
						id="johansantana-range"
						type="range"
						:min="MIN_LENGTH"
						:max="MAX_LENGTH"
						v-model="passwordLength"
						class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer focus:outline-none"
					/>
					<span class="text-white font-bold text-2xl md:text-3xl">{{ passwordLength }}</span>
				</div>
			</Appear>

			<Appear :delay="300">
				<button
					id="johansantana-cta-button"
					class="px-6 text-sm sm:text-lg w-full bg-blue-700 rounded-full py-3 text-white mb-6 hover:scale-105 hover:bg-blue-600 transition outline-8 outline-offset-4"
					@click="handleGenerateNewPassword(passwordLengthNumber)"
				>
					Generate!
				</button>
			</Appear>

			<Appear :delay="400">
				<div class="flex gap-3">
					<input
						type="text"
						:value="animatedPassword"
						placeholder="here goes your password..."
						readonly
						class="bg-transparent border-2 text-sm sm:text-base border-white text-white placeholder-gray-400 rounded-lg focus:outline-none block w-full p-3"
					/>
					<button
						id="johansantana-copy-button"
						class="bg-transparent relative border-2 border-white p-2 px-3 rounded-lg text-white hover:bg-white hover:scale-110 hover:text-gray-700 focus:outline-none transition"
						@click="handleCopy(password)"
					>
						<CopyIcon />

						<Transition name="fade">
							<TooltipMessage v-if="showTooltipMessage" message="Copied!">
								<CheckIcon class="text-green-400" />
							</TooltipMessage>
						</Transition>
					</button>
				</div>
			</Appear>
		</div>

		<!-- Footer -->
		<Appear :delay="500">
			<footer
				class="py-10 text-white flex flex-col items-center gap-6 border-t-8 border-dashed border-gray-400/20"
			>
				<div class="w-fit">
					<img src="/logo.svg" alt="HacktoberFest Logo" class="w-44 sm:w-52 md:w-60 opacity-70" />
				</div>
				<div class="w-fit">
					<a
						href="https://github.com/johansantana"
						class="flex text-sm sm:text-base gap-3 p-2 hover:bg-slate-50/10 rounded-full transition"
						target="_blank"
						rel="noopener"
					>
						<GithubIcon />
						@johansantana
					</a>
				</div>
			</footer>
		</Appear>
	</div>
</template>

<style scoped>
@import url('./styles/transitions.css');

#johansantana-h1 {
	font-family: 'Inter', sans-serif;
}

#johansantana-range::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 24px;
	height: 24px;
	border-radius: 999%;
	background-color: white;
	cursor: pointer;
	transition: background-color 0.2s ease;
}

#johansantana-range:hover::-webkit-slider-thumb {
	border-radius: 999%;
	background-color: rgb(200, 200, 200);
}

#johansantana-cta-button,
#johansantana-copy-button {
	-webkit-tap-highlight-color: transparent;
}
</style>
