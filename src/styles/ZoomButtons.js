import styled from 'styled-components'
export default styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	margin-top: 20px;
	button {
		box-sizing: border-box;
		background-image: linear-gradient(to top left, #4cd137, #44bd32);
		color: white;
		text-align: center;
		border-radius: 5px;
		cursor: pointer;
		box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.1);
		padding: 10px;
		border: 3px solid transparent;
		transition: border 0.3s ease-in-out;

		&:focus {
			outline: none;
		}
		&:hover {
			border: 3px solid #fff;
			transition: border 0.3s ease-in-out;
		}
	}
`
