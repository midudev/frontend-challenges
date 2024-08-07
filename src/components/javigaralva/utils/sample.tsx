export function sample<T>(arr: T[]) {
	return arr[Math.floor(Math.random() * arr.length)]
}
