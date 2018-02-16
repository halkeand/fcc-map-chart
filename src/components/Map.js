import React, { Component } from 'react'
import {
	ComposableMap,
	ZoomableGroup,
	Geographies,
	Geography,
	Markers,
	Annotation,
	Marker
} from 'react-simple-maps'
import geography from '../data/world-50m.json'
import mapStyle from '../styles/MapStyle'
import ZoomButtons from '../styles/ZoomButtons'

import Tooltip from './Tooltip'

const MAX_METEOR_MASS = 23000000

export default class Map extends Component {
	state = { zoom: 1, currentTooltipMarker: null }

	handleZoomIn = () =>
		this.setState(s => ({
			zoom: s.zoom * 2
		}))

	handleZoomOut = () =>
		this.setState(s => ({
			zoom: s.zoom / 2
		}))

	showTooltip = marker =>
		this.setState(s => ({
			currentTooltipMarker: marker
		}))

	hideTooltip = () =>
		this.setState(s => ({
			currentTooltipMarker: null
		}))

	render() {
		const { data } = this.props
		const { zoom, currentTooltipMarker } = this.state
		return (
			<div>
				<ComposableMap
					style={{
						width: '100%',
						height: '100%',
						boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.1)'
					}}>
					<ZoomableGroup zoom={zoom}>
						<Geographies geography={geography}>
							{(geographies, projection) =>
								geographies.map((geography, i) => (
									<Geography
										key={i}
										cacheId={i}
										geography={geography}
										projection={projection}
										style={mapStyle}
									/>
								))
							}
						</Geographies>
						<Markers>
							{data.map(o => (
								<Marker
									onMouseEnter={() => this.showTooltip(o)}
									onMouseLeave={this.hideTooltip}
									style={{
										default: {
											fill:
												o.properties.mass > 100000
													? 'rgba(232, 65, 24,.3)'
													: o.properties.mass > 50000
														? 'rgba(251, 197, 49,.3)'
														: o.properties.mass > 20000
															? 'rgba(76, 209, 55,.3)'
															: o.properties.mass > 5000
																? 'rgba(0, 168, 255,.3)'
																: 'rgba(156, 136, 255,.3)',
											stroke: '#fff',
											strokeWidth: 0.5
										}
									}}
									key={o.properties.id}
									marker={{ coordinates: o.geometry.coordinates }}>
									<circle
										cx={0}
										cy={0}
										r={6 + o.properties.mass / MAX_METEOR_MASS * 7}
									/>
								</Marker>
							))}
						</Markers>
						{currentTooltipMarker && (
							<Annotation
								key={currentTooltipMarker.properties.id}
								dx={-30}
								dy={30}
								subject={currentTooltipMarker.geometry.coordinates}
								strokeWidth={1}>
								<Tooltip {...currentTooltipMarker.properties} />
							</Annotation>
						)}
					</ZoomableGroup>
				</ComposableMap>

				<ZoomButtons>
					<button onClick={this.handleZoomIn}>Zoom in</button>
					<button onClick={this.handleZoomOut}>Zoom out</button>
				</ZoomButtons>
			</div>
		)
	}
}
