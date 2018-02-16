import React from 'react'

export default ({ name, mass, fall, year, reclat, reclong, recclass }) => (
	<text x="0" y="0" font-size="12px">
		<tspan x="0" dy="1.2em">
			Where: {name}
		</tspan>
		<tspan x="0" dy="1.2em">
			Mass: {mass}
		</tspan>
		<tspan x="0" dy="1.2em">
			Fall: {fall === 'Fell' ? 'true' : 'false'}
		</tspan>
		<tspan x="0" dy="1.2em">
			Year: {year.substr(0, 4)}
		</tspan>
		<tspan x="0" dy="1.2em">
			Lattitude: {reclat}
		</tspan>
		<tspan x="0" dy="1.2em">
			Longitude: {reclong}
		</tspan>
		<tspan x="0" dy="1.2em">
			Class: {recclass}
		</tspan>
	</text>
)
