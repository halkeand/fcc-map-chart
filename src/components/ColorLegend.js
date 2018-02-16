import React from 'react'
import styled from 'styled-components'

const ColorLegend = styled.div`
	box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
	color: black;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 5px;
	width: 60px;
	height: 60px;
	background-color: ${p => p.color};
	font-size: 12px;
`

const LegendsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`

const LegendGroup = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	p {
		text-align: center;
	}
`
export default () => (
	<LegendGroup>
		<p>Meteor's mass interval</p>
		<LegendsContainer>
			<ColorLegend color="rgba(232, 65, 24,.3)">{'> 100000'}</ColorLegend>
			<ColorLegend color="rgba(251, 197, 49,.3)">{'> 50000'}</ColorLegend>
			<ColorLegend color="rgba(76, 209, 55,.3)">{'> 20000'}</ColorLegend>
			<ColorLegend color="rgba(0, 168, 255,.3)">{'> 5000'}</ColorLegend>
			<ColorLegend color="rgba(156, 136, 255,.3)">{'< 5000'}</ColorLegend>
		</LegendsContainer>
	</LegendGroup>
)
