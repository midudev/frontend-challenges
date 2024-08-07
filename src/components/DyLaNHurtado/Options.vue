<template>
	<span class="flex justify-center items-center text-3xl mb-4">Options:</span>
	<div
		class="h-full flex items-center justify-center flex-col w-full gap-4"
		@change="$emit('checksUpdated', this.checks)"
	>
		<div class="h-full flex items-center justify-center w-full gap-4">
			<Option
				@checkUpdated="updateChecks($event)"
				type="uppercase"
				sum="Include uppercase to password"
			/>
			<Option
				@checkUpdated="updateChecks($event)"
				type="lowercase"
				sum="Include lowercase to password"
			/>
		</div>
		<div class="h-full flex items-center justify-center w-full gap-4">
			<Option
				@checkUpdated="updateChecks($event)"
				type="numbers"
				sum="Include numbers to password"
			/>
			<Option
				@checkUpdated="updateChecks($event)"
				type="symbols"
				sum="Include symbols to password"
			/>
		</div>
	</div>
</template>
<script>
import Option from './Option.vue'
export default {
	name: 'Options',
	data() {
		return {
			checks: []
		}
	},
	props: {},
	components: { Option },
	mounted() {
		this.checks = [
			'QWERTYUIOPASDFGHJKLZXCVBNM',
			'qwertyuiopasdfghjklzxcvbnm',
			'1234567890',
			'!?$%&@#'
		]
		this.$emit('checksUpdated', this.checks)
	},
	methods: {
		updateChecks(checkInput) {
			if (checkInput.checkValue == true) {
				if (checkInput.type == 'lowercase') {
					this.checks.push('qwertyuiopasdfghjklzxcvbnm')
				} else if (checkInput.type == 'uppercase') {
					this.checks.push('QWERTYUIOPASDFGHJKLZXCVBNM')
				} else if (checkInput.type == 'numbers') {
					this.checks.push('1234567890')
				} else {
					this.checks.push('!?$%&@#')
				}
			} else {
				if (checkInput.type == 'lowercase') {
					const index = this.checks.indexOf('qwertyuiopasdfghjklzxcvbnm')
					if (index != -1) {
						this.checks.splice(index, 1)
					}
				} else if (checkInput.type == 'uppercase') {
					const index = this.checks.indexOf('QWERTYUIOPASDFGHJKLZXCVBNM')
					if (index != -1) {
						this.checks.splice(index, 1)
					}
				} else if (checkInput.type == 'numbers') {
					const index = this.checks.indexOf('1234567890')
					if (index != -1) {
						this.checks.splice(index, 1)
					}
				} else {
					const index = this.checks.indexOf('!?$%&@#')
					if (index != -1) {
						this.checks.splice(index, 1)
					}
				}
			}
		}
	},
	emits: ['checksUpdated']
}
</script>
<style></style>
