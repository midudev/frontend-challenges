<template>
	<div
		class="main-container min-h-screen min-w-full flex text-black  justify-center items-center bg-contain bg-center bg-no-repeat">
		<div class="window" style="width: 325px">
			<div class="title-bar">
				<div class="title-bar-text">Password Generator</div>
			</div>
			<div class="window-body">
				<div class="my-2">Your password: <span id="generatedPasswordText" class="font-bold"
						v-on:focus="$event.target.select()">{{generatedPassword}}</span><button v-if="generatedPassword"
						@click="copyToClipboard" class="mx-1">Copy</button></div>
				<div class="field-row my-2">
					<label for="range26">Low</label>
					<input id="range26" type="range" min="1" max="20" v-model="passwordLength" class="block" />
					<label for="range27">High</label>
				</div>
				<p class="my-2 text-center">Length: {{passwordLength}} </p>
				<div class="my-2">
					<div>
						<input v-model="useLowercase" type="checkbox" id="useLowercase" />
						<label for="useLowercase">Use lowercase</label>
					</div>
					<div>
						<input v-model="useUppercase" type="checkbox" id="useUppercase" />
						<label for="useUppercase">Use uppercase</label>
					</div>
					<div>
						<input v-model="useNumbers" type="checkbox" id="useNumbers" />
						<label for="useNumbers">Use numbers</label>
					</div>
					<div>
						<input v-model="useSymbols" type="checkbox" id="useSymbols" />
						<label for="useSymbols">Use symbols</label>
					</div>
				</div>
				<button @click="generatePassword" class="">Generate password</button>
			</div>
		</div>
		<div class="absolute bottom-2 text-white">Made with <a href='https://jdan.github.io/98.css/' target='_blank'
				class="text-white font-bold">98.css</a></div>
		<modal :title="modalTitle" :text="modalText" :isOpened="isModalVisible" @close="closeModalHandler"></modal>
	</div>
</template>

<script>
import modal from '@components/kilombo/components/modal.vue'

export default {
	name: "passwordGenerator",
	components: { modal },
	data () {
		return {
			generatedPassword: '',
			passwordLength: 10,
			lowercaseChars: "abcdefghijklmnopqrstuvwxyz",
			useLowercase: true,
			uppercaseChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
			useUppercase: false,
			numbersChars: "0123456789",
			useNumbers: false,
			symbolsChars: "!@#$%^&*_-+=",
			useSymbols: false,
			selectedChars: '',
			isModalVisible: false,
			modalTitle: '',
			modalText: ''
		}
	},
	methods: {
		generatePassword () {
			this.generatedPassword = this.generateString();
		},
		generateString () {
			let password = '';
			this.selectedChars = '';
			if (this.useLowercase) this.selectedChars += this.lowercaseChars;
			if (this.useUppercase) this.selectedChars += this.uppercaseChars;
			if (this.useNumbers) this.selectedChars += this.numbersChars;
			if (this.useSymbols) this.selectedChars += this.symbolsChars;
			if (!this.selectedChars) {
				this.useLowercase = true;
				this.selectedChars = this.lowercaseChars;
			}
			for (let i = 0; i < this.passwordLength; i++) {
				password += this.selectedChars.charAt(Math.floor(Math.random() * this.selectedChars.length)
				);
			}
			return password;
		},
		copyToClipboard () {
			navigator.clipboard.writeText(this.generatedPassword);
			this.modalText = 'Copied to clipboard!';
			this.isModalVisible = true;
		},
		closeModalHandler () {
			this.modalText = '';
			this.isModalVisible = false;
		}
	},
}
</script>

<style scoped>
.main-container {
	background-image: url('./assets/windows_98_background_in_1920x1080.png')
}

@media screen and (max-width:600px) {
	.main-container {
		background-image: none;
	}
}
</style>
