<script>
import { store } from '@components/gitsanmartin/store'
import Display from '@components/gitsanmartin/Display.svelte'
import Logo from '@components/gitsanmartin/Logo.svelte'

let password = 'la password'

const listOfCharacters = {
	uppercase : {min: 65, max: 90},
	lowercase : {min: 97, max: 122},
	num :{min: 48, max: 57},
	symbol: {min: 35, max: 38}
}

let characterAmount = 4
store.subscribe((value) => (password = value))

function getRandomInt(min, max){
	return (Math.floor(Math.random() * (max - min + 1) + min))
}

const generate = () => {
	let password = ''
	
	for (let i = 0; i < characterAmount; i++) {
		const pick = getRandomInt(0, ( Object.keys(listOfCharacters).length) - 1 )
		const [min, max] = [
			Object.values(listOfCharacters)[pick].min,
			Object.values(listOfCharacters)[pick].max
		]

		password += String.fromCharCode(getRandomInt(min, max))
	}

	store.set(password)
}
</script>

<div class="flex flex-col h-screen">
	<Logo />

	<div class="m-auto p-10 shadow-2xl rounded-3xl the-card">
		<h2 class="glitch-title mb-5">
			<span aria-hidden="true">super mega password generator 2022</span>
			super mega password generator 2022
			<span aria-hidden="true">super mega password generator 2022</span>
		</h2>

		<Display pinDisplay={password}/>

		<div class="mt-5">characters: {characterAmount}</div>
		<input type="range" class="w-full" max="30" min="4" bind:value={characterAmount} />

		<button
				on:click={generate}
				class="
					rounded-none
					bg-white
					text-black
					my-5
					py-3
					w-full
					font-bold
					tracking-widest
					rounded-sm
					special"
				>
					Generate pasword
		</button>
		
	</div>
</div>

<style>
	.the-card {
		background: rgb(75, 75, 75, 0.1);
		border-top: 1px solid rgb(255, 255, 255, 0.1);
		border-left: 1px solid rgb(255, 255, 255, 0.1);
		backdrop-filter: blur(5px);
	}
	button {
		clip-path: polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px);
	}
	.special {
		filter: drop-shadow(rgba(255, 215, 77, 0.6) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.6) 1px 1px 2px);
		color: rgb(23, 15, 30);
		animation: 1.5s ease 0s infinite alternate none running jNbght;
		background: linear-gradient(90deg, rgb(255, 215, 77) 0%, rgb(64, 221, 255) 30%, rgb(124, 127, 255) 85%) 0% 0% / 200% 100%;
	}
	
	h2 {
		font-size: 2rem;
		font-weight: bold;
		/* letter-spacing: 5px; */
		text-transform: uppercase;
		position: relative;
		text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00;
		animation: glitch-title 725ms infinite;
		/* animation: glitch-title 0.6s infinite linear; */
	}
	.glitch-title span {
		position: absolute;
		top: 0;
		left: 0;
	}
	.glitch-title span:first-child {
		animation: glitch-title 500ms infinite;
		clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
		transform: translate(-0.04em, -0.03em);
		opacity: 0.75;
	}
	.glitch-title span:last-child {
		animation: glitch-title 375ms infinite;
		clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
		transform: translate(0.04em, 0.03em);
		opacity: 0.75;
	}
	@keyframes glitch-title {
		0% {
			text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
			0.025em 0.04em 0 #fffc00;
		}
		15% {
			text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
			0.025em 0.04em 0 #fffc00;
		}
		16% {
			text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
			-0.05em -0.05em 0 #fffc00;
		}
		49% {
			text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
			-0.05em -0.05em 0 #fffc00;
		}
		50% {
			text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
			0 -0.04em 0 #fffc00;
		}
		99% {
			text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
			0 -0.04em 0 #fffc00;
		}
		100% {
			text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
			-0.04em -0.025em 0 #fffc00;
		}
	}

	/* From uiverse.io by @namecho */
	button,
	button::after {
		padding: 16px 20px;
		font-size: 18px;
		background: linear-gradient(45deg, transparent 5%, #494748 5%);
		border: 0;
		color: #fff;
		letter-spacing: 3px;
		line-height: 1;
		box-shadow: 6px 0px 0px #00e6f6;
		outline: transparent;
		position: relative;
	}

	button::after {
		--slice-0: inset(50% 50% 50% 50%);
		--slice-1: inset(80% -6px 0 0);
		--slice-2: inset(50% -6px 30% 0);
		--slice-3: inset(10% -6px 85% 0);
		--slice-4: inset(40% -6px 43% 0);
		--slice-5: inset(80% -6px 5% 0);
		content: " --- Generate pasword ... ";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(45deg, transparent 3%, #00e6f6 3%, #00e6f6 5%, #494748 5%);
		text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
		clip-path: var(--slice-0);
	}

	button:hover::after {
		animation: 1s glitch;
		animation-timing-function: steps(2, end);
	}

	@keyframes glitch {
		0% {
		clip-path: var(--slice-1);
		transform: translate(-20px, -10px);
		}

		10% {
		clip-path: var(--slice-3);
		transform: translate(10px, 10px);
		}

		20% {
		clip-path: var(--slice-1);
		transform: translate(-10px, 10px);
		}

		30% {
		clip-path: var(--slice-3);
		transform: translate(0px, 5px);
		}

		40% {
		clip-path: var(--slice-2);
		transform: translate(-5px, 0px);
		}

		50% {
		clip-path: var(--slice-3);
		transform: translate(5px, 0px);
		}

		60% {
		clip-path: var(--slice-4);
		transform: translate(5px, 10px);
		}

		70% {
		clip-path: var(--slice-2);
		transform: translate(-10px, 10px);
		}

		80% {
		clip-path: var(--slice-5);
		transform: translate(20px, -10px);
		}

		90% {
		clip-path: var(--slice-1);
		transform: translate(-10px, 0px);
		}

		100% {
		clip-path: var(--slice-1);
		transform: translate(0);
		}
	}
</style>