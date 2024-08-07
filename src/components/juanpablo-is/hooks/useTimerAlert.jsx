import { memo, useState } from 'react'

// Icons
import IconFire from '../components/common/icons/IconFire'

const useTimerAlert = () => {
	const [alerts, setAlerts] = useState([])
	const [refreshAlerts, setRefreshAlerts] = useState(true)

	const Alerts = memo(() => {
		return (
			<div className='m-3 pb-0 absolute top-0 left-0 flex flex-col items-center md:items-end md:justify-end md:top-auto md:left-auto md:right-0 md:bottom-0 md:flex-col-reverse'>
				{refreshAlerts &&
					alerts.map((alert) => (
						<div
							key={alert.id}
							id='toast-default'
							className='mb-2 sm:mb-2 min-w-[280px] flex items-center p-4 w-72 sm:w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800'
							role='alert'
						>
							<div className='inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200'>
								<IconFire />
							</div>
							<div className='ml-3 text-sm font-normal text-white'>{alert.children}</div>
						</div>
					))}
			</div>
		)
	}, [alerts])

	const generateAlert = (children, delay, type) => {
		setRefreshAlerts(false)

		class Timer {
			constructor(children, delay, type) {
				this.timerId = null
				let start
				let remaining = delay

				this.pause = function () {
					window.clearTimeout(this.timerId)

					this.timerId = null
					remaining -= Date.now() - start
				}

				this.resume = function () {
					if (this.timerId) {
						return
					}

					start = Date.now()

					this.timerId = window.setTimeout(
						() => setAlerts((prev) => prev.filter((alert) => alert.id !== this.timerId) || []),
						remaining
					)

					setAlerts((prev) => {
						const findSameType = prev.findIndex((alert) => alert.type === type)
						const newAlert = { id: this.timerId, children, type }

						if (findSameType >= 0) {
							const newPrev = prev
							newPrev.splice(findSameType, 1)

							return [...newPrev, newAlert]
						}

						return [...prev, newAlert]
					})

					setRefreshAlerts(true)
				}

				this.resume()
			}
		}

		/* eslint-disable no-new */
		new Timer(children, delay, type)
	}

	return {
		Alerts,
		generateAlert
	}
}

export default useTimerAlert
