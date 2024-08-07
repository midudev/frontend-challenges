import type { ReactNode } from 'react'

export interface IconProps {
	size?: number
	children: ReactNode
}

export const IconOutline = ({ size, children }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		width={ size || 24 }
		height={ size || 24 }
		viewBox='0 0 24 24'
		strokeWidth={ 1.5 }
		stroke='currentColor'
	>
		{ children }
	</svg>
)

export const IconSolid = ({ size, children }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='currentColor'
		width={ size || 24 }
		height={ size || 24 }
		viewBox='0 0 24 24'
	>
		{ children }
	</svg>
)

const ArrowPath = () => (
	<path
		strokeLinecap='round'
		strokeLinejoin='round'
		d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
	/>
)
const XMark = () => (
	<path
		strokeLinecap='round'
		strokeLinejoin='round'
		d='M6 18L18 6M6 6l12 12'
	/>
)
const CheckMark = () => (
	<path
		strokeLinecap='round'
		strokeLinejoin='round'
		d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
	/>
)
const ClipboardCopy = () => (
	<>
		<path d='M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z' />
		<path d='M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z' />
	</>
)

// Icon Outline
IconOutline.XMark = XMark
IconOutline.CheckMark = CheckMark
IconOutline.ArrowPath = ArrowPath


// Icon Solid
IconSolid.ClipboardCopy = ClipboardCopy
