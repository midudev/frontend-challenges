// @vendors
import React, { useState } from 'react'
// @components
import Divider from '../Divider/Divider'
// @media
import CopyIcon from './Media/CopyIcon'
import HiddenIcon from './Media/HiddenIcon'
import ReloadIcon from './Media/ReloadIcon'
import VisibleIcon from './Media/VisibleIcon'
// @utils
import convertToLevel from '../../Scripts/converter'
// @styles
import './PasswordBox.css'

// ─────────────── ∞ ───────────────

export default function PasswordBox({ password, entropy, onCreate }) {
	const [showPass, setShowPass] = useState(true)
	const [showCopiedLabel, setShowCopiedLabel] = useState(false)

	const changeVisibility = () => setShowPass(!showPass)

	const copyToClipboard = () => {
		navigator.clipboard.writeText(password)

		setShowCopiedLabel(true)

		setTimeout(() => setShowCopiedLabel(false), 2000)
	}

	const passLevel = convertToLevel(entropy)

	return (
		<div className='lcsgrz-pb-container'>
			<div className='lcsgrz-pb-pass-container'>
				<div className='lcsgrz-pb-passbox'>
					<input
						className='lcsgrz-pb-input'
						type={showPass ? 'text' : 'password'}
						value={password}
						readOnly
					/>
					<div className='lcsgrz-pb-divider' />
					{showPass && <HiddenIcon color='white' size={32} onClick={changeVisibility} />}
					{!showPass && <VisibleIcon color='white' size={32} onClick={changeVisibility} />}
				</div>
				<div className='lcsgrz-pb-passlevel-box'>
					PASSWORD LEVEL
					<Divider width={30} />
					<div className='lcsgrz-pb-level-container'>
						<div className='lcsgrz-pb-level' style={{ width: `${passLevel.level * 10}%` }} />
					</div>
					<Divider width={30} />
					{passLevel.label.toLocaleUpperCase()}
				</div>
			</div>
			<Divider width={20} />
			<div className='lcsgrz-pb-copy-box'>
				<CopyIcon color='white' size={28} onClick={copyToClipboard} />
				{showCopiedLabel && <label className='lcsgrz-pb-copied-label'>COPIED</label>}
			</div>
			<Divider width={20} />
			<ReloadIcon color='white' size={28} onClick={onCreate} />
		</div>
	)
}
