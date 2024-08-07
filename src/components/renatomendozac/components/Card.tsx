import { FC, PropsWithChildren, ReactElement } from 'react'

interface CardProps extends PropsWithChildren{
	className?: string;
}

const Card: FC<CardProps> = ({ className = '', children }): ReactElement => (
	<div className={`bg-slate-800 p-4 text-slate-50 rounded-sm ${className}`}>
		{children}
	</div>
)

export default Card
