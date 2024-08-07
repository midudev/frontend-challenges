function checkCharType(char) {
	if (/^\d$/.test(char)) {
		return 'text-blue-400'
	} else if ([33, 42, 44, 45, 46, 64, 95].includes(char.charCodeAt(0))) {
		return 'text-red-400'
	} else {
		return ''
	}
}

export function PasswordDisplay({ password }) {
	return (
		<div className='mb-4 text-xl truncate min-w-full px-4 py-2 rounded-lg ring-1 ring-zinc-600/70 transition duration-200 font-sans tracking-wider bg-neutral-900'>
			{password.map((char, idx) => (
				<span key={idx} className={checkCharType(char)}>
					{char}
				</span>
			))}
		</div>
	)
}
