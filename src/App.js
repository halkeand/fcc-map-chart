import React, { Component } from 'react'
import Map from './components/Map'
import GlobalStyle from './styles/Global'
import ColorLegend from './components/ColorLegend'
import data from './data/data.json'

class App extends Component {
	state = {
		data
	}

	render() {
		const { data } = this.state
		return (
			<GlobalStyle>
				<Map data={data.features.filter(o => o.geometry !== null)} />
				<ColorLegend />
			</GlobalStyle>
		)
	}
}

export default App
