import { useRef, useState, useEffect } from 'react'
import { IconOutline, IconSolid } from './Icons'
import { InputGroup } from './InputGroup'
import { copyToClipboard } from '../utils/CopyText'
import { generatePassword, getPasswordEntropy } from '../utils/GeneratePassword'

export interface IPasswordGeneratorProps {
	length: number
	includedCharacters?: string[]
	onCopy: () => void
}
export const PasswordGenerator = ({ length, includedCharacters, onCopy }: IPasswordGeneratorProps) => {
	const [passwordEntropy, setPasswordEntropy] = useState(0)
	const passwordRef = useRef<HTMLInputElement>(null)

	const handleCopyButton = () => {
		if (passwordRef.current) {
			copyToClipboard(passwordRef.current.value, onCopy)
		}
	}

	const handleGenerateButton = () => {
		if (passwordRef.current) {
			passwordRef.current.value = generatePassword(length, includedCharacters)
			setPasswordEntropy(getPasswordEntropy(length, includedCharacters))
		}
	}

	useEffect(() => {
		handleGenerateButton()
	}, [length, includedCharacters])

	return (
		<div className='w-11/12 max-w-3xl'>
			<div className='flex gap-2 items-center mx-auto '>
				<InputGroup
					inputRef={ passwordRef }
					className='grow'
					placeholder='Your generated secure password'
					icon={
						<IconSolid>
							<IconSolid.ClipboardCopy />
						</IconSolid>
					}
					onIconClick={ handleCopyButton }
				/>
				<button onClick={ handleGenerateButton } className='p-3 bg-sky-600 border-2 border-sky-200/60 rounded text-white hover:bg-sky-500 active:bg-sky-700 focus:outline-none focus-visible:ring-4 ring-sky-400 ring-opacity-40'>
					<IconOutline>
						<IconOutline.ArrowPath />
					</IconOutline>
				</button>
			</div>
			<p>Entropy: {passwordEntropy.toFixed(2)} bits</p>
		</div>
	)
}
