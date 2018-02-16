import axios from 'axios'

export const fetchData = that => {
	that.setState(prevState => ({
		isFetching: true
	}))

	axios
		.get(
			'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json'
		)
		.then(
			resp =>
				that.setState(prevState => ({
					data: resp.data,
					isFetching: false
				})),
			error =>
				that.setState(prevState => ({
					error: 'Whoups an error occured while fetching',
					isFetching: false
				}))
		)
}
