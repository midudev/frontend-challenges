<script lang="ts">
	import { onMount } from 'svelte'

	export let width: number, height: number, seed: string

	let canvas: HTMLCanvasElement
	let currentMousePos

	const ASCII = [33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]

	onMount(() => {
		const ctx = canvas.getContext('2d')
		canvas.height = height
		canvas.width = width
		ctx.fillStyle = '#000'
		ctx.fillRect(0, 0, height, width)

		const cols = Math.floor(width / 20) + 1
		const ypos = Array(cols).fill(0)

		function matrix() {
			ctx.fillStyle = '#0001'
			ctx.fillRect(0, 0, width, height)

			ctx.fillStyle = '#0f0'
			ctx.font = '15pt monospace'

			ypos.forEach((y, index) => {
				const text = String.fromCharCode(Math.random() * 128)
				const x = index * 20
				ctx.fillText(text, x, y)
				if (y > 100 + Math.random() * 10000) ypos[index] = 0
				else ypos[index] = y + 20
			})
		}

		setInterval(matrix, 50)

		function getMousePos(canvas, evt) {
			var rect = canvas.getBoundingClientRect()
			return {
				x: evt.clientX - rect.left,
				y: evt.clientY - rect.top
			}
		}

		canvas.addEventListener(
			'mousemove',
			function (evt) {
				currentMousePos = getMousePos(canvas, evt)
				let randomNumber = Math.random()

				if (seed.length < 36 && randomNumber > 0.8) {
					seed += String.fromCharCode(ASCII[currentMousePos.x - 1])
				} else if (seed.length < 36 && randomNumber > 0.6) {
					seed += String.fromCharCode(ASCII[currentMousePos.y - 1])
				} else {
					return
				}
			},
			false
		)
	})
</script>

<canvas bind:this={canvas} />
