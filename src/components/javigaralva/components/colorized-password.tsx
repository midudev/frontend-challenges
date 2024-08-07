import { ColorizedLetter } from './colorized-letter'

interface ColorizedPasswordProps {
	password: string
}
export function ColorizedPassword({ password }: ColorizedPasswordProps) {
	return (
		<div className='font-mono font-black text-4xl min-h-min tracking-widest cursor-pointer'>
			{password.split('').map((letter, i) => (
				<ColorizedLetter key={i} letter={letter} />
			))}
		</div>
	)
}
