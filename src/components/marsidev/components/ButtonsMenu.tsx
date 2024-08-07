/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import { Button } from '@components/marsidev/components/Button'
import { GenerateIcon, CopyIcon } from '@components/marsidev/components/icons'
import { usePassword } from '@components/marsidev/lib/PasswordContext'

export const ButtonsMenu: Component = () => {
	const { generate, onCopy } = usePassword()
	const [angle, setAngle] = createSignal<number>(0)
	const rotate = () => `rotate(${angle()}deg)`

	const onGeneratePassword = () => {
		setAngle((angle) => angle + 180)
		generate()
	}

	return (
		<div class='flex flex-row flex-wrap justify-center gap-2'>
			<Button onClick={onGeneratePassword}>
				<GenerateIcon rotate={rotate()} />
				Generar
			</Button>

			<Button onClick={onCopy}>
				<CopyIcon />
				Copiar
			</Button>
		</div>
	)
}
