import styles from './styles.module.css'

export default function OptIns({ title = 'title opt-ins', options = [], updateOptionValues }) {
	const handleChange = (index, e) => updateOptionValues(index, 'value', e.target.checked)

	return (
		<div className={styles.optionsWrapper}>
			<label className='title'>{title}</label>
			{options.map(({ id, title, description, value }, index) => {
				return (
					<label key={id}>
						<div>
							<input type='checkbox' checked={value} onChange={e => handleChange(index, e)} />
							<p>{title}</p>
						</div>
						<p>{description}</p>
					</label>
				)
			})}
		</div>
	)
}
