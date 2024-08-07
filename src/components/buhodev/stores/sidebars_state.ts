import { writable } from '@components/buhodev/stores/localStorage'

export const isSidebarOpen = writable('isSidebarOpen', true)
export const isHistoryOpen = writable('isHistoryOpen', true)

export const toggleSidebar = () => {
	isSidebarOpen.update((state) => !state)
}

export const toggleHistory = () => {
	isHistoryOpen.update((state) => !state)
}
