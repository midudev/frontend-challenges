import { usePasswordGenerator } from '@components/jpaddeo/hooks/usePasswordGenerator.jsx'

export default function PasswordCard({ password }) {
	const { strength } = usePasswordGenerator()

	return (
		<div
			className={`bg-gray-900 dark:bg-gray-200 p-6 rounded-xl w-full break-all tracking-widest font-bold ${
				strength === 'strong'
					? 'border-4 border-green-600 border-dotted'
					: strength === 'medium'
					? 'border-4 border-yellow-600 border-dotted'
					: ''
			}`}
			aria-label={password}
			role='heading'
		>
			{(password || 'Generating...').split('').map((char, index) => {
				if (char.match(/\d+/))
					return (
						<span key={index} className='text-blue-600' aria-hidden='true'>
							{char}
						</span>
					)
				if (char.match(/[!@#$%^&*\(\)]+/))
					return (
						<span key={index} className='text-green-600' aria-hidden='true'>
							{char}
						</span>
					)
				return (
					<span key={index} aria-hidden='true'>
						{char}
					</span>
				)
			})}
		</div>
	)
}
