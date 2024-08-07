export default function animation(range = 10) {
	if (typeof range !== 'number') return console.error('Animation param (range) must to be a number')

	const fullWall = window.document.getElementById('eyubkh-fullwall')
	if (range >= 14) {
		fullWall.style.marginBottom = '0px'
	} else {
		fullWall.style.marginBottom = '-300px'
	}

	const castle = window.document.getElementById('eyubkh-castle')
	if (range >= 12) {
		castle.style.marginBottom = '30px'
	} else {
		castle.style.marginBottom = '0px'
	}

	const towers = window.document.querySelectorAll('#eyubkh-tower')
	if (range <= 8) {
		towers.forEach((tower) => (tower.style.marginBottom = '-300px'))
	} else {
		towers.forEach((tower) => (tower.style.marginBottom = '0px'))
	}

	const wall = window.document.getElementById('eyubkh-wall')
	if (range <= 6) {
		wall.style.marginBottom = '-300px'
	} else {
		wall.style.marginBottom = '0px'
	}
}
