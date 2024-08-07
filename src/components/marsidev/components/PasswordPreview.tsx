/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'
import { For } from 'solid-js'
import { usePassword } from '@components/marsidev/lib/PasswordContext'
import { DICTIONARY } from '@components/marsidev/utils/constants'

const isSymbol = (char: string) => char === '\\' || new RegExp(`[${DICTIONARY.symbols}]`).test(char)
const isNumber = (char: string) => new RegExp(`[${DICTIONARY.numbers}]`).test(char)
const isLowercase = (char: string) => new RegExp(`[${DICTIONARY.lowercase}]`).test(char)
const isUppercase = (char: string) => new RegExp(`[${DICTIONARY.uppercase}]`).test(char)

export const PasswordPreview: Component = () => {
	const { password } = usePassword()

	return (
		<div class="relative mt-6 flex min-h-[80px] w-full max-w-[800px] flex-wrap items-center justify-center break-all rounded-md border-t border-l border-r border-b-0 bg-white p-6 font-['Courier_Prime',ui-monospace,Monaco,Consolas,monospace] text-3xl text-black shadow-[0_2px_8px_rgba(0,0,0,0.15)] sm:text-4xl">
			<For each={password().split('')}>
				{(char) => {
					return (
						<span
							classList={{
								'text-rose-500': isSymbol(char),
								'text-blue-500': isNumber(char),
								'text-fuchsia-500': isLowercase(char),
								'text-purple-500': isUppercase(char)
							}}
						>
							{char}
						</span>
					)
				}}
			</For>
		</div>
	)
}
