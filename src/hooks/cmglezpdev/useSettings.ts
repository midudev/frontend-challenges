import { ChangeEvent, useState } from 'react'

export interface SettingsOption {
	name: string,
	checked: boolean
}


export const useSettings = (settingsOption: SettingsOption[]) => {
	const [settings, setSettings] = useState<SettingsOption[]>(settingsOption)

	const countChecked = () => {
		let count = 0
		for (let i = 0; i < settings.length; i++) {
			if (!settings[i].checked) continue
			count++
		}
		return count
	}

	const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
		const { checked, name } = e.target
		if (!checked && countChecked() === 1) return

		const upSettings = settings.map(sett => {
			if (sett.name !== name) return sett
			return { ...sett, checked }
		})
		setSettings(upSettings)
		return upSettings
	}

	const findByName = (name:string) => {
		for (let i = 0; i < settings.length; i++) {
			if (settings[i].name !== name) continue
			return settings[i]
		}
		return null
	}

	const checkAll = (mark: boolean) => {
		const updSettings = settings.map(sett => ({ ...sett, checked: mark }))
		setSettings(updSettings)
		return updSettings
	}

	const checked = (name: string) => {
		for (let i = 0; i < settings.length; i++) {
			if (settings[i].name !== name) continue
			return settings[i].checked
		}
		return false
	}

	return {
		settings,
		handleInputChange,
		findByName,
		checkAll,
		checked
	}
}