<script setup lang="ts">
import ClipboardIcon from './ClipboardIcon.vue'
import Checkbox from './Checkbox.vue'
import {
	VALID_CHARACTERS_TO_USE,
	usePasswordGeneratorRepository
} from '../composables/password-generator-repository'

const {
	charactersToUse,
	copied,
	copyToClipboard,
	generatePassword,
	isCheckboxDisabled,
	onSelectedCharactersChange,
	password,
	range
} = usePasswordGeneratorRepository()
</script>

<template>
	<div class="h-screen w-screen flex justify-center items-center">
		<div class="w-80 bg-[#251b37] text-[#ffcaca] rounded-lg px-7 pt-10 pb-3">
			<div class="relative">
				<div class="w-full rounded-t-lg p-5 grid grid-cols-6 gap-2 absolute bottom-0 bg-[#372948]">
					<div class="col-span-5 max-w-xs break-all">
						{{ password }}
					</div>
					<div class="flex justify-end items-end">
						<ClipboardIcon @copy-to-clipboard="copyToClipboard" />
					</div>
				</div>
			</div>
			<button
				v-if="!copied"
				id="mke-generate-btn"
				class="w-full rounded-b-lg py-2 bg-[#372948] border-t-[0.5px] border-solid border-[#251b37]"
				@click="generatePassword"
			>
				Generate
			</button>
			<div
				v-if="copied"
				class="w-full rounded-b-lg py-2 bg-[#ffcaca] text-[#251b37] border-t-[0.5px] border-solid border-[#251b37] flex justify-center"
			>
				Copied!
			</div>
			<div class="flex items-center justify-between mt-5">
				<small class="font-bold">5</small>
				<input
					type="range"
					id="mke-range"
					class="w-full appearance-none h-1 bg-[#372948] outline-none mt-0 mx-3"
					v-model="range"
					min="5"
					max="128"
					@input="generatePassword"
				/>
				<small class="font-bold">128</small>
			</div>
			<div class="flex justify-end text-xs">
				<small>{{ range }}</small>
			</div>
			<div class="mt-5">
				<Checkbox
					:disabled="isCheckboxDisabled(VALID_CHARACTERS_TO_USE.LOWERCASE)"
					v-model="charactersToUse"
					:checkboxMessage="VALID_CHARACTERS_TO_USE.LOWERCASE"
					@change="onSelectedCharactersChange"
				/>
				<Checkbox
					:disabled="isCheckboxDisabled(VALID_CHARACTERS_TO_USE.UPPERCASE)"
					v-model="charactersToUse"
					:checkboxMessage="VALID_CHARACTERS_TO_USE.UPPERCASE"
					@change="onSelectedCharactersChange"
				/>
				<Checkbox
					:disabled="isCheckboxDisabled(VALID_CHARACTERS_TO_USE.NUMBERS)"
					v-model="charactersToUse"
					:checkboxMessage="VALID_CHARACTERS_TO_USE.NUMBERS"
					@change="onSelectedCharactersChange"
				/>
				<Checkbox
					:disabled="isCheckboxDisabled(VALID_CHARACTERS_TO_USE.SPECIAL_CHARACTERS)"
					v-model="charactersToUse"
					:checkboxMessage="VALID_CHARACTERS_TO_USE.SPECIAL_CHARACTERS"
					@change="onSelectedCharactersChange"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
#mke-generate-btn:active {
	color: #372948;
}

#mke-range::-webkit-slider-thumb {
	appearance: none;
	width: 15px;
	height: 15px;
	background: #ffcaca;
	cursor: grab;
	border-radius: 50%;
	border: none;
}

#mke-range::-webkit-slider-thumb:active {
	cursor: grabbing;
}

#mke-range::-moz-range-thumb {
	width: 15px;
	height: 15px;
	background: #ffcaca;
	cursor: grab;
	border-radius: 50%;
	border: none;
}

#mke-range::-moz-range-thumb:active {
	cursor: grabbing;
}
</style>
