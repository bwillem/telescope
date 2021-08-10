import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { ReactionSnapshot } from '../pages/api/reaction/[time]'

/**
 * polls /api/reaction endpoint and returns
 * reaction snapshots on a given interval (ms)
 */
function useReactionData(fetchInterval: number) {
	const [isRunning, setIsRunning] = useState(false)
	const [elapsedTime, setElapsedTime] = useState(0)
	const [data, setData] = useState<ReactionSnapshot>()
	const startTime = useRef(0)

	useEffect(() => {
		if (isRunning && !startTime.current) {
			startTime.current = Date.now()
		}
		if (!isRunning) {
			startTime.current = 0
		}

		return () => {
			startTime.current = 0
		}
	}, [isRunning])

	useEffect(() => {
		let timer: NodeJS.Timeout

		const getElapsedTime = () => Math.round((Date.now() - startTime.current) / 1000) * 1000
		const getSnapshot = async () => {
			const response = await fetch(`/api/reaction/${elapsedTime}`).then(r => r.json())
			setData(response)
		}

		if (isRunning) {
			getSnapshot()

			// start a new poll timer
			timer = setTimeout(() => {
				setElapsedTime(getElapsedTime())
			}, fetchInterval)
		}

		return () => {
			clearTimeout(timer)
		}
	}, [isRunning, elapsedTime])

	return {
		data,
		isRunning,
		elapsedTime,
		setIsRunning,
	}
}

export default useReactionData
