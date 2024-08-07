/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'
import { Checkboxes } from '@components/marsidev/components/Checkboxes'
import { PasswordLength } from '@components/marsidev/components/PasswordLength'

export const PasswordOptions: Component = () => {
	return (
		<div class='relative flex min-h-[115px] w-full max-w-[800px] flex-col justify-center gap-2 rounded-md border-t border-l border-r border-b-0 bg-white p-8 text-4xl text-black shadow-[0_2px_8px_rgba(0,0,0,0.15)]'>
			<h4 class='pb-4 text-left text-lg font-semibold'>Personalice su contraseña</h4>

			<div class='flex flex-col items-start justify-between gap-2 sm:flex-row'>
				<PasswordLength />
				<Checkboxes />
			</div>
		</div>
	)
}
