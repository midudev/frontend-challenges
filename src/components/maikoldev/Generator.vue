<template>
	<div>
		<h1 class="font-special text-4xl mb-10">Strong Password Generator</h1>
		<div class="card">
			<div class="relative mb-4">
				<input
					ref="password"
					:class="`form-control transition-all duration-300 ${handleStatus()}`"
					type="text"
					v-model="password"
					readonly
				/>
				<button
					class="absolute top-0 bottom-0 right-14 hover:scale-110 transition-all duration-300"
					type="button"
					@click="copyPassword"
				>
					<CopyIcon class="icon" width="25" />
				</button>
				<button
					class="
						absolute
						top-0
						bottom-0
						right-4
						hover:rotate-90 hover:scale-110
						transition-all
						duration-300
					"
					type="button"
					@click="generatePassword"
				>
					<ReloadIcon class="icon" width="25" />
				</button>
			</div>
			<div class="progress bg-black-currant h-3 my-4 rounded">
				<div :class="`bar h-3 rounded ${progressStatus()} transition-all duration-300`"></div>
			</div>
			<div>
				<input type="range" name="" id="" v-model="passwordLength" step="1" min="1" max="20" />

				<span>
					{{ passwordLength }}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import CopyIcon from '@components/maikoldev/CopyIcon.vue'
import ReloadIcon from '@components/maikoldev/ReloadIcon.vue'

export default {
	name: 'Generator',
	data() {
		return {
			password: '',
			passwordLength: 12
		}
	},
	components: {
		CopyIcon,
		ReloadIcon
	},
	created() {
		this.generatePassword()
		// this.statusClass()
	},
	methods: {
		handleStatus() {
			if (this.passwordLength < 8) {
				return 'text-red-orange'
			} else if (this.passwordLength >= 8 && this.passwordLength < 12) {
				return 'text-terra-cota'
			} else if (this.passwordLength >= 12) {
				return 'text-pastel-green'
			}
		},
		progressStatus() {
			if (this.passwordLength < 3) {
				return 'bg-red-orange w-0'
			} else if (this.passwordLength < 8) {
				return 'bg-red-orange w-[30%] '
			} else if (this.passwordLength >= 8 && this.passwordLength < 12) {
				return 'bg-terra-cota w-[50%]'
			} else if (this.passwordLength >= 12) {
				return 'bg-pastel-green w-full'
			}
		},
		// generate random password of 8 characters and symbols
		generatePassword() {
			let password = ''
			const characters =
				'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-='
			const charactersLength = characters.length
			for (let i = 0; i < this.passwordLength; i++) {
				password += characters.charAt(Math.floor(Math.random() * charactersLength))
			}

			this.password = password
		},
		copyPassword() {
			const password = this.password

			if (!password) {
				return
			}

			this.$refs.password.select()
			document.execCommand('copy')
			alert('Password copied to clipboard')
		}
	}
}
</script>

<style scoped>
h1,
p,
span {
	@apply text-manga;
	text-shadow: 0px 1px 8px rgba(255, 255, 255, 0.5);
}

.icon {
	fill: #e5e1e6;
}

.card {
	@apply bg-gradient-to-b from-surf to-psybeam;
	/* background: #fff; */
	/* box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.5); */
	/* border-radius: 16px; */
	padding: 20px;
	/* clip-path: polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px); */
	clip-path: polygon(
		20px 0px,
		100% 0px,
		100% calc(100% - 20px),
		calc(100% - 20px) 100%,
		0px 100%,
		0px 20px
	);
	/* border: 1px solid #e5e1e6; */
	box-shadow: rgb(124 127 255) 0px 0px 12px;
}

input.form-control {
	@apply bg-black-currant w-full  py-3 px-4 outline-none rounded-2xl text-xl;
	box-shadow: rgb(255 215 77 / 60%) -1px -1px 6px, rgb(124 127 255 / 60%) 1px 1px 6px;
}
</style>