import { useMemo, Fragment } from 'react'

import { viewBox, scale, offset, PATHS, PRIME_NUMBERS } from './config.js'

import './styles.css'

const Fingerprint = ({ securityLevel, password }) => {
	const strokeDasharray = ((securityLevel + 1) % 4) * offset
	const offsets = useMemo(() => {
		return PATHS.map(() => Math.floor(Math.random() * PATHS.length))
	}, [securityLevel])

	return (
		<svg viewBox={`0 0 ${viewBox} ${viewBox}`} className={`security security-${securityLevel + 1}`}>
			<g transform={`scale(${scale})`}>
				{securityLevel !== undefined &&
					PATHS.map((path, index) => (
						<Fragment key={index}>
							<path className='path-background' d={path} />
							<path
								className='path-line'
								d={path}
								style={{
									strokeDashoffset: PRIME_NUMBERS[offsets[index] % PRIME_NUMBERS.length] * 50,
									strokeDasharray: `${strokeDasharray} ${strokeDasharray / (securityLevel + 1)}`
								}}
							/>
						</Fragment>
					))}
			</g>
		</svg>
	)
}

export default Fingerprint
