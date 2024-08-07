import React, { useState } from 'react'

export const useFiltersLogic = () => {
	const [filters, setFilters] = useState(['Lowercase'])
	const [passwordLength, setPasswordLength] = useState(12)

	const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPasswordLength(e.target.value)
	}
	const onFilterChane = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked, value } = e.target
		if (filters.length === 2 && !checked && filters.includes('Symbols') && value !== 'Symbols') return
		if (filters.length === 1 && !checked) return
		const selectedFilters = [...filters]
		if (checked) selectedFilters.push(value)
		else selectedFilters.splice(selectedFilters.indexOf(value), 1)
		setFilters(selectedFilters)
	}
	return { filters, onFilterChane, passwordLength, onSliderChange }
}
