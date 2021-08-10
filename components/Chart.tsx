import { useState } from "react";
import { useEffect } from "react";
import ApexChart from "react-apexcharts";
import { ReactionSnapshot } from "../pages/api/reaction/[time]";
import { components } from "../util";

interface ChartProps {
	data: ReactionSnapshot | undefined
}

function Chart({ data }: ChartProps) {
	const [series, setSeries] = useState<ApexAxisChartSeries>(components.map(c => ({ name: c, data: [] })))

	useEffect(() => {
		if (data) {
			const addPoint = prevState => components.map(c => ({
				...prevState.find(p => p.name === c),
				data: [
					...prevState.find(p => p.name === c).data,
					[data['Time (s)'], data[c]]
				]
			}))

			setSeries(addPoint)
		}
	}, [data])

	return (
		<ApexChart
			type='line'
			series={series}
			options={{
				stroke: {
					curve: 'smooth',
					width: 2,
				},
				chart: {
					toolbar: {
						show: false,
					},
				},
			}}
		/>
	)
}

export default Chart
