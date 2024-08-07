export const colorPassword = (string) => {
	return string
		.replace(/[!@#$%^&*]/g, (match) => `<span class="agutierrezr__symbol">${match}</span>`)
		.replace(/\d/g, (match) => `<span class="agutierrezr__number">${match}</span>`)
}
