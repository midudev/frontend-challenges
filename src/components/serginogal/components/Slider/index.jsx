import styles from './styles.module.css'

export default function Slider({ title = 'title', passwordLength, setPasswordLength }) {
	return (
		<div className={styles.sliderWrapper}>
			<label className='title'>{title}</label>
			<div className={styles.rangeContainer}>
				<input className='range' type='range' min={3} max={20} onChange={e => setPasswordLength(e.target.value)} />
				<label>{passwordLength}</label>
			</div>
		</div>
	)
}
