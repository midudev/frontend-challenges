import css from './errortext.module.css'
import cls from '../../helpers/classnames'

export default function ErrorText({
	isVisible,
	type,
	text = 'Ocurrió un error.',
	className,
	...props
}) {
	if (!isVisible) return null

	return (
		<div
			{...props}
			className={cls(
				css.errorText,
				{
					[css.error]: type === 'error'
				},
				className
			)}
		>
			<svg
				stroke='currentColor'
				fill='none'
				strokeWidth='2'
				viewBox='0 0 24 24'
				strokeLinecap='round'
				strokeLinejoin='round'
				height='1em'
				width='1em'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle cx='12' cy='12' r='10'></circle>
				<line x1='12' y1='8' x2='12' y2='12'></line>
				<line x1='12' y1='16' x2='12.01' y2='16'></line>
			</svg>

			<span className={css.text}>{text}</span>
		</div>
	)
}
