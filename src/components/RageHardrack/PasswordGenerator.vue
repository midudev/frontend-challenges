<script setup lang="ts">
import { ref, computed } from 'vue'

const BASE_CHARS: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const SPECIAL_CHARS: string = '!@#$%^&*()'
const NUMERIC_CHARS: string = '0123456789'

const newPassword = ref('')
const allowSpecialChars = ref(true)
const allowNumericChars = ref(true)
const passwordCopied = ref(false)
const passwordLength = ref(8)

const chars = computed(
	() =>
		`${BASE_CHARS}${allowSpecialChars.value ? SPECIAL_CHARS : ''}${
			allowNumericChars.value ? NUMERIC_CHARS : ''
		}`
)

const allowCopy = computed(() => newPassword.value.length > 0)

const generateNewPassword = () => {
	passwordCopied.value = false

	newPassword.value = Array.from({ length: passwordLength.value })
		.map(() => chars.value.charAt(Math.floor(Math.random() * chars.value.length)))
		.join('')
}

const copyPassword = () => {
	if (newPassword.value.length < 6) return

	navigator.clipboard.writeText(newPassword.value).then(() => {
		passwordCopied.value = true
	})
}
</script>

<template>
	<section
		class="max-w-2xl w-full flex flex-col min-h-screen justify-center items-center space-y-8 mx-auto text-[#322A26]"
	>
		<h1 class="text-[#D4AF37] text-4xl font-bold">Generador de Contraseñas</h1>

		<article
			class="flex flex-col bg-white rounded-lg justify-center items-center w-full p-8 space-y-4"
		>
			<header class="border border-[#D4AF37] rounded-lg flex px-6 py-2 w-full items-center justify-between">
				<p class="text-center w-full text-lg">{{ newPassword }}</p>
				
				<p v-if="passwordCopied" class="text-green-600">Copiado</p>
				<button
					v-else
					:disabled="!allowCopy"
					@click="copyPassword"
					class="disabled:text-gray-300 disabled:cursor-not-allowed transition duration-300 ease"
				>
					Copiar
				</button>
			</header>

			<section class="flex items-center justify-between w-full">
				<div class="flex-1 flex items-start justify-center flex-col space-y-4">
					<h2 class="text-xl text-[#2B4162] font-semibold">Opciones</h2>

					<ul class="flex flex-col space-y-2 w-10/12">
						<li>
							<input type="range" v-model="passwordLength" :min="6" :max="30" class="w-full" />
							<label class="flex items-center justify-center w-full p-1">
								<p class="font-semibold text-center flex-1 w-full">Longitud de la contraseña:</p>
								<input
									type="number"
									class="w-min text-center focus:outline-none"
									v-model.number="passwordLength"
									:min="6"
									:max="30"
								/>
							</label>
						</li>

						<li>
							<label class="flex items-center space-x-2">
								<p class="font-semibold">Caracteres especiales:</p>
								<input type="checkbox" v-model="allowSpecialChars" />
							</label>
						</li>

						<li>
							<label class="flex items-center space-x-2">
								<p class="font-semibold">Caracteres numéricos:</p>
								<input type="checkbox" v-model="allowNumericChars" />
							</label>
						</li>
					</ul>
				</div>

				<div class="flex items-center justify-center">
					<button
						@click="generateNewPassword"
						class="flex py-3 px-6 bg-[#2B4162] rounded-lg text-white font-semibold text-lg hover:bg-opacity-90 transition duration-500 ease-in-out"
					>
						Generar
					</button>
				</div>
			</section>
		</article>
	</section>
</template>
