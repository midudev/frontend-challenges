// The MIT License (MIT)
// =====================

// Copyright © 2021 Joshua Nussbaum

// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the “Software”), to deal in the Software without
// restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following
// conditions:

// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.

import { writable as internal, get, Writable } from 'svelte/store'

declare type Updater<T> = (value: T) => T
declare type StoreDict<T> = { [key: string]: Writable<T> }

/* eslint-disable @typescript-eslint/no-explicit-any */
const stores: StoreDict<any> = {}

interface Serializer<T> {
	parse(text: string): T
	stringify(object: T): string
}

interface Options<T> {
	serializer: Serializer<T>
}

export function writable<T>(key: string, initialValue: T, options?: Options<T>): Writable<T> {
	const browser = typeof localStorage !== 'undefined' && typeof window !== 'undefined'
	const serializer = options?.serializer || JSON

	function updateStorage(key: string, value: T) {
		if (!browser) return

		localStorage.setItem(key, serializer.stringify(value))
	}

	if (!stores[key]) {
		const store = internal(initialValue, (set) => {
			const json = browser ? localStorage.getItem(key) : null

			if (json) {
				set(<T>serializer.parse(json))
			}

			if (browser) {
				const handleStorage = (event: StorageEvent) => {
					if (event.key === key) {
						set(event.newValue ? serializer.parse(event.newValue) : null)
					}
				}

				window.addEventListener('storage', handleStorage)

				return () => window.removeEventListener('storage', handleStorage)
			}
		})

		const { subscribe, set } = store

		stores[key] = {
			set(value: T) {
				updateStorage(key, value)
				set(value)
			},
			update(updater: Updater<T>) {
				const value = updater(get(store))

				updateStorage(key, value)
				set(value)
			},
			subscribe
		}
	}

	return stores[key]
}
