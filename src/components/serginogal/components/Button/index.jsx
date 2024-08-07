import styles from './styles.module.css'

const GlassShineSVG = () => {
	return (
		<svg width='79' height='46' viewBox='0 0 79 46' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g filter='url(#filter0_f_618_1123)'>
				<path d='M42.9 2H76.5L34.5 44H2L42.9 2Z' fill='url(#paint0_linear_618_1123)'>

				</path>
			</g>
			<defs>
				<filter id='filter0_f_618_1123' x='0' y='0' width='78.5' height='46' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'><feFlood floodOpacity='0' result='BackgroundImageFix'>

				</feFlood>
				<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'>

				</feBlend>
				<feGaussianBlur stdDeviation='1' result='effect1_foregroundBlur_618_1123'>

				</feGaussianBlur>
				</filter>
				<linearGradient id='paint0_linear_618_1123' x1='76.5' y1='2.00002' x2='34.5' y2='44' gradientUnits='userSpaceOnUse'>
					<stop stopColor='white' stopOpacity='0.6'>

					</stop>
					<stop offset='1' stopColor='white' stopOpacity='0.05'>

					</stop>
				</linearGradient>
			</defs>
		</svg>

	)
}

export default function Button({ children, onClick }) {
	return (
		<button {...{ onClick }} className={styles.btn}>
			<GlassShineSVG />
			{children}
		</button>
	)
}