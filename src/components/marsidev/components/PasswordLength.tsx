/** @jsxImportSource solid-js */
import type { Component, JSX } from 'solid-js'
import { createEffect } from 'solid-js'
import { usePassword } from '@components/marsidev/lib/PasswordContext'
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from '@components/marsidev/utils/constants'
import '@components/marsidev/styles/slider.css'

export const PasswordLength: Component = () => {
	const { length, onChangeLength } = usePassword()

	const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
		onChangeLength(event.currentTarget.value)
	}

	// updateInputRangeBgSize
	createEffect(function updateSliderBgSize() {
		/** credits on https://nikitahl.com/style-range-input-css */
		const target = document.getElementById('marsidev-pwd-range') as HTMLInputElement
		const min = MIN_PASSWORD_LENGTH
		const max = MAX_PASSWORD_LENGTH
		const value = length()
		const bgSize = ((value - min) * 100) / (max - min) + '% 100%'
		target.style.backgroundSize = bgSize
	})

	return (
		<div class='flex w-full flex-col items-start justify-center gap-2 text-lg font-semibold text-black'>
			<label for='marsidev-pwd-length' class='text-[1rem]'>
				Longitud de la contraseña
			</label>

			<div class='flex w-full flex-row items-center justify-start gap-2 text-[1rem] text-black'>
				<input
					class='h-[40px] w-[64px] rounded-md border border-violet-400 p-2 text-center text-[16px] shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.25)] outline-violet-500'
					type='number'
					step='1'
					min={MIN_PASSWORD_LENGTH}
					max={MAX_PASSWORD_LENGTH}
					name='length'
					id='marsidev-pwd-length'
					value={length()}
					onInput={onInput}
				/>

				<input
					class='marsidev-slider w-full cursor-pointer accent-violet-400'
					type='range'
					step='1'
					min={MIN_PASSWORD_LENGTH}
					max={MAX_PASSWORD_LENGTH}
					id='marsidev-pwd-range'
					value={length()}
					onInput={onInput}
				/>
			</div>
		</div>
	)
}
