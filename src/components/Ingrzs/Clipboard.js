export const copy = (v) => {
	if (v.length > 0) {
		navigator.clipboard.writeText(v)
		alert('Contraseña copiada')
	} else {
		alert('No se puede copiar un campo vacio')
	}
}
