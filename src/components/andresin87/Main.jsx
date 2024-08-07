import { useRef, useState, useEffect } from 'react'

import { usePassword, useTokens } from '../../hooks/andresin87/index.js'

import { Fingerprint, Password, Mode, Navbar, Settings, Hacktoberfest } from './components/index.js'

import brand from './styles/brand.json'
import './styles/styles.css'

const Main = () => {
	const ref = useRef()
	const [length, setLength] = useState()
	const {
		password,
		update,
		strength,
		generate,
		copyToClipboard,
		flags: { hasLowerCase, hasCapitalLetter, hasSymbol, hasNumber },
		setFlags
	} = usePassword({ length })
	const Tokens = useTokens(ref.current, brand)
	const [mode, setMode] = useState('dark')
	const handleModeChange = (event, modeValue) => {
		setMode(modeValue === 'dark' ? 'light' : 'dark')
	}
	const handleGenerate = () => {
		generate({ length })
	}
	return (
		<main id='andresin87' className='andresin87' ref={ref}>
			<Tokens id='brand' className='brand' />
			<Mode target={ref.current} value={mode}>
				<Navbar mode={mode} onChange={handleModeChange} />
				<Hacktoberfest />
				{/* <div className='fingerprint'> */}
				{/* 	<Fingerprint securityLevel={strength.id} password={password} /> */}
				{/* </div> */}
				<div className='content'>
					<div className='container'>
						<Password
							onGenerate={handleGenerate}
							password={password}
							onChange={update}
							onCopyToClipboard={copyToClipboard}
							strengthId={strength.id}
							leyend={Array.from(new Set(strength.contains)).map((contains) => (
								<span key={contains}>{contains}-</span>
							))}
						/>
						<Settings
							length={length}
							strength={strength}
							password={password}
							setLength={setLength}
							hasLowerCase={hasLowerCase}
							hasCapitalLetter={hasCapitalLetter}
							hasSymbol={hasSymbol}
							hasNumber={hasNumber}
							setFlags={setFlags}
							generate={generate}
						/>
					</div>
				</div>
			</Mode>
		</main>
	)
}

export default Main
