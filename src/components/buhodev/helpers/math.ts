const round = (num: number, fix = 3) => parseFloat(num.toFixed(fix))
const clamp = (num: number, min = -20, max = 20) => Math.min(Math.max(num, min), max)

export { round, clamp }
