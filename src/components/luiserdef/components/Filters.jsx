function Filters({ filterStatus, updateFilterStatus }) {
	return (
		<div className='w-hull w-full flex justify-center flex-wrap gap-5 mt-4'>
			<button
				onClick={() => updateFilterStatus('upperCase')}
				className={`${
					filterStatus.upperCase ? 'bg-[#fff06c65]' : 'bg-[#fff06c21]'
				} luiserdef-bt-filter py-1 px-2 rounded flex`}
			>
				Mayúsculas
			</button>
			<button
				onClick={() => updateFilterStatus('numbers')}
				className={`${
					filterStatus.numbers ? 'bg-[#fff06c65]' : 'bg-[#fff06c21]'
				} luiserdef-bt-filter py-1 px-2 rounded flex`}
			>
				Números
			</button>
			<button
				onClick={() => updateFilterStatus('symbols')}
				className={`${
					filterStatus.symbols ? 'bg-[#fff06c65]' : 'bg-[#fff06c21]'
				} luiserdef-bt-filter py-1 px-2 rounded flex`}
			>
				Símbolos
			</button>
		</div>
	)
}

export default Filters
