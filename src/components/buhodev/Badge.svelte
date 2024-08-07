<script lang="ts">
	export let strength: 'lowest' | 'low' | 'medium' | 'high' | 'highest' = 'highest'

	let messages = {
		lowest: 'Highly insecure',
		low: 'Insecure',
		medium: 'Barely secure',
		high: 'Secure',
		highest: 'Highly secure'
	}
</script>

<div
	class:bg-green-300={strength === 'highest'}
	class:bg-blue-300={strength === 'high'}
	class:bg-yellow-300={strength === 'medium'}
	class:bg-orange-300={strength === 'low'}
	class:bg-red-300={strength === 'lowest'}
	class="flex items-center space-x-2 rounded-full py-0.5 px-3 transition"
>
	<span
		class:bg-green-600={strength === 'highest'}
		class:bg-blue-600={strength === 'high'}
		class:bg-yellow-600={strength === 'medium'}
		class:bg-orange-600={strength === 'low'}
		class:bg-red-600={strength === 'lowest'}
		class="rounded-full h-2 w-2 transition"
	/>
	<span
		class:text-green-800={strength === 'highest'}
		class:text-blue-800={strength === 'high'}
		class:text-yellow-800={strength === 'medium'}
		class:text-orange-800={strength === 'low'}
		class:text-red-800={strength === 'lowest'}
		class="text-sm transition">{messages[strength]}</span
	>
</div>
