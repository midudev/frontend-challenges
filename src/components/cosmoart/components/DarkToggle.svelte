<script>
	import iconSun from "../assets/icon_sun.svg";
	import iconMoon from "../assets/icon_moon.svg";
	import { onMount } from "svelte";

	let lightMode;
	onMount(() => {
		lightMode = localStorage.lightMode === "undefined" ? !window.matchMedia("(prefers-color-scheme: dark)").matches : localStorage.lightMode === "true";
		document.body.classList.toggle("light-mode", lightMode);
		localStorage.setItem("lightMode", lightMode);
	});

	function darkToggle(){
		lightMode = !lightMode;
		document.body.classList.toggle("light-mode", lightMode);
		localStorage.setItem("lightMode", lightMode);
	}
</script>

<button class="absolute top-5 right-5 w-6 h-6 grid place-items-center" on:click={darkToggle}>
	<img src={iconMoon} alt="Dark mode" class={`transition-all w-full h-full absolute ${lightMode ? "" : "opacity-0 rotate-90"}`} />
	<img src={iconSun} alt="Light mode" class={`transition-all w-full h-full absolute ${lightMode ? "opacity-0 rotate-90" : ""}`} />
</button>